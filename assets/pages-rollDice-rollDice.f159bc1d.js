import{l as e,K as t,c as s,Y as i,Z as a,_ as o,v as h,s as l,$ as n,o as d,a as c,w as r,m as p,g as u,d as m,p as f,q as v,F as g,W as b,f as w,t as Y,b as C,i as X,r as _,a0 as y,a1 as x,P as M,e as k,n as I}from"./index-0cbfb94b.js";import{_ as U}from"./uni-icons.399698e8.js";import{_ as S,r as T}from"./uni-app.es.5d2879ae.js";import{_ as D}from"./uni-data-checkbox.873bcae4.js";import{_ as z,a as j}from"./uni-forms.084deff4.js";import{_ as A}from"./uni-popup.1e25a870.js";import"./uni-load-more.da29d111.js";import"./uni-transition.db85f35a.js";const V=S({data:()=>({bannerAdpid:"",bannerUnitId:"",perFace:[[-.1,.3,-1],[-.1,.6,-.4],[-.85,-.42,.73],[-.8,.3,-.75],[.3,.45,.9],[-.16,.6,.18]],vals:[1],posX:[0],posY:[0],speed:[10],moveX:[!0],moveY:[!0],clienWidth:0,clientHeight:0,diceSize:0,marginTop:50,isthrow:!1,isrolling:!1,showRes:!1,colors:[{text:"白色",value:""},{text:"红色",value:"red"},{text:"黄色",value:"yellow"},{text:"绿色",value:"green"},{text:"蓝色",value:"blue"},{text:"紫色",value:"purple"}],diceColor:"",isMute:!1,audioContext:null}),methods:{init(){const o=e("dice_num")||5,h=e("dice_color")||"",l=e("dice_mute")||!1;this.diceColor=h,this.isMute=l,this.clientWidth=t().windowWidth,this.clientHeight=t().windowHeight;s().in(this).select(".dice-wrap").boundingClientRect((e=>{this.diceSize=e.width,this.posX[0]=this.clientWidth/2-e.width/2,this.posY[0]=e.width;for(let t=0;t<o-1;t++)this.addDice()})).exec(),i(this.handleShake);const n=a();n.src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/78132303-3a50-4f0e-9d70-add7fa339375.mp3",wx.setInnerAudioOption({obeyMuteSwitch:!1}),this.audioContext=n},destroy(){o(),this.timer&&clearInterval(this.timer)},setting(){h(),this.$refs.popup.open("top")},diceNumChange(e){const t=e.detail.value,s=this.vals.length;if(t!==s){if(t>s){for(let e=0;e<t-s;e++)this.addDice();this.randomDiceThrow()}else this.vals=this.vals.slice(0,t),this.posX=this.posX.slice(0,t),this.posY=this.posY.slice(0,t),this.speed=this.speed.slice(0,t),this.moveX=this.moveX.slice(0,t),this.moveY=this.moveY.slice(0,t);l("dice_num",t)}},diceColorChange(e){const t=e.detail.value;l("dice_color",t)},diceMuteChange(e){this.isMute=e.detail.value},addDice(){this.vals.push(Math.floor(5*Math.random())+1),this.posX.push(Math.floor(Math.random()*(this.clientWidth-this.diceSize))),this.posY.push(Math.floor(Math.random()*(this.clientHeight-this.diceSize-this.marginTop))+this.marginTop),this.speed.push(10+Math.floor(5*Math.random())),this.moveX.push(!0),this.moveY.push(!0)},handleShake(e){(e.x>1||e.y>1||e.z>1)&&this.randomDiceThrow()},randomDiceThrow(){if(this.timer)return;const e=this.vals.length,t=[];for(let s=0;s<e;s++)t.push(Math.floor(6*Math.random())+1);this.vals=t,this.isthrow=!0,this.showRes=!1,setTimeout((e=>{this.isthrow=!1,this.showRes=!0,this.timer&&clearInterval(this.timer),this.timer=null,this.runToCenter()}),1400),this.timer=setInterval((()=>{for(var e=0;e<this.vals.length;e++)this.run(e,this.speed[e])}),15)},runToCenter(){const e=n(),t=e.windowWidth,s=e.windowHeight,i=this.vals.length,a=t/2-this.diceSize/2,o=s/2-this.diceSize/2,h=this.diceSize*(.5+i/10),l=Math.PI/180*Math.round(360/i),d=[];for(var c=0;c<i;c++)d.push({x:a+h*Math.sin(l*c),y:o+h*Math.cos(l*c)});setTimeout((e=>{this.timer&&clearInterval(this.timer),this.timer=null}),1e3),this.timer=setInterval((e=>{for(let t=0;t<i;t++)this.moveDiceTo(t,d[t])}),15)},moveDiceTo(e,t){const s=this.speed[e],i=this.posX[e],a=this.posY[e],o=t.x,h=t.y;i<o-s?this.posX[e]+=s:i>o+s?this.posX[e]-=s:this.posX[e]=o,a<h-s?this.posY[e]+=s:a>h+s?this.posY[e]-=s:this.posY[e]=h},crash(e){const t=this.diceSize,s=this.posX[e]+t/2,i=this.posY[e]+t/2,a=this.posX[e]-t,o=this.posX[e]+2*t,h=this.posY[e]-t,l=this.posY[e]+2*t;for(let p=0;p<this.vals.length;p++)if(p!=e){var n=this.posX[p]+t/2,d=this.posY[p]+t/2;if(n>=a&&n<=o&&d>=h&&d<=l){var c=s-n,r=i-d;c*c+r*r<=t*t&&(n>s?d>i?(this.moveX[e]=!0,this.moveY[e]=!0):d<i?(this.moveX[e]=!0,this.moveY[e]=!1):this.moveX[e]=!0:n<s?d>i?(this.moveX[e]=!1,this.moveY[e]=!0):d<i?(this.moveX[e]=!1,this.moveY[e]=!1):this.moveX[e]=!1:(n=s)&&(d>i?this.moveY[e]=!0:d<i&&(this.moveY[e]=!1)))}}},run(e,t){const s=this.moveX,i=this.moveY,a=this.posX,o=this.posY;s[e]?a[e]>0?(this.posX[e]-=t,this.crash(e)):this.moveX[e]=!1:a[e]<this.clientWidth-this.diceSize?(this.posX[e]+=t,this.crash(e)):this.moveX[e]=!0,i[e]?o[e]>this.marginTop?(this.posY[e]-=t,this.crash(e)):this.moveY[e]=!1:o[e]<this.clientHeight-this.diceSize?(this.posY[e]+=t,this.crash(e)):this.moveY[e]=!0}},computed:{reduceVals(){return this.vals.reduce(((e,t)=>e+t))}},mounted(){this.init()},unmounted(){this.destroy()},onLoad(){p().getConfig().then((e=>{this.bannerAdpid=e.bannerAdpid||"",this.bannerUnitId=e.bannerUnitId||""}))},onShareAppMessage:()=>({title:"游趣街 - 摇骰子，6个6，开不开！快和小伙伴一起玩吧!",path:"/pages/rollDice/rollDice",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/c7b538e6-431a-4faf-a0a4-a22ed087199c.png"}),onShareTimeline:()=>({title:"游趣街 - 摇骰子，6个6，开不开！快和小伙伴一起玩吧!",path:"/pages/rollDice/rollDice",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/c7b538e6-431a-4faf-a0a4-a22ed087199c.png"})},[["render",function(e,t,s,i,a,o){const h=X,l=T(_("uni-icons"),U),n=u,p=y,S=T(_("uni-data-checkbox"),D),V=T(_("uni-forms-item"),z),W=x,H=M,R=T(_("uni-forms"),j),F=T(_("uni-popup"),A);return d(),c(n,{style:{position:"relative"}},{default:r((()=>[m(n,{class:"container",onClick:o.randomDiceThrow},{default:r((()=>[m(n,{class:"top-wrap"},{default:r((()=>[(d(!0),f(g,null,v(a.vals,((e,t)=>(d(),c(h,{class:"tag",key:"tag"+t},{default:r((()=>[w(Y(a.showRes?e:"?"),1)])),_:2},1024)))),128)),m(l,{class:"setting",type:"gear-filled",size:"30",onClick:b(o.setting,["stop"])},null,8,["onClick"])])),_:1}),m(h,{class:"reduce-text"},{default:r((()=>[w(Y(a.showRes?o.reduceVals:"?"),1)])),_:1}),m(h,{class:"tip-text"},{default:r((()=>[w("摇一摇或点击屏幕")])),_:1}),(d(!0),f(g,null,v(a.vals,((e,t)=>(d(),c(n,{id:"dice"+t,class:"dice-wrap",key:"dice"+t,style:k({left:a.posX[t]+"px",top:a.posY[t]+"px"})},{default:r((()=>[m(n,{class:I(["dice",[a.diceColor,{throw:a.isthrow,rolling:a.isrolling}]]),style:k({transform:`rotate3d(${a.perFace[e-1]}, 180deg)`})},{default:r((()=>[m(n,{class:"dice-face front"}),m(n,{class:"dice-face up"}),m(n,{class:"dice-face left"}),m(n,{class:"dice-face right"}),m(n,{class:"dice-face bottom"}),m(n,{class:"dice-face back"})])),_:2},1032,["class","style"])])),_:2},1032,["id","style"])))),128))])),_:1},8,["onClick"]),m(F,{ref:"popup","background-color":"#fff",animation:!0},{default:r((()=>[m(n,{class:"popup-content"},{default:r((()=>[a.bannerAdpid||a.bannerUnitId?(d(),c(n,{key:0,style:{width:"100%",display:"flex","justify-content":"center","margin-bottom":"20px"}},{default:r((()=>[a.bannerAdpid&&!a.bannerUnitId?(d(),c(p,{key:0,adpid:a.bannerAdpid},null,8,["adpid"])):C("",!0),a.bannerUnitId?(d(),c(p,{key:1,unitId:a.bannerUnitId},null,8,["unitId"])):C("",!0)])),_:1})):C("",!0),m(R,{ref:"baseForm"},{default:r((()=>[m(V,{label:"颜色"},{default:r((()=>[m(S,{modelValue:a.diceColor,"onUpdate:modelValue":t[0]||(t[0]=e=>a.diceColor=e),localdata:a.colors,selectedColor:"#51aa38",onChange:o.diceColorChange},null,8,["modelValue","localdata","onChange"])])),_:1}),m(V,{label:"个数"},{default:r((()=>[m(W,{value:a.vals.length,min:"1",max:"10","show-value":"",onChange:o.diceNumChange},null,8,["value","onChange"])])),_:1}),m(V,{label:"静音"},{default:r((()=>[m(H,{checked:a.isMute,onChange:o.diceMuteChange,style:{transform:"scale(0.7)"}},null,8,["checked","onChange"])])),_:1})])),_:1},512)])),_:1})])),_:1},512)])),_:1})}],["__scopeId","data-v-ce0c816e"]]);export{V as default};
