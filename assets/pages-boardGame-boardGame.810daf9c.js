import{y as e,z as a,o as t,a as s,w as n,p as l,g as r,d,A as i,B as o,f as c,t as u,q as h,u as f,F as p,b as m,i as b,r as y}from"./index-a9461464.js";import{_ as g}from"./uni-icons.3e727061.js";import{_,r as k}from"./uni-app.es.0d8e3b12.js";import{_ as w,a as C,b as x,c as R,d as U}from"./unicloud-db.b8f7d695.js";import{_ as $}from"./uni-tag.3437c05f.js";import{_ as v}from"./uni-load-more.0ac681ef.js";const G=_({data:()=>({bannerAdpid:"",bannerUnitId:"",type:0,types:[{value:"all",text:"全部"},{value:"chosen",text:"精选"},{value:"classic",text:"经典"}],searchKey:""}),computed:{where(){const e=this.searchKey.trim();let a="";switch(this.type){case 1:a="&& chosen == 1";break;case 2:a="&& classic == 1";break;default:a=""}return`\n\t\t\t\t(${new RegExp(e,"i")}.test(describe) ||\n\t\t\t\t${new RegExp(e,"i")}.test(content)) &&\n\t\t\t\tstatus == 2\n\t\t\t\t${a}\n\t\t\t`}},methods:{handleTypeSelect(){e({itemList:["全部","精选","经典"],success:e=>{this.type=e.tapIndex,this.$nextTick((e=>{this.handleSearch()}))}})},handleSearch(){this.$refs.udbRef.loadData({clear:!0})},handleClear(){this.searchKey="",this.$nextTick((e=>{this.$refs.udbRef.loadData({clear:!0})}))}},onReady(){this.$refs.udbRef.loadData({clear:!0})},onLoad(){l().getConfig().then((e=>{this.bannerAdpid=e.bannerAdpid||"",this.bannerUnitId=e.bannerUnitId||""}))},onPullDownRefresh(){this.$refs.udbRef.loadData({clear:!0},(()=>{a()}))},onReachBottom(){this.$refs.udbRef.loadMore()},onShareAppMessage:()=>({title:"游趣街 - 聚会小游戏规则玩法大全！快和小伙伴一起玩吧!",path:"/pages/boardGame/boardGame",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/68a0f0e0-94d6-4224-a7f2-3dbea35e9513.png"}),onShareTimeline:()=>({title:"游趣街 - 聚会小游戏规则玩法大全！快和小伙伴一起玩吧!",path:"/pages/boardGame/boardGame",imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9c9554a3-d4de-4f0f-b941-dfe1990da1c1/68a0f0e0-94d6-4224-a7f2-3dbea35e9513.png"})},[["render",function(e,a,l,_,G,S){const D=b,K=k(y("uni-icons"),g),j=r,A=k(y("uni-search-bar"),w),I=k(y("uni-nav-bar"),C),T=k(y("uni-tag"),$),V=k(y("uni-list-item"),x),z=k(y("uni-list"),R),B=k(y("uni-load-more"),v),E=k(y("unicloud-db"),U);return t(),s(j,{class:"container"},{default:n((()=>[d(I,{class:"search-wrap"},{left:n((()=>[d(j,{class:"search-left",onClick:S.handleTypeSelect},{default:n((()=>[i(d(D,null,{default:n((()=>[c("全部")])),_:1},512),[[o,0===G.type]]),i(d(D,null,{default:n((()=>[c("精选")])),_:1},512),[[o,1===G.type]]),i(d(D,null,{default:n((()=>[c("经典")])),_:1},512),[[o,2===G.type]]),d(K,{type:"arrowdown",color:"#666",size:"18"})])),_:1},8,["onClick"])])),right:n((()=>[d(j,{class:"search-right",onClick:S.handleSearch},{default:n((()=>[c(" 搜索 ")])),_:1},8,["onClick"])])),default:n((()=>[d(j,{class:"search-center"},{default:n((()=>[d(A,{style:{width:"100%"},modelValue:G.searchKey,"onUpdate:modelValue":a[0]||(a[0]=e=>G.searchKey=e),radius:"100",placeholder:"搜索关键词",clearButton:"auto",cancelButton:"none",onConfirm:S.handleSearch,onClear:S.handleClear},null,8,["modelValue","onConfirm","onClear"])])),_:1})])),_:1}),d(E,{ref:"udbRef",where:S.where,collection:"board_games",orderby:"order desc,create_date desc",loadtime:"manual"},{default:n((({data:e,loading:a,error:l,options:r,hasMore:b})=>[l?(t(),s(j,{key:0},{default:n((()=>[c(u(l.message),1)])),_:2},1024)):(t(),s(j,{key:1},{default:n((()=>[d(z,{class:"list"},{default:n((()=>[(t(!0),h(p,null,f(e,((e,a)=>(t(),s(V,{key:e._id,link:"",title:e.title,note:e.describe,ellipsis:2,to:"/pages/boardGameDetails/boardGameDetails?id="+e._id},{footer:n((()=>[d(j,{class:"tag-wrap"},{default:n((()=>[i(d(T,{size:"mini",text:"经典",type:"warning",inverted:"",circle:""},null,512),[[o,1===e.classic]]),i(d(T,{size:"mini",text:"精选",type:"error",inverted:"",circle:""},null,512),[[o,1===e.chosen]])])),_:2},1024)])),_:2},1032,["title","note","to"])))),128))])),_:2},1024)])),_:2},1024)),a?(t(),s(j,{key:2,class:"loading"},{default:n((()=>[c("加载中...")])),_:1})):m("",!0),b?m("",!0):(t(),s(B,{key:3,status:"noMore"}))])),_:1},8,["where"])])),_:1})}],["__scopeId","data-v-56a63a5d"]]);export{G as default};
