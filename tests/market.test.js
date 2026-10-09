'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),{mkdtempSync,rmSync}=require('node:fs'),{tmpdir}=require('node:os'),path=require('node:path'),{randomUUID}=require('node:crypto'),{once}=require('node:events');
const {createServer}=require('../server/market'),{Engine}=require('../js/engine');
test('mercado compartido: depósito, compra única concurrente, cobro único, reinicio y retirada',async()=>{
 const dir=mkdtempSync(path.join(tmpdir(),'etherial-market-')),dataFile=path.join(dir,'market.json');let server=createServer({dataFile});server.listen(0,'127.0.0.1');await once(server,'listening');let base='http://127.0.0.1:'+server.address().port;
 const seller={token:randomUUID(),e:new Engine(),revision:0},buyer={token:randomUUID(),e:new Engine(),revision:0},other={token:randomUUID(),e:new Engine(),revision:0};for(const p of [seller,buyer,other]){p.e.acquire('warrior');p.e.s.coins=1000;}
 seller.e.s.bag[0].rarity='Épico';seller.e.s.bag[0].level=20;
 async function post(p,action,extra={}){const res=await fetch(base+'/api/market',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+p.token},body:JSON.stringify({action,revision:p.revision,state:p.e.save(),...extra})});const data=await res.json();if(res.ok){p.revision=data.revision;p.e=new Engine(data.state);}return {status:res.status,data};}
 async function offers(p){return (await(await fetch(base+'/api/market',{headers:{Authorization:'Bearer '+p.token}})).json()).listings;}
 try{
 assert.equal((await post(seller,'publish',{index:0,price:250})).status,200);assert.equal(seller.e.s.bag[0],null);const listing=(await offers(buyer))[0];assert.equal(listing.mine,false);assert.equal(listing.item.rarity,'Épico');assert.equal(listing.item.level,20);assert.equal(listing.token,undefined);
 const outcomes=await Promise.all([post(buyer,'buy',{id:listing.id}),post(other,'buy',{id:listing.id})]);assert.deepEqual(outcomes.map(o=>o.status).sort(),[200,409]);const winner=outcomes[0].status===200?buyer:other;assert.equal(winner.e.s.coins,750);assert.ok(winner.e.s.bag.some(s=>s?.rarity==='Épico'&&s.level===20));assert.equal((await offers(seller)).length,0);
 assert.equal((await post(seller,'sync')).status,200);assert.equal(seller.e.s.coins,1250);await post(seller,'sync');assert.equal(seller.e.s.coins,1250);
 await post(seller,'publish',{index:1,price:90});const own=(await offers(seller))[0];assert.equal(own.mine,true);assert.equal((await post(seller,'buy',{id:own.id})).status,400);assert.equal((await post(buyer,'cancel',{id:own.id})).status,403);
 await new Promise(r=>server.close(r));server=createServer({dataFile});server.listen(0,'127.0.0.1');await once(server,'listening');base='http://127.0.0.1:'+server.address().port;assert.equal((await offers(seller)).length,1);assert.equal((await post(seller,'cancel',{id:own.id})).status,200);assert.equal((await offers(seller)).length,0);assert.ok(seller.e.s.bag.some(s=>s?.itemId==='ash-bow'));
 const stale=await fetch(base+'/api/market',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+seller.token},body:JSON.stringify({action:'sync',revision:0,state:seller.e.save()})});assert.equal(stale.status,409);assert.ok((await stale.json()).state);
 }finally{await new Promise(r=>server.close(r));rmSync(dir,{recursive:true,force:true});}
});
test('mercado rechaza equipo equipado, pociones, precios inválidos, saldo insuficiente y mochila llena',async()=>{
 const dir=mkdtempSync(path.join(tmpdir(),'etherial-market-')),server=createServer({dataFile:path.join(dir,'db.json')});server.listen(0,'127.0.0.1');await once(server,'listening');const base='http://127.0.0.1:'+server.address().port,seller=randomUUID(),buyer=randomUUID();const e=new Engine();e.acquire('warrior');e.equip(0);
 async function post(token,state,action,extra={},revision=0){const res=await fetch(base+'/api/market',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+token},body:JSON.stringify({state,revision,action,...extra})});return {status:res.status,data:await res.json()};}
 try{
 assert.equal((await post(seller,e.save(),'publish',{index:0,price:1})).status,400);e.unequip(0);assert.equal((await post(seller,e.save(),'publish',{index:8,price:1})).status,400);assert.equal((await post(seller,e.save(),'publish',{index:0,price:-1})).status,400);
 assert.equal((await post(seller,e.save(),'publish',{index:0,price:500})).status,200);const listing=(await(await fetch(base+'/api/market')).json()).listings[0];assert.equal((await post(buyer,e.save(),'buy',{id:listing.id})).status,400);e.s.coins=1000;e.s.bag=e.s.bag.map(()=>({itemId:'dawn-sword',quantity:1}));assert.equal((await post(buyer,e.save(),'buy',{id:listing.id})).status,400);assert.equal((await(await fetch(base+'/api/market')).json()).listings.length,1);assert.equal((await fetch(base+'/.data/market.json')).status,404);
 }finally{await new Promise(r=>server.close(r));rmSync(dir,{recursive:true,force:true});}
});
