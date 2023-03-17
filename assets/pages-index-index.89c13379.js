import{c as e,r as t,o as i,a as o,w as a,b as n,d as s,n as r,e as l,f as d,t as c,i as u,g as h,h as p,v as g,s as f,j as b,k as m,l as y,m as _,p as w,q as k,F as C,u as v}from"./index-0cbfb94b.js";import{_ as x}from"./uni-icons.399698e8.js";import{_ as U,r as S}from"./uni-app.es.5d2879ae.js";import{_ as I}from"./uni-segmented-control.71d7c086.js";const B=U({name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:()=>({textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,elIdBox:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}),mounted(){this.$nextTick((()=>{this.initSize()}))},methods:{initSize(){if(this.scrollable){let t=[],i=new Promise(((t,i)=>{e().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.textWidth=e[0].width,t()}))})),o=new Promise(((t,i)=>{e().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((e=>{this.boxWidth=e[0].width,t()}))}));t.push(i),t.push(o),Promise.all(t).then((()=>{this.animationDuration=this.textWidth/this.speed+"s",this.animationDelay=`-${this.boxWidth/this.speed}s`,setTimeout((()=>{this.animationPlayState="running"}),1e3)}))}},loopAnimation(){},clickMore(){this.$emit("getmore")},close(){this.show=!1,this.$emit("close")},onClick(){this.$emit("click")}}},[["render",function(e,p,g,f,b,m){const y=S(t("uni-icons"),x),_=u,w=h;return b.show?(i(),o(w,{key:0,class:"uni-noticebar",style:l({backgroundColor:g.backgroundColor}),onClick:m.onClick},{default:a((()=>[!0===g.showIcon||"true"===g.showIcon?(i(),o(y,{key:0,class:"uni-noticebar-icon",type:"sound",color:g.color,size:"22"},null,8,["color"])):n("",!0),s(w,{ref:"textBox",class:r(["uni-noticebar__content-wrapper",{"uni-noticebar__content-wrapper--scrollable":g.scrollable,"uni-noticebar__content-wrapper--single":!g.scrollable&&(g.single||g.moreText)}])},{default:a((()=>[s(w,{id:b.elIdBox,class:r(["uni-noticebar__content",{"uni-noticebar__content--scrollable":g.scrollable,"uni-noticebar__content--single":!g.scrollable&&(g.single||g.moreText)}])},{default:a((()=>[s(_,{id:b.elId,ref:"animationEle",class:r(["uni-noticebar__content-text",{"uni-noticebar__content-text--scrollable":g.scrollable,"uni-noticebar__content-text--single":!g.scrollable&&(g.single||g.showGetMore)}]),style:l({color:g.color,width:b.wrapWidth+"px",animationDuration:b.animationDuration,"-webkit-animationDuration":b.animationDuration,animationPlayState:b.webviewHide?"paused":b.animationPlayState,"-webkit-animationPlayState":b.webviewHide?"paused":b.animationPlayState,animationDelay:b.animationDelay,"-webkit-animationDelay":b.animationDelay})},{default:a((()=>[d(c(g.text),1)])),_:1},8,["id","class","style"])])),_:1},8,["id","class"])])),_:1},8,["class"]),!0===g.showGetMore||"true"===g.showGetMore?(i(),o(w,{key:1,class:"uni-noticebar__more uni-cursor-point",onClick:m.clickMore},{default:a((()=>[g.moreText.length>0?(i(),o(_,{key:0,style:l({color:g.moreColor}),class:"uni-noticebar__more-text"},{default:a((()=>[d(c(g.moreText),1)])),_:1},8,["style"])):(i(),o(y,{key:1,type:"right",color:g.moreColor,size:"16"},null,8,["color"]))])),_:1},8,["onClick"])):n("",!0),!0!==g.showClose&&"true"!==g.showClose||!1!==g.showGetMore&&"false"!==g.showGetMore?n("",!0):(i(),o(w,{key:2,class:"uni-noticebar-close uni-cursor-point"},{default:a((()=>[s(y,{type:"closeempty",color:g.color,size:"16",onClick:m.close},null,8,["color","onClick"])])),_:1}))])),_:1},8,["style","onClick"])):n("",!0)}],["__scopeId","data-v-46989114"]]);const G=U({name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:()=>({column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}),created(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy(){this.grid.children.forEach(((e,t)=>{e===this&&this.grid.children.splice(t,1)}))},methods:{_onClick(){this.grid.change({detail:{index:this.index}})}}},[["render",function(e,t,d,c,u,g){const f=h;return u.width?(i(),o(f,{key:0,style:l("width:"+u.width+";"+(u.square?"height:"+u.width:"")),class:"uni-grid-item"},{default:a((()=>[s(f,{class:r([{"uni-grid-item--border":u.showBorder,"uni-grid-item--border-top":u.showBorder&&d.index<u.column,"uni-highlight":u.highlight},"uni-grid-item__box"]),style:l({"border-right-color":u.borderColor,"border-bottom-color":u.borderColor,"border-top-color":u.borderColor}),onClick:g._onClick},{default:a((()=>[p(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])])),_:3},8,["style"])):n("",!0)}],["__scopeId","data-v-2c119250"]]);const D=U({name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide(){return{grid:this}},data:()=>({elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,width:0}),created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){setTimeout((()=>{this._getSize((e=>{this.children.forEach(((t,i)=>{t.width=e}))}))}),50)},change(e){this.$emit("change",e)},_getSize(t){e().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.width=parseInt((e[0].width-1)/this.column)+"px",t(this.width)}))}}},[["render",function(e,t,n,d,c,u){const g=h;return i(),o(g,{class:"uni-grid-wrap"},{default:a((()=>[s(g,{id:c.elId,ref:"uni-grid",class:r(["uni-grid",{"uni-grid--border":n.showBorder}]),style:l({"border-left-color":n.borderColor})},{default:a((()=>[p(e.$slots,"default",{},void 0,!0)])),_:3},8,["id","class","style"])])),_:3})}],["__scopeId","data-v-26adf091"]]);const M=U({data:()=>({gridAdpid:"",gridUnitId:"",notice:"",type:1,navs:[{url:"/pages/turtleSoup/turtleSoup",cover:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/f32eee15-08f9-4a8d-b113-9112a3abf1fe.png",title:"海龟汤",description:"是，否，与此无关"},{url:"/pages/guessWord/guessWord",cover:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/f3dafb50-4bf8-41f0-ba50-b153e51d8543.png",title:"你比划我猜",description:"主题题库，自动记分"},{url:"/pages/sudoku/sudoku",cover:"https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/f7cea5a9-9a5a-4e69-9d77-dac8981d2df5.png",title:"数独",description:"不同难度题目，自动判断"},{url:"/pages/ticTacToe/ticTacToe",cover:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/7f5ab5f5-3131-4e2c-bb76-eb32ece07bea.png",title:"井字棋",description:"线下休闲娱乐，自动记分"},{url:"/pages/scorer/scorer",cover:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/0f582136-aaaa-4d08-ab0a-a771c6af848d.png",title:"记分板",description:"聚会比赛计分工具"},{url:"/pages/rollDice/rollDice",cover:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/c7b538e6-431a-4faf-a0a4-a22ed087199c.png",title:"摇骰子",description:"6个6，开不开"},{url:"/pages/drawingBoard/drawingBoard",cover:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/f4319410-39df-4ad7-96fe-029747543db3.png",title:"绘画板",description:"你画我猜、涂鸦工具"},{url:"/pages/luckWheel/luckWheel",cover:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/f15d7fa8-f884-42c7-b69a-38e4453e27b1.png",title:"幸运转盘",description:"Spin The Bottle"},{url:"/pages/boardGame/boardGame",cover:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/68a0f0e0-94d6-4224-a7f2-3dbea35e9513.png",title:"聚会游戏推荐",description:"聚会小游戏规则玩法大全"}]}),methods:{typeChange(e){g(),this.type=e.currentIndex,f("nav_type",e.currentIndex)},handleGridClick(e){const{index:t}=e.detail,i=this.navs[t];this.handleNav(i)},handleNav:e=>e?e.msg?b({title:e.msg,icon:"error"}):void m({url:e.url}).catch((e=>{e.errMsg.includes("is not found")&&b({title:"找不到页面，可右上角反馈给开发者，谢谢",icon:"none",duration:3e3})})):b({title:"敬请期待...",icon:"error"})},onReady(){const e=y("nav_type");this.type=e||1;_().getConfig().then((e=>{e&&(this.notice=e.notice,this.navs=e.navs||this.navs,this.gridAdpid=e.gridAdpid||"",this.gridUnitId=e.gridUnitId||"")}))},onShareAppMessage:()=>({title:"游趣街 - 聚会游戏助手，海龟汤｜你比划我猜｜数独｜井字棋｜记分板｜摇骰子｜绘画板｜幸运转盘，快和小伙伴一起玩吧。",path:"/pages/index/index",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/df8b5b64-9f88-4dc5-9642-1c61e1d3acf7.png"}),onShareTimeline:()=>({title:"游趣街 - 聚会游戏助手，海龟汤｜你比划我猜｜数独｜井字棋｜记分板｜摇骰子｜绘画板｜幸运转盘，快和小伙伴一起玩吧。",path:"/pages/index/index",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/df8b5b64-9f88-4dc5-9642-1c61e1d3acf7.png"})},[["render",function(e,r,p,g,f,b){const m=S(t("uni-notice-bar"),B),y=S(t("uni-segmented-control"),I),_=h,x=v,U=S(t("uni-grid-item"),G),M=S(t("uni-grid"),D),T=u;return i(),o(_,{class:"container"},{default:a((()=>[f.notice?(i(),o(m,{key:0,single:"","show-icon":"",scrollable:"",showClose:"",text:f.notice},null,8,["text"])):n("",!0),s(_,{class:"top-wrap"},{default:a((()=>[s(y,{"style-type":"button",activeColor:"#316777",current:f.type,values:["列表","九宫格"],onClickItem:b.typeChange},null,8,["current","onClickItem"])])),_:1}),0===f.type?(i(),o(_,{key:1},{default:a((()=>[(i(!0),w(C,null,k(f.navs,((e,t)=>(i(),o(_,{key:e.title,class:"card",style:l({backgroundPositionY:-200*t+"rpx"}),onClick:t=>b.handleNav(e)},{default:a((()=>[s(x,{class:"cover",src:e.cover,mode:"aspectFit"},null,8,["src"]),s(_,{class:"title"},{default:a((()=>[d(c(e.title),1)])),_:2},1024),s(_,{class:"description"},{default:a((()=>[d(c(e.description),1)])),_:2},1024)])),_:2},1032,["style","onClick"])))),128))])),_:1})):n("",!0),1===f.type?(i(),o(M,{key:2,class:"grid",column:3,square:!1,onChange:b.handleGridClick},{default:a((()=>[(i(!0),w(C,null,k(f.navs,((e,t)=>(i(),o(U,{key:e.title,index:t},{default:a((()=>[s(_,{class:"grid-item"},{default:a((()=>[s(x,{class:"cover",src:e.cover,mode:"aspectFit"},null,8,["src"]),s(_,{class:"title"},{default:a((()=>[d(c(e.title),1)])),_:2},1024),s(_,{class:"description"},{default:a((()=>[d(c(e.description),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["index"])))),128)),s(U,{index:999},{default:a((()=>[s(_,{class:"grid-item"},{default:a((()=>[s(_,{class:"title"},{default:a((()=>[d("更多内容")])),_:1}),s(_,{class:"description"},{default:a((()=>[d("敬请期待...")])),_:1})])),_:1})])),_:1})])),_:1},8,["onChange"])):n("",!0),0===f.type?(i(),o(_,{key:3,class:"coming-soon"},{default:a((()=>[s(T,null,{default:a((()=>[d("更多内容，敬请期待...")])),_:1}),s(T,null,{default:a((()=>[d("Coming Soon...")])),_:1})])),_:1})):n("",!0)])),_:1})}],["__scopeId","data-v-796bd0e6"]]);export{M as default};
