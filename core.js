/* Shared quiz rules. No network calls, no dependencies. */
(function (root) {
  'use strict';
  const LIMITS = Object.freeze({ ox: 3000, pick2: 4000, text: 7000 });
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function formula(value) {
    const s = String(value ?? '').replace(/−/g, '-');
    let out = '', i = 0;
    while (i < s.length) {
      if (s[i] === '^') {
        const m = s.slice(i + 1).match(/^(?:\{(\d*[+-])\}|(\d*[+-]))/);
        if (m) { out += '<sup>' + escape(m[1] || m[2]).replace('-', '−') + '</sup>'; i += m[0].length + 1; continue; }
      }
      if (s[i] === '_') {
        const m = s.slice(i + 1).match(/^(?:\{(\d+)\}|(\d+))/);
        if (m) { out += '<sub>' + escape(m[1] || m[2]) + '</sub>'; i += m[0].length + 1; continue; }
      }
      if (/\d/.test(s[i])) {
        const n = s.slice(i).match(/^\d+/)[0];
        out += (i > 0 && /[A-Za-z)\]]/.test(s[i-1])) ? '<sub>' + n + '</sub>' : n;
        i += n.length; continue;
      }
      out += escape(s[i++]);
    }
    return '<span class="chem">' + out + '</span>';
  }
  function rich(value) {
    const s = String(value ?? ''); let result = '', end = 0;
    for (const m of s.matchAll(/\{\{([^{}]+)\}\}/g)) {
      result += escape(s.slice(end, m.index)).replace(/\n/g, '<br>') + formula(m[1]);
      end = m.index + m[0].length;
    }
    return result + escape(s.slice(end)).replace(/\n/g, '<br>');
  }
  function normalized(value, q = {}) {
    let s = String(value ?? '').normalize('NFKC').replace(/\s+/g, '').replace(/[−–]/g, '-');
    if (q.suffix) {
      const suffix = String(q.suffix).normalize('NFKC').replace(/\s+/g, '');
      if (suffix && s.endsWith(suffix)) s = s.slice(0, -suffix.length);
    }
    if (q.inputMode === 'numeric' && /^\d+$/.test(s)) s = String(Number(s));
    return q.caseSensitive ? s : s.toLocaleLowerCase('en-US');
  }
  function grade(q, answer) {
    if (q.type === 'ox') return typeof answer === 'boolean' && answer === q.answer;
    if (q.type === 'pick2') return Array.isArray(answer) && answer.length === 2 && q.groups.every((g, i) => Number.isInteger(answer[i]) && g.correct === answer[i]);
    return typeof answer === 'string' && q.answer.some(a => normalized(a, q) === normalized(answer, q));
  }
  function answerLabel(q) {
    if (q.type === 'ox') return q.answer ? 'O · 맞아요' : 'X · 아니에요';
    if (q.type === 'pick2') return q.groups.map(g => g.options[g.correct]).join(' / ');
    return q.answer[0] + (q.suffix || '');
  }
  function validation(bank) {
    const errors = [], ids = new Set();
    if (!bank || !Array.isArray(bank.questions)) return ['questions 목록이 없습니다.'];
    if (typeof bank.version !== 'string' || !bank.version || bank.version.length > 80) errors.push('문제은행 버전이 올바르지 않습니다.');
    for (const [index, q] of bank.questions.entries()) {
      const label = q.id || `문제 ${index+1}`;
      if (!q.id || typeof q.id !== 'string' || ids.has(q.id)) errors.push(`${label}: ID가 없거나 중복입니다.`);
      ids.add(q.id);
      if (!(q.type in LIMITS)) errors.push(`${label}: 유형은 ox / pick2 / text 중 하나여야 합니다.`);
      if (!q.prompt || !q.topic || !q.key) errors.push(`${label}: 질문, 주제, 반복방지 묶음이 필요합니다.`);
      if (!q.explain) errors.push(`${label}: 해설을 입력하세요.`);
      if (q.type === 'ox' && typeof q.answer !== 'boolean') errors.push(`${label}: OX 정답은 true 또는 false입니다.`);
      if (q.type === 'text' && (!Array.isArray(q.answer) || !q.answer.length || q.answer.some(a => typeof a !== 'string' || !normalized(a,q)))) errors.push(`${label}: 빈 답이 아닌 정답을 한 개 이상 입력하세요.`);
      if (q.type === 'pick2' && (!Array.isArray(q.groups) || q.groups.length !== 2 || q.groups.some(g => !Array.isArray(g.options) || g.options.length !== 2 || g.options.some(s => typeof s !== 'string' || !s.trim()) || ![0,1].includes(g.correct)))) errors.push(`${label}: 두 묶음 × 보기 두 개와 각 정답이 필요합니다.`);
      if (q.model && (!Array.isArray(q.model) || q.model.some(m => !Array.isArray(m) || !m.length || m.some(a => typeof a !== 'string')))) errors.push(`${label}: 입자 모형 형식이 올바르지 않습니다.`);
    }
    if (!bank.questions.some(q => q.enabled !== false)) errors.push('출제할 문제가 최소 한 개 필요합니다.');
    return errors;
  }
  function random() {
    if (root.crypto?.getRandomValues) return root.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296;
    return Math.random();
  }
  function choose(list) { return list[Math.floor(random() * list.length)]; }
  class Sampler {
    constructor(bank, stored = {}) {
      this.items = bank.questions.filter(q => q.enabled !== false);
      this.recent = Array.isArray(stored.recent) ? stored.recent.slice(-160) : [];
      this.families = Array.isArray(stored.families) ? stored.families.slice(-12) : [];
      this.types = Array.isArray(stored.types) ? stored.types.slice(-2) : [];
      this.topics = Array.isArray(stored.topics) ? stored.topics.slice(-2) : [];
      this.seen = stored.seen && typeof stored.seen === 'object' ? stored.seen : {};
      this.allowed = new Set(this.items.map(q => q.id));
    }
    next() {
      if (!this.items.length) throw new Error('사용할 문제가 없습니다.');
      const recent = new Set(this.recent.slice(-Math.min(160, Math.max(0, this.items.length-1))));
      let eligible = this.items.filter(q => !recent.has(q.id));
      if (!eligible.length) eligible = this.items.slice();
      const families = new Set(this.families);
      const novel = eligible.filter(q => !families.has(q.key));
      if (novel.length) eligible = novel;
      const varied = eligible.filter(q => !(this.types.length === 2 && this.types.every(t => t === q.type)));
      if (varied.length) eligible = varied;
      if (this.topics.length === 2 && this.topics[0] === this.topics[1]) {
        const other = eligible.filter(q => q.topic !== this.topics[0]);
        if (other.length) eligible = other;
      }
      const types = [...new Set(eligible.map(q => q.type))];
      const weights = {ox:0.46,pick2:0.28,text:0.26};
      let dart = random() * types.reduce((a,t) => a+weights[t],0), type = types[types.length-1];
      for (const t of types) { dart -= weights[t]; if (dart < 0) {type=t;break;} }
      const candidates = eligible.filter(q => q.type===type);
      const minSeen = Math.min(...candidates.map(q => Number(this.seen[q.id]) || 0));
      const q = choose(candidates.filter(q => (Number(this.seen[q.id]) || 0) <= minSeen));
      this.recent.push(q.id); this.recent = this.recent.slice(-160);
      this.families.push(q.key); this.families = this.families.slice(-12);
      this.types.push(q.type); this.types = this.types.slice(-2);
      this.topics.push(q.topic); this.topics = this.topics.slice(-2);
      this.seen[q.id] = (Number(this.seen[q.id]) || 0) + 1;
      return q;
    }
    state() {
      return {recent:this.recent,families:this.families,types:this.types,topics:this.topics,seen:Object.fromEntries(Object.entries(this.seen).filter(([id])=>this.allowed.has(id)))};
    }
  }
  function modelHTML(groups) {
    return '<div class="particle-model" aria-label="입자 모형">'+groups.map(group => '<span class="molecule">'+group.map(s=>'<span class="atom atom-'+escape(s)+'">'+escape(s)+'</span>').join('')+'</span>').join('')+'</div>';
  }
  const api = { LIMITS, escape, formula, rich, normalized, grade, answerLabel, validation, Sampler, modelHTML };
  root.QuizCore = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
