/* ===================== icons ===================== */
const IC = {
  signal:'<svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>',
  wifi:'<svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 2.5c2.3 0 4.4.9 6 2.4l1.2-1.3C13.3 1.8 10.8.8 8 .8S2.7 1.8.8 3.6L2 4.9c1.6-1.5 3.7-2.4 6-2.4zm0 3.4c1.4 0 2.6.5 3.6 1.4l1.2-1.3C11.5 4.8 9.8 4.2 8 4.2s-3.5.6-4.8 1.8l1.2 1.3c1-.9 2.2-1.4 3.6-1.4zm0 3.4c.6 0 1.1.2 1.5.6L8 11.5 6.5 9.9c.4-.4.9-.6 1.5-.6z"/></svg>',
  battery:'<svg width="27" height="13" viewBox="0 0 27 13"><rect x=".5" y=".5" width="23" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="20" height="9" rx="2"/><path d="M25 4.5v4c.8-.3 1.4-1.1 1.4-2s-.6-1.7-1.4-2z" opacity=".45"/></svg>',
  back:'<svg width="12" height="21" viewBox="0 0 12 21"><path d="M10 2 2 10.5 10 19" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  close:'<svg width="16" height="16" viewBox="0 0 16 16"><path d="M2 2l12 12M14 2 2 14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  headset:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19c0 1.6-2 2.6-5 2.6"/></svg>',
  bolt:'<svg width="18" height="18" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  excl:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 6v8M12 18.5v.1"/></svg>',
  lock:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/></svg>',
  chev:'<svg width="8" height="13" viewBox="0 0 8 13"><path d="M1.5 1.5 6.5 6.5 1.5 11.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

/* ===================== data ===================== */
const A = window.ASSETS;
const PLATE = 'RCQ-6760', ORDER = 'H2026100501', MODEL = 'Corolla Cross';
const ANGLES = [
  {key:'車內前', label:'車內前', ext:false},
  {key:'車內後', label:'車內後', ext:false},
  {key:'左前', label:'左前', ext:true,  zones:['前保桿','引擎蓋','左前葉子板','左前門']},
  {key:'右前', label:'右前', ext:true,  zones:['前保桿','引擎蓋','右前葉子板','右前門']},
  {key:'右後', label:'右後', ext:true,  zones:['後保桿','後箱蓋','右後葉子板','右後門']},
  {key:'左後', label:'左後', ext:true,  zones:['後保桿','後箱蓋','左後葉子板','左後門']},
];
// top-view zones: [x,y,w,h,weight] in a 120x260 car box
const ZONES = {
  '前保桿':[10,0,100,22,6],'引擎蓋':[14,22,92,58,12],'左前葉子板':[0,22,14,58,5],'右前葉子板':[106,22,14,58,5],
  '左前門':[0,80,14,52,8],'右前門':[106,80,14,52,8],'左後門':[0,132,14,50,8],'右後門':[106,132,14,50,8],
  '車頂':[14,80,92,102,7],'左後葉子板':[0,182,14,56,5],'右後葉子板':[106,182,14,56,5],'後箱蓋':[14,182,92,56,10],'後保桿':[10,238,100,22,13],
};
const SCEN = [
  {k:'normal', n:'正常', e:'通過'},
  {k:'dark',   n:'偏暗', e:'提醒'},
  {k:'black',  n:'全黑', e:'擋下'},
  {k:'blur',   n:'模糊', e:'提醒'},
  {k:'fog',    n:'鏡頭髒污', e:'提醒'},
  {k:'finger', n:'手指遮擋', e:'擋下'},
  {k:'wrong',  n:'拍錯車', e:'擋下', ext:true},
  {k:'dup',    n:'舊照', e:'擋下'},
];
const FEATURES = [
  {id:'score', n:'車況透明分數', l:'用戶'},
  {id:'park',  n:'車位層級找車', l:'營運'},
  {id:'guide', n:'新手導航', l:'用戶'},
  {id:'plate', n:'車牌比對', l:'拍攝'},
  {id:'overlay', n:'半透明疊圖', l:'拍攝'},
  {id:'action', n:'動作指示', l:'拍攝'},
  {id:'quality', n:'照片品質檢測', l:'拍攝'},
  {id:'dup',   n:'防重複・防偽', l:'拍攝'},
  {id:'rules', n:'硬性／軟性規則', l:'拍攝'},
  {id:'cover', n:'車身覆蓋圖', l:'拍攝'},
  {id:'ledger', n:'車損帳本比對', l:'雲端'},
  {id:'conf',  n:'信心度分級', l:'雲端'},
  {id:'dirt',  n:'髒污／遺留物', l:'雲端'},
  {id:'queue', n:'急迫性排序', l:'後台'},
  {id:'fb',    n:'人工回饋 AI', l:'後台'},
  {id:'cs',    n:'AI 客服分流', l:'用戶'},
];
const BASE_LEDGER = [
  {id:1, date:'03/12', pos:'前左保桿', dmg:'刮傷 6 cm', st:'既有', x:28, y:10},
  {id:2, date:'05/08', pos:'左後門', dmg:'小凹陷', st:'既有', x:7, y:150},
  {id:3, date:'08/21', pos:'後左保桿', dmg:'擦痕 4 cm', st:'既有', x:30, y:250},
];
// 信心度 ≥ 0.90 自動結案；0.60–0.89 中、< 0.60 低，進人工審
const BASE_QUEUE = [
  {plate:'RDL-7827', order:'H2026100488', why:['25 分鐘後取車','疑似新刮傷'], c:0.68, urg:95},
  {plate:'RDG-8571', order:'H2026100479', why:['安全：大燈破裂'], c:0.84, urg:90},
  {plate:'RCW-1883', order:'H2026100462', why:['預估 NT$12,000'], c:0.77, urg:70},
  {plate:'RDS-2805', order:'H2026100455', why:['照片不足，待用戶補拍'], c:0.42, urg:40},
  {plate:'RDQ-5916', order:'H2026100450', why:['一般'], c:0.64, urg:20},
];
const AUTO_DONE = [
  {plate:'RDK-1023', why:'無新增車損', c:0.97},
  {plate:'RCZ-3381', why:'車損皆在帳本內', c:0.95},
  {plate:'RDF-4410', why:'新刮傷 3 cm，已入帳並通知用戶', c:0.93},
];
const confTier = c => c>=0.9?['高','g']:c>=0.6?['中','y']:['低','r'];
const TODAY = '10/06';
const SCRATCH = {angle:'右前', x:0.62, y:0.555, w:0.16, h:0.07}; // simulated new damage in the 右前 photo

/* ===================== state ===================== */
let S;
function reset(){
  S = {step:'pick', idx:0, car:0, scoreCar:0, scoreFrom:'pick', pidx:0, pshots:{}, rpark:0, t:{}, pickReview:null, insure:false, pskip:false, pclose:[], pzone:null, parkFail:false, parkEdit:false, scen:'normal', flash:false, simDamage:true, shots:{}, align:{t:0,timer:null,raf:null},
       visited:new Set(), tab:'guide', metrics:null, chat:false, chatLog:[], sel:null,
       ledger:BASE_LEDGER.map(x=>({...x})), reviewed:null, feedback:0, results:null};
  render();
}

/* ===================== images ===================== */
const IM = {};
function loadImg(src){return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.src=src;});}
async function loadAll(){
  for(const k in A.angles){
    IM[k] = {borrow:await loadImg(A.angles[k].borrow), ret:await loadImg(A.angles[k].ret), ov:A.angles[k].overlay,
             refBox:A.angles[k].refBox, curBox:A.angles[k].curBox};
  }
  for(const k in A.extra) IM[k] = await loadImg(A.extra[k]);
}
const W=600,H=800;
function mk(w=W,h=H){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}

