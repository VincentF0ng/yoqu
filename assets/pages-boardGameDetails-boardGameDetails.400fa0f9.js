import{l as e,D as t,E as a,G as s,o as i,a as n,w as d,p as l,g as r,q as o,d as p,A as c,B as u,f,b as g,F as m,r as b,T as h,i as y}from"./index-c8b85e9c.js";import{_}from"./uni-tag.09e63762.js";import{_ as C,r as k}from"./uni-app.es.a0b016b8.js";import{_ as G}from"./uni-card.73cf13b9.js";import{_ as U}from"./uni-icons.e1934763.js";import{_ as x}from"./v-btn.e49c851c.js";const j=C({data:()=>({bannerAdpid:"",bannerUnitId:"",details:{},check:!1}),methods:{handleContributeSuggest(t=1){e({url:"/pages/contributeSuggest/contributeSuggest?type="+t})},handleECoupon(){e({url:"/pages/eCoupon/eCoupon"})}},onLoad:function(i){if(l().getConfig().then((e=>{this.bannerAdpid=e.bannerAdpid||"",this.bannerUnitId=e.bannerUnitId||"",this.check=e.check||!1})),!i.id)return e({url:"/pages/boardGame/boardGame"});t({title:"加载中"});a.importObject("boardGamesOptions").getDetails(i.id).then((e=>{this.details=e})).finally((e=>{s()}))},onShareAppMessage(){return{title:"游趣街 - "+this.details.title+"规则！快和小伙伴一起玩吧!",path:"/pages/boardGameDetails/boardGameDetails?id="+this.details._id,imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/68a0f0e0-94d6-4224-a7f2-3dbea35e9513.png"}},onShareTimeline(){return{title:"游趣街 - "+this.details.title+"规则！快和小伙伴一起玩吧!",path:"/pages/boardGameDetails/boardGameDetails?id="+this.details._id,imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/68a0f0e0-94d6-4224-a7f2-3dbea35e9513.png"}}},[["render",function(e,t,a,s,l,C){const j=k(b("uni-tag"),_),v=r,E=h,S=k(b("uni-card"),G),D=y,z=k(b("uni-icons"),U),A=k(b("v-btn"),x);return i(),n(v,{class:"container"},{default:d((()=>["{}"!==JSON.stringify(l.details)?(i(),o(m,{key:0},[p(S,{title:l.details.title},{default:d((()=>[p(v,{class:"tag-wrap"},{default:d((()=>[c(p(j,{size:"mini",text:"经典",type:"warning",inverted:"",circle:""},null,512),[[u,1===l.details.classic]]),c(p(j,{size:"mini",text:"精选",type:"error",inverted:"",circle:""},null,512),[[u,1===l.details.chosen]])])),_:1}),p(v,{class:"content"},{default:d((()=>[p(E,{nodes:l.details.content},null,8,["nodes"])])),_:1})])),_:1},8,["title"]),p(v,{class:"option-wrap"},{default:d((()=>[p(A,{class:"btn",type:"primary","open-type":"share"},{default:d((()=>[p(D,{style:{"margin-right":"10px"}},{default:d((()=>[f("分享给朋友")])),_:1}),p(z,{type:"chatboxes-filled",size:"20",color:"#E4EBF5"})])),_:1}),l.check?g("",!0):(i(),n(A,{key:0,class:"btn",type:"plain",onClick:C.handleECoupon},{default:d((()=>[p(D,{style:{"margin-right":"10px"}},{default:d((()=>[f("领红包")])),_:1}),p(z,{type:"gift-filled",size:"20",color:"#6d5dfc"})])),_:1},8,["onClick"])),p(A,{class:"btn",type:"plain",onClick:t[0]||(t[0]=e=>C.handleContributeSuggest(2))},{default:d((()=>[p(D,{style:{"margin-right":"10px"}},{default:d((()=>[f("建议")])),_:1}),p(z,{type:"compose",size:"20",color:"#6d5dfc"})])),_:1})])),_:1})],64)):g("",!0)])),_:1})}],["__scopeId","data-v-64c3b7c9"]]);export{j as default};
