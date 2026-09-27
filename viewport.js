/* Fixed app viewport; keyboard changes resize the content instead of scrolling it. */
(function () {
  'use strict';
  const root = document.documentElement, body = document.body, view = window.visualViewport;
  let frame = 0;
  function apply() {
    frame = 0;
    const height = Math.round(view ? view.height : window.innerHeight);
    root.style.setProperty('--app-height', height + 'px');
    root.style.setProperty('--app-offset', Math.max(0, Math.round(view ? view.offsetTop : 0)) + 'px');
    body.classList.toggle('viewport-short', height < 650);
    body.classList.toggle('viewport-tiny', height < 430);
    body.classList.toggle('name-entry', document.activeElement && document.activeElement.id === 'player-name');
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(apply); }
  window.addEventListener('resize', schedule, {passive: true});
  window.addEventListener('orientationchange', () => { schedule(); setTimeout(schedule, 200); }, {passive: true});
  if (view) { view.addEventListener('resize', schedule, {passive: true}); view.addEventListener('scroll', schedule, {passive: true}); }
  document.addEventListener('focusin', schedule); document.addEventListener('focusout', schedule);
  // Keep normal one-finger list/dialog scrolling and input selection intact.
  for (const type of ['gesturestart', 'gesturechange', 'gestureend']) {
    document.addEventListener(type, event => event.preventDefault(), {passive: false});
  }
  document.addEventListener('touchstart', event => {
    if (event.touches.length > 1) event.preventDefault();
  }, {passive: false});
  document.addEventListener('touchmove', event => {
    if (event.touches.length > 1) { event.preventDefault(); return; }
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.closest('.result-scroll, dialog, input, textarea')) return;
    event.preventDefault();
  }, {passive: false});
  document.addEventListener('dblclick', event => {
    if (!event.target.closest('input,textarea')) event.preventDefault();
  }, {passive: false});
  apply();
})();
