import{p as t,v as e,S as s,k as i,l as o,o as n,a as h,w as r,q as a,g as l,d,u,x as c,F as p,n as f,e as g,C as y,D as x,f as w,b,r as m,i as j,a0 as W,z as T}from"./index-179abf92.js";import{_ as S}from"./uni-segmented-control.8f077283.js";import{_,r as k}from"./uni-app.es.5e3c503e.js";import{_ as C}from"./uni-icons.bdc5c1a1.js";import{_ as v}from"./v-flip-num.d8bdfbc0.js";import{_ as I}from"./uni-popup.5f68b854.js";import"./uni-transition.eb92d77b.js";const X=_({data(){return this.wonLine3=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],this.wonLine4=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[1,5,9,13],[2,6,10,14],[3,7,11,15],[4,8,12,16],[1,6,11,16],[4,7,10,13]],{bannerAdpid:"",bannerUnitId:"",typeIndex:0,type:3,history:[],showPopup:!1,oWon:0,xWon:0,drawNum:0,hasWon:!1,isX:!1,touchStartObj:null,upShadow:{top:"150%",left:"150%"},downShadow:{top:"150%",left:"150%"}}},computed:{typeBg(){return 3===this.type?{backgroundImage:'url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/ed10ae3e-48ac-4d34-bb76-cdda51adb5ea.png")'}:4===this.type?{backgroundImage:'url("https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/eafa6626-af0a-4534-b744-1ee0407d5592.png")'}:void 0},oWonString(){return("0"+this.oWon).slice(-2)},xWonString(){return("0"+this.xWon).slice(-2)},drawString(){return("0"+this.drawNum).slice(-2)}},methods:{init(){const e=t("tic_tac_toe_config");if(!e)return;const{type:s,oWon:i,xWon:o,drawNum:n}=e;this.type=s||3,this.typeIndex=s?s-3:0,this.oWon=i||0,this.xWon=o||0,this.drawNum=n||0},typeChange(t){if(e(),this.typeIndex=t.currentIndex,this.history.length)return s({title:"提示",content:"切换类型将丢失当前进度，是否继续？",success:e=>{e.confirm?(this.type=t.currentIndex+3,this.history=[],this.hasWon=!1):e.cancel&&(this.typeIndex=this.type-3)}});this.type=t.currentIndex+3},undo(){if(e(),0===this.history.length)return i({title:"请先开始游戏。",icon:"error"});s({title:"提示",content:"是否撤销回到上一步？",success:t=>{t.confirm&&this.history.pop()}})},reload(){if(e(),0===this.history.length)return i({title:"请先开始游戏。",icon:"error"});s({title:"提示",content:"是否重新开始游戏？",success:t=>{t.confirm&&(this.history=[],this.hasWon=!1)}})},score(){e(),this.$refs.popup.open("bottom")},popupChange(t){this.showPopup=t.show},continueGame(){e(),this.$refs.popup.close()},endGame(){e(),s({title:"提示",content:"是否结束游戏，清空比分？",success:t=>{t.confirm&&(e(),this.$refs.popup.close(),this.history=[],this.hasWon=!1,this.oWon=0,this.xWon=0,this.drawNum=0)}})},upTouchStart(){return this.hasWon?this.handleWin(this.isX):3===this.type&&9===this.history.length||4===this.type&&16===this.history.length?this.handleDraw():this.isX&&0!==this.history.length?i({title:"当前轮到蓝方",icon:"error"}):(this.touchStartObj="up",void(this.isX=!1))},downTouchStart(){return this.hasWon?this.handleWin(this.isX):3===this.type&&9===this.history.length||4===this.type&&16===this.history.length?this.handleDraw():this.isX||0===this.history.length?(this.touchStartObj="down",void(this.isX=!0)):i({title:"当前轮到红方",icon:"error"})},touchMove(t){"up"===this.touchStartObj&&(this.upShadow.top=t.touches[0].pageY+"px",this.upShadow.left=t.touches[0].pageX+"px"),"down"===this.touchStartObj&&(this.downShadow.top=t.touches[0].pageY+"px",this.downShadow.left=t.touches[0].pageX+"px")},touchEnd(t){if(e(),!this.touchStartObj)return;this.touchStartObj=null,this.upShadow.top="150%",this.upShadow.left="150%",this.downShadow.top="150%",this.downShadow.left="150%";const{pageX:s,pageY:i}=t.changedTouches[0],o=t.currentTarget.offsetLeft,n=t.currentTarget.offsetTop;if(3===this.type){const t=o/3;if(i<n-t)return s<o-t?this.judge(1):s<o+t?this.judge(2):s<o+3*t?this.judge(3):void 0;if(i<n+t)return s<o-t?this.judge(4):s<o+t?this.judge(5):s<o+3*t?this.judge(6):void 0;if(i<n+3*t)return s<o-t?this.judge(7):s<o+t?this.judge(8):s<o+3*t?this.judge(9):void 0}if(4===this.type){const t=o/2;if(i<n-t)return s<o-t?this.judge(1):s<o?this.judge(2):s<o+t?this.judge(3):s<o+2*t?this.judge(4):void 0;if(i<n)return s<o-t?this.judge(5):s<o?this.judge(6):s<o+t?this.judge(7):s<o+2*t?this.judge(8):void 0;if(i<n+t)return s<o-t?this.judge(9):s<o?this.judge(10):s<o+t?this.judge(11):s<o+2*t?this.judge(12):void 0;if(i<n+2*t)return s<o-t?this.judge(13):s<o?this.judge(14):s<o+t?this.judge(15):s<o+2*t?this.judge(16):void 0}},judge(t){const e=this.history.find((e=>e.index===t)),s=this.isX;if(e)return i({title:"该位置已下子",icon:"error"});if(this.history.push({index:t,isX:s,isO:!s}),this.isX=!this.isX,3===this.type&&this.history.length<5||4===this.type&&this.history.length<7)return;let o=[];o=s?this.history.filter((t=>t.isX)).map((t=>t.index)).sort():this.history.filter((t=>t.isO)).map((t=>t.index)).sort();const n=this["wonLine"+this.type];let h=0;for(let i=0;i<n.length;i++){for(let t=0;t<o.length&&(-1===n[i].indexOf(o[t])||(h++,h!==this.type));t++);if(h===this.type){this.isX=s,this.hasWon=!0,this.handleWin(s);break}h=0}!this.hasWon&&(3===this.type&&9===this.history.length||4===this.type&&16===this.history.length)&&(this.drawNum++,this.handleDraw())},handleWin(t){let i="";t?(i="蓝方胜利！！",this.xWon++):(i="红方胜利！！",this.oWon++),s({title:i,content:"是否重新开始游戏？",success:t=>{t.confirm&&(e(),this.history=[],this.hasWon=!1)}})},handleDraw(){s({title:"平局！",content:"是否重新开始游戏？",success:t=>{t.confirm&&(e(),this.history=[],this.hasWon=!1)}})},setPicker(t){const e=this.history.find((e=>e.index===t));if(e){const{isX:t,isO:s}=e;return{"is-x":t,"is-o":s}}return{"is-x":!1,"is-o":!1}},cacheData(){const t={type:this.type,oWon:this.oWon,xWon:this.xWon,drawNum:this.drawNum};o("tic_tac_toe_config",t)}},mounted(){this.init()},unmounted(){this.cacheData()},onLoad(){a().getConfig().then((t=>{this.bannerAdpid=t.bannerAdpid||"",this.bannerUnitId=t.bannerUnitId||""}))},onShareAppMessage:()=>({title:"游趣街 - 井字棋，线下休闲娱乐，自动记分。",path:"/pages/ticTacToe/ticTacToe",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/7f5ab5f5-3131-4e2c-bb76-eb32ece07bea.png"}),onShareTimeline:()=>({title:"游趣街 - 井字棋，线下休闲娱乐，自动记分。",path:"/pages/ticTacToe/ticTacToe",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/7f5ab5f5-3131-4e2c-bb76-eb32ece07bea.png"})},[["render",function(t,e,s,i,o,a){const _=k(m("uni-segmented-control"),S),X=k(m("uni-icons"),C),U=l,O=j,N=W,q=k(m("v-flip-num"),v),A=T,D=k(m("uni-popup"),I);return n(),h(U,{class:"container"},{default:r((()=>[d(U,{class:"top-wrap"},{default:r((()=>[d(_,{class:"uni-segmented","style-type":"button",activeColor:"#424242",current:o.typeIndex,values:["3*3","4*4"],onClickItem:a.typeChange},null,8,["current","onClickItem"]),d(X,{class:"icon",type:"undo-filled",size:"30",onClick:a.undo},null,8,["onClick"]),d(X,{class:"icon",type:"refresh-filled",size:"30",onClick:a.reload},null,8,["onClick"]),d(X,{class:"icon",type:"medal-filled",size:"30",onClick:a.score},null,8,["onClick"])])),_:1}),d(U,{class:"table middle",style:g(a.typeBg),onTouchmove:a.touchMove,onTouchend:a.touchEnd},{default:r((()=>[(n(!0),u(p,null,c(o.type*o.type,(t=>(n(),h(U,{class:f(["square",a.setPicker(t)]),style:g({width:700/o.type+"rpx",height:700/o.type+"rpx"}),key:"square"+t},null,8,["class","style"])))),128)),d(U,{class:f(["square is-o player-up",{"o-box-shadow":!o.isX&&o.history.length}]),onTouchstart:a.upTouchStart},null,8,["class","onTouchstart"]),d(U,{class:f(["square is-x player-down",{"x-box-shadow":o.isX&&o.history.length}]),onTouchstart:a.downTouchStart},null,8,["class","onTouchstart"]),d(U,{class:"won-up"},{default:r((()=>[(n(!0),u(p,null,c(o.oWon,(t=>(n(),h(X,{class:"icon",type:"vip-filled",size:"20",color:"#f44336",key:"oWon"+t})))),128))])),_:1}),d(U,{class:"won-down"},{default:r((()=>[(n(!0),u(p,null,c(o.xWon,(t=>(n(),h(X,{class:"icon",type:"vip-filled",size:"20",color:"#2196f3",key:"xWon"+t})))),128))])),_:1})])),_:1},8,["style","onTouchmove","onTouchend"]),d(U,{class:"square is-o shadow",style:g(o.upShadow)},null,8,["style"]),d(U,{class:"square is-x shadow",style:g(o.downShadow)},null,8,["style"]),y(d(O,{class:"tip-text"},{default:r((()=>[w("选择一方，拖动棋子开始！")])),_:1},512),[[x,0===o.history.length]]),y(d(O,{class:"tip-text"},{default:r((()=>[w("蓝方下子！")])),_:1},512),[[x,o.isX&&o.history.length]]),y(d(O,{class:"tip-text"},{default:r((()=>[w("红方下子！")])),_:1},512),[[x,!o.isX&&o.history.length]]),d(D,{ref:"popup","background-color":"#fff",onChange:a.popupChange},{default:r((()=>[d(U,{class:"popup-wrap"},{default:r((()=>[o.bannerAdpid||o.bannerUnitId?(n(),h(U,{key:0,style:{width:"100%",display:"flex","justify-content":"center","margin-bottom":"20px"}},{default:r((()=>[o.bannerAdpid&&!o.bannerUnitId?(n(),h(N,{key:0,adpid:o.bannerAdpid},null,8,["adpid"])):b("",!0),o.bannerUnitId?(n(),h(N,{key:1,unitId:o.bannerUnitId},null,8,["unitId"])):b("",!0)])),_:1})):b("",!0),d(U,{class:"title"},{default:r((()=>[w("胜负")])),_:1}),o.showPopup?(n(),h(U,{key:1,class:"scorer"},{default:r((()=>[d(q,{class:"flipper",width:"90rpx",height:"150rpx",bgColor:"#f44336",frontText:a.oWonString[0]},null,8,["frontText"]),d(q,{class:"flipper",width:"90rpx",height:"150rpx",bgColor:"#f44336",frontText:a.oWonString[1]},null,8,["frontText"]),d(O,{class:"colon"},{default:r((()=>[w(":")])),_:1}),d(q,{class:"flipper",width:"90rpx",height:"150rpx",bgColor:"#2196f3",frontText:a.xWonString[0]},null,8,["frontText"]),d(q,{class:"flipper",width:"90rpx",height:"150rpx",bgColor:"#2196f3",frontText:a.xWonString[1]},null,8,["frontText"])])),_:1})):b("",!0),d(U,{class:"title"},{default:r((()=>[w("平局")])),_:1}),o.showPopup?(n(),h(U,{key:2,class:"scorer"},{default:r((()=>[d(q,{class:"flipper",width:"90rpx",height:"150rpx",bgColor:"#36373a",frontText:a.drawString[0]},null,8,["frontText"]),d(q,{class:"flipper",width:"90rpx",height:"150rpx",bgColor:"#36373a",frontText:a.drawString[1]},null,8,["frontText"])])),_:1})):b("",!0),d(U,{class:"option-wrap"},{default:r((()=>[d(A,{type:"warn",onClick:a.endGame},{default:r((()=>[w("结束")])),_:1},8,["onClick"]),d(A,{onClick:a.continueGame},{default:r((()=>[w("继续")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["onChange"])])),_:1})}],["__scopeId","data-v-d2b8215b"]]);export{X as default};
