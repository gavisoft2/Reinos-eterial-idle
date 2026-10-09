(function(root){'use strict';const C=typeof module!=='undefined'?require('./config.js'):root.GameConfig;
function initial(){return {version:1,heroId:null,owned:[],coins:0,pending:0,kills:0,level:1,xp:0,weapon:0,zone:0,unlocked:0,wave:1,completed:false,recovering:false,paused:false,hp:0,enemyHp:0,lastSeen:Date.now()};}
class Engine{constructor(saved){this.s=initial();if(saved&&saved.version===1){for(const k of ['coins','pending','kills','xp','weapon'])this.s[k]=Number.isFinite(saved[k])?Math.max(0,Math.floor(saved[k])):0;this.s.level=Math.min(1000,Math.max(1,Number.isFinite(saved.level)?Math.floor(saved.level):1));this.s.unlocked=Math.min(C.zones.length-1,Math.max(0,Number.isInteger(saved.unlocked)?saved.unlocked:0));this.s.zone=Math.min(this.s.unlocked,Math.max(0,Number.isInteger(saved.zone)?saved.zone:0));this.s.wave=Math.min(10,Math.max(1,Number.isInteger(saved.wave)?saved.wave:1));this.s.owned=C.heroes.filter(h=>Array.isArray(saved.owned)&&saved.owned.includes(h.id)).map(h=>h.id);this.s.heroId=this.s.owned.includes(saved.heroId)?saved.heroId:null;this.s.completed=saved.completed===true&&this.s.zone===C.zones.length-1&&this.s.wave===10;this.s.paused=saved.paused===true;const seen=Number.isFinite(saved.lastSeen)?saved.lastSeen:Date.now();if(this.s.heroId&&!this.s.paused&&!this.s.completed){let seconds=Math.min(C.offlineCap,Math.max(0,(Date.now()-seen)/1000));if(seconds>=30)this.s.pending+=Math.floor(seconds*this.offlineRate());}}this.resetFight();if(saved&&saved.version===1&&this.hero&&Number.isFinite(saved.hp)){this.s.hp=Math.min(this.maxHp,Math.max(0,Math.floor(saved.hp)));if(!this.s.hp||saved.recovering===true)this.startRecovery();}}
get hero(){return C.heroes.find(h=>h.id===this.s.heroId);}get zone(){return C.zones[this.s.zone];}get attack(){return this.hero?this.hero.attack+(this.s.level-1)*2+this.s.weapon*4:0;}get maxHp(){return this.hero?this.hero.hp+(this.s.level-1)*10:0;}get mobCount(){return this.zone.mobs||1;}
isBoss(index){return this.s.wave===10&&index===0;}
mobMax(index){return this.zone.hp*(this.isBoss(index)?4:1)*(1+(this.s.wave-1)*.08);}
get enemyMax(){return Array.from({length:this.mobCount},(_,i)=>this.mobMax(i)).reduce((a,b)=>a+b,0);}
get target(){return this.mobHps?Math.max(0,this.mobHps.findIndex(hp=>hp>0)):0;}
get aliveMobs(){return this.mobHps?this.mobHps.filter(hp=>hp>0).length:this.mobCount;}
resetEnemies(){this.mobHps=Array.from({length:this.mobCount},(_,i)=>this.mobMax(i));this.s.enemyHp=this.enemyMax;}get reward(){return this.zone.reward*(this.s.wave===10?5+this.mobCount-1:this.mobCount);}get cost(){return Math.floor(20*Math.pow(1.5,this.s.weapon));}get xpTarget(){return this.s.level*30;}get enemyName(){return this.s.wave===10?this.zone.boss:this.zone.enemy;}
get skillName(){return this.hero?({warrior:"Corte del Guardián",ranger:"Flecha perforante",mage:"Estallido arcano"}[this.hero.id]):"";}
get enemyAttack(){return this.zone.damage*(this.mobHps?this.mobHps.reduce((sum,hp,i)=>sum+(hp>0?(this.isBoss(i)?2:1):0),0):this.mobCount);}
resetFight(){this.s.hp=this.maxHp;this.resetEnemies();this.charge=0;this.restTicks=0;this.s.recovering=false;this.beginJourney();}startRecovery(){this.s.wave=1;this.s.completed=false;this.s.recovering=true;this.resetEnemies();this.phase='recovery';this.charge=0;this.restTicks=3;}
beginJourney(){this.travelTicks=4;this.phase=this.s.completed?"complete":"walk";}
get stage(){return this.s.zone*10+this.s.wave;}
get totalStages(){return C.zones.length*10;}
restart(){if(!this.hero)return false;this.s.completed=false;this.s.zone=0;this.s.wave=1;this.s.paused=false;this.resetFight();return true;}
acquire(id){if(!C.heroes.some(h=>h.id===id))return false;if(!this.s.owned.includes(id))this.s.owned.push(id);this.s.heroId=id;this.resetFight();return true;}
buy(id){const h=C.heroes.find(h=>h.id===id);if(!h)return false;if(this.s.owned.includes(id))return this.acquire(id);if(this.s.coins<h.price)return false;this.s.coins-=h.price;return this.acquire(id);}
demoCredit(){if(!C.demo)return false;this.s.coins+=5000;return true;}
quoteWithdrawal(amount){if(!Number.isSafeInteger(amount)||amount<=0)return null;return {blez:amount,ton:amount/C.blezPerTon,covered:amount<=this.s.coins,demo:true};}
upgrade(){if(!this.hero||this.s.coins<this.cost)return false;this.s.coins-=this.cost;this.s.weapon++;return true;}
travel(index){if(!Number.isInteger(index)||index<0||index>this.s.unlocked||index>=C.zones.length)return false;this.s.completed=false;this.s.zone=index;this.s.wave=1;this.resetFight();return true;}
claim(){const amount=this.s.pending;this.s.coins+=amount;this.s.pending=0;return amount;}
offlineRate(){if(!this.hero||this.s.completed)return 0;const seconds=2.4+Math.ceil(this.enemyMax/this.attack)*1.2;return Math.min(2,this.reward/Math.max(8,seconds))*.5;}
tick(){
if(!this.hero||this.s.paused||this.s.completed)return {type:'idle'};
if(!this.restTicks&&(this.phase==='walk'||this.phase==='approach')){this.travelTicks--;if(this.travelTicks===0){this.phase='hero';return {type:'encounter',enemy:this.enemyName};}this.phase=this.travelTicks<=2?'approach':'walk';return {type:this.phase};}
if(this.restTicks>0){const before=this.s.hp;this.restTicks--;this.s.hp=Math.min(this.maxHp,this.s.hp+Math.ceil(this.maxHp/3));if(!this.restTicks){this.s.hp=this.maxHp;this.resetEnemies();this.s.recovering=false;this.beginJourney();this.charge=0;}return {type:'recover',remaining:this.restTicks,heal:this.s.hp-before};}
if(this.phase==='enemy'){const damage=this.enemyAttack;this.s.hp=Math.max(0,this.s.hp-damage);this.phase='hero';if(!this.s.hp){const fromStage=this.s.wave;this.startRecovery();return {type:'rest',damage,fromStage,zone:this.s.zone};}return {type:'enemyHit',damage,boss:this.s.wave===10};}
this.charge++;const skill=this.charge===4;const damage=skill?Math.ceil(this.attack*({warrior:1.8,ranger:2,mage:2.2}[this.hero.id])):this.attack;if(skill)this.charge=0;
const target=this.target;this.mobHps[target]=Math.max(0,this.mobHps[target]-damage);this.s.enemyHp=this.mobHps.reduce((a,b)=>a+b,0);
if(this.s.enemyHp===0){const reward=this.reward,boss=this.s.wave===10,enemy=this.enemyName,zone=this.s.zone,count=this.mobCount;this.s.coins+=reward;this.s.kills+=count;this.s.xp+=boss?20+(count-1)*8:count*8;while(this.s.xp>=this.xpTarget&&this.s.level<1000){this.s.xp-=this.xpTarget;this.s.level++;}let unlocked=false;if(boss){if(this.s.zone===this.s.unlocked&&this.s.unlocked<C.zones.length-1){this.s.unlocked++;unlocked=true;}if(this.s.zone<C.zones.length-1){this.s.zone++;this.s.wave=1;}else this.s.completed=true;}else this.s.wave++;this.s.hp=Math.min(this.maxHp,this.s.hp+Math.ceil(this.maxHp*.12));this.resetEnemies();this.beginJourney();return {type:'kill',target,count,zone,completed:this.s.completed,damage,skill,move:skill?this.skillName:null,reward,boss,enemy,unlocked};}
this.phase='enemy';return {type:'hit',target,defeated:this.mobHps[target]===0,damage,skill,move:skill?this.skillName:null};}

save(){return {...this.s,lastSeen:Date.now()};}}
if(typeof module!=='undefined')module.exports={Engine,initial};else root.IdleEngine=Engine;})(globalThis);
