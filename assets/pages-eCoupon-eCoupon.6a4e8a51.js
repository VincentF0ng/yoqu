import{a1 as e,v as t,k as s,E as a,L as l,G as n,o,a as p,w as c,g as d,d as i,u as h,x as r,F as u,f as y,r as f,t as m,b as g,y as x}from"./index-ab7ec73d.js";import{_ as I}from"./uni-segmented-control.4a28ee8f.js";import{r as b}from"./uni-app.es.f46513ae.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";const _=T({data:()=>({typeScrollLeft:0,typeIndex:0,typeList:["精选","外卖","出行","娱乐","淘宝","京东","拼多多"],types:[{label:"精选",type:0},{label:"外卖",type:1},{label:"出行",type:2},{label:"娱乐",type:3},{label:"淘宝",type:4},{label:"京东",type:5},{label:"拼多多",type:6}],list:[],touchX:0}),computed:{coupons(){return 0===this.typeIndex?this.list.filter((e=>1===e.chosen)):this.list.filter((e=>e.type===this.types[this.typeIndex].type))}},methods:{handleTouchStart(e){this.touchX=e.changedTouches.length?e.changedTouches[0].pageX:0},handleTouchEnd(t){const s=t.changedTouches.length?t.changedTouches[0].pageX:0;this.touchX-s>80?(this.typeIndex===this.typeList.length-1?this.typeIndex=0:this.typeIndex++,this.typeScrollLeft=50*this.typeIndex,e({scrollTop:0,duration:100})):s-this.touchX>80&&(0===this.typeIndex?this.typeIndex=this.typeList.length-1:this.typeIndex--,this.typeScrollLeft=50*this.typeIndex,e({scrollTop:0,duration:100})),this.touchX=0},handleTypeChange(t){this.current!==t.currentIndex&&(this.typeIndex=t.currentIndex,e({scrollTop:0,duration:100}))},handleTapItem(e){t(),e.h5?location.href=e.h5:s({title:"小程序专享，请前往游趣街小程序领取。",icon:"none",duration:3e3})}},onLoad(){a();l.importObject("couponOptions").get().then((e=>{e.types&&(this.types=e.types,this.typeList=e.types.map((e=>e.label))),this.list=e.list,this.typeIndex=0})).catch((e=>{s({title:"获取数据失败，可右上角反馈给开发者，谢谢",icon:"none",duration:3e3})})).finally((e=>{n()}))},onShareAppMessage:()=>({title:"游趣街 - 各种红包优惠券，天天领。",path:"/pages/eCoupon/eCoupon",imageUrl:"https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/2ca35728-87d2-4274-b0c4-1d8c433424db.png"}),onShareTimeline:()=>({title:"游趣街 - 各种红包优惠券，天天领。",path:"/pages/eCoupon/eCoupon",imageUrl:"https://mp-9c9554a3-d4de-4f0f-b941-dfe1990da1c1.cdn.bspapp.com/cloudstorage/2ca35728-87d2-4274-b0c4-1d8c433424db.png"})},[["render",function(e,t,s,a,l,n){const T=b(f("uni-segmented-control"),I),_=d,k=x;return o(),p(_,{class:"e-coupon"},{default:c((()=>[i(_,{class:"type-wrap"},{default:c((()=>[i(T,{class:"segmented-control",current:l.typeIndex,values:l.typeList,onClickItem:n.handleTypeChange,styleType:"text",activeColor:"#e6ab00"},null,8,["current","values","onClickItem"])])),_:1}),i(_,{ref:"list",class:"list",onTouchstart:n.handleTouchStart,onTouchend:n.handleTouchEnd},{default:c((()=>[(o(!0),h(u,null,r(n.coupons,(e=>(o(),p(_,{class:"box",key:e._id,onClick:t=>n.handleTapItem(e)},{default:c((()=>[i(k,{class:"image",src:e.image,mode:"scaleToFill"},null,8,["src"]),i(_,{class:"info"},{default:c((()=>[i(_,{class:"text"},{default:c((()=>[i(_,{class:"title"},{default:c((()=>[y(m(e.title),1)])),_:2},1024),i(_,{class:"description"},{default:c((()=>[y(m(e.description),1)])),_:2},1024)])),_:2},1024),e.appId?(o(),p(_,{key:0,class:"btn"},{default:c((()=>[y("点击领取")])),_:1})):g("",!0),!e.appId&&e.code?(o(),p(_,{key:1,class:"btn"},{default:c((()=>[y("复制口令")])),_:1})):g("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),i(_,{class:"remark"},{default:c((()=>[y("点击卡片或按钮，跳转官方小程序领取页面喔～")])),_:1}),i(_,{class:"remark"},{default:c((()=>[y("部分领取页面没有小程序，复制口令前往App即可～")])),_:1})])),_:1},8,["onTouchstart","onTouchend"])])),_:1})}],["__scopeId","data-v-37a2a6ef"]]);export{_ as default};
