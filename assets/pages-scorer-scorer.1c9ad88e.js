import{l as t,v as e,I as l,j as r,s,o as i,a as o,w as a,m as c,g as n,d as f,B as h,C as p,n as u,f as d,b as g,p as C,q as m,F as b,r as y,i as k,u as _,a1 as x,W as N,e as L}from"./index-87d45eb9.js";import{_ as w}from"./uni-segmented-control.92312e1e.js";import{_ as v,r as T}from"./uni-app.es.850ad573.js";import{_ as j}from"./uni-icons.23d7a4f9.js";import{_ as I}from"./v-flip-num.a6330b9c.js";import{_ as U,a as $}from"./uni-forms.bc5d1f97.js";import{_ as A}from"./uni-popup.16ef463d.js";import"./uni-transition.3b1a3e67.js";const D=v({data:()=>({bannerAdpid:"",bannerUnitId:"",type:0,calcTarget:"left",leftList:[0,0,0],rightList:[0,0,0],centerList:[0,0,0],changeNum:1,centerColor:"#3f51b5",leftColor:"#2196f3",rightColor:"#f44336",colors:["#000000","#2196f3","#f44336","#673ab7","#3f51b5","#4caf50","#ffc107","#795548","#9e9e9e","#607d8b"]}),methods:{init(){const e=t("scorer_config");if(!e)return;const{type:l,changeNum:r,centerColor:s,leftColor:i,rightColor:o,leftList:a,rightList:c,centerList:n}=e;this.type=l||0,this.changeNum=r||1,this.centerColor=s||"#3f51b5",this.leftColor=i||"#2196f3",this.rightColor=o||"#f44336",this.leftList=a||[0,0,0],this.rightList=c||[0,0,0],this.centerList=n||[0,0,0],this.calcTarget=this.type?"center":"left",this.$nextTick((t=>{a.forEach(((t,e)=>{0!==t&&this.$refs["leftNum"+e].flipDown(0,t)})),c.forEach(((t,e)=>{0!==t&&this.$refs["rightNum"+e].flipDown(0,t)})),n.forEach(((t,e)=>{0!==t&&this.$refs["centerNum"+e].flipDown(0,t)}))}))},setting(){e(),this.$refs.popup.open("right")},reset(){e(),l({title:"提示",content:"是否清零分数？",success:t=>{t.confirm&&(0===this.type&&this.$nextTick((t=>{this.leftList.forEach(((t,e)=>{0!==t&&this.$refs["leftNum"+e].flipDown(t,0)})),this.rightList.forEach(((t,e)=>{0!==t&&this.$refs["rightNum"+e].flipDown(t,0)})),this.leftList=[0,0,0],this.rightList=[0,0,0]})),1===this.type&&this.$nextTick((t=>{this.centerList.forEach(((t,e)=>{0!==t&&this.$refs["centerNum"+e].flipDown(t,0)})),this.centerList=[0,0,0]})))}})},typeChange(t){e(),this.type=t.currentIndex,0===t.currentIndex&&(this.calcTarget="left"),1===t.currentIndex&&(this.calcTarget="center")},handleCalc(t="add"){const e="add"===t?this.changeNum:-this.changeNum,l=this[this.calcTarget+"List"],s=Number(l.join(""))+e;if(s<0||s>999)return r({title:"分数已经超范围",icon:"error"});const i=("00"+s).slice(-3).split("").map((t=>Number(t)));for(let r=i.length-1;r>=0;r--)if(i[r]!==l[r]){const e=this.$refs[this.calcTarget+"Num"+r];"add"===t?e.flipDown(l[r],i[r]):e.flipUp(l[r],i[r])}this[this.calcTarget+"List"]=i},cacheData(){const t={type:this.type,changeNum:this.changeNum,centerColor:this.centerColor,leftColor:this.leftColor,rightColor:this.rightColor,centerList:this.centerList,leftList:this.leftList,rightList:this.rightList};s("scorer_config",t)}},computed:{isThree(){return this.leftList[0]>0||this.rightList[0]>0}},mounted(){this.init()},unmounted(){this.cacheData()},onLoad(){c().getConfig().then((t=>{this.bannerAdpid=t.bannerAdpid||"",this.bannerAdpid=t.bannerAdpid||""}))},onShareAppMessage:()=>({title:"游趣街 - 计分板，聚会比赛计分工具!",path:"/pages/scorer/scorer",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/07304cc5-bc46-4c97-87ef-5225e421a8fe.jpg"}),onShareTimeline:()=>({title:"游趣街 - 计分板，聚会比赛计分工具!",path:"/pages/scorer/scorer",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/07304cc5-bc46-4c97-87ef-5225e421a8fe.jpg"})},[["render",function(t,e,l,r,s,c){const v=T(y("uni-segmented-control"),w),D=n,E=T(y("uni-icons"),j),z=T(y("v-flip-num"),I),F=k,G=_,K=x,S=T(y("uni-forms-item"),U),V=T(y("uni-forms"),$),Y=N,q=T(y("uni-popup"),A);return i(),o(D,{class:"container"},{default:a((()=>[f(D,{class:"top-wrap"},{default:a((()=>[f(v,{"style-type":"button",activeColor:"#424242",current:s.type,values:["比赛","单人"],onClickItem:c.typeChange},null,8,["current","onClickItem"])])),_:1}),f(E,{class:"reset-btn",type:"refresh-filled",size:"30",onClick:c.reset},null,8,["onClick"]),f(E,{class:"setting-btn",type:"gear-filled",size:"30",onClick:c.setting},null,8,["onClick"]),f(D,{class:"main"},{default:a((()=>[h(f(D,{class:u(["left",{active:"left"===s.calcTarget}]),onClick:e[0]||(e[0]=t=>s.calcTarget="left")},{default:a((()=>[h(f(z,{class:"flipper",ref:"leftNum0",width:"90rpx",height:"150rpx",bgColor:s.leftColor},null,8,["bgColor"]),[[p,c.isThree]]),f(z,{class:"flipper",ref:"leftNum1",width:"90rpx",height:"150rpx",bgColor:s.leftColor},null,8,["bgColor"]),f(z,{class:"flipper",ref:"leftNum2",width:"90rpx",height:"150rpx",bgColor:s.leftColor},null,8,["bgColor"])])),_:1},8,["class"]),[[p,0===s.type]]),h(f(F,{class:"colon"},{default:a((()=>[d(":")])),_:1},512),[[p,0===s.type]]),h(f(D,{class:u(["right",{active:"right"===s.calcTarget}]),onClick:e[1]||(e[1]=t=>s.calcTarget="right")},{default:a((()=>[h(f(z,{class:"flipper",ref:"rightNum0",width:"90rpx",height:"150rpx",bgColor:s.rightColor},null,8,["bgColor"]),[[p,c.isThree]]),f(z,{class:"flipper",ref:"rightNum1",width:"90rpx",height:"150rpx",bgColor:s.rightColor},null,8,["bgColor"]),f(z,{class:"flipper",ref:"rightNum2",width:"90rpx",height:"150rpx",bgColor:s.rightColor},null,8,["bgColor"])])),_:1},8,["class"]),[[p,0===s.type]]),h(f(D,{class:"center"},{default:a((()=>[f(z,{class:"flipper",ref:"centerNum0",width:"90rpx",height:"150rpx",bgColor:s.centerColor},null,8,["bgColor"]),f(z,{class:"flipper",ref:"centerNum1",width:"90rpx",height:"150rpx",bgColor:s.centerColor},null,8,["bgColor"]),f(z,{class:"flipper",ref:"centerNum2",width:"90rpx",height:"150rpx",bgColor:s.centerColor},null,8,["bgColor"])])),_:1},512),[[p,1===s.type]])])),_:1}),f(D,{class:"btn-wrap"},{default:a((()=>[f(E,{class:"btn",type:"minus-filled",size:"80",onClick:e[2]||(e[2]=t=>c.handleCalc("subtract"))}),f(E,{class:"btn",type:"plus-filled",size:"80",onClick:e[3]||(e[3]=t=>c.handleCalc("add"))})])),_:1}),h(f(F,{class:"tip-text"},{default:a((()=>[d("设置可改变基数和颜色～")])),_:1},512),[[p,0===s.type]]),h(f(F,{class:"tip-text"},{default:a((()=>[d("右上角转发给好友实现多人计分喔～")])),_:1},512),[[p,1===s.type]]),f(q,{ref:"popup","background-color":"#fff",animation:!0},{default:a((()=>[f(Y,{class:"popup-scroll-y","scroll-y":"true"},{default:a((()=>[f(D,{class:"popup-content"},{default:a((()=>[s.bannerAdpid||s.bannerAdpid?(i(),o(D,{key:0,style:{width:"100%",display:"flex","justify-content":"center","margin-bottom":"20px"}},{default:a((()=>[s.bannerAdpid&&!s.bannerUnitId?(i(),o(G,{key:0,adpid:s.bannerAdpid},null,8,["adpid"])):g("",!0),s.bannerUnitId?(i(),o(G,{key:1,unitId:s.bannerUnitId},null,8,["unitId"])):g("",!0)])),_:1})):g("",!0),f(V,{ref:"baseForm"},{default:a((()=>[f(S,{label:"基数"},{default:a((()=>[f(K,{class:"slider",value:s.changeNum,onChange:e[4]||(e[4]=t=>s.changeNum=t.detail.value),min:"1",max:"10","show-value":""},null,8,["value"])])),_:1}),f(S,{label:"单人颜色"},{default:a((()=>[f(D,{class:"color-picker-view"},{default:a((()=>[(i(!0),C(b,null,m(s.colors,(t=>(i(),o(D,{class:u(["color-picker",{"color-active":this.centerColor===t}]),key:t,onClick:e=>this.centerColor=t},{default:a((()=>[f(D,{class:"color-inside",style:L({backgroundColor:t})},null,8,["style"])])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),f(S,{label:"比赛左方"},{default:a((()=>[f(D,{class:"color-picker-view"},{default:a((()=>[(i(!0),C(b,null,m(s.colors,(t=>(i(),o(D,{class:u(["color-picker",{"color-active":this.leftColor===t}]),key:t,onClick:e=>this.leftColor=t},{default:a((()=>[f(D,{class:"color-inside",style:L({backgroundColor:t})},null,8,["style"])])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),f(S,{label:"比赛右方"},{default:a((()=>[f(D,{class:"color-picker-view"},{default:a((()=>[(i(!0),C(b,null,m(s.colors,(t=>(i(),o(D,{class:u(["color-picker",{"color-active":this.rightColor===t}]),key:t,onClick:e=>this.rightColor=t},{default:a((()=>[f(D,{class:"color-inside",style:L({backgroundColor:t})},null,8,["style"])])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1})])),_:1},512)])),_:1})}],["__scopeId","data-v-489fa970"]]);export{D as default};