/* the photo the phone would capture for the current angle + scenario (before alignment) */
function rawFrame(ang, scen, flash){
  const c=mk(), x=c.getContext('2d');
  let src;
  if(scen==='wrong') src=IM.wrongCar;
  else if(scen==='dup') src = ang.ext ? IM[ang.key].borrow : IM['左前'].borrow;
  else if(ang.ext) src=IM[ang.key].ret;
  else src = (scen==='dark') ? IM.darkInterior : IM[ang.key==='車內前'?'inFront':'inRear'];
  x.drawImage(src,0,0,W,H);
  if(ang.ext && ang.key===SCRATCH.angle && S.simDamage && !['wrong','dup'].includes(scen)) drawScratch(x);
  if(scen==='blur'||scen==='fog'){
    const f = scen==='blur'?16:8, s=mk(W/f|0,H/f|0); s.getContext('2d').drawImage(c,0,0,s.width,s.height);
    x.drawImage(s,0,0,W,H);
    if(scen==='fog'){x.fillStyle='rgba(215,215,210,.55)';x.fillRect(0,0,W,H);}
  }
  if(scen==='finger'){
    const g=x.createRadialGradient(560,770,40,560,770,330);
    g.addColorStop(0,'rgba(190,120,98,1)');g.addColorStop(.75,'rgba(176,108,88,.98)');g.addColorStop(1,'rgba(150,90,75,0)');
    x.fillStyle=g;x.beginPath();x.ellipse(560,770,300,360,-0.5,0,7);x.fill();
  }
  let mul = 1;
  if(scen==='dark' && ang.ext) mul=0.33;
  if(scen==='black') mul=0.06;
  if(flash && (scen==='dark'||scen==='black')) mul *= ang.ext?2.6:2.3;
  if(mul!==1){const d=x.getImageData(0,0,W,H),p=d.data;for(let i=0;i<p.length;i+=4){p[i]=Math.min(255,p[i]*mul);p[i+1]=Math.min(255,p[i+1]*mul);p[i+2]=Math.min(255,p[i+2]*mul);}x.putImageData(d,0,0);}
  return c;
}
function drawScratch(x){
  const cx=SCRATCH.x*W, cy=SCRATCH.y*H;
  x.save();x.lineCap='round';
  for(let i=0;i<5;i++){
    x.strokeStyle=`rgba(${45+i*12},${45+i*10},${48+i*10},${.95-i*.12})`;x.lineWidth=4.2-i*.6;
    x.beginPath();x.moveTo(cx-38+i*3,cy-8+i*3);x.bezierCurveTo(cx-10,cy-2+i*2,cx+12,cy+6+i*2,cx+40-i*2,cy+14+i*2);x.stroke();
  }
  x.restore();
}

/* ===================== AI checks (computed in-browser on the pixels) ===================== */
function analyze(c){
  const s=mk(150,200), x=s.getContext('2d'); x.drawImage(c,0,0,150,200);
  const p=x.getImageData(0,0,150,200).data, g=new Float32Array(150*200);
  let sum=0;
  for(let i=0;i<g.length;i++){g[i]=0.299*p[i*4]+0.587*p[i*4+1]+0.114*p[i*4+2];sum+=g[i];}
  const mean=sum/g.length;
  let v=0;for(let i=0;i<g.length;i++)v+=(g[i]-mean)**2; const std=Math.sqrt(v/g.length);
  let ls=0,ls2=0,n=0;
  for(let y=1;y<199;y++)for(let xx=1;xx<149;xx++){const i=y*150+xx;const l=4*g[i]-g[i-1]-g[i+1]-g[i-150]-g[i+150];ls+=l;ls2+=l*l;n++;}
  const lap=ls2/n-(ls/n)**2;
  // occlusion: skin-coloured blob in a corner
  let occ=0;
  for(const [x0,y0] of [[0,0],[90,0],[0,120],[90,120]]){
    let k=0,t=0;for(let y=y0;y<y0+80;y++)for(let xx=x0;xx<x0+60;xx++){const i=(y*150+xx)*4,r=p[i],gg=p[i+1],b=p[i+2];t++;if(r>90&&gg>40&&r>gg+20&&r>b+30&&r-gg<110)k++;}
    occ=Math.max(occ,k/t);
  }
  return {mean, std, lap, occ, hash:dhash(c)};
}
function dhash(c){
  const s=mk(9,8), x=s.getContext('2d'); x.drawImage(c,0,0,9,8);
  const p=x.getImageData(0,0,9,8).data, b=[];
  for(let y=0;y<8;y++)for(let i=0;i<8;i++){const a=(y*9+i)*4,q=a+4;b.push((p[a]*.299+p[a+1]*.587+p[a+2]*.114)<(p[q]*.299+p[q+1]*.587+p[q+2]*.114)?1:0);}
  return b;
}
const ham=(a,b)=>a.reduce((s,v,i)=>s+(v!==b[i]),0);
let HASHBANK=[];
function buildHashBank(){
  HASHBANK=[];
  for(const k in A.angles){const c=mk();c.getContext('2d').drawImage(IM[k].borrow,0,0,W,H);HASHBANK.push({h:dhash(c),src:`上次${k}照片`});}
}

/* issues for the current frame: {hard, code, title, act} */
function evaluate(ang, m, isAligned){
  const out=[];
  if(ang.ext && S.scen==='wrong') out.push({hard:1,code:'plate',title:'車牌不符',act:`請拍 ${PLATE}`});
  const bank=[...HASHBANK, ...Object.entries(S.shots).filter(([k])=>k!==ang.key).map(([k,v])=>({h:v.hash,src:`本次${k}照片`}))];
  let best=null;for(const b of bank){const d=ham(m.hash,b.h);if(!best||d<best.d)best={d,src:b.src};}
  m.dupDist=best?best.d:64;
  if(best && best.d<=8) out.push({hard:1,code:'dup',title:`與${best.src}相同`,act:'請現場拍攝'});
  if(m.mean<20) out.push({hard:1,code:'black',title:'畫面全黑',act:'移到亮處'});
  if(m.occ>0.5) out.push({hard:1,code:'finger',title:'鏡頭遮擋',act:'手指移開'});
  if(m.mean>=20 && m.mean<45) out.push({hard:0,code:'dark',title:'光線偏暗',act:'開閃光燈'});
  if(m.lap<250 && m.std<32) out.push({hard:0,code:'fog',title:'鏡頭髒污',act:'擦拭鏡頭'});
  else if(m.lap<250 && m.mean>=20) out.push({hard:0,code:'blur',title:'畫面模糊',act:'拿穩再拍'});
  if(ang.ext && !['wrong','dup'].includes(S.scen) && !isAligned) out.push({hard:0,code:'align',title:'角度偏差',act:'往左一步'});
  return out;
}

/* ===================== render ===================== */
const $=s=>document.querySelector(s);
function visit(...ids){ids.forEach(i=>S.visited.add(i));}
function statusBar(dark){return `<div class="island"></div><div class="status ${dark?'dark':''}"><span>9:41</span><span class="icons">${IC.signal}${IC.wifi}${IC.battery}</span></div>`;}
function nav(title, prog, left='back', right=true){
  const l = left==='back'?`<button class="l" onclick="back()">${IC.back}</button>`: left==='close'?`<button class="l" style="padding-left:16px" onclick="back()">${IC.close}</button>`:'';
  return `<div class="nav">${l}${title}${right?`<button class="r" onclick="openChat()" aria-label="客服">${IC.headset}</button>`:''}${prog!=null?`<div class="bar" style="width:${prog}%"></div>`:''}</div>`;
}

function render(){ renderPhone(); renderPanel(); }

function renderPhone(){
  const sc=$('#screen'); stopAlign();
  let h='';
  switch(S.step){
    case 'pick': visit('score'); h=pickScreen(); break;
    case 'carinfo': h=carinfoScreen(); break;
    case 'score': visit('score'); h=scoreScreen(); break;
    case 'pickup': visit('park'); h=pickupScreen(); break;
    case 'pcheck': h=pcheckScreen(); break;
    case 'pcam': h=pcamScreen(); break;
    case 'pclose': h=pcloseScreen(); break;
    case 'pclosecam': h=pclosecamScreen(); break;
    case 'pconfirm': h=pconfirmScreen(); break;
    case 'home': h=homeScreen(); break;
    case 'rpark': h=rparkScreen(); break;
    case 'guide': visit('guide'); h=guideScreen(); break;
    case 'camera': h=cameraScreen(); break;
    case 'cover': visit('cover'); h=coverScreen(); break;
    case 'analyzing': h=analyzingScreen(); break;
    case 'result': visit('ledger','conf','dirt'); h=resultScreen(); break;
    case 'nextuser': h=nextuserScreen(); break;
    case 'done': h=doneScreen(); break;
  }
  if(S.chat){ visit('cs'); h += chatScreen(); }
  sc.innerHTML = h + `<div class="home-ind ${['camera','pcam','pclosecam'].includes(S.step)&&!S.chat?'light':''}"></div>`;
  startTick();
  if(S.step==='camera') initCamera();
  if(S.step==='analyzing') runAnalyzing();
  if(S.chat){const m=$('.msgs');m.scrollTop=m.scrollHeight;}
}

