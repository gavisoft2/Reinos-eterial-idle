'use strict';
// Shared prototype economy. Game snapshots remain client supplied until server combat is added.
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),{randomUUID}=require('node:crypto');
const {Engine}=require('../js/engine');const C=require('../js/config');
function createServer({dataFile=process.env.MARKET_DATA_FILE||path.join(__dirname,'../.data/market.json')}={}){
 let db=fs.existsSync(dataFile)?JSON.parse(fs.readFileSync(dataFile,'utf8')):{accounts:{},listings:[]};
 function commit(next){fs.mkdirSync(path.dirname(dataFile),{recursive:true});const temp=dataFile+'.tmp';fs.writeFileSync(temp,JSON.stringify(next));fs.renameSync(temp,dataFile);db=next;}
 function fail(message,status=400){throw Object.assign(new Error(message),{status});}
 function send(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));}
 const server=http.createServer(async(req,res)=>{try{
 const url=new URL(req.url,'http://localhost');
 if(url.pathname==='/api/market'&&req.method==='GET'){send(res,200,{listings:db.listings.filter(l=>l.status==='active').map(({token,...listing})=>({...listing,mine:req.headers.authorization==='Bearer '+token}))});return;}
 if(url.pathname==='/api/market'&&req.method==='POST'){
 const origin=req.headers.origin;if(origin&&new URL(origin).host!==req.headers.host)fail('Origen no permitido.',403);
 const token=(req.headers.authorization||'').replace(/^Bearer /,'');if(!/^[a-f0-9-]{36}$/.test(token))fail('Sesión inválida.',401);
 let body='';for await(const chunk of req){body+=chunk;if(body.length>500000)fail('Solicitud demasiado grande.',413);}const input=JSON.parse(body),next=structuredClone(db);
 let account=next.accounts[token];if(!account){account=next.accounts[token]={id:randomUUID(),revision:0,state:null,credits:0};}
 if(input.revision!==account.revision){send(res,409,{error:'Tu mercado tiene una operación pendiente de sincronizar.',revision:account.revision,state:account.state});return;}
 if(!input.state||input.state.version!==1)fail('Partida inválida.');const e=new Engine({...input.state,lastSeen:Date.now()});
 e.s.coins+=account.credits;account.credits=0;
 const action=input.action;
 if(action==='publish'){
 if(next.listings.filter(l=>l.token===token&&l.status==='active').length>=20)fail('Máximo 20 ofertas activas.');
 const index=input.index,item=e.itemAt(index);if(!Number.isInteger(index)||!item||item.kind==='potion')fail('Selecciona un equipamiento.');if(Object.values(e.s.equipment).includes(index))fail('Desequipa el objeto antes de venderlo.');
 if(!Number.isSafeInteger(input.price)||input.price<1||input.price>1000000000)fail('El precio debe ser de 1 a 1,000,000,000 Blez.');
 const listing={id:randomUUID(),token,seller:account.id.slice(0,8),item:{...e.s.bag[index]},price:input.price,status:'active',createdAt:Date.now()};next.listings.push(listing);e.s.bag[index]=null;
 }else if(action==='buy'||action==='cancel'){
 const listing=next.listings.find(l=>l.id===input.id&&l.status==='active');if(!listing)fail('Esta oferta ya no está disponible.',409);
 if(action==='buy'){
 if(listing.token===token)fail('No puedes comprar tu propia oferta.');if(e.s.coins<listing.price)fail('No tienes suficientes Blez.');if(!e.s.bag.some(slot=>!slot))fail('Necesitas un espacio libre en la mochila.');
 e.s.coins-=listing.price;next.accounts[listing.token].credits+=listing.price;listing.status='sold';listing.buyer=account.id;
 }else{if(listing.token!==token)fail('Esta oferta pertenece a otro jugador.',403);if(!e.s.bag.some(slot=>!slot))fail('Libera un espacio para recuperar tu objeto.');listing.status='cancelled';}
 const index=e.s.bag.findIndex(slot=>!slot);e.s.bag[index]={...listing.item};
 }else if(action!=='sync')fail('Operación desconocida.');
 account.revision++;account.state=e.save();account.state.marketRevision=account.revision;commit(next);send(res,200,{state:account.state,revision:account.revision,player:account.id.slice(0,8)});return;
 }
 if(req.method!=='GET')fail('Ruta no disponible.',404);
 const files={'/':'index.html','/index.html':'index.html','/style.css':'style.css','/js/config.js':'js/config.js','/js/engine.js':'js/engine.js','/js/scene.js':'js/scene.js','/js/app.js':'js/app.js','/js/market.js':'js/market.js'};
 const file=files[url.pathname];if(!file)fail('Ruta no disponible.',404);res.writeHead(200,{'Content-Type':file.endsWith('.css')?'text/css':file.endsWith('.js')?'application/javascript':'text/html; charset=utf-8'});res.end(fs.readFileSync(path.join(__dirname,'..',file)));
 }catch(error){send(res,error.status||400,{error:error.status?error.message:'No se pudo procesar la solicitud.'});}});return server;
}
if(require.main===module){const port=Number(process.env.PORT)||3000;createServer().listen(port,'0.0.0.0',()=>console.log('Etherial con mercado compartido en puerto '+port));}
module.exports={createServer};
