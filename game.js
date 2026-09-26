/* Local play engine. Only completed runs communicate with the ranking service. */
(function () {
  'use strict';
  const C = window.QuizCore, bank = window.QUIZ_BANK, config = window.QUIZ_CONFIG || {};
  const $ = id => document.getElementById(id);
  const storage = {
    get(key, fallback) { try { const v=localStorage.getItem('orangutan:'+key); return v===null?fallback:JSON.parse(v); } catch (_) {return fallback;} },
    set(key,value) { try {localStorage.setItem('orangutan:'+key,JSON.stringify(value));return true;} catch (_) {return false;} }
  };
  const base = String(config.apiBase || '').trim().replace(/\/$/, '');
  const touch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
  const labels={ox:'O / X',pick2:'4개 중 2개',text:'직접 입력'};
  let phase='home', sampler, current=null, score=0, player='', run=null, selections=[null,null];
  let startMono=0, startWall=0, raf=0, ticket=0, composing=false, lastTenth=-1, pointerSubmission=false;
  let sound=storage.get('sound',config.soundDefault!==false), motion=storage.get('motion',config.motionDefault!==false);
  let audio=null, sending=false, resultRunId='', lastSnapshot=storage.get('ranking',[]), pending=storage.get('pending',[]);
  if (!Array.isArray(pending)) pending=[];
  const timers=new Set();
  function later(fn,ms){const id=setTimeout(()=>{timers.delete(id);fn();},ms);timers.add(id);return id;}
  function clearTimers(){timers.forEach(clearTimeout);timers.clear();cancelAnimationFrame(raf);}
  function beep(freq=660,duration=.075,delay=0){
    if(!sound||!audio)return;
    try {const t=audio.currentTime+delay,o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.065,t+.005);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+duration+.01);}catch(_){}
  }
  function unlockAudio(){try {audio ||= new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume().catch(()=>{});}catch(_){} }
  function preferences(){document.body.classList.toggle('no-motion',!motion);$('sound-toggle').setAttribute('aria-pressed',String(sound));$('sound-toggle').setAttribute('aria-label',sound?'소리 끄기':'소리 켜기');$('motion-toggle').setAttribute('aria-pressed',String(motion));$('motion-toggle').setAttribute('aria-label',motion?'화면 효과 끄기':'화면 효과 켜기');}
  function screen(which){for(const name of ['home','play','result'])$(name+'-screen').hidden=name!==which;document.body.dataset.phase=which;}
  function setPhase(p){phase=p;}
  function validName(value){return /^[\p{L}\p{N} _·.\-]{1,20}$/u.test(value) && /[\p{L}\p{N}]/u.test(value);}
  function cleanName(value){return String(value).normalize('NFKC').trim().replace(/\s+/g,' ');}
  function newId(){return crypto.randomUUID ? crypto.randomUUID() : 'run-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,14);}
  function start(){
    if(!['home','result'].includes(phase))return;
    const name=cleanName($('player-name').value);
    if(!validName(name)){$('name-error').textContent='이름은 한글·영문·숫자를 포함해 20자 이내로 입력해 주세요.';$('player-name').focus();return;}
    if(pending.length>=50 && base){$('name-error').textContent='아직 반영되지 않은 기록이 많아요. 연결을 확인한 뒤 다시 시도해 주세요.';flush();return;}
    $('name-error').textContent='';player=name;storage.set('player',name);$('player-name').blur();unlockAudio();
    clearTimers();ticket++;score=0;current=null;run={runId:newId(),name:player,version:bank.version,startedAt:new Date().toISOString(),entries:[]};
    $('playing-name').textContent=player;$('combo').textContent='0';$('feedback').hidden=true;
    screen('play');setPhase('countdown');$('countdown').hidden=false;
    const token=ticket, counts=['3','2','1','START'];let i=0;
    function step(){if(token!==ticket||phase!=='countdown')return;const n=counts[i];$('count-number').textContent=n;$('count-number').classList.toggle('start-word',n==='START');$('count-number').style.animation='none';void $('count-number').offsetWidth;$('count-number').style.animation='';beep(n==='START'?880:440,n==='START'?.15:.07);i++;if(i<4)later(step,700);else later(()=>{$('countdown').hidden=true;next();},450);}
    step();
    // Warming a connection is optional; its completion never controls the countdown.
    warm();
  }
  function next(){
    clearTimers();const token=++ticket;setPhase('preparing');current=sampler.next();selections=[null,null];composing=false;
    storage.set('sampling',sampler.state());
    $('feedback').hidden=true;$('type-label').textContent=labels[current.type];$('topic-label').textContent=current.topic;$('question-number').textContent=String(score+1).padStart(2,'0');
    $('q-caption').textContent=current.caption||'';$('q-formula').innerHTML=current.model?C.modelHTML(current.model):C.formula(current.formula||'');$('q-formula').hidden=!current.formula&&!current.model;
    $('q-prompt').innerHTML=C.rich(current.prompt);$('q-clue').innerHTML=C.rich(current.clue||'');$('q-clue').hidden=!current.clue;
    $('answers').replaceChildren();$('text-form').hidden=current.type!=='text';$('input-ready').hidden=true;
    $('question-body').style.visibility='visible';$('answers').style.visibility='visible';$('text-form').style.visibility='visible';$('answer-hint').style.visibility='visible';
    $('answer-input').value='';$('answer-input').disabled=false;$('answer-input').inputMode=current.inputMode==='numeric'?'numeric':'text';$('answer-suffix').textContent=current.suffix||'';
    $('time-digits').textContent=(C.LIMITS[current.type]/1000).toFixed(1);$('time-bar').style.transform='scaleX(1)';$('time-bar').classList.remove('urgent');lastTenth=-1;
    $('question-stage').classList.remove('correct-flash');
    if(current.type==='ox'){
      const wrap=document.createElement('div');wrap.className='ox-grid';
      for(const [val,text,extra] of [[true,'O','ox-yes'],[false,'X','ox-no']]){const b=document.createElement('button');b.type='button';b.className='ox-btn '+extra;b.innerHTML='<strong>'+text+'</strong>';b.setAttribute('aria-label',val?'O 맞다':'X 틀리다');b.addEventListener('click',()=>{if(token===ticket)submit(val);});wrap.append(b);} $('answers').append(wrap);
      $('answer-hint').textContent='누르는 즉시 제출';
    } else if(current.type==='pick2'){
      current.groups.forEach((g,index)=>{const row=document.createElement('div');row.className='pick-row';row.dataset.label=g.label||`${index+1}번 기준`;row.setAttribute('role','group');row.setAttribute('aria-label',g.label||`${index+1}번 기준`);
        g.options.forEach((option,value)=>{const b=document.createElement('button');b.type='button';b.className='answer-btn';b.innerHTML=C.rich(option);b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>{
          if(token!==ticket||phase!=='playing')return;if(elapsed()>=C.LIMITS[current.type]){finish(null,'timeout');return;}
          selections[index]=value;Array.from(row.children).forEach((node,j)=>{node.classList.toggle('selected',j===value);node.setAttribute('aria-pressed',String(j===value));});beep(510,.035);
          if(selections.every(x=>x!==null))submit(selections.slice());
        });row.append(b);});$('answers').append(row);});$('answer-hint').textContent='각 줄에서 하나씩 · 두 줄 선택 시 즉시 제출';
    } else {$('answer-hint').textContent=current.suffix==='이온'?'‘이온’은 빼고 이름만 입력해도 정답':current.inputMode==='numeric'?'숫자를 입력한 뒤 제출':'답을 입력한 뒤 제출';}
    if(current.type==='text'&&touch){
      $('question-body').style.visibility='hidden';$('text-form').style.visibility='hidden';$('answer-hint').style.visibility='hidden';$('input-ready').hidden=false;
      $('time-digits').textContent='7.0';$('topic-label').textContent='직접 입력';
    } else {
      if(current.type==='text')$('answer-input').focus({preventScroll:true});else $('answer-input').blur();
      requestAnimationFrame(()=>requestAnimationFrame(()=>{if(token===ticket&&phase==='preparing')beginQuestion();}));
    }
  }
  function readyText(){
    if(phase!=='preparing'||current?.type!=='text'||$('input-ready').hidden)return;
    $('input-ready').hidden=true;$('text-form').style.visibility='visible';$('answer-input').focus({preventScroll:true});
    const token=ticket;later(()=>{if(token!==ticket||phase!=='preparing')return;$('question-body').style.visibility='visible';$('answer-hint').style.visibility='visible';$('topic-label').textContent=current.topic;beginQuestion();},260);
  }
  function beginQuestion(){setPhase('playing');startMono=performance.now();startWall=Date.now();tick();}
  function elapsed(){return Math.max(0,performance.now()-startMono,Date.now()-startWall);}
  function tick(){
    if(phase!=='playing')return;const left=Math.max(0,C.LIMITS[current.type]-elapsed());
    $('time-bar').style.transform=`scaleX(${left/C.LIMITS[current.type]})`;
    const tenth=Math.ceil(left/100);if(tenth!==lastTenth){lastTenth=tenth;$('time-digits').textContent=(tenth/10).toFixed(1);}
    $('time-bar').classList.toggle('urgent',left<=1000);
    if(left<=0){finish(null,'timeout');return;}raf=requestAnimationFrame(tick);
  }
  function submit(answer){
    if(phase!=='playing')return;
    if(elapsed()>=C.LIMITS[current.type]){finish(null,'timeout');return;}
    if(!C.grade(current,answer)){finish(answer,'wrong');return;}
    run.entries.push({id:current.id,answer,elapsedMs:Math.floor(elapsed()),reason:'correct'});
    setPhase('feedback');cancelAnimationFrame(raf);$('answer-input').blur();score++;$('combo').textContent=String(score);$('feedback').hidden=false;$('question-stage').classList.add('correct-flash');
    beep(700,.06);beep(1050,.08,.06);const token=ticket;
    $('encouragement').textContent=score%10===0?'계속 이어지는 너의 기록.':score%5===0?'좋아, 흐름을 놓치지 마.':'멈추지 말고, 다음 정답.';
    later(()=>{if(token===ticket&&phase==='feedback')next();},210);
  }
  function finish(answer,reason){
    if(!['playing','preparing','feedback'].includes(phase)||!current)return;
    // Leaving between questions still records the score already earned.
    const wasActive=phase==='playing';
    if(phase!=='feedback')run.entries.push({id:current.id,answer:reason==='wrong'?answer:null,elapsedMs:wasActive?Math.floor(elapsed()):0,reason});
    run.endReason=reason;run.finishedAt=new Date().toISOString();
    clearTimers();ticket++;setPhase('result');$('answer-input').blur();$('countdown').hidden=true;$('feedback').hidden=true;document.body.classList.remove('keyboard-open');screen('result');
    resultRunId=run.runId;$('final-score').textContent=String(score);$('final-player').textContent=player;
    $('end-reason').textContent={wrong:'오답',timeout:'시간 초과',left:'화면 이동'}[reason]||'도전 종료';
    $('review-question').innerHTML=(current.caption?'<span class="q-caption">'+C.escape(current.caption)+'</span>':'')+(current.formula?'<div class="review-formula">'+C.formula(current.formula)+'</div>':'')+(current.model?C.modelHTML(current.model):'')+'<p>'+C.rich(current.prompt)+'</p>';
    $('correct-answer').innerHTML=C.rich(C.answerLabel(current));$('review-explain').innerHTML=C.rich(current.explain);
    const bests=storage.get('bests',{}),old=Number(bests[player]??-1);bests[player]=Math.max(old,score);storage.set('bests',bests);
    $('best-notice').textContent=score>old&&score>0?'이 기기에서의 내 최고 기록을 넘었어요.':score>0?'좋은 도전이었어요. 다음 기록을 만들어 봐요.':'다음 도전에서 첫 정답을 잡아 봐요.';
    beep(190,.16);window.scrollTo({top:0,behavior:'instant'});
    if(base){
      pending.push(JSON.parse(JSON.stringify(run)));storage.set('pending',pending);
      showRanking(lastSnapshot);$('save-status').textContent='기록을 반영하고 있어요…';$('retry-save').hidden=true;$('ranking-note').textContent='이름별 최고 기록 · 동점은 먼저 달성한 순서';flush();
    } else {
      let local=storage.get('localRanking',[]);local.push({name:player,score,at:run.finishedAt});const map=new Map();
      local.sort((a,b)=>b.score-a.score||String(a.at).localeCompare(String(b.at))).forEach(r=>{if(!map.has(r.name))map.set(r.name,r);});local=Array.from(map.values()).slice(0,100);storage.set('localRanking',local);showRanking(local.slice(0,10));$('save-status').textContent='개인 연습 기록';$('ranking-note').textContent='이 기기의 기록 · 이름별 최고 기록';$('retry-save').hidden=true;
    }
  }
  function showRanking(rows){
    const list=$('rank-list');list.replaceChildren();
    if(!Array.isArray(rows)||!rows.length){const li=document.createElement('li');li.className='ranking-empty';li.textContent='첫 번째 기록의 주인공이 되어 보세요.';list.append(li);return;}
    rows.slice(0,10).forEach((r,i)=>{const li=document.createElement('li');li.className='rank-item'+(i===0?' first':'')+(r.name===player?' mine':'');const rank=document.createElement('span');rank.className='rank-number';rank.textContent=String(i+1).padStart(2,'0');const name=document.createElement('span');name.className='rank-name';name.textContent=String(r.name||'');const s=document.createElement('strong');s.className='rank-score';s.textContent=String(Number(r.score)||0);li.append(rank,name,s);list.append(li);});
  }
  async function request(path,options={}){
    const ac=new AbortController(),id=setTimeout(()=>ac.abort(),85000);
    try{const response=await fetch(base+path,{...options,mode:'cors',credentials:'omit',signal:ac.signal});let body;try{body=await response.json();}catch(_){throw new Error('temporary');}if(!response.ok||!body.ok)throw new Error(body.code||'temporary');return body;}finally{clearTimeout(id);}
  }
  async function flush(){
    if(!base||sending||!pending.length)return;sending=true;
    try{
      while(pending.length){
        const item=pending[0];
        try{
          const data=await request('/api/result',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(item)});
          pending=pending.filter(r=>r.runId!==item.runId);storage.set('pending',pending);
          lastSnapshot=Array.isArray(data.ranking)?data.ranking:[];storage.set('ranking',lastSnapshot);
          if(phase==='result'){showRanking(lastSnapshot);if(resultRunId===item.runId){$('save-status').textContent='기록 반영 완료';$('retry-save').hidden=true;}}
        }catch(err){
          if(['bank_version','unknown_question','invalid_answer','invalid_entries','invalid_end','invalid_wrong','invalid_timeout','missing_failure'].includes(err.message)){
            const rejected=storage.get('unconfirmed',[]);rejected.push(item);storage.set('unconfirmed',rejected.slice(-50));pending=pending.filter(r=>r.runId!==item.runId);storage.set('pending',pending);
            if(phase==='result'&&resultRunId===item.runId){$('save-status').textContent='이 기록을 반영하지 못했어요. 새로고침 후 선생님께 알려 주세요.';$('retry-save').hidden=true;}
            continue;
          }
          if(phase==='result'){$('save-status').textContent=err.message==='bank_version'?'문제가 새로 바뀌었어요. 새로고침 후 다시 도전해 주세요.':'아직 반영되지 않았어요. 연결 후 다시 확인해 주세요.';$('retry-save').hidden=false;}
          break;
        }
      }
    }finally{sending=false;}
  }
  let lastWarm=0;
  function warm(){if(!base||Date.now()-lastWarm<45000)return;lastWarm=Date.now();const ac=new AbortController();const id=setTimeout(()=>ac.abort(),12000);fetch(base+'/api/health',{signal:ac.signal,credentials:'omit'}).catch(()=>{}).finally(()=>clearTimeout(id));}
  function goHome(){
    if(['playing','preparing','feedback'].includes(phase)){finish(null,'left');return;}
    clearTimers();ticket++;setPhase('home');$('countdown').hidden=true;screen('home');$('player-name').value=player||storage.get('player','');window.scrollTo({top:0,behavior:'instant'});
  }
  $('start-form').addEventListener('submit',e=>{e.preventDefault();start();});
  $('replay').addEventListener('click',()=>{if(phase==='result')start();});
  $('change-name').addEventListener('click',goHome);$('home-link').addEventListener('click',e=>{e.preventDefault();goHome();});
  $('ready-button').addEventListener('click',readyText);
  $('text-form').addEventListener('submit',e=>{e.preventDefault();if(composing)return;submit($('answer-input').value);});
  // A pointer click submits the visible composition text; IME Enter only confirms composition.
  $('text-form').querySelector('button').addEventListener('pointerdown',e=>{e.preventDefault();pointerSubmission=true;composing=false;submit($('answer-input').value);});
  $('text-form').querySelector('button').addEventListener('click',e=>{if(pointerSubmission){e.preventDefault();pointerSubmission=false;}});
  $('answer-input').addEventListener('compositionstart',()=>{composing=true;});$('answer-input').addEventListener('compositionend',()=>{composing=false;});
  $('answer-input').addEventListener('keydown',e=>{if(e.key==='Enter'){if(e.isComposing||composing||e.keyCode===229)e.preventDefault();else pointerSubmission=false;}});
  $('answer-input').addEventListener('focus',()=>{if(touch)document.body.classList.add('keyboard-open');});$('answer-input').addEventListener('blur',()=>document.body.classList.remove('keyboard-open'));
  $('sound-toggle').addEventListener('click',()=>{sound=!sound;storage.set('sound',sound);unlockAudio();preferences();if(sound)beep();});
  $('motion-toggle').addEventListener('click',()=>{motion=!motion;storage.set('motion',motion);preferences();});
  $('retry-save').addEventListener('click',()=>{if(sending)return;$('save-status').textContent='기록을 다시 확인하고 있어요…';$('retry-save').hidden=true;flush();});
  $('show-rules').addEventListener('click',()=>$('rules-dialog').showModal());for(const id of ['close-rules','rules-ok'])$(id).addEventListener('click',()=>$('rules-dialog').close());
  document.addEventListener('visibilitychange',()=>{if(document.hidden){if(['playing','preparing','feedback'].includes(phase))finish(null,'left');else if(phase==='countdown')goHome();}else{warm();flush();}});
  window.addEventListener('online',()=>{warm();flush();});
  preferences();$('player-name').value=storage.get('player','');
  if(!C||!bank){$('start-button').disabled=true;$('name-error').textContent='문제를 불러오지 못했어요. 새로고침해 주세요.';return;}
  const errors=C.validation(bank);
  if(errors.length){$('start-button').disabled=true;$('name-error').textContent='문제를 준비하고 있어요. 선생님께 알려 주세요.';console.error(errors);return;}
  sampler=new C.Sampler(bank,storage.get('sampling',{}));if(!base)$('mode-badge').textContent='개인 연습';
  warm();flush();
})();