/* ---------- cars & condition score ---------- */
// 費率：iRent 費率表 COROLLA CROSS 同站租還專案價（至 2026/11/30）、里程費 3.5 元/公里
const CC_RATE = [['平日','$130 / 時'],['假日','$205 / 時'],['里程','$3.5 / 公里']];
const CARS = [
  {plate:PLATE, model:MODEL, img:()=>A.angles['左前'].borrow, pos:'center 45%', dist:'120 m', park:'B1・柱號 A02', clean:'2 天前清潔', grade:'A', rate:CC_RATE, live:true},
  {plate:'RDL-7827', model:MODEL, img:()=>A.angles['右後'].borrow, pos:'center 50%', dist:'450 m', park:'B2・柱號 C11', clean:'5 天前清潔', grade:'B', rate:CC_RATE,
   ledger:[{id:1,date:'02/03',pos:'前保桿',dmg:'刮傷 8 cm',st:'既有',x:60,y:10},{id:2,date:'04/17',pos:'右前門',dmg:'凹陷',st:'既有',x:113,y:105},
           {id:3,date:'06/30',pos:'後箱蓋',dmg:'擦痕',st:'既有',x:60,y:205},{id:4,date:'09/02',pos:'左後葉子板',dmg:'刮傷 5 cm',st:'既有',x:7,y:210}]},
  {plate:'RCX-5100', model:'Yaris', img:()=>A.extra.wrongCar, pos:'center 50%', dist:'800 m', park:'路邊・民生東路', clean:'1 天前清潔', grade:'A', rate:null,
   ledger:[{id:1,date:'07/11',pos:'右後門',dmg:'小刮痕',st:'既有',x:113,y:155}]},
];
const GRADE = {A:['整潔','var(--ok)'], B:['輕微髒污','var(--warn)'], C:['需清潔','var(--bad)']};
function carLedger(i){ return CARS[i].live ? S.ledger : CARS[i].ledger; }
function scoreOf(l=S.ledger){ return Math.max(60, 97 - l.length*3); }
function ring(sc, big){
  const c = sc>=90?'var(--ok)':sc>=80?'var(--warn)':'var(--bad)';
  return `<div class="ring" style="color:${c};border-color:${c}${big?';width:72px;height:72px;font-size:26px':''}">${sc}</div>`;
}
function gradeBadge(g){ return `<span class="grade" style="background:${GRADE[g][1]}">${g}</span>`; }
function scoreCell(i){
  const l=carLedger(i);
  return `<div class="cell" onclick="openScore(${i})" style="cursor:pointer">${ring(scoreOf(l))}<div><div>車況分數</div><div style="font-size:13px;color:var(--sub)">帳本車損 ${l.length} 處</div></div><span class="v chev">${IC.chev}</span></div>`;
}
function cleanCell(i){
  const c=CARS[i];
  return `<div class="cell"><div style="width:52px;display:grid;place-items:center;flex:0 0 auto">${gradeBadge(c.grade)}</div><div><div>車內整潔：${GRADE[c.grade][0]}</div><div style="font-size:13px;color:var(--sub)">上次還車車內照片判定・${c.clean}</div></div></div>`;
}
function parkCell(i){
  const c=CARS[i], bg = c.live ? `url(${A.angles['左前'].borrow}) 92% 8%/260% auto` : `url(${c.img()}) ${c.pos}/cover`;
  return `<div class="cell"><div style="width:52px;height:40px;border-radius:6px;background:${bg};flex:0 0 auto"></div><div><div>${c.park}</div><div style="font-size:13px;color:var(--sub)">由上次還車照片辨識</div></div></div>`;
}
function carCard(){
  return `<div class="grp" style="padding:14px 16px">
    <div><span class="tag">同站</span>${S.insure?' <span class="tag" style="background:#e0f2fe;color:#0369a1">安心服務</span>':''}</div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
      <div><div style="font-size:26px;font-weight:700">${PLATE}</div><div style="font-size:14px;color:var(--sub)">${MODEL}</div></div>
      <div style="width:116px;height:68px;border-radius:8px;background:url(${A.angles['左前'].borrow}) center 45%/cover"></div></div>
  </div>`;
}
const bottomBar = inner => `<div style="position:absolute;bottom:34px;left:16px;right:16px;display:flex;gap:10px">${inner}</div>`;
const subline = t => `<div style="font-size:15px;color:var(--sub);margin:0 4px 14px">${t}</div>`;
function openScore(i){ S.scoreCar=i; S.scoreFrom=S.step; go('score'); }

/* live clocks: pickup countdown / rental time */
let TICK=null;
const fmt = sec => { sec=Math.max(0,Math.floor(sec)); return [sec/3600|0,(sec/60|0)%60,sec%60].map(n=>String(n).padStart(2,'0')).join(':'); };
function clockText(){ return S.step==='pickup' ? fmt(1800-(Date.now()-S.t.reserve)/1000).slice(3) : fmt((Date.now()-S.t.rent)/1000); }
function startTick(){
  clearInterval(TICK);
  if(['pickup','home'].includes(S.step)) TICK=setInterval(()=>{const el=$('#clock'); if(el) el.textContent=clockText();},1000);
}

