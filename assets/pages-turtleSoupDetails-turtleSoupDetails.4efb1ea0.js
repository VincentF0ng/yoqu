import{v as e,D as t,k as a,E as i,L as s,G as l,m as n,o as d,a as o,w as r,q as u,g as c,u as p,d as h,f,t as g,B as m,C as w,b as y,F as _,r as k,i as A}from"./index-ab7ec73d.js";import{_ as b}from"./uni-tag.f467cad1.js";import{r as C}from"./uni-app.es.f46513ae.js";import{_ as V}from"./uni-icons.63e5f710.js";import{_ as S}from"./uni-card.05392b5c.js";import{_ as x}from"./v-btn.692ac0fd.js";import{_ as U}from"./_plugin-vue_export-helper.1b428a4d.js";const D=U({data:()=>({bannerAdpid:"",bannerUnitId:"",rewardVideoAdpid:"",rewardVideoUnitId:"",unlockVideoAd:!1,details:{},showAnswer:!1,check:!1}),methods:{handleCopyQuestion(){e(),t({data:this.details.question,success:()=>{a({title:"复制汤面成功",icon:"none"})}})},handleCopyAnswer(){e(),t({data:this.details.answer,success:()=>{a({title:"复制汤底成功",icon:"none"})}})},handleGetRandom(){e(),i({title:"加载中"});s.importObject("tutleSoupsOptions").getRandomOne().then((e=>{if(e._id===this.details._id)return this.handleGetRandom();this.showAnswer=!1,this.details=e})).finally((e=>{l()}))},handleContributeSuggest(e=1){n({url:"/pages/contributeSuggest/contributeSuggest?type="+e})},handleBoardGame(){n({url:"/pages/boardGameDetails/boardGameDetails?id=62fb6f6f3e021975b48126f3"})},handleECoupon(){n({url:"/pages/eCoupon/eCoupon"})},showAnswerClick(){if(e(),!this.rewardVideoAdpid&&!this.rewardVideoUnitId||this.unlockVideoAd)return this.showAnswer=!this.showAnswer;u().globalData.unlockVideoAd=!0,this.showAnswer=!0,this.unlockVideoAd=!0},rewardAdClose(e){const t=e.detail;if(t&&t.isEnded||e.isEnded){u().globalData.unlockVideoAd=!0,this.showAnswer=!0,this.unlockVideoAd=!0}},rewardAdError(){u().globalData.unlockVideoAd=!0,this.showAnswer=!0,this.unlockVideoAd=!0,a({title:"加载视频失败，直接解锁！",icon:"none",duration:4e3})},initVideoAd(){}},onLoad:function(e){if(!e.id)return n({url:"/pages/turtleSoup/turtleSoup"});const t=u();this.unlockVideoAd=t.globalData.unlockVideoAd||!1,t.getConfig().then((e=>{this.bannerAdpid=e.bannerAdpid||"",this.bannerUnitId=e.bannerUnitId||"",this.rewardVideoAdpid=e.rewardVideoAdpid||"",this.rewardVideoUnitId=e.rewardVideoUnitId||"",this.check=e.check||!1})),i({title:"加载中"});s.importObject("tutleSoupsOptions").getDetails(e.id).then((e=>{this.details=e})).finally((e=>{l(),this.initVideoAd()}))},onShareAppMessage(){return{title:"汤面："+this.details.question,path:"/pages/turtleSoupDetails/turtleSoupDetails?id="+this.details._id,imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/67ffde71-5506-47e8-b8e1-a900aae92998.png"}},onShareTimeline(){return{title:"汤面："+this.details.question,path:"/pages/turtleSoupDetails/turtleSoupDetails?id="+this.details._id,imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/67ffde71-5506-47e8-b8e1-a900aae92998.png"}}},[["render",function(e,t,a,i,s,l){const n=C(k("uni-tag"),b),u=c,U=C(k("uni-icons"),V),D=A,j=C(k("uni-card"),S),E=C(k("v-btn"),x);return d(),o(u,{class:"container"},{default:r((()=>["{}"!==JSON.stringify(s.details)?(d(),p(_,{key:0},[h(j,{title:s.details.title,extra:"作者："+s.details.authour+(s.details.contribute?"【网友投稿】":"")},{actions:r((()=>[h(u,{class:"card-actions"},{default:r((()=>[h(u,{onClick:l.handleCopyQuestion,class:"actions-item"},{default:r((()=>[h(U,{style:{"margin-right":"5px"},type:"chat",size:"18",color:"#999"}),h(D,null,{default:r((()=>[f("复制汤面")])),_:1})])),_:1},8,["onClick"]),h(u,{onClick:l.showAnswerClick,class:"actions-item"},{default:r((()=>[h(U,{style:{"margin-right":"5px"},type:s.showAnswer?"eye-slash":"eye",size:"18",color:"#999"},null,8,["type"]),h(D,null,{default:r((()=>[f(g(s.showAnswer?"隐藏":"显示")+"汤底",1)])),_:1})])),_:1},8,["onClick"]),h(u,{onClick:l.handleCopyAnswer,class:"actions-item"},{default:r((()=>[h(U,{style:{"margin-right":"5px"},type:"chat",size:"18",color:"#999"}),h(D,null,{default:r((()=>[f("复制汤底")])),_:1})])),_:1},8,["onClick"])])),_:1})])),default:r((()=>[h(u,{class:"tag-wrap"},{default:r((()=>[m(h(n,{size:"mini",text:"经典",type:"warning",inverted:"",circle:""},null,512),[[w,1===s.details.classic]]),m(h(n,{size:"mini",text:"精选",type:"error",inverted:"",circle:""},null,512),[[w,1===s.details.chosen]])])),_:1}),h(u,{class:"title"},{default:r((()=>[f("汤面")])),_:1}),h(u,{class:"content"},{default:r((()=>[f(g(s.details.question),1)])),_:1}),s.showAnswer?(d(),o(u,{key:0,class:"title"},{default:r((()=>[f("汤底")])),_:1})):y("",!0),s.showAnswer?(d(),o(u,{key:1,class:"content"},{default:r((()=>[f(g(s.details.answer),1)])),_:1})):y("",!0),s.details.contribute&&0===s.details.share?(d(),o(u,{key:2,class:"msg"},{default:r((()=>[h(u,null,{default:r((()=>[f("该汤来自网友投稿")])),_:1}),h(u,null,{default:r((()=>[f("请勿随意转发其他平台")])),_:1}),h(u,null,{default:r((()=>[f("可联系作者【"+g(s.details.authour)+"】",1)])),_:1}),s.details.contact?(d(),o(u,{key:0},{default:r((()=>[f("联系方式【"+g(s.details.contact)+"】",1)])),_:1})):y("",!0)])),_:1})):(d(),o(u,{key:3,class:"msg"},{default:r((()=>[h(u,null,{default:r((()=>[f("本文来源于网络，版权属于原作者。")])),_:1}),h(u,null,{default:r((()=>[f("如有侵权，请右上角小程序介绍页，联系客服删除!")])),_:1})])),_:1}))])),_:1},8,["title","extra"]),h(u,{class:"option-wrap"},{default:r((()=>[s.check?y("",!0):(d(),o(E,{key:0,class:"btn",type:"primary",onClick:l.handleECoupon},{default:r((()=>[h(D,{style:{"margin-right":"10px"}},{default:r((()=>[f("领红包")])),_:1}),h(U,{type:"gift-filled",size:"20",color:"#E4EBF5"})])),_:1},8,["onClick"])),h(E,{class:"btn",type:"plain",onClick:l.handleBoardGame},{default:r((()=>[h(D,{style:{"margin-right":"10px"}},{default:r((()=>[f("查看规则")])),_:1}),h(U,{type:"redo-filled",size:"20",color:"#6d5dfc"})])),_:1},8,["onClick"]),s.check?y("",!0):(d(),o(E,{key:1,class:"btn",type:"plain",onClick:t[0]||(t[0]=e=>l.handleContributeSuggest(1))},{default:r((()=>[h(D,{style:{"margin-right":"10px"}},{default:r((()=>[f("我要投稿")])),_:1}),h(U,{type:"email-filled",size:"20",color:"#6d5dfc"})])),_:1})),s.check?y("",!0):(d(),o(E,{key:2,class:"btn",type:"plain","open-type":"contact"},{default:r((()=>[h(D,{style:{"margin-right":"10px"}},{default:r((()=>[f("海龟汤闲聊群（回复加群）")])),_:1}),h(U,{type:"staff-filled",size:"20",color:"#6d5dfc"})])),_:1}))])),_:1})],64)):y("",!0)])),_:1})}],["__scopeId","data-v-85c72616"]]);export{D as default};
