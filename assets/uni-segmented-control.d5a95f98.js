import{o as t,a as e,w as n,p as s,F as r,q as o,n as l,e as c,d as a,f as u,t as d,i,g as y}from"./index-403a0c4c.js";import{_ as m}from"./uni-app.es.7b228572.js";const p=m({name:"UniSegmentedControl",emits:["clickItem"],props:{current:{type:Number,default:0},values:{type:Array,default:()=>[]},activeColor:{type:String,default:"#2979FF"},styleType:{type:String,default:"button"}},data:()=>({currentIndex:0}),watch:{current(t){t!==this.currentIndex&&(this.currentIndex=t)}},created(){this.currentIndex=this.current},methods:{_onClick(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}},[["render",function(m,p,x,_,b,f){const g=i,I=y;return t(),e(I,{class:l([["text"===x.styleType?"segmented-control--text":"segmented-control--button"],"segmented-control"]),style:c({borderColor:"text"===x.styleType?"":x.activeColor})},{default:n((()=>[(t(!0),s(r,null,o(x.values,((s,r)=>(t(),e(I,{class:l([["text"===x.styleType?"":"segmented-control__item--button",r===b.currentIndex&&"button"===x.styleType?"segmented-control__item--button--active":"",0===r&&"button"===x.styleType?"segmented-control__item--button--first":"",r===x.values.length-1&&"button"===x.styleType?"segmented-control__item--button--last":""],"segmented-control__item"]),key:r,style:c({backgroundColor:r===b.currentIndex&&"button"===x.styleType?x.activeColor:"",borderColor:r===b.currentIndex&&"text"===x.styleType||"button"===x.styleType?x.activeColor:"transparent"}),onClick:t=>f._onClick(r)},{default:n((()=>[a(I,null,{default:n((()=>[a(g,{style:c({color:r===b.currentIndex?"text"===x.styleType?x.activeColor:"#fff":"text"===x.styleType?"#000":x.activeColor}),class:l(["segmented-control__text","text"===x.styleType&&r===b.currentIndex?"segmented-control__item--text":""])},{default:n((()=>[u(d(s),1)])),_:2},1032,["style","class"])])),_:2},1024)])),_:2},1032,["class","style","onClick"])))),128))])),_:1},8,["class","style"])}],["__scopeId","data-v-83254b8d"]]);export{p as _};