/* ---------- 借車 ---------- */
function pickScreen(){
  return statusBar()+nav('選車',null,'')+`<div class="body">
  <div class="lt">附近車輛</div>
  ${subline('車況分數來自歷次還車照片，點進去看明細')}
  ${CARS.map((c,i)=>`<div class="grp car" onclick="S.car=${i};go('carinfo')">
    <div class="ci" style="background:url(${c.img()}) ${c.pos}/cover"></div>
    <div style="flex:1;min-width:0"><div style="font-weight:700;font-size:18px">${c.plate}</div><div class="s">${c.model}・${c.dist}</div>
      <div class="s" style="margin-top:4px;display:flex;align-items:center;gap:6px">${gradeBadge(c.grade)}車內${GRADE[c.grade][0]}</div></div>
    <button class="ringbtn" onclick="event.stopPropagation();openScore(${i})">${ring(scoreOf(carLedger(i)))}<span>車況</span></button></div>`).join('')}
  </div>`;
}
function carinfoScreen(){
  const c=CARS[S.car];
  return statusBar()+nav('車輛資訊',null)+`<div class="body" style="bottom:96px">
    <div style="height:190px;border-radius:12px;background:url(${c.img()}) ${c.pos}/cover"></div>
    <div style="margin:12px 4px 0"><div style="font-size:26px;font-weight:700">${c.plate}</div><div style="color:var(--sub);font-size:15px">${c.model}・${c.dist}</div></div>
    <div class="cap">車況</div>
    <div class="grp">${scoreCell(S.car)}${cleanCell(S.car)}${parkCell(S.car)}</div>
    <div class="cap">費率（同站租還專案價）</div>
    ${c.rate?`<div class="grp">${c.rate.map(([k,v])=>`<div class="cell">${k}<span class="v">${v}</span></div>`).join('')}</div>
    <div class="foot">依 iRent 費率表，專案價至 2026/11/30</div>`:`<div class="grp"><div class="cell" style="color:var(--sub)">請見 iRent 費率表</div></div>`}
  </div>`+bottomBar(c.live?`<button class="btn" onclick="S.t.reserve=Date.now();go('pickup')">借車</button>`:`<button class="btn" disabled>示範請選 ${PLATE}</button>`);
}
function scoreScreen(){
  const i=S.scoreCar, c=CARS[i], l=carLedger(i), sc=scoreOf(l);
  return statusBar()+nav('車況',null)+`<div class="body">
    <div class="grp" style="padding:16px;display:flex;align-items:center;gap:16px">${ring(sc,true)}
      <div><div style="font-size:20px;font-weight:700">${c.plate}</div><div style="font-size:14px;color:var(--sub)">${sc>=90?'車況良好':sc>=80?'有輕微車損':'車損較多'}</div></div></div>
    <div class="cap">車損位置</div>
    <div class="grp" style="padding:12px 0">${carSVG({dots:l,scale:.9})}</div>
    <div class="cap">車損紀錄</div>
    <div class="grp">${ledgerRows(l)}</div>
    <div class="cap">車內整潔</div>
    <div class="grp">${cleanCell(i)}${c.live?`<div style="height:150px;background:url(${A.extra.inFront}) center/cover"></div>`:''}</div>
    <div class="foot">取車前公開；帳本已記錄的車損不會算在你身上</div>
  </div>`;
}
function ledgerRows(l){
  return l.map(x=>`<div class="cell" style="font-size:15px"><span class="num" style="background:${x.isNew?'var(--warn)':x.rep?'var(--ios-blue)':'#1d1f22'}">${x.id}</span><div><div>${x.pos}・${x.dmg}</div><div style="font-size:13px;color:var(--sub)">${x.date} ${x.rep?'取車回報':'還車照片'}</div></div><span class="v ${x.isNew?'warn':''}">${x.st}</span></div>`).join('');
}
function pickupScreen(){
  if(!S.t.reserve) S.t.reserve=Date.now();
  return statusBar()+nav('用車頁',null)+`<div class="body" style="bottom:96px">
  ${carCard()}
  <div class="grp" style="margin-top:12px;padding:12px;text-align:center"><div style="font-size:13px;color:var(--sub)">取車倒數</div><div id="clock" class="clock">${clockText()}</div></div>
  <div class="cap">停車位置</div>
  <div class="grp">${parkCell(0)}</div>
  </div>`+bottomBar(`<button class="btn" onclick="go('pcheck')">開始取車</button>`);
}
function pcheckScreen(){
  return statusBar()+nav('取車檢查',20)+`<div class="body" style="bottom:96px">
    <div class="lt">檢查車輛四周</div>
    ${subline('對照帳本紀錄，確認實際車況是否一致')}
    <div class="grp" style="padding:12px 0">${carSVG({dots:S.ledger,scale:.75})}</div>
    <div class="grp" style="margin-top:10px">${ledgerRows(S.ledger)}</div>
    <div class="warnbox">選「一致」即視同車況與紀錄相符；取車後如發現紀錄外的新車損，由本次承租人負責。</div>
  </div>`+bottomBar(`<button class="btn" style="flex:1;background:#E5E5EA;color:#000" onclick="S.pskip=true;go('pconfirm')">一致，略過拍照</button>
    <button class="btn" style="flex:1" onclick="S.pskip=false;S.pidx=Math.max(0,PANG.findIndex(a=>!S.pshots[a.key]));go('pcam')">不一致，拍照</button>`);
}
const PANG = ANGLES.filter(a=>a.ext);
function pcamScreen(){
  const a=PANG[S.pidx];
  return statusBar(true)+`<div class="cam">
    <div class="cam-head"><b>車身拍照・${a.label}角</b><div class="s">含車牌　${S.pidx+1} / ${PANG.length}</div>
      <button class="r" onclick="go('pclose')">下一步</button></div>
    <div class="vf"><img src="${A.angles[a.key].borrow}" style="object-fit:cover"><div class="pill ok">${PLATE} 符合</div></div>
    <div class="thumbs">${PANG.map((p,i)=>`<div class="th ${i===S.pidx?'cur':''}" onclick="S.pidx=${i};renderPhone()">${S.pshots[p.key]?`<img src="${A.angles[p.key].borrow}"><div class="dot"></div>`:''}<span>${p.label}</span></div>`).join('')}</div>
    <div class="ctrl"><button class="flash">${IC.bolt}</button><button class="shutter" onclick="pshoot()"><i></i></button></div>
  </div>`;
}
function pshoot(){
  const fx=document.createElement('div');fx.className='flashfx';$('.cam').appendChild(fx);
  S.pshots[PANG[S.pidx].key]=1;
  const next=PANG.findIndex(a=>!S.pshots[a.key]);
  setTimeout(()=>{ if(next<0) go('pclose'); else {S.pidx=next;renderPhone();} },300);
}
/* close-ups of damage not in the ledger: pick the spot on the car first so the location is always known */
function pcloseScreen(){
  const z=S.pzone;
  return statusBar()+nav('回報紀錄外車損',45)+`<div class="body" style="bottom:96px">
    <div class="lt">標記位置</div>
    ${subline('點車身上的位置，再拍特寫')}
    <div class="grp" style="padding:12px 0">${carSVG({mode:'pick',sel:z,dots:S.ledger,scale:.85})}</div>
    <div class="foot">回報後會比對上次還車照片並由後台驗證</div>
    <div style="height:12px"></div>
    <button class="btn blue" ${z?'':'disabled'} onclick="pcloseShoot()">${z?`拍攝特寫・${z}`:'先點選車身位置'}</button>
    ${S.pclose.length?`<div class="cap">已回報</div><div class="grp">${S.pclose.map(c=>`<div class="cell"><div style="width:52px;height:40px;border-radius:6px;background:url(${c.img}) center/cover;flex:0 0 auto"></div><div><div>${c.zone}</div><div style="font-size:13px;color:var(--sub)">特寫＋${c.angle}角照片</div></div><span class="v" style="color:var(--ios-blue)">待驗證</span></div>`).join('')}</div>`:''}
  </div>`+bottomBar(`<button class="btn" onclick="go('pconfirm')">完成</button>`);
}
function pickZone(z){ if(z==='車頂') return; S.pzone=z; renderPhone(); }
/* close-up camera: frame the damage, then shoot */
function pcloseShoot(){ go('pclosecam'); }
function pclosecamScreen(){
  const z=S.pzone;
  return statusBar(true)+`<div class="cam">
    <div class="cam-head"><b>車損特寫・${z}</b><div class="s">靠近一點，讓車損填滿框線</div>
      <button class="r" onclick="go('pclose')">取消</button></div>
    <div class="vf"><img src="${A.extra.closeup}" style="object-fit:cover">
      <div style="position:absolute;inset:70px 46px;border:2.5px dashed rgba(255,214,10,.95);border-radius:14px"></div>
      <div class="pill ok">${z}</div></div>
    <div class="ctrl"><button class="flash">${IC.bolt}</button><button class="shutter" onclick="pcloseCapture()"><i></i></button></div>
  </div>`;
}
function pcloseCapture(){
  const fx=document.createElement('div');fx.className='flashfx';$('.cam').appendChild(fx);
  const z=S.pzone, ang=PANG.find(a=>a.zones.includes(z)), [x,y,w,h]=ZONES[z];
  S.pclose.push({zone:z, angle:ang.label, img:A.extra.closeup});
  S.ledger.push({id:nextLedgerId(), date:TODAY, pos:z, dmg:'取車時回報', st:'待驗證', x:x+w/2, y:y+h/2, rep:true});
  S.pzone=null; setTimeout(()=>go('pclose'),300);
}
function nextLedgerId(){ return Math.max(0,...S.ledger.map(l=>l.id))+1; }
function pconfirmScreen(){
  const n=Object.keys(S.pshots).length;
  const notes=['取車照片與帳本紀錄將作為還車比對基準',
    S.pskip?'已確認車況與紀錄一致，紀錄外的新車損由本次承租人負責':`已回報 ${S.pclose.length} 處紀錄外車損，AI 比對上次還車照片後送後台驗證，驗證期間不算在你身上`];
  return statusBar()+nav('確認取車',60)+`<div class="body" style="bottom:96px">
    <div class="grp">
      <div class="cell">車號<span class="v">${PLATE}</span></div>
      <div class="cell">預計還車<span class="v">今天 18:00</span></div>
      <div class="cell">取車照片<span class="v">${S.pskip?'略過（與紀錄一致）':`${n} / ${PANG.length}`}</span></div>
    </div>
    <div class="cap">安心服務</div>
    <div class="grp"><div class="cell" style="cursor:pointer" onclick="S.insure=!S.insure;renderPhone()"><div><div>加購安心服務</div><div style="font-size:13px;color:var(--sub)">$50 / 次</div></div><span class="sw ${S.insure?'on':''}"></span></div></div>
    <div class="foot">事故時報警取得證明，可免負擔賠償金額 2 萬元</div>
    <div class="cap">注意事項</div>
    <div class="grp">${notes.map(t=>`<div class="cell" style="font-size:15px"><span class="ck">${IC.check}</span>${t}</div>`).join('')}</div>
  </div>`+bottomBar(`<button class="btn" onclick="S.t.rent=Date.now();go('home')">確認取車</button>`);
}

/* ---------- 用車中 ---------- */
function homeScreen(){
  if(!S.t.rent) S.t.rent=Date.now();
  return statusBar()+nav('用車頁',null,'')+`<div class="body" style="bottom:96px">
  ${carCard()}
  <div class="grp" style="margin-top:12px;padding:12px;text-align:center"><div style="font-size:13px;color:var(--sub)">已用車</div><div id="clock" class="clock">${clockText()}</div>
    <div style="font-size:13px;color:var(--sub)">預計還車 今天 18:00</div></div>
  </div>`+bottomBar(`<button class="btn blue" style="flex:1;display:flex;gap:6px;align-items:center;justify-content:center">${IC.lock}開車門</button>
    <button class="btn" style="flex:1" onclick="returnAlert()">還車</button>`);
}
function returnAlert(){
  const d=document.createElement('div'); d.id='alertHost';
  d.innerHTML=`<div class="dim"></div><div class="alert"><div class="tx"><b>還車前提醒</b><p>請確認帶走個人物品，並停入合法停車格</p></div>
    <button class="b" onclick="go('rpark')">前往還車</button><button onclick="$('#alertHost').remove()">取消</button></div>`;
  $('#screen').appendChild(d);
}

