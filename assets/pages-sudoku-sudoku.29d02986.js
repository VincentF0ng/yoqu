import{o as e,a as t,w as s,f as a,t as l,e as n,g as i,m as o,v as c,R as r,k as h,D as u,G as d,s as f,p,d as m,A as g,B as k,n as b,q as w,u as C,F as v,r as I,x as _,b as y}from"./index-a9461464.js";import{_ as x,r as $}from"./uni-app.es.0d8e3b12.js";import{_ as T}from"./uni-transition.7dd7ccac.js";import{_ as M}from"./uni-icons.3e727061.js";import{_ as H}from"./r-canvas.d69f8cae.js";const S=x({name:"count-up",props:{color:{type:String,default:"#000"},auto:{type:Boolean,default:!1},showHour:{type:Boolean,default:!1}},data:()=>({timer:null,second:0}),computed:{timeString(){return this.secondToString()}},methods:{start(){this.timer||(this.timer=setInterval((()=>{this.second++,this.second>86400&&this.reset()}),1e3))},stop(){clearInterval(this.timer),this.timer=null},reset(e=0){this.second=e>0?e:0},secondToString(){const e=this.second,t=("0"+e%60).slice(-2),s=("0"+Math.floor(e/60%60)).slice(-2),a=("0"+Math.floor(e/60/60)).slice(-2);return this.showHour?a+":"+s+":"+t:s+":"+t},getTime(e="string"){switch(e){case"string":default:return this.secondToString();case"second":return this.second}}},created(){this.auto&&this.start()}},[["render",function(o,c,r,h,u,d){const f=i;return e(),t(f,{class:"count-up",style:n({color:r.color})},{default:s((()=>[a(l(d.timeString),1)])),_:1},8,["style"])}]]);function G(e){let t;switch(e){case"easy":default:t=30;break;case"medium":t=40;break;case"hard":t=50;break;case"experts":t=56}let s=Array.from({length:9},(()=>Array(9).fill(0)));for(N(s);t>0;){let e=Math.floor(9*Math.random()),a=Math.floor(9*Math.random());0!==s[e][a]&&(s[e][a]=0,t--)}return s}function N(e){for(let t=0;t<9;t++)for(let s=0;s<9;s++)if(0===e[t][s]){let a=[1,2,3,4,5,6,7,8,9];for(;a.length>0;){let l=Math.floor(Math.random()*a.length),n=a[l];if(J(e,n,t,s)){if(e[t][s]=n,N(e))return!0;e[t][s]=0}a.splice(l,1)}return!1}return!0}function J(e,t,s,a){for(let l=0;l<9;l++){if(e[s][l]===t)return!1;if(e[l][a]===t)return!1;let n=3*Math.floor(s/3)+Math.floor(l/3),i=3*Math.floor(a/3)+l%3;if(e[n][i]===t)return!1}return!0}const F=x({data:()=>({bannerAdpid:"",bannerUnitId:"",started:!1,over:!1,level:"",sudoku:[],pencilInfo:{},fillNum:[],faultCount:0,highlight:null,selectedI:null,selectedJ:null,tool:"pen",showHelp:!1,resTempFilePath:""}),methods:{init(){const e=o("sudoku_config");if(!e)return;const{level:t,sudoku:s,pencilInfo:a,fillNum:l,faultCount:n,time:i}=e;this.level=t||"",this.sudoku=s||[],this.pencilInfo=a||{},this.fillNum=l||[],this.faultCount=n||0,this.$refs.countup.reset(i||0)},clear(){this.level="",this.sudoku=[],this.pencilInfo={},this.fillNum=[],this.faultCount=0,this.highlight=null,this.selectedI=null,this.selectedJ=null,this.showHelp=!1,this.$refs.countup.reset()},startGame(e){c(),this.level?r({title:"提示",content:"您确定要放弃当前暂停都游戏吗？",success:t=>{t.confirm&&(this.clear(),this.level=e,this.started=!0,this.over=!1,this.resTempFilePath="",this.sudoku=G(e),this.$refs.countup.start())}}):(this.clear(),this.level=e,this.started=!0,this.over=!1,this.resTempFilePath="",this.sudoku=G(e),this.$refs.countup.start())},continueGame(){c(),this.highlight=null,this.selectedI=null,this.selectedJ=null,this.showHelp=!1,this.started=!0,this.over=!1,this.$refs.countup.start()},handleTap(e,t){const s=this.sudoku[e][t];s?(this.highlight=s,this.selectedI=null,this.selectedJ=null):(this.highlight=null,this.selectedI=e,this.selectedJ=t)},handleChangeTool(){c(),this.tool="pen"===this.tool?"pencil":"pen"},handleBack(){c(),this.started=!1,this.$refs.countup.stop()},handleHelp(){c(),this.showHelp=!this.showHelp,this.showHelp?this.$refs.countup.stop():this.$refs.countup.start()},handlePick(e){const t=this.selectedI,s=this.selectedJ;if(null===t||null===s)return this.handleHelp();if("pen"===this.tool){if(this.fillNum.includes(e))return;this.handleJude(t,s,e)}else{const a="row"+t+"col"+s;if(this.pencilInfo[a]){const t=this.pencilInfo[a].findIndex((t=>t===e));-1===t?this.pencilInfo[a].push(e):(this.pencilInfo[a].splice(t,1),0===this.pencilInfo[a].length&&(this.pencilInfo[a]=null))}else this.pencilInfo[a]=[e]}},handleJude(e,t,s){const a=JSON.parse(JSON.stringify(this.sudoku));if(a[e][t]=s,J(this.sudoku,s,e,t)&&N(a))this.sudoku[e][t]=s,this.handleTap(e,t),this.pencilInfo["row"+e+"col"+t]&&(this.pencilInfo["row"+e+"col"+t]=null),function(e,t){let s=0;for(let a=0;a<9;a++)e[a].includes(t)&&s++;return 9===s}(this.sudoku,s)&&(this.fillNum.push(s),9===this.fillNum.length&&this.endGame(!0));else{if(c(),this.faultCount++,5===this.faultCount)return this.endGame(!1);h({icon:"error",title:"数字有误",duration:1500})}},pencilSelected(e){const t=this.pencilInfo["row"+this.selectedI+"col"+this.selectedJ];if(t&&t.includes(e))return"pencil-selected"},async endGame(e){this.$refs.countup.stop(),this.started=!1,this.over=!0;const t=[],s="https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/ca7abf38-9ef8-46fd-8a15-e9a6dc5d42ea.png",a="https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/b93b7b50-c1ec-49ef-a5ce-d078157f0604.png";switch(this.level){case"easy":t.push(s,a,a,a);break;case"medium":t.push(s,s,a,a);break;case"hard":t.push(s,s,s,a);break;case"experts":t.push(s,s,s,s)}u({title:"生成海报中..."}),await this.$refs.rCanvas.clearCanvas(),await this.$refs.rCanvas.drawImage({url:"https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/dbc884e2-dbe0-43e1-ba57-95dcb78ec41a.png",x:0,y:0,w:750,h:750}).catch((e=>{h({title:e,icon:"none"})})),await this.$refs.rCanvas.drawImage({url:e?"https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/eedb4104-e8cf-46e3-a54e-d016b3575c70.png":"https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/eae90072-06a2-4ce3-908c-a9b81c2c2ee5.png",x:0,y:10,w:750,h:233}).catch((e=>{h({title:e,icon:"none"})}));for(let l=0;l<t.length;l++)await this.$refs.rCanvas.drawImage({url:t[l],x:290+90*l,y:340,w:80,h:80}).catch((e=>{h({title:e,icon:"none"})}));if(this.faultCount)for(let l=0;l<this.faultCount;l++)await this.$refs.rCanvas.drawImage({url:"https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/abd979e2-922d-49ff-9869-a864682f0ec5.png",x:300+70*l,y:460,w:43,h:62}).catch((e=>{h({title:e,icon:"none"})}));else await this.$refs.rCanvas.drawText({text:"None",x:290,y:520,text_align:"left",font_color:"#f3b544",font_weight:"bolder",font_size:70}).catch((e=>{h({title:e,icon:"none"})}));await this.$refs.rCanvas.drawText({text:this.$refs.countup.getTime(),x:290,y:625,text_align:"left",font_color:"#f3b544",font_weight:"bolder",font_size:70}).catch((e=>{h({title:e,icon:"none"})})),await this.$refs.rCanvas.draw((e=>{this.resTempFilePath=e.tempFilePath})),d(),this.clear(),this.cacheData()},restartGame(){c(),this.start=!1,this.over=!1},shareImage(){c(),uni.showShareImageMenu({path:this.resTempFilePath,success(e){h({title:"操作成功",icon:"success"})},fail(e){e.errMsg.includes("cancel")||(e.errMsg.includes("auth")?h({title:"请检查权限，右上角更多-设置-添加到相册。",icon:"none",duration:3e3}):h({title:"操作失败，可右上角反馈给开发者，谢谢",icon:"none",duration:3e3}))}})},cacheData(){this.$refs.countup.stop();const e={level:this.level,sudoku:this.sudoku,pencilInfo:this.pencilInfo,fillNum:this.fillNum,faultCount:this.faultCount,time:this.$refs.countup.getTime("second")};f("sudoku_config",e)}},onUnload(){this.cacheData()},onHide(){this.cacheData()},onShow(){this.started&&this.$refs.countup.start()},onLoad(){p().getConfig().then((e=>{this.bannerAdpid=e.bannerAdpid||"",this.bannerUnitId=e.bannerUnitId||""})),this.$refs.rCanvas.init({canvas_id:"rCanvas",canvas_width:750,canvas_height:750}),this.init()},onShareAppMessage:()=>({title:"游趣街 - 数独，不同难度随机题目，自动判断。",path:"/pages/sudoku/sudoku",imageUrl:"https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/f7cea5a9-9a5a-4e69-9d77-dac8981d2df5.png"}),onShareTimeline:()=>({title:"游趣街 - 数独，不同难度随机题目，自动判断。",path:"/pages/sudoku/sudoku",imageUrl:"https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/f7cea5a9-9a5a-4e69-9d77-dac8981d2df5.png"})},[["render",function(a,l,o,c,r,h){const u=i,d=$(I("count-up"),S),f=$(I("uni-transition"),T),p=$(I("uni-icons"),M),x=_,G=$(I("r-canvas"),H);return e(),t(u,{class:"container"},{default:s((()=>[m(u,{class:b(["first-screen",{"screen-left-1":r.started,"screen-left-2":r.over}])},{default:s((()=>[m(u,{class:"title"}),m(u,{class:"menu"},{default:s((()=>[m(u,{class:"menu-button",onClick:l[0]||(l[0]=e=>h.startGame("easy"))}),m(u,{class:"menu-button",onClick:l[1]||(l[1]=e=>h.startGame("medium"))}),m(u,{class:"menu-button",onClick:l[2]||(l[2]=e=>h.startGame("hard"))}),m(u,{class:"menu-button",onClick:l[3]||(l[3]=e=>h.startGame("experts"))})])),_:1}),g(m(u,{class:"continue",onClick:h.continueGame},null,8,["onClick"]),[[k,r.level]])])),_:1},8,["class"]),m(u,{class:b(["game-screen",{"screen-center":r.started,"screen-left-1":r.over}])},{default:s((()=>[m(u,{class:"game-head"},{default:s((()=>[m(u,{class:"spirit back",onClick:h.handleBack},null,8,["onClick"]),m(d,{ref:"countup",color:"#fff"},null,512),m(u,{class:"spirit notice",onClick:h.handleHelp},null,8,["onClick"])])),_:1}),m(u,{class:"game-table"},{default:s((()=>[(e(!0),w(v,null,C(r.sudoku,((a,l)=>(e(),w(v,{key:"box"+l},[(e(!0),w(v,null,C(a,((a,n)=>(e(),t(u,{id:""+l+n,class:"box",key:"box"+l+n,onClick:e=>h.handleTap(l,n)},{default:s((()=>[m(u,{class:b(["spirit",{selected:l===r.selectedI&&n===r.selectedJ}])},null,8,["class"]),m(u,{class:b(["spirit",{highlight:a===r.highlight}])},null,8,["class"]),m(u,{class:b(["spirit num","num"+a])},{default:s((()=>[r.pencilInfo["row"+l+"col"+n]?(e(!0),w(v,{key:0},C(r.pencilInfo["row"+l+"col"+n],(s=>(e(),t(u,{class:b(["spirit pencil-num","num"+s]),key:"pencil"+s},null,8,["class"])))),128)):y("",!0)])),_:2},1032,["class"])])),_:2},1032,["id","onClick"])))),128))],64)))),128))])),_:1}),m(u,{class:"game-info"},{default:s((()=>[m(u,{class:"error-wrap"},{default:s((()=>[(e(!0),w(v,null,C(r.faultCount,(s=>(e(),t(u,{class:"spirit error",key:"error"+s})))),128))])),_:1}),m(u,{class:"option-wrap",onClick:h.handleChangeTool},{default:s((()=>[m(f,{"mode-class":"fade",show:"pen"===r.tool},{default:s((()=>[m(u,{class:"spirit pen"})])),_:1},8,["show"]),m(f,{"mode-class":"fade",show:"pencil"===r.tool},{default:s((()=>[m(u,{class:"spirit pencil"})])),_:1},8,["show"])])),_:1},8,["onClick"])])),_:1}),m(u,{class:"game-picker"},{default:s((()=>[(e(),w(v,null,C(9,(e=>m(u,{class:b(["picker-num spirit",["num"+e,"pencil"===r.tool?"pencil-num":"pen",r.fillNum.includes(e)?"hide":"",h.pencilSelected(e)]]),key:"num"+e,style:n({top:e%2*-20+"rpx"}),onClick:t=>h.handlePick(e)},null,8,["class","style","onClick"]))),64))])),_:1}),m(f,{"mode-class":"fade",show:r.showHelp},{default:s((()=>[m(u,{class:"game-help"},{default:s((()=>[m(p,{class:"help-close",type:"closeempty",color:"#fff",size:"30",onClick:h.handleHelp},null,8,["onClick"])])),_:1})])),_:1},8,["show"])])),_:1},8,["class"]),m(u,{class:b(["game-over",{"screen-center":r.over}]),style:n({"padding-top":r.bannerAdpid||r.bannerUnitId?"300rpx":"0"})},{default:s((()=>[m(x,{class:"game-res",src:r.resTempFilePath,mode:"aspectFit"},null,8,["src"]),m(u,{class:"action-wrap"},{default:s((()=>[m(u,{class:"action-btn restart",onClick:h.restartGame},null,8,["onClick"]),m(u,{class:"action-btn save",onClick:h.shareImage},null,8,["onClick"])])),_:1})])),_:1},8,["class","style"]),m(G,{ref:"rCanvas",style:{position:"absolute",top:"100%"}},null,512)])),_:1})}],["__scopeId","data-v-143113af"]]);export{F as default};
