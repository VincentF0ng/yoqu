import{k as e,C as t,E as a,D as i,o as s,a as n,w as d,m as l,g as r,p as o,d as c,z as p,A as u,f,b as g,F as m,r as b,T as h,i as y}from"./index-0cbfb94b.js";import{_}from"./uni-tag.62fa8fa7.js";import{_ as k,r as C}from"./uni-app.es.5d2879ae.js";import{_ as G}from"./uni-card.18ba3cc2.js";import{_ as U}from"./uni-icons.399698e8.js";import{_ as x}from"./v-btn.9aac0fa4.js";const j=k({data:()=>({bannerAdpid:"",bannerUnitId:"",details:{},check:!1}),methods:{handleContributeSuggest(t=1){e({url:"/pages/contributeSuggest/contributeSuggest?type="+t})}},onLoad:function(s){if(l().getConfig().then((e=>{this.bannerAdpid=e.bannerAdpid||"",this.bannerUnitId=e.bannerUnitId||"",this.check=e.check||!1})),!s.id)return e({url:"/pages/boardGame/boardGame"});t({title:"加载中"});a.importObject("boardGamesOptions").getDetails(s.id).then((e=>{this.details=e})).finally((e=>{i()}))},onShareAppMessage(){return{title:"游趣街 - "+this.details.title+"规则！快和小伙伴一起玩吧!",path:"/pages/boardGameDetails/boardGameDetails?id="+this.details._id,imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/68a0f0e0-94d6-4224-a7f2-3dbea35e9513.png"}},onShareTimeline(){return{title:"游趣街 - "+this.details.title+"规则！快和小伙伴一起玩吧!",path:"/pages/boardGameDetails/boardGameDetails?id="+this.details._id,imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/68a0f0e0-94d6-4224-a7f2-3dbea35e9513.png"}}},[["render",function(e,t,a,i,l,k){const j=C(b("uni-tag"),_),v=r,S=h,z=C(b("uni-card"),G),D=y,E=C(b("uni-icons"),U),A=C(b("v-btn"),x);return s(),n(v,{class:"container"},{default:d((()=>["{}"!==JSON.stringify(l.details)?(s(),o(m,{key:0},[c(z,{title:l.details.title},{default:d((()=>[c(v,{class:"tag-wrap"},{default:d((()=>[p(c(j,{size:"mini",text:"经典",type:"warning",inverted:"",circle:""},null,512),[[u,1===l.details.classic]]),p(c(j,{size:"mini",text:"精选",type:"error",inverted:"",circle:""},null,512),[[u,1===l.details.chosen]])])),_:1}),c(v,{class:"content"},{default:d((()=>[c(S,{nodes:l.details.content},null,8,["nodes"])])),_:1})])),_:1},8,["title"]),c(v,{class:"option-wrap"},{default:d((()=>[c(A,{class:"btn",type:"primary","open-type":"share"},{default:d((()=>[c(D,{style:{"margin-right":"10px"}},{default:d((()=>[f("分享给朋友")])),_:1}),c(E,{type:"chatboxes-filled",size:"20",color:"#E4EBF5"})])),_:1}),l.check?g("",!0):(s(),n(A,{key:0,class:"btn",type:"plain",onClick:e.handleECoupon},{default:d((()=>[c(D,{style:{"margin-right":"10px"}},{default:d((()=>[f("领红包")])),_:1}),c(E,{type:"gift-filled",size:"20",color:"#6d5dfc"})])),_:1},8,["onClick"])),c(A,{class:"btn",type:"plain",onClick:t[0]||(t[0]=e=>k.handleContributeSuggest(2))},{default:d((()=>[c(D,{style:{"margin-right":"10px"}},{default:d((()=>[f("建议")])),_:1}),c(E,{type:"compose",size:"20",color:"#6d5dfc"})])),_:1})])),_:1})],64)):g("",!0)])),_:1})}],["__scopeId","data-v-14c8dc49"]]);export{j as default};