/* ---------- 還車 ---------- */
function rparkScreen(){
  const opts=[['同站還車','B1 停車場'],['路邊停車格','停車費等衍生費用由承租人自行負擔']];
  return statusBar()+nav('還車',15)+`<div class="body" style="bottom:96px">
    <div class="lt">還車地點</div>
    ${subline(PLATE)}
    <div class="grp">${opts.map(([t,s],i)=>`<div class="cell" style="cursor:pointer" onclick="S.rpark=${i};renderPhone()"><span class="radio ${S.rpark===i?'on':''}"></span><div><div>${t}</div><div style="font-size:13px;color:var(--sub)">${s}</div></div></div>`).join('')}</div>
  </div>`+bottomBar(`<button class="btn" onclick="go('guide')">下一步</button>`);
}

function guideScreen(){
  const tips=['先拍車內前後座，再對齊虛線拍車外四角','依畫面提示調整','綠燈即可拍'];
  return statusBar()+nav('還車拍照',30)+`<div class="body">
    <div class="lt">檢查車況</div>
    <div style="font-size:15px;color:var(--sub);margin:0 4px 14px">共 6 張，約 1 分鐘</div>
    <div style="height:170px;border-radius:12px;background:url(${A.angles['右前'].ret}) center 40%/cover"></div>
    <div class="cap">新手導航</div>
    <div class="grp">${tips.map((t,i)=>`<div class="cell"><span class="num">${i+1}</span>${t}</div>`).join('')}</div>
    <div style="height:20px"></div>
    <button class="btn" onclick="startCamera()">開始拍照</button>
  </div>`;
}

/* ---------- camera ---------- */
function cameraScreen(){
  const ang=ANGLES[S.idx];
  return statusBar(true)+`<div class="cam">
    <div class="cam-head"><b>${ang.label}${ang.ext?'角':''}</b><div class="s">${S.idx+1} / ${ANGLES.length}</div>
      <button class="r" onclick="finishShots()">完成</button></div>
    <div class="vf" id="vf"><canvas id="vfc" width="600" height="800"></canvas>
      ${ang.ext && !['wrong','dup'].includes(S.scen)?`<img class="ov" src="${IM[ang.key].ov}">`:''}
      <div class="pill" id="plate"></div>
      ${ang.ext?`<div class="legend">虛線：上次還車</div>`:''}
      <button class="hint" id="hint" onclick="nudge()"></button>
    </div>
    <div class="thumbs">${ANGLES.map((a,i)=>{const s=S.shots[a.key];return `<div class="th ${i===S.idx?'cur':''}" onclick="jump(${i})">${s?`<img src="${s.thumb}"><div class="dot ${s.flags.length?'warn':''}"></div>`:''}<span>${a.label}</span></div>`}).join('')}</div>
    <div class="ctrl"><button class="flash ${S.flash?'on':''}" id="flashBtn" onclick="toggleFlash()">${IC.bolt}</button>
      <button class="shutter" onclick="shoot()"><i></i></button></div>
    <div id="sheetHost"></div>
  </div>`;
}
let CUR={raw:null,m:null,issues:[]};
function initCamera(){
  visit('overlay','plate','quality','action');
  const ang=ANGLES[S.idx];
  CUR.raw=rawFrame(ang,S.scen,S.flash);
  CUR.m=analyze(CUR.raw);
  S.align.t = (ang.ext && !['wrong','dup'].includes(S.scen)) ? (S.align.keep?1:0) : 1;
  drawVF(); updateLive();
  if(S.align.t<1) S.align.timer=setTimeout(nudge,2600);
  renderPanel();
}
function stopAlign(){clearTimeout(S.align.timer);cancelAnimationFrame(S.align.raf);}
function nudge(){
  if(S.align.t>=1) return; clearTimeout(S.align.timer);
  const t0=performance.now(), from=S.align.t;
  const step=n=>{const k=Math.min(1,(n-t0)/1100);S.align.t=from+(1-from)*(1-Math.pow(1-k,3));drawVF();updateLive();if(k<1)S.align.raf=requestAnimationFrame(step);else S.align.keep=true;};
  S.align.raf=requestAnimationFrame(step);
}
// 右前 return photo has the car cut off at the left edge, so its outline box can't be used; aligned by hand on grille/headlights/bumper
const ALIGN_FIX = {'右前':{s:0.8, tx:51, ty:54}};
function alignedTransform(ang){
  if(ALIGN_FIX[ang.key]) return ALIGN_FIX[ang.key];
  // map the car box in the current photo onto the car box of the previous return photo
  const r=IM[ang.key].refBox, c=IM[ang.key].curBox;
  const s=((r[2]-r[0])/(c[2]-c[0])+(r[3]-r[1])/(c[3]-c[1]))/2;
  const tx=((r[0]+r[2])/2-(c[0]+c[2])/2*s)*W, ty=((r[1]+r[3])/2-(c[1]+c[3])/2*s)*H;
  return {s,tx,ty};
}
function drawVF(){
  const cv=$('#vfc'); if(!cv) return; const x=cv.getContext('2d'), ang=ANGLES[S.idx];
  x.fillStyle='#0d0d0d';x.fillRect(0,0,W,H);
  if(ang.ext && !['wrong','dup'].includes(S.scen)){
    const T=alignedTransform(ang), off=1-S.align.t;
    const s=T.s*(1-0.08*off), tx=T.tx-0.2*W*off, ty=T.ty+0.03*H*off;
    x.setTransform(s,0,0,s,tx,ty); x.drawImage(CUR.raw,0,0); x.setTransform(1,0,0,1,0,0);
  } else x.drawImage(CUR.raw,0,0);
}
function aligned(){return S.align.t>0.85;}
function updateLive(){
  const ang=ANGLES[S.idx];
  CUR.issues=evaluate(ang,CUR.m,aligned());
  S.metrics={...CUR.m, aligned:ang.ext&&!['wrong','dup'].includes(S.scen)?aligned():null, issues:CUR.issues};
  const pl=$('#plate'), hint=$('#hint'), fb=$('#flashBtn');
  if(pl){
    if(!ang.ext) pl.style.display='none';
    else if(S.scen==='wrong'){pl.className='pill bad';pl.textContent='RCX-5100 不符';}
    else if(['black','finger','fog','blur'].includes(S.scen) || CUR.m.mean<45){pl.className='pill';pl.innerHTML='<span class="spin" style="width:12px;height:12px;border-top-color:#fff"></span>辨識車牌';}
    else {pl.className='pill ok';pl.textContent=`${PLATE} 符合`;}
  }
  if(hint){
    const top=CUR.issues.find(i=>i.hard)||CUR.issues[0];
    if(!top){hint.className='hint ok';hint.textContent='可以拍了';}
    else{hint.className='hint '+(top.hard?'bad':'warn');hint.innerHTML=`${top.act}<small>${top.title}</small>`;}
  }
  if(fb) fb.classList.toggle('pulse', !S.flash && CUR.issues.some(i=>i.code==='dark'||i.code==='black'));
  renderMetrics();
}
function toggleFlash(){S.flash=!S.flash;$('#flashBtn').classList.toggle('on',S.flash);CUR.raw=rawFrame(ANGLES[S.idx],S.scen,S.flash);CUR.m=analyze(CUR.raw);drawVF();updateLive();}
function setScen(k){S.scen=k;if(S.step==='camera'){stopAlign();renderPhone();}else renderPanel();}
function jump(i){S.idx=i;S.align.keep=false;renderPhone();}

