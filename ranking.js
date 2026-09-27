/* Asynchronous ranking transport. No request is awaited by the game engine.
   GET = read-only JSONP (public top 10 + opaque receipt IDs).
   POST = text/plain, no-cors. A POST completing is NOT a save confirmation.
   A record leaves the durable outbox only after a read confirms its run ID. */
(function (root) {
  'use strict';
  const APP = 'mirae-orangutan-v2';
  const cleanName = value => String(value || '').normalize('NFKC').trim().replace(/\s+/g, ' ');
  const nameKey = value => cleanName(value).toLowerCase();
  function endpoint(value) {
    try {
      const u = new URL(String(value || '').trim());
      if (u.protocol !== 'https:' || u.hostname !== 'script.google.com' || u.username || u.password ||
          !/^\/macros\/s\/[A-Za-z0-9_-]+\/exec\/?$/.test(u.pathname) || u.search || u.hash) return '';
      return u.href.replace(/\/$/, '');
    } catch (_) { return ''; }
  }
  function normalizedRow(r) {
    if (!r || typeof r !== 'object') return null;
    const name = cleanName(r.name), score = Number(r.score), order = Number(r.order);
    if (!name || name.length > 20 || !Number.isSafeInteger(score) || score < 0 || score > 100000) return null;
    return {name, score, order: Number.isFinite(order) && order >= 0 ? order : 1e15,
      pending: !!r.pending, runId: String(r.runId || '')};
  }
  function compare(a, b) {
    return b.score - a.score || a.order - b.order || nameKey(a.name).localeCompare(nameKey(b.name), 'ko');
  }
  function mergeRanking(base, additions) {
    const best = new Map();
    for (const item of [...(Array.isArray(base) ? base : []), ...(Array.isArray(additions) ? additions : [])]) {
      const row = normalizedRow(item);
      if (!row) continue;
      const key = nameKey(row.name), old = best.get(key);
      if (!old || compare(row, old) < 0) best.set(key, row);
    }
    return Array.from(best.values()).sort(compare).slice(0, 10);
  }
  function candidate(record) {
    // Known records win ties. Pending records are placed after known records.
    return {name: record.name, score: record.score, runId: record.runId,
      order: 1e12 + Number(record.clientAt || Date.now()), pending: true};
  }
  function safeStorage() {
    return {
      get(k, fallback) { try { const v = root.localStorage.getItem(k); return v === null ? fallback : JSON.parse(v); } catch (_) { return fallback; } },
      set(k, v) { try { root.localStorage.setItem(k, JSON.stringify(v)); return true; } catch (_) { return false; } }
    };
  }
  function hash(value) { let h = 2166136261; for (const c of value) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
  function jsonp(url, params, timeoutMs = 25000) {
    return new Promise((resolve, reject) => {
      const bytes = new Uint32Array(2);
      if (root.crypto && root.crypto.getRandomValues) root.crypto.getRandomValues(bytes);
      else { bytes[0] = Math.random() * 4294967296; bytes[1] = Date.now(); }
      const callback = '__oq_' + bytes[0].toString(36) + '_' + bytes[1].toString(36) + '_' + Date.now().toString(36);
      const u = new URL(url); Object.entries({...params, callback, _: Date.now()}).forEach(([k, v]) => u.searchParams.set(k, String(v)));
      const script = document.createElement('script'); script.async = true; script.referrerPolicy = 'no-referrer';
      let settled = false;
      const finish = (error, data) => {
        if (settled) return; settled = true; clearTimeout(timer); script.remove();
        // A timed-out redirected request may still arrive. Leave a temporary no-op.
        root[callback] = () => {}; setTimeout(() => { try { delete root[callback]; } catch (_) {} }, 60000);
        if (error) reject(error); else if (!data || data.ok !== true) reject(new Error((data && data.code) || 'unavailable')); else resolve(data);
      };
      const timer = setTimeout(() => finish(new Error('timeout')), timeoutMs);
      root[callback] = data => finish(null, data);
      script.onerror = () => finish(new Error('unavailable')); script.src = u.href; document.head.append(script);
    });
  }
  class RankingClient {
    constructor(options = {}) {
      this.url = endpoint(options.url); this.configInvalid = !!String(options.url || '').trim() && !this.url;
      this.onChange = typeof options.onChange === 'function' ? options.onChange : () => {};
      this.store = options.storage || safeStorage();
      this.key = 'orangutan:v2:' + hash(this.url || 'practice') + ':';
      this.snapshot = this.store.get(this.key + 'snapshot', null);
      if (!this.snapshot || !Array.isArray(this.snapshot.ranking)) this.snapshot = null;
      const queue = this.store.get(this.key + 'outbox', []);
      this.queue = Array.isArray(queue) ? queue.filter(x => x && typeof x.runId === 'string' && normalizedRow(x)) : [];
      this.statuses = new Map(); this.queue.forEach(x => this.statuses.set(x.runId, 'pending'));
      this.memoryOnly = false; this.loading = null; this.busy = false; this.retryTimer = 0;
      this.failures = 0; this.lastRead = 0; this.lastSuccess = 0; this.epoch = 0;
      this.closed = false;
    }
    isOnline() { return !root.navigator || root.navigator.onLine !== false; }
    persistQueue() { if (!this.store.set(this.key + 'outbox', this.queue)) this.memoryOnly = true; }
    notify() { if (!this.closed) this.onChange(this.view()); }
    view() {
      return {rows: this.snapshot ? mergeRanking(this.snapshot.ranking, this.queue.map(candidate)) : [],
        hasSnapshot: !!this.snapshot, generatedAt: Number(this.snapshot && this.snapshot.generatedAt) || 0,
        loading: !!this.loading, pendingCount: this.queue.length, memoryOnly: this.memoryOnly,
        practice: !this.url && !this.configInvalid, configInvalid: this.configInvalid};
    }
    status(id) { return this.statuses.get(id) || 'unknown'; }
    apply(data) {
      // Receipt processing is independent of snapshot ordering.
      const accepted = new Set(Array.isArray(data.accepted) ? data.accepted : []);
      const rejected = Array.isArray(data.rejected) ? data.rejected : [];
      const rejectedIds = new Set(rejected.map(r => r.id));
      accepted.forEach(id => this.statuses.set(id, 'saved'));
      rejectedIds.forEach(id => this.statuses.set(id, 'rejected'));
      if (accepted.size || rejectedIds.size) {
        const removed = this.queue.filter(x => rejectedIds.has(x.runId));
        if (removed.length) {
          const archive = this.store.get(this.key + 'rejected', []);
          this.store.set(this.key + 'rejected', [...(Array.isArray(archive) ? archive : []), ...removed].slice(-200));
        }
        this.queue = this.queue.filter(x => !accepted.has(x.runId) && !rejectedIds.has(x.runId)); this.persistQueue();
      }
      if (Array.isArray(data.ranking) && Number(data.generatedAt) >= Number(this.snapshot && this.snapshot.generatedAt || 0)) {
        this.snapshot = {ranking: mergeRanking(data.ranking, []), generatedAt: Number(data.generatedAt), fetchedAt: Date.now()};
        this.store.set(this.key + 'snapshot', this.snapshot);
      }
      this.lastSuccess = Date.now(); this.notify();
    }
    refresh(force = false) {
      if (!this.url || !this.isOnline()) return Promise.resolve(false);
      if (this.loading) return this.loading;
      if (!force && this.lastSuccess && Date.now() - this.lastRead < 5000) return Promise.resolve(true);
      this.lastRead = Date.now();
      const ids = this.queue.slice(0, 12).map(r => r.runId);
      this.loading = jsonp(this.url, {app: APP, action: 'state', receipts: ids.join(',')})
        .then(data => { this.apply(data); return true; })
        .catch(() => { this.notify(); return false; })
        .finally(() => { this.loading = null; });
      return this.loading;
    }
    start() {
      // Intentionally fire-and-forget: the countdown never waits for this call.
      void this.refresh(true);
      if (this.queue.length) this.schedule(100);
    }
    enqueue(run, score) {
      const record = {runId: run.runId, name: cleanName(run.name), score: Number(score),
        version: String(run.version || ''), endReason: run.endReason || 'wrong', clientAt: Date.now()};
      if (!this.url && !this.configInvalid) {
        const rows = mergeRanking(this.snapshot ? this.snapshot.ranking : [], [{...record, order: record.clientAt, pending: false}]);
        this.snapshot = {ranking: rows, generatedAt: Date.now(), fetchedAt: Date.now()};
        this.store.set(this.key + 'snapshot', this.snapshot); this.statuses.set(record.runId, 'practice'); this.notify(); return;
      }
      if (!this.queue.some(x => x.runId === record.runId)) this.queue.push(record);
      this.statuses.set(record.runId, 'pending'); this.persistQueue();
      // Render the optimistic top 10 synchronously, before any network work.
      this.notify(); this.schedule(0);
    }
    schedule(ms) {
      if (!this.url || !this.queue.length || this.closed) return;
      clearTimeout(this.retryTimer);
      this.retryTimer = setTimeout(() => { this.retryTimer = 0; void this.flush(); }, ms);
    }
    async flush() {
      if (this.busy || !this.url || !this.queue.length || this.closed) return;
      if (!this.isOnline() || (typeof document !== 'undefined' && document.hidden)) { this.schedule(12000); return; }
      this.busy = true;
      try {
        // Send immediately even while the start-of-game ranking read is pending.
        if (!this.queue.length) return;
        const before = this.queue.length, batch = this.queue.slice(0, 12);
        const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 30000);
        try {
          await fetch(this.url, {method: 'POST', mode: 'no-cors', credentials: 'omit', redirect: 'follow',
            cache: 'no-store', keepalive: true, signal: controller.signal,
            headers: {'Content-Type': 'text/plain;charset=UTF-8'},
            body: JSON.stringify({app: APP, records: batch})});
        } catch (_) { /* Unknown outcome. A read, not this catch, decides acceptance. */ }
        finally { clearTimeout(timer); }
        // Requests can have been committed even when POST produced a network error.
        // Finish an older read first, then request an ACK snapshot after this POST.
        if (this.loading) await this.loading;
        await this.refresh(true);
        if (this.queue.length < before) this.failures = 0; else this.failures++;
        this.notify();
      } finally {
        this.busy = false;
        if (this.queue.length) this.schedule(Math.min(60000, 2500 * Math.pow(2, Math.min(this.failures, 5))) + Math.random() * 1500);
      }
    }
    retry() { this.failures = 0; void this.refresh(true); this.schedule(0); }
    leaving() {
      // Best effort only. The durable outbox is deliberately kept until an ACK.
      if (!this.url || !this.queue.length || !root.navigator || !root.navigator.sendBeacon) return;
      const body = new Blob([JSON.stringify({app: APP, records: this.queue.slice(0, 12)})], {type: 'text/plain;charset=UTF-8'});
      try { root.navigator.sendBeacon(this.url, body); } catch (_) {}
    }
  }
  const api = {APP, cleanName, nameKey, endpoint, normalizedRow, compare, mergeRanking, candidate, RankingClient};
  root.OrangutanRanking = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
