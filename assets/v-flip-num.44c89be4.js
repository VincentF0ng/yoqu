import{o as t,a as i,w as a,d as e,n as s,e as r,g as o}from"./index-0cbfb94b.js";import{_ as l}from"./uni-app.es.5d2879ae.js";const n=l({name:"v-flip-num",data:()=>({isFlipping:!1,flipType:"down",frontTextFromData:0,backTextFromData:1}),props:{width:{type:String,default:"120rpx"},height:{type:String,default:"200rpx"},bgColor:{type:String,default:"#000"},frontText:{type:[Number,String],default:0},backText:{type:[Number,String],default:1},duration:{type:Number,default:400}},methods:{_textClass:t=>"number"+t,_flip(t,i,a){if(this.isFlipping)return!1;this.frontTextFromData=i,this.backTextFromData=a,this.flipType=t,this.isFlipping=!0,setTimeout((()=>{this.isFlipping=!1,this.frontTextFromData=a}),this.duration)},flipDown(t,i){this._flip("down",t,i)},flipUp(t,i){this._flip("up",t,i)},setFront(t){this.frontTextFromData=t},setBack(t){this.backTextFromData=t}},onReady(){this.setFront(this.frontText),this.setBack(this.backText)}},[["render",function(l,n,p,h,f,d){const g=o;return t(),i(g,{class:s(["M-Flipper",[f.flipType,{go:f.isFlipping}]]),style:r({width:p.width,height:p.height,lineHeight:p.height,fontSize:p.width,"--bg-color":p.bgColor})},{default:a((()=>[e(g,{class:s(["digital front",d._textClass(f.frontTextFromData)])},null,8,["class"]),e(g,{class:s(["digital back",d._textClass(f.backTextFromData)])},null,8,["class"])])),_:1},8,["style","class"])}],["__scopeId","data-v-9badfdb3"]]);export{n as _};