function shoot(){
  const issues=CUR.issues;
  const fx=document.createElement('div');fx.className='flashfx';$('.cam').appendChild(fx);setTimeout(()=>fx.remove(),300);
  visit('rules'); if(issues.some(i=>i.code==='dup'||i.code==='plate')) visit('dup');
  if(issues.length===0) return accept([]);
  const hard=issues.filter(i=>i.hard), soft=issues.filter(i=>!i.hard);
  const host=$('#sheetHost');
  if(hard.length){
    host.innerHTML=`<div class="dim"></div><div class="alert"><div class="tx"><b>無法使用此照片</b>
      <p>${hard.map(i=>`${i.title}，${i.act}`).join('<br>')}</p></div>
      <button class="b" onclick="closeSheet()">重拍</button></div>`;
  } else {
    const codes=JSON.stringify(soft.map(s=>s.code)).replace(/"/g,"'");
    host.innerHTML=`<div class="dim" onclick="closeSheet()"></div><div class="asheet"><div class="g">
      <div class="hd"><b>${soft.map(i=>i.title).join('、')}</b>建議${soft[0].act}；仍使用將標記待複核</div>
      <button onclick="closeSheet()">重拍</button>
      <button onclick="accept(${codes})">仍使用</button></div>
      <button class="cancel" onclick="closeSheet()">取消</button></div>`;
  }
}
function closeSheet(){$('#sheetHost').innerHTML='';}
function accept(flags){
  const ang=ANGLES[S.idx], cv=$('#vfc');
  const t=mk(120,160);t.getContext('2d').drawImage(cv,0,0,120,160);
  S.shots[ang.key]={thumb:t.toDataURL('image/jpeg',.7), full:cv.toDataURL('image/jpeg',.82), rawImg:CUR.raw, hash:CUR.m.hash, flags,
    aligned:aligned(), scen:S.scen,
    damage: ang.key===SCRATCH.angle && S.simDamage && !['dup','wrong'].includes(S.scen)};
  S.scen='normal'; S.flash=false; S.align.keep=false;
  const next=ANGLES.findIndex(a=>!S.shots[a.key]);
  if(next<0) S.step='cover'; else S.idx=next;
  render();
}
function finishShots(){ S.step='cover'; render(); }
function startCamera(){ S.step='camera'; S.idx=Math.max(0,ANGLES.findIndex(a=>!S.shots[a.key])); render(); }

/* ---------- coverage ---------- */
function coverage(){
  const cov={};
  for(const a of ANGLES){const s=S.shots[a.key];if(!a.ext||!s||s.scen==='wrong')continue;(s.aligned?a.zones:a.zones.slice(0,2)).forEach(z=>cov[z]=1);}
  const tot=Object.values(ZONES).reduce((s,z)=>s+z[4],0), got=Object.keys(cov).reduce((s,z)=>s+ZONES[z][4],0);
  return {cov, pct:Math.round(got/tot*100)};
}
function carSVG(opts={}){
  const {cov={}, dots=[], scale=1}=opts;
  let z='';
  for(const [n,[x,y,w,h]] of Object.entries(ZONES)){
    const pick = opts.mode==='pick' && n!=='車頂';
    const fill = opts.mode==='cover' ? (cov[n]?'#34C759':(n==='車頂'?'#E5E5EA':'#FF3B30')) : pick ? (n===opts.sel?'#FFD60A':'#E5E5EA') : '#F2F2F7';
    z+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${fill}" fill-opacity="${opts.mode==='cover'&&n!=='車頂'?.75:1}" stroke="#fff" stroke-width="2" ${pick?`onclick="pickZone('${n}')" style="cursor:pointer"`:''}><title>${n}</title></rect>`;
  }
  const d=dots.map(l=>`<g pointer-events="none"><circle cx="${l.x}" cy="${l.y}" r="9" fill="${l.isNew?'#FF9500':l.rep?'#007AFF':'#1d1f22'}" stroke="#fff" stroke-width="2"/><text x="${l.x}" y="${l.y+4}" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">${l.id}</text></g>`).join('');
  return `<svg viewBox="-24 -14 168 290" width="${150*scale}" height="${260*scale}" style="margin:auto;flex:0 0 auto">
    <rect x="-4" y="-6" width="128" height="272" rx="34" fill="none" stroke="#C7C7CC" stroke-width="2"/>${z}
    <rect x="-14" y="40" width="10" height="26" rx="3" fill="#3a3a3c"/><rect x="124" y="40" width="10" height="26" rx="3" fill="#3a3a3c"/>
    <rect x="-14" y="196" width="10" height="26" rx="3" fill="#3a3a3c"/><rect x="124" y="196" width="10" height="26" rx="3" fill="#3a3a3c"/>
    <text x="60" y="-2" font-size="9" text-anchor="middle" fill="#8E8E93">車頭</text>${d}</svg>`;
}
function coverScreen(){
  const {cov,pct}=coverage(), missing=ANGLES.filter(a=>!S.shots[a.key]);
  const weak=ANGLES.filter(a=>a.ext&&S.shots[a.key]&&!S.shots[a.key].aligned);
  const fix='class="v" style="border:0;background:none;color:var(--red);font-size:16px"';
  return statusBar()+nav('拍攝檢查',80)+`<div class="body">
    <div class="lt">拍攝範圍</div>
    <div class="grp" style="display:flex;align-items:center;justify-content:center;gap:24px;padding:14px;margin-top:10px">
      ${carSVG({mode:'cover',cov,scale:.85})}
      <div style="text-align:center"><div style="font-size:42px;font-weight:700;color:${pct>=90?'var(--ok)':'var(--warn)'}">${pct}%</div><div style="font-size:13px;color:var(--sub)">覆蓋率</div></div>
    </div>
    ${missing.length?`<div class="cap" style="color:var(--bad)">缺少角度</div><div class="grp"><div class="cell">${missing.map(a=>a.label).join('、')}<button ${fix} onclick="startCamera()">補拍</button></div></div>`:''}
    ${weak.length?`<div class="cap" style="color:var(--warn)">角度不足</div><div class="grp"><div class="cell">${weak.map(a=>a.label).join('、')}<button ${fix} onclick="retake('${weak[0].key}')">補拍</button></div></div>`:''}
    <div class="cap">照片</div>
    <div class="grp">${ANGLES.map(a=>{const s=S.shots[a.key];return `<div class="cell">${a.label}${s?(s.flags.length?'<span class="v warn">待複核</span>':'<span class="v ok">合格</span>'):'<span class="v bad">未拍</span>'}</div>`}).join('')}</div>
    <div style="height:20px"></div>
    <button class="btn" ${missing.length?'disabled':''} onclick="go('analyzing')">送出</button>
  </div>`;
}
function retake(k){S.idx=ANGLES.findIndex(a=>a.key===k);delete S.shots[k];S.step='camera';render();}

/* ---------- analyzing ---------- */
const ASTEPS=['車牌與拍攝憑證','座標對位','車損偵測','帳本比對','髒污與遺留物','信心度分級'];
function analyzingScreen(){
  return statusBar()+nav('AI 判讀',90,'',false)+`<div class="body"><div class="lt">判讀中</div>
  <div class="grp" style="margin-top:14px" id="asteps">${ASTEPS.map(s=>`<div class="cell"><span class="wait"></span>${s}</div>`).join('')}</div></div>`;
}
function runAnalyzing(){
  const cells=[...document.querySelectorAll('#asteps .cell')];let i=0;
  const tick=()=>{if(S.step!=='analyzing')return;if(i>0)cells[i-1].firstElementChild.outerHTML=`<span class="ck">${IC.check}</span>`;if(i<cells.length){cells[i].firstElementChild.outerHTML='<span class="spin"></span>';i++;setTimeout(tick,500);}else{computeResults();S.step='result';render();}};
  tick();
}
function computeResults(){
  const newDmg = Object.values(S.shots).some(s=>s.damage);
  const flagged = ANGLES.filter(a=>S.shots[a.key]?.flags.length).map(a=>a.label);
  S.ledger = S.ledger.filter(l=>!l.isNew);
  if(newDmg) S.ledger.push({id:nextLedgerId(),date:TODAY,pos:'前右保桿',dmg:'新刮傷 10 cm',st:'待審',x:96,y:12,isNew:true});
  const interior = S.shots['車內前'];
  S.results = {newDmg, flagged, level: newDmg||flagged.length ? 'mid':'ok', dirt: interior?.scen==='dark'?'無法判斷':'輕微', lost:'無'};
  S.reviewed=null;
}

/* ---------- result ---------- */
function resultScreen(){
  const r=S.results, dmgShot=S.shots[SCRATCH.angle];
  const sub=[r.newDmg?'1 處新車損':'', r.flagged.length?`${r.flagged.length} 張待複核`:''].filter(Boolean).join('・');
  return statusBar()+nav('還車結果',100,'')+`<div class="body">
    <div class="verdict ${r.level}"><div class="ic">${r.level==='ok'?`<span style="width:20px">${IC.check}</span>`:IC.excl}</div>
      <div>${r.level==='ok'?'<b>自動結案</b><span>無新增車損</span>':`<b>送審中</b><span>${sub}</span>`}</div></div>
    <div class="cap">帳本比對</div>
    <div class="grp">
      <div style="display:flex;gap:6px;align-items:center;padding:8px 0 8px 8px">${carSVG({dots:S.ledger,scale:.55})}
      <div style="flex:1">${S.ledger.map(l=>`<div class="cell" style="font-size:15px;padding:9px 14px"><b>${l.id}</b>${l.pos}<span class="v ${l.isNew||l.st==='待驗證'?'warn':'ok'}">${l.isNew?'新增':l.st==='待驗證'?'待驗證':'已有'}</span></div>`).join('')}</div></div>
      ${r.newDmg&&dmgShot?`<div class="dmgimg"><img src="${dmgShot.full}">${scratchBox(dmgShot)}</div>`:''}
    </div>
    ${r.newDmg?'<div class="foot">帳本沒有的才算新增</div>':''}
    <div class="cap">車內</div>
    <div class="grp"><div class="cell">髒污<span class="v">${r.dirt}</span></div><div class="cell">遺留物<span class="v">${r.lost}</span></div></div>
    <div style="height:20px"></div>
    <button class="btn" onclick="go('nextuser')">下一步</button>
    <button class="btn plain" onclick="openChat()">聯絡客服</button>
  </div>`;
}
function scratchBox(shot){
  const T=alignedTransform(ANGLES.find(a=>a.key===SCRATCH.angle));
  const s=shot.aligned?T.s:T.s*0.92, tx=shot.aligned?T.tx:T.tx-0.2*W, ty=shot.aligned?T.ty:T.ty+0.03*H;
  const x=(SCRATCH.x*W*s+tx)/W, y=(SCRATCH.y*H*s+ty)/H;
  return `<div class="box" style="left:${(x-SCRATCH.w/2)*100}%;top:${(y-SCRATCH.h/2)*100}%;width:${SCRATCH.w*100}%;height:${SCRATCH.h*100}%"><span>新刮傷 0.71</span></div>`;
}
function nextuserScreen(){
  const ok=!S.parkFail, edit=S.parkEdit||!ok;
  const val=(v,ph)=>edit?`<input class="v fld" value="${ok?v:(v==='B1'?v:'')}" placeholder="${ph}">`:`<span class="v">${v} <span class="tag" style="margin-left:4px">AI</span></span>`;
  const photo = ok
    ? `<div style="position:relative;height:170px;border-radius:12px;background:url(${A.angles['左前'].borrow}) 92% 8%/260% auto"><span class="ailab">AI 辨識：柱號 A02</span></div>`
    : `<div style="position:relative;height:170px;border-radius:12px;background:url(${A.angles['右前'].ret}) center 55%/cover"><span class="ailab bad">未辨識到柱號</span></div>`;
  return statusBar()+nav('幫助下一位用戶找車',95,'')+`<div class="body" style="bottom:96px">
    <div class="lt">停在哪裡？</div>
    ${subline(ok?'AI 已從還車照片辨識柱號，有誤可修改':'照片中找不到柱號，請手動填寫')}
    ${photo}
    <div class="grp" style="margin-top:12px">
      <div class="cell">樓層${val('B1','例：B1')}</div>
      <div class="cell">柱號${val('A02','例：A02')}</div>
    </div>
    ${ok&&!edit?`<button class="btn plain" style="height:40px;font-size:15px" onclick="S.parkEdit=true;renderPhone()">辨識有誤，手動修改</button>`:''}
    <div class="foot">下一位用戶會在用車頁看到照片與柱號</div>
  </div>`+bottomBar(`<button class="btn" onclick="go('done')">完成還車</button>`);
}
function doneScreen(){
  const pend=S.ledger.some(l=>l.isNew&&!l.confirmed);
  return statusBar()+nav('',100,'',false)+`<div class="body" style="text-align:center">
    <div style="width:84px;height:84px;border-radius:50%;background:var(--ok);color:#fff;display:grid;place-items:center;margin:60px auto 16px"><span style="width:44px">${IC.check}</span></div>
    <div class="lt">還車完成</div><div style="font-size:15px;color:var(--sub)">照片已寫入帳本</div>
    <div class="grp" style="margin:28px 0 0;text-align:left">${scoreCell(0)}</div>
    ${pend?'<div class="foot" style="text-align:left">新車損待後台確認</div>':''}
    <div style="height:30px"></div>
    <button class="btn plain" onclick="reset()">重新開始</button></div>`;
}

/* ---------- chat ---------- */
const QA = {
  '誤判車損':'已轉真人客服，並附上借還照片與比對結果。AI 不會直接開立賠償。',
  '遺留物品':'已通知整備人員保管，稍後推播取回方式。',
  '找不到車':'車輛在 B1 柱號 A02 旁。',
  '拍照不過':'依畫面提示調整即可，仍無法完成將轉真人。',
};
function openChat(){S.chat=true; if(!S.chatLog.length) S.chatLog=[{b:1,t:`已帶入訂單${Object.keys(S.shots).length?`與 ${Object.keys(S.shots).length} 張照片`:''}，請問需要什麼協助？`}]; renderPhone();}
function chatScreen(){
  return `<div class="nav" style="z-index:31"><button class="l" onclick="S.chat=false;renderPhone()">${IC.back}</button>客服</div><div class="chat">
  <div class="msgs">${S.chatLog.map(m=>`<div class="msg ${m.b?'bot':'me'}">${m.t}</div>`).join('')}</div>
  <div class="quick">${Object.keys(QA).map(q=>`<button onclick="ask('${q}')">${q}</button>`).join('')}</div></div>`;
}
function ask(q){ S.chatLog.push({b:0,t:q},{b:1,t:QA[q]}); renderPhone(); }

/* ---------- navigation ---------- */
function go(step){S.step=step;S.chat=false;render();}
function back(){
  if(S.chat){S.chat=false;return renderPhone();}
  const prev={carinfo:'pick',pickup:'carinfo',pcheck:'pickup',pcam:'pcheck',pclose:'pcam',pclosecam:'pclose',pconfirm:S.pskip?'pcheck':'pclose',rpark:'home',guide:'rpark',camera:'guide',cover:'camera',score:S.scoreFrom}[S.step];
  if(prev) go(prev);
}

/* ===================== side panel ===================== */
function renderPanel(){
  const p=$('#panel'), pending=queueItems().filter(q=>q.ours).length;
  p.innerHTML=`<div class="tabs">${[['guide','模擬'],['queue','後台'+(pending?`<span class="n">${pending}</span>`:'')]].map(([k,n])=>`<button class="${S.tab===k?'on':''}" onclick="S.tab='${k}';renderPanel()">${n}</button>`).join('')}</div>
  <div id="tab"></div>`;
  $('#tab').innerHTML = S.tab==='queue'?queueTab():guideTab();
  if(S.tab==='queue') { visit('queue'); initCompare(); } else renderMetrics();
}
function guideTab(){
  const cam=S.step==='camera', ang=ANGLES[S.idx];
  return `<div class="sec"><h3>情境模擬<small>${cam?`目前：${ang.label}`:'還車拍照時可用'}</small></h3>
    <div class="scen">${SCEN.map(s=>`<button class="${S.scen===s.k?'on':''}" ${(!cam||(s.ext&&!ang.ext))?'disabled':''} onclick="setScen('${s.k}')">${s.n}<br><em class="${{通過:'pass',提醒:'warn',擋下:'block'}[s.e]}">${s.e}</em></button>`).join('')}</div>
    <label class="toggle"><input type="checkbox" ${S.simDamage?'checked':''} onchange="S.simDamage=this.checked;if(S.step==='camera')renderPhone()">模擬新刮傷（右前）</label>
    <label class="toggle"><input type="checkbox" ${S.parkFail?'checked':''} onchange="S.parkFail=this.checked;S.parkEdit=false;if(S.step==='nextuser')renderPhone()">模擬柱號辨識失敗（找車頁）</label>
  </div>
  <div class="sec"><h3>即時檢測<small>瀏覽器內計算</small></h3><div id="metrics"></div></div>`;
}
function renderMetrics(){
  const el=$('#metrics'); if(!el) return; const m=S.metrics;
  if(!m || S.step!=='camera'){el.innerHTML='<div class="note" style="margin:0">還車拍照時顯示</div>';return;}
  const cls=(bad,warn)=>bad?'bad':warn?'warn':'ok';
  el.innerHTML=`<div class="metrics">
    <div class="metric ${cls(m.mean<20,m.mean<45)}"><div class="v">${m.mean.toFixed(0)}</div><div class="k">亮度　&lt;20 擋・&lt;45 提醒</div></div>
    <div class="metric ${cls(0,m.lap<250)}"><div class="v">${m.lap.toFixed(0)}</div><div class="k">清晰度　&lt;250 提醒</div></div>
    <div class="metric ${cls(m.occ>.5,m.occ>.25)}"><div class="v">${(m.occ*100).toFixed(0)}%</div><div class="k">遮擋　&gt;50% 擋</div></div>
    <div class="metric ${cls(m.dupDist<=8,0)}"><div class="v">${m.dupDist}</div><div class="k">重複距離　≤8 擋</div></div>
    </div>
    <div class="verd">對位：${m.aligned==null?'—':m.aligned?'<b style="color:#16a34a">已對齊</b>':'<b style="color:var(--warn)">偏差</b>'}　判定：${m.issues.length?m.issues.map(i=>`<span class="badge ${i.hard?'hard':'soft'}">${i.title}</span>`).join(' '):'<span class="badge ok">通過</span>'}</div>`;
}

/* ---------- backend ---------- */
function queueItems(){
  const q=BASE_QUEUE.map(x=>({...x}));
  if(S.results && S.results.level==='mid' && !S.reviewed){
    const why=['40 分鐘後取車']; if(S.results.newDmg) why.push('疑似新車損'); if(S.results.flagged.length) why.push(`略過提醒 ×${S.results.flagged.length}`);
    q.push({plate:PLATE,order:ORDER,why,c:0.71,urg:92,ours:true});
  }
  if(S.pclose.length && !S.pickReview)
    q.push({plate:PLATE,order:ORDER+'P',why:[`取車回報：${S.pclose.map(c=>c.zone).join('、')}`,'用車中'],c:0.78,urg:88,ours:true});
  return q.sort((a,b)=>b.urg-a.urg);
}
function queueTab(){
  const q=queueItems(), ours=q.find(x=>x.ours), retItem=q.find(x=>x.order===ORDER), pickItem=q.find(x=>x.order===ORDER+'P');
  if(S.sel==null && ours) S.sel=ours.order;
  let detail='';
  if(pickItem && S.sel===pickItem.order){
    detail=`<div class="sec"><h3>${PLATE} 取車回報<small>用戶回報・帳本無紀錄</small></h3>
    <div class="cmpwrap"><div style="flex:0 0 280px;max-width:100%">${S.pclose.map(c=>`<div style="position:relative;margin-bottom:8px"><img src="${c.img}" style="width:100%;border-radius:10px;display:block"><span class="lab" style="left:8px">${c.zone}特寫・${c.angle}角</span></div>`).join('')}</div>
    <div class="info">
      <div class="kv"><span>回報位置</span><span>${S.pclose.map(c=>c.zone).join('、')}</span></div>
      <div class="kv"><span>回報時間</span><span>${TODAY} 取車前</span></div>
      <div class="kv"><span>AI 比對</span><span>上次還車照片未見此處車損</span></div>
      <div class="kv"><span>信心度</span><span>0.78（中）</span></div>
      <div class="kv"><span>可能來源</span><span>上一筆訂單 H2026100437</span></div>
      <div style="display:flex;gap:8px;margin-top:12px"><button class="pbtn" style="background:var(--red);color:#fff" onclick="reviewPick(true)">屬實</button><button class="pbtn" style="background:#e5e7eb" onclick="reviewPick(false)">駁回</button></div>
      <div class="note">屬實：寫入帳本、不算本次承租人，並追溯上一筆訂單<br>駁回：照片看不出車損，通知用戶補充說明</div>
    </div></div></div>`;
  }
  if(retItem && S.sel===ORDER){
    detail=`<div class="sec"><h3>${PLATE}<small>拖曳比對借／還</small></h3>
    <div class="cmpwrap"><div class="compare" id="cmp"><canvas id="cmpA" width="600" height="800"></canvas><canvas id="cmpB" width="600" height="800"></canvas><div class="div" id="cmpD"></div><span class="lab" style="left:8px">借車</span><span class="lab" style="right:8px">還車</span></div>
    <div class="info">
      ${S.results.newDmg?`<div class="kv"><span>AI 偵測</span><span>前右保桿刮傷</span></div><div class="kv"><span>帳本</span><span style="color:var(--warn)">無紀錄，新增</span></div><div class="kv"><span>信心度</span><span>0.71（中）</span></div>`:''}
      ${S.results.flagged.length?`<div class="kv"><span>略過提醒</span><span>${S.results.flagged.join('、')}</span></div>`:''}
      <div class="kv"><span>拍攝憑證</span><span>6 / 6</span></div>
      <div class="kv"><span>歸責訂單</span><span>${ORDER}</span></div>
      <div style="display:flex;gap:8px;margin-top:12px"><button class="pbtn" style="background:var(--red);color:#fff" onclick="review(true)">確認</button><button class="pbtn" style="background:#e5e7eb" onclick="review(false)">推翻</button></div>
      <div class="note">對位：車身外框（正式版用關鍵點＋homography）</div>
    </div></div></div>`;
  }
  const auto=[...AUTO_DONE]; if(S.results && S.results.level==='ok') auto.unshift({plate:PLATE,why:'無新增車損',c:0.96,ours:true});
  const chip=c=>{const [t,k]=confTier(c);return `<span class="chip ${k}">${t}信心 ${c.toFixed(2)}</span>`;};
  return `<div class="sec"><h3>今日還車<small>示意數字</small></h3><div class="metrics">
    <div class="metric"><div class="v">128</div><div class="k">還車件數</div></div>
    <div class="metric ok"><div class="v">87</div><div class="k">高信心自動結案 68%</div></div>
    <div class="metric warn"><div class="v">${q.length}</div><div class="k">待人工審</div></div>
    <div class="metric"><div class="v">4m12s</div><div class="k">還車到派工</div></div></div>
    <div class="note">信心度 ≥ 0.90 自動結案（新車損直接入帳並通知用戶，可申訴；取車回報直接確認）；低於 0.90 才進人工</div></div>
  <div class="sec"><h3>待人工審<small>中／低信心・依急迫性排序</small></h3>
    ${q.map((x,i)=>`<div class="q ${x.ours?'ours':''} ${S.sel===x.order?'sel':''}" onclick="S.sel='${x.order}';renderPanel()"><div class="rk">${i+1}</div><div class="m"><b>${x.plate}</b>${x.ours?' <span class="chip y">本次</span>':''}<div class="chips">${x.why.map(w=>`<span class="chip ${/取車|安全/.test(w)?'r':''}">${w}</span>`).join('')}</div></div>${chip(x.c)}</div>`).join('')}
    ${!retItem&&!S.reviewed?`<div class="note">${S.results?'本次為自動結案，未進佇列':'完成還車後出現在此'}</div>`:''}
    ${S.pickReview?`<div class="fb">取車回報${S.pickReview==='confirm'?'屬實，已寫入帳本並追溯上一筆訂單':'已駁回，已通知用戶'}</div>`:''}
    ${S.reviewed?`<div class="fb">已${S.reviewed==='confirm'?'確認並寫入帳本':'推翻並移除'}・回饋資料 ${S.feedback} 筆</div>`:''}
  </div>${detail}
  <div class="sec"><h3>已自動結案<small>高信心・不需人工</small></h3>
    ${auto.map(x=>`<div class="q ${x.ours?'ours':''}" style="cursor:default"><div class="m"><b>${x.plate}</b>${x.ours?' <span class="chip y">本次</span>':''}<div class="chips"><span class="chip">${x.why}</span></div></div>${chip(x.c)}</div>`).join('')}
    <div class="note">另 ${87-auto.length} 筆</div></div>`;
}
function initCompare(){
  const a=$('#cmpA'), b=$('#cmpB'); if(!a) return;
  const key=S.shots[SCRATCH.angle]?SCRATCH.angle:'左前', shot=S.shots[key];
  a.getContext('2d').drawImage(IM[key].borrow,0,0,W,H);
  // the full photo the camera took (the viewfinder capture has black margins from the alignment shift)
  b.getContext('2d').drawImage(shot.rawImg,0,0,W,H);
  const box=$('#cmp'), d=$('#cmpD');
  const set=f=>{f=Math.max(0,Math.min(1,f)); b.style.clipPath=`inset(0 0 0 ${f*100}%)`; d.style.left=`${f*100}%`;};
  set(.5);
  let drag=false; const mv=e=>{if(!drag)return;const r=box.getBoundingClientRect();set(((e.touches?e.touches[0].clientX:e.clientX)-r.left)/r.width);};
  box.onmousedown=box.ontouchstart=e=>{drag=true;mv(e);}; window.onmouseup=window.ontouchend=()=>drag=false; box.onmousemove=box.ontouchmove=mv;
}
function reviewPick(ok){
  S.feedback++; S.pickReview=ok?'confirm':'reject';
  if(ok) S.ledger.filter(l=>l.rep).forEach(l=>{l.st='已確認';});
  else S.ledger=S.ledger.filter(l=>!l.rep);
  S.sel=null; render();
}
function review(ok){
  visit('fb'); S.feedback++; S.reviewed=ok?'confirm':'reject';
  const l=S.ledger.find(x=>x.isNew);
  if(l){ if(ok){l.st='已確認';l.confirmed=true;} else S.ledger=S.ledger.filter(x=>!x.isNew); }
  S.sel=null; render();
}
/* ===================== boot ===================== */
function fit(){const ph=$('#phone');const s=Math.min(1,(innerHeight-40)/844);ph.style.transform=`scale(${s})`;ph.parentElement.style.height=(844*s)+'px';ph.parentElement.style.width=(390*s)+'px';}
addEventListener('resize',fit);
(async()=>{ fit(); await loadAll(); buildHashBank(); reset(); })();
