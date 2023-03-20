import{o as e,a as t,w as o,d as i,n as s,W as l,f as a,q as n,F as c,u as r,e as h,b as d,g as f,c as u,K as g,k as p,a3 as C,h as k,a4 as y,x as m,L as v,r as b}from"./index-a9461464.js";import{_ as w,r as x}from"./uni-app.es.0d8e3b12.js";const S=w({data:()=>({modelShow:!1,lineColor:"#000000",lineColors:["#000000","#ffffff","red","blue","yellow","green","#d925ff","#00b4ff","#ff00cc","#35ff81","#ff9c00","#ff7e00","#b4ff00","#28caa6","#490086","#deb7fe","#acacad","#525252","#a5896f","#bb3a30"],bgColor:"#ffffff",bgColors:["#000000","#ffffff"]}),methods:{open(e,t){this.lineColor=e,this.bgColor=t,this.modelShow=!0},checkModel(){this.modelShow=!1},checkLineColor(e){this.lineColor=e,this.$emit("setLineColor",e)},checkBgColor(e){this.bgColor=e,this.$emit("setBgColor",e),"#000000"===e?this.checkLineColor("#ffffff"):this.checkLineColor("#000000")}}},[["render",function(u,g,p,C,k,y){const m=f;return k.modelShow?(e(),t(m,{key:0,class:"color-picker",onClick:y.checkModel},{default:o((()=>[i(m,{class:s(["container",k.modelShow?"open-color":"close-color"]),onClick:g[0]||(g[0]=l((()=>{}),["stop"]))},{default:o((()=>[i(m,{class:"color-head"},{default:o((()=>[a("背景颜色")])),_:1}),i(m,{class:"color-box"},{default:o((()=>[(e(!0),n(c,null,r(k.bgColors,(l=>(e(),t(m,{key:l,onClick:e=>y.checkBgColor(l),class:s({active:k.bgColor==l})},{default:o((()=>[i(m,null,{default:o((()=>[i(m,{style:h({background:l})},null,8,["style"])])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1}),i(m,{class:"color-head"},{default:o((()=>[a("画笔颜色")])),_:1}),i(m,{class:"color-box"},{default:o((()=>[(e(!0),n(c,null,r(k.lineColors,(l=>(e(),t(m,{key:l,onClick:e=>y.checkLineColor(l),class:s({active:k.lineColor==l})},{default:o((()=>[i(m,null,{default:o((()=>[i(m,{style:h({background:l})},null,8,["style"])])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1})])),_:1},8,["class"])])),_:1},8,["onClick"])):d("",!0)}],["__scopeId","data-v-2b80d3dd"]]);const _=w({data:()=>({lineShow:!1,lineWidths:[4,8,12,16,18],lineWidth:4}),methods:{open(e=4){this.lineWidth=e,this.lineShow=!0},checkModel(){this.lineShow=!this.lineShow},checkline(e){this.lineWidth=e,this.$emit("setLine",e)}}},[["render",function(u,g,p,C,k,y){const m=f;return k.lineShow?(e(),t(m,{key:0,class:"line-picker",onClick:y.checkModel},{default:o((()=>[i(m,{class:s([k.lineShow?"open-line":"close-line"]),onClick:g[0]||(g[0]=l((()=>{}),["stop"]))},{default:o((()=>[i(m,{class:"line-head"},{default:o((()=>[a("线条选择器")])),_:1}),i(m,{class:"line-box"},{default:o((()=>[(e(!0),n(c,null,r(k.lineWidths,(l=>(e(),t(m,{class:s(["line-item",{active:k.lineWidth===l}]),key:l},{default:o((()=>[i(m,{onClick:e=>y.checkline(l),style:h({height:l+"px"})},null,8,["onClick","style"])])),_:2},1032,["class"])))),128))])),_:1})])),_:1},8,["class"])])),_:1},8,["onClick"])):d("",!0)}],["__scopeId","data-v-52310bb1"]]),L=""+new URL("pencli-90deddcb.svg",import.meta.url).href,W=""+new URL("eraser-8e802685.svg",import.meta.url).href,B=""+new URL("line-1d764da4.svg",import.meta.url).href,P=""+new URL("color-1df8810f.svg",import.meta.url).href,T=""+new URL("back-0961d432.svg",import.meta.url).href,R=""+new URL("clear-deb695f0.svg",import.meta.url).href,U=""+new URL("check-f05d65fc.svg",import.meta.url).href;const I=w({props:{canvasId:{type:String,default:`th-${Date.now()}`},actionBar:{type:Array,default:()=>["line","color","back","clear"]},isDownload:{type:Boolean,default:!1},horizontalScreen:{type:Boolean,default:!1},fileName:{type:String,default:"签名"},delineColor:{type:String,default:"#000000"},debgColor:{type:String,default:"#ffffff"},delineWidth:{type:Number,default:4}},data:()=>({canvasWidth:0,canvasHeight:0,context:"",actionShow:!0,history:[],actionColor:"#ffffff",bgColor:"#ffffff",lineColor:"#000000",lineWidth:4}),components:{colorPicker:S,linePicker:_},mounted(){this.lineColor=this.delineColor,this.actionColor=this.delineColor,this.bgColor=this.debgColor,this.lineWidth=this.delineWidth;u().in(this).select("#"+this.canvasId).fields({node:!0,size:!0}).exec((e=>{const t=e[0].node,o=t.getContext("2d"),i=g().pixelRatio;t.width=e[0].width*i,t.height=e[0].height*i,o.scale(i,i),this.context=o,this.canvasWidth=t.width,this.canvasHeight=t.height,this.clearCanvas()}))},methods:{judge(e){return!!this.actionBar.includes(e)},setType(e){"pen"===e?this.actionColor=this.lineColor:"eraser"===e&&(this.actionColor=this.bgColor)},openAction(e,t){"colorPicker"===e?this.$refs[e].open(this.lineColor,this.bgColor):this.$refs[e].open(this.lineWidth)},setBgColor(e){this.bgColor=e,this.actionColor=this.lineColor,this.clear()},setLineColor(e){this.lineColor=e,this.actionColor=e},setLine(e){this.lineWidth=e},checkAction(){this.actionShow=!this.actionShow},async saveCanvas(){if(0===this.history.length)return p({title:"当前画板空空如也～",icon:"error"});const e=await this.canvasToFilPath();return this.isDownload?new Promise(((t,o)=>{try{const o=document.createElement("a");o.href=e,o.download=this.fileName,document.body.appendChild(o),o.click(),o.remove(),t()}catch(i){o(i)}})):(this.$emit("submit",e),!1)},canvasToFilPath(e={}){return new Promise(((e,t)=>{u().in(this).select("#"+this.canvasId).fields({node:!0,size:!0}).exec((o=>{const i=o[0].node;C({canvas:i,width:i.width,height:i.height,success:t=>{e(t.tempFilePath)},fail:e=>{t(e)}})}))}))},historyReset(){this.history.forEach(((e,t)=>{let{color:o,width:i}=e.style;if(this.context.beginPath(),this.context.lineCap="round",this.context.strokeStyle=o,this.context.lineWidth=i,e.coordinates.length>=2)e.coordinates.forEach((e=>{"touchstart"==e.type?this.context.moveTo(e.x,e.y):this.context.lineTo(e.x,e.y)}));else{const t=e.coordinates[0];this.context.moveTo(t.x,t.y),this.context.lineTo(t.x+1,t.y)}this.context.stroke()}))},goBack(){this.history.pop(),this.clearCanvas(),this.historyReset()},clear(){this.history=[],this.clearCanvas()},clearCanvas(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.context.fillStyle=this.bgColor,this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight)},canvasStart(e){let{x:t,y:o,pageX:i,pageY:s}=e.touches[0];this.history.push({style:{color:this.actionColor,width:this.lineWidth},coordinates:[{type:e.type,x:t||i,y:o||s}]}),this.drawGraphics()},canvasMove(e){let{x:t,y:o}=e.touches[0];this.history[this.history.length-1].coordinates.push({type:e.type,x:t,y:o}),this.drawGraphics()},drawGraphics(){let e=this.history.length;if(!e)return;let t,o,i=this.history[e-1],s=i.coordinates;if(!s.length)return;s.length<2?(t=s[s.length-1],o={x:t.x+1,y:t.y}):(t=s[s.length-2],o=s[s.length-1]);let l=i.style;this.context.beginPath(),this.context.lineCap="round",this.context.strokeStyle=l.color,this.context.lineWidth=l.width,this.context.moveTo(t.x,t.y),this.context.lineTo(o.x,o.y),this.context.stroke()}}},[["render",function(n,c,r,h,u,g){const p=f,C=y,b=m,w=v("color-picker"),x=v("line-picker");return e(),t(p,{class:"drawing-board"},{default:o((()=>[i(C,{type:"2d",class:"autograph","canvas-id":r.canvasId,id:r.canvasId,"disable-scroll":"true",onTouchstart:c[0]||(c[0]=l((e=>g.canvasStart(e)),["stop"])),onTouchmove:c[1]||(c[1]=e=>g.canvasMove(e))},{default:o((()=>[0==u.history.length?(e(),t(p,{key:0,class:s(["default-text",r.horizontalScreen?"rote-text":""])},{default:o((()=>[k(n.$slots,"text",{},(()=>[a("绘制区域")]),!0)])),_:3},8,["class"])):d("",!0)])),_:3},8,["canvas-id","id"]),i(p,{class:s(["action-box",r.horizontalScreen?"horizontalScreen":""])},{default:o((()=>[i(p,{class:"action-bar"},{default:o((()=>[u.actionShow?(e(),t(p,{key:0,class:s(["action-up",[u.actionShow?"action-open":"action-close"]])},{default:o((()=>[i(b,{class:s(["image",{active:u.actionColor===u.lineColor}]),src:L,onClick:c[2]||(c[2]=e=>g.setType("pen"))},null,8,["class"]),i(b,{class:s(["image",{active:u.actionColor===u.bgColor}]),src:W,onClick:c[3]||(c[3]=e=>g.setType("eraser"))},null,8,["class"]),g.judge("line")?(e(),t(b,{key:0,class:"image",src:B,onClick:c[4]||(c[4]=e=>g.openAction("linePicker",e))})):d("",!0),g.judge("color")?(e(),t(b,{key:1,class:"image",src:P,onClick:c[5]||(c[5]=e=>g.openAction("colorPicker",e))})):d("",!0),g.judge("back")?(e(),t(b,{key:2,class:"image",src:T,onClick:g.goBack},null,8,["onClick"])):d("",!0),g.judge("clear")?(e(),t(b,{key:3,class:"image",src:R,onClick:g.clear},null,8,["onClick"])):d("",!0)])),_:1},8,["class"])):d("",!0),0!=r.actionBar.length?(e(),t(b,{key:1,class:s(["check image",[u.actionShow?"roteLeft":"roteRight"]]),src:U,onClick:g.checkAction},null,8,["onClick","class"])):d("",!0)])),_:1}),i(p,{class:"th-submit",onClick:g.saveCanvas},{default:o((()=>[a("保存")])),_:1},8,["onClick"])])),_:1},8,["class"]),i(w,{ref:"colorPicker",onSetLineColor:g.setLineColor,onSetBgColor:g.setBgColor},null,8,["onSetLineColor","onSetBgColor"]),i(x,{ref:"linePicker",onSetLine:g.setLine},null,8,["onSetLine"])])),_:3})}],["__scopeId","data-v-89bce3fd"]]);const M=w({components:{drawingBoard:I},methods:{getFilePath(e){if(!e)return p({title:"获取图片失败，请右上角反馈给开发者，谢谢。",icon:"none",duration:3e3});this.shareImage(e)},shareImage(e){uni.showShareImageMenu({path:e,success(e){p({title:"操作成功",icon:"success"})},fail(e){e.errMsg.includes("cancel")||(e.errMsg.includes("auth")?p({title:"请检查权限，右上角更多-设置-添加到相册。",icon:"none",duration:3e3}):p({title:"操作失败，可右上角反馈给开发者，谢谢",icon:"none",duration:3e3}))}})}},onShareAppMessage:()=>({title:"游趣街 - 绘画板，你画我猜、涂鸦工具。",path:"/pages/drawingBoard/drawingBoard",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/7b1edd93-fdf3-4142-97a3-aea0e9237e8e.png"}),onShareTimeline:()=>({title:"游趣街 - 绘画板，你画我猜、涂鸦工具。",path:"/pages/drawingBoard/drawingBoard",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/7b1edd93-fdf3-4142-97a3-aea0e9237e8e.png"})},[["render",function(s,l,a,n,c,r){const h=x(b("drawing-board"),I),d=f;return e(),t(d,{class:"container"},{default:o((()=>[i(h,{"canvas-id":"autograph",onSubmit:r.getFilePath},null,8,["onSubmit"])])),_:1})}],["__scopeId","data-v-987e52e9"]]);export{M as default};
