import{H as t,I as e,r as i,o as a,a as s,w as n,d as o,e as l,h as r,f as c,t as d,b as u,g as h,J as p,i as g,K as f,L as m,n as y,k as b,M as _,N as S,O as C,u as k,P as w,Q as x,C as v,E as B,j as I,R as T,D as $,S as L}from"./index-58106c7f.js";import{_ as F}from"./uni-icons.094e1514.js";import{_ as D,r as z,s as N,a as V}from"./uni-app.es.3372d794.js";const M={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:E}=t(M);const A=D({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||E("uni-search-bar.cancel")},placeholderText(){return this.placeholder||E("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(t){this.searchVal=t,t&&(this.show=!0)}},focus:{immediate:!0,handler(t){if(t){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(t,e){this.$emit("input",t),this.$emit("update:modelValue",t)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,e())},confirm(){e(),this.$emit("confirm",{value:this.searchVal})},blur(){e(),this.$emit("blur",{value:this.searchVal})},emitFocus(t){this.$emit("focus",t.detail)}}},[["render",function(t,e,f,m,y,b){const _=z(i("uni-icons"),F),S=h,C=p,k=g;return a(),s(S,{class:"uni-searchbar"},{default:n((()=>[o(S,{style:l({borderRadius:f.radius+"px",backgroundColor:f.bgColor}),class:"uni-searchbar__box",onClick:b.searchClick},{default:n((()=>[o(S,{class:"uni-searchbar__box-icon-search"},{default:n((()=>[r(t.$slots,"searchIcon",{},(()=>[o(_,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),y.show||y.searchVal?(a(),s(C,{key:0,focus:y.showSync,disabled:f.readonly,placeholder:b.placeholderText,maxlength:f.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:y.searchVal,"onUpdate:modelValue":e[0]||(e[0]=t=>y.searchVal=t),onConfirm:b.confirm,onBlur:b.blur,onFocus:b.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","onConfirm","onBlur","onFocus"])):(a(),s(k,{key:1,class:"uni-searchbar__text-placeholder"},{default:n((()=>[c(d(f.placeholder),1)])),_:1})),y.show&&("always"===f.clearButton||"auto"===f.clearButton&&""!==y.searchVal)&&!f.readonly?(a(),s(S,{key:2,class:"uni-searchbar__box-icon-clear",onClick:b.clear},{default:n((()=>[r(t.$slots,"clearIcon",{},(()=>[o(_,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):u("",!0)])),_:3},8,["style","onClick"]),"always"===f.cancelButton||y.show&&"auto"===f.cancelButton?(a(),s(k,{key:0,onClick:b.cancel,class:"uni-searchbar__cancel"},{default:n((()=>[c(d(b.cancelTextI18n),1)])),_:1},8,["onClick"])):u("",!0)])),_:3})}],["__scopeId","data-v-298b95e8"]]);const j=t=>"number"==typeof t?t+"px":t;const O=D({name:"UniNavBar",components:{statusBar:D({name:"UniStatusBar",data:()=>({statusBarHeight:20}),mounted(){this.statusBarHeight=f().statusBarHeight+"px"}},[["render",function(t,e,i,o,c,d){const u=h;return a(),s(u,{style:l({height:c.statusBarHeight}),class:"uni-status-bar"},{default:n((()=>[r(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-40847dd0"]])},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight(){return j(this.height)},leftIconWidth(){return j(this.leftWidth)},rightIconWidth(){return j(this.rightWidth)}},mounted(){uni.report&&this.stat&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft(){this.$emit("clickLeft")},onClickRight(){this.$emit("clickRight")},onClickTitle(){this.$emit("clickTitle")}}},[["render",function(t,e,p,f,b,_){const S=m("status-bar"),C=z(i("uni-icons"),F),k=h,w=g;return a(),s(k,{class:y(["uni-navbar",{"uni-dark":p.dark}])},{default:n((()=>[o(k,{class:y([{"uni-navbar--fixed":p.fixed,"uni-navbar--shadow":p.shadow,"uni-navbar--border":p.border},"uni-navbar__content"]),style:l({"background-color":_.themeBgColor})},{default:n((()=>[p.statusBar?(a(),s(S,{key:0})):u("",!0),o(k,{style:l({color:_.themeColor,backgroundColor:_.themeBgColor,height:_.navbarHeight}),class:"uni-navbar__header"},{default:n((()=>[o(k,{onClick:_.onClickLeft,class:"uni-navbar__header-btns uni-navbar__header-btns-left",style:l({width:_.leftIconWidth})},{default:n((()=>[r(t.$slots,"left",{},(()=>[p.leftIcon.length>0?(a(),s(k,{key:0,class:"uni-navbar__content_view"},{default:n((()=>[o(C,{color:_.themeColor,type:p.leftIcon,size:"20"},null,8,["color","type"])])),_:1})):u("",!0),p.leftText.length?(a(),s(k,{key:1,class:y([{"uni-navbar-btn-icon-left":!p.leftIcon.length>0},"uni-navbar-btn-text"])},{default:n((()=>[o(w,{style:l({color:_.themeColor,fontSize:"12px"})},{default:n((()=>[c(d(p.leftText),1)])),_:1},8,["style"])])),_:1},8,["class"])):u("",!0)]),!0)])),_:3},8,["onClick","style"]),o(k,{class:"uni-navbar__header-container",onClick:_.onClickTitle},{default:n((()=>[r(t.$slots,"default",{},(()=>[p.title.length>0?(a(),s(k,{key:0,class:"uni-navbar__header-container-inner"},{default:n((()=>[o(w,{class:"uni-nav-bar-text uni-ellipsis-1",style:l({color:_.themeColor})},{default:n((()=>[c(d(p.title),1)])),_:1},8,["style"])])),_:1})):u("",!0)]),!0)])),_:3},8,["onClick"]),o(k,{onClick:_.onClickRight,class:"uni-navbar__header-btns uni-navbar__header-btns-right",style:l({width:_.rightIconWidth})},{default:n((()=>[r(t.$slots,"right",{},(()=>[p.rightIcon.length?(a(),s(k,{key:0},{default:n((()=>[o(C,{color:_.themeColor,type:p.rightIcon,size:"22"},null,8,["color","type"])])),_:1})):u("",!0),p.rightText.length&&!p.rightIcon.length?(a(),s(k,{key:1,class:"uni-navbar-btn-text"},{default:n((()=>[o(w,{class:"uni-nav-bar-right-text",style:l({color:_.themeColor})},{default:n((()=>[c(d(p.rightText),1)])),_:1},8,["style"])])),_:1})):u("",!0)]),!0)])),_:3},8,["onClick","style"])])),_:3},8,["style"])])),_:3},8,["class","style"]),p.fixed?(a(),s(k,{key:0,class:"uni-navbar__placeholder"},{default:n((()=>[p.statusBar?(a(),s(S,{key:0})):u("",!0),o(k,{class:"uni-navbar__placeholder-view",style:l({height:_.navbarHeight})},null,8,["style"])])),_:1})):u("",!0)])),_:3},8,["class"])}],["__scopeId","data-v-31795b35"]]);const H=D({name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:()=>[0,0]},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:()=>({})}},data:()=>({}),computed:{width(){return 8*String(this.text).length+12},classNames(){const{inverted:t,type:e,size:i,absolute:a}=this;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+i,a?"uni-badge--absolute":""].join(" ")},positionStyle(){if(!this.absolute)return{};let t=this.width/2,e=10;this.isDot&&(t=5,e=5);const i=`${-t+this.offset[0]}px`,a=`${-e+this.offset[1]}px`,s={rightTop:{right:i,top:a},rightBottom:{right:i,bottom:a},leftBottom:{left:i,bottom:a},leftTop:{left:i,top:a}},n=s[this.absolute];return n||s.rightTop},badgeWidth(){return{width:`${this.width}px`}},dotStyle(){return this.isDot?{width:"10px",height:"10px",borderRadius:"10px"}:{}},displayValue(){const{isDot:t,text:e,maxNum:i}=this;return t?"":Number(e)>i?`${i}+`:e}},methods:{onClick(){this.$emit("click")}}},[["render",function(t,e,i,o,p,f){const m=g,b=h;return a(),s(b,{class:"uni-badge--x"},{default:n((()=>[r(t.$slots,"default",{},void 0,!0),i.text?(a(),s(m,{key:0,class:y([f.classNames,"uni-badge"]),style:l([f.badgeWidth,f.positionStyle,i.customStyle,f.dotStyle]),onClick:e[0]||(e[0]=t=>f.onClick())},{default:n((()=>[c(d(f.displayValue),1)])),_:1},8,["class","style"])):u("",!0)])),_:3})}],["__scopeId","data-v-1fab354a"]]);const W=D({name:"UniListItem",emits:["click","switchChange"],props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},badgeStyle:{type:Object,default:()=>({})},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:()=>({type:"",color:"#000000",size:20})},border:{type:Boolean,default:!0}},data:()=>({isFirstChild:!1}),mounted(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{getForm(t="uniList"){let e=this.$parent,i=e.$options.name;for(;i!==t;){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange(t){this.$emit("switchChange",t.detail)},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(t){let e={url:this.to,success:t=>{this.$emit("click",{data:t})},fail:t=>{this.$emit("click",{data:t})}};switch(t){case"navigateTo":default:b(e);break;case"redirectTo":C(e);break;case"reLaunch":S(e);break;case"switchTab":_(e)}}}},[["render",function(t,e,l,p,f,m){const b=h,_=k,S=z(i("uni-icons"),F),C=g,x=z(i("uni-badge"),H),v=w;return a(),s(b,{class:y([{"uni-list-item--disabled":l.disabled},"uni-list-item"]),"hover-class":!l.clickable&&!l.link||l.disabled||l.showSwitch?"":"uni-list-item--hover",onClick:m.onClick},{default:n((()=>[f.isFirstChild?u("",!0):(a(),s(b,{key:0,class:y(["border--left",{"uni-list--border":l.border}])},null,8,["class"])),o(b,{class:y(["uni-list-item__container",{"container--right":l.showArrow||l.link,"flex--direction":"column"===l.direction}])},{default:n((()=>[r(t.$slots,"header",{},(()=>[o(b,{class:"uni-list-item__header"},{default:n((()=>[l.thumb?(a(),s(b,{key:0,class:"uni-list-item__icon"},{default:n((()=>[o(_,{src:l.thumb,class:y(["uni-list-item__icon-img",["uni-list--"+l.thumbSize]])},null,8,["src","class"])])),_:1})):l.showExtraIcon?(a(),s(b,{key:1,class:"uni-list-item__icon"},{default:n((()=>[o(S,{color:l.extraIcon.color,size:l.extraIcon.size,type:l.extraIcon.type},null,8,["color","size","type"])])),_:1})):u("",!0)])),_:1})]),!0),r(t.$slots,"body",{},(()=>[o(b,{class:y(["uni-list-item__content",{"uni-list-item__content--center":l.thumb||l.showExtraIcon||l.showBadge||l.showSwitch}])},{default:n((()=>[l.title?(a(),s(C,{key:0,class:y(["uni-list-item__content-title",[0!==l.ellipsis&&l.ellipsis<=2?"uni-ellipsis-"+l.ellipsis:""]])},{default:n((()=>[c(d(l.title),1)])),_:1},8,["class"])):u("",!0),l.note?(a(),s(C,{key:1,class:y(["uni-list-item__content-note",[0!==l.ellipsis&&l.ellipsis<=2?"uni-ellipsis-"+l.ellipsis:""]])},{default:n((()=>[c(d(l.note),1)])),_:1},8,["class"])):u("",!0)])),_:1},8,["class"])]),!0),r(t.$slots,"footer",{},(()=>[l.rightText||l.showBadge||l.showSwitch?(a(),s(b,{key:0,class:y(["uni-list-item__extra",{"flex--justify":"column"===l.direction}])},{default:n((()=>[l.rightText?(a(),s(C,{key:0,class:"uni-list-item__extra-text"},{default:n((()=>[c(d(l.rightText),1)])),_:1})):u("",!0),l.showBadge?(a(),s(x,{key:1,type:l.badgeType,text:l.badgeText,"custom-style":l.badgeStyle},null,8,["type","text","custom-style"])):u("",!0),l.showSwitch?(a(),s(v,{key:2,disabled:l.disabled,checked:l.switchChecked,onChange:m.onSwitchChange},null,8,["disabled","checked","onChange"])):u("",!0)])),_:1},8,["class"])):u("",!0)]),!0)])),_:3},8,["class"]),l.showArrow||l.link?(a(),s(S,{key:1,size:16,class:"uni-icon-wrapper",color:"#bbb",type:"arrowright"})):u("",!0)])),_:3},8,["class","hover-class","onClick"])}],["__scopeId","data-v-658d1640"]]);const R=D({name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created(){this.firstChildAppend=!1},methods:{loadMore(t){this.$emit("scrolltolower")}}},[["render",function(t,e,i,o,l,c){const d=h;return a(),s(d,{class:"uni-list uni-border-top-bottom"},{default:n((()=>[i.border?(a(),s(d,{key:0,class:"uni-list--border-top"})):u("",!0),r(t.$slots,"default",{},void 0,!0),i.border?(a(),s(d,{key:1,class:"uni-list--border-bottom"})):u("",!0)])),_:3})}],["__scopeId","data-v-a351b006"]]),K={en:{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"},es:{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"},fr:{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"},"zh-Hans":{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"},"zh-Hant":{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}},U=Array.isArray,{t:P}=t(K),J="load",Z="error",q="add",Q="replace",Y="auto",G="manual",X=["pageCurrent","pageSize","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"];const tt=D({name:"UniClouddb",setup(t){const e=t.ssrKey?t.getone?N(void 0,t.ssrKey):V([],t.ssrKey):t.getone?N(void 0,"SNC0FF6AnOrJdtlrVS1w1g=="):V([],"yxuWH3IPe0ZDuJvZ41qVcw=="),i=L();return x((()=>{e.value&&0!==e.value.length||t.manual||t.loadtime!==Y||i.proxy.loadData()})),{dataList:e}},async serverPrefetch(){if(!this.manual&&this.loadtime===Y)return this.loadData()},props:{options:{type:[Object,Array],default:()=>({})},spaceInfo:{type:Object,default:()=>({})},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1},ssrKey:{type:[String,Number],default:""}},data:()=>({loading:!1,hasMore:!1,paginationInternal:{},errorMessage:""}),computed:{collectionArgs(){return U(this.collection)?this.collection:[this.collection]},isLookup(){return U(this.collection)&&this.collection.length>1||"string"==typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection(){if("string"==typeof this.collection)return this.collection.split(",")[0];return JSON.parse(JSON.stringify(this.collection[0])).$db[0].$param[0]}},created(){this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((()=>{var t=[];return X.forEach((e=>{t.push(this[e])})),t}),((t,e)=>{if(this.paginationInternal.size=this.pageSize,t[0]!==e[0]&&(this.paginationInternal.current=this.pageCurrent),this.loadtime===G)return;let i=!1;for(let a=2;a<t.length;a++)if(t[a]!==e[a]){i=!0;break}i&&(this.clear(),this.reset()),this._execLoadData()}))},methods:{loadData(t,e){let i=null,a=!1;return"object"==typeof t?(t.clear&&(this.pageData===Q?this.clear():a=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"==typeof e&&(i=e)):"function"==typeof t&&(i=t),this._execLoadData(i,a)},loadMore(){this._isEnded||this.loading||(this.pageData===q&&this.paginationInternal.current++,this._execLoadData())},refresh(){this.clear(),this._execLoadData()},clear(){this._isEnded=!1,this.dataList=[]},reset(){this.paginationInternal.current=1},add(t,{action:e,showToast:i=!0,toastTitle:a,success:s,fail:n,complete:o,needConfirm:l=!0,needLoading:r=!0,loadingTitle:c=""}={}){r&&v({title:c});let d=B.database(this.spaceInfo);e&&(d=d.action(e)),d.collection(this.mainCollection).add(t).then((t=>{s&&s(t),i&&I({title:a||P("uniCloud.component.add.success")})})).catch((t=>{n&&n(t),l&&T({content:t.message,showCancel:!1})})).finally((()=>{r&&$(),o&&o()}))},remove(t,{action:e,success:i,fail:a,complete:s,confirmTitle:n,confirmContent:o,needConfirm:l=!0,needLoading:r=!0,loadingTitle:c=""}={}){t&&t.length&&(l?T({title:n||P("uniCloud.component.remove.showModal.title"),content:o||P("uniCloud.component.remove.showModal.content"),showCancel:!0,success:n=>{n.confirm&&this._execRemove(t,e,i,a,s,l,r,c)}}):this._execRemove(t,e,i,a,s,l,r,c))},update(t,e,{action:i,showToast:a=!0,toastTitle:s,success:n,fail:o,complete:l,needConfirm:r=!0,needLoading:c=!0,loadingTitle:d=""}={}){c&&v({title:d});let u=B.database(this.spaceInfo);return i&&(u=u.action(i)),u.collection(this.mainCollection).doc(t).update(e).then((t=>{n&&n(t),a&&I({title:s||P("uniCloud.component.update.success")})})).catch((t=>{o&&o(t),r&&T({content:t.message,showCancel:!1})})).finally((()=>{c&&$(),l&&l()}))},getTemp(t=!0){let e=B.database(this.spaceInfo);this.action&&(e=e.action(this.action)),e=e.collection(...this.collectionArgs),this.foreignKey&&(e=e.foreignKey(this.foreignKey)),this.where&&Object.keys(this.where).length&&(e=e.where(this.where)),this.field&&(e=e.field(this.field)),this.groupby&&(e=e.groupBy(this.groupby)),this.groupField&&(e=e.groupField(this.groupField)),!0===this.distinct&&(e=e.distinct()),this.orderby&&(e=e.orderBy(this.orderby));const{current:i,size:a}=this.paginationInternal,s={};this.getcount&&(s.getCount=this.getcount);const n={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(s.getTree=n),this.gettreepath&&(s.getTreePath=n),e=e.skip(a*(i-1)).limit(a),t?(e=e.getTemp(s),e.udb=this):e=e.get(s),e},setResult(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData(t,e){if(!this.loading)return this.loading=!0,this.errorMessage="",this._getExec().then((i=>{this.loading=!1,this._execLoadDataSuccess(i.result,t,e)})).catch((e=>{this.loading=!1,this._execLoadDataFail(e,t)}))},_execLoadDataSuccess(t,e,i){const{data:a,count:s}=t;this._isEnded=void 0!==s?this.paginationInternal.current*this.paginationInternal.size>=s:a.length<this.pageSize,this.hasMore=!this._isEnded;const n=this.getone?a.length?a[0]:void 0:a;this.getcount&&(this.paginationInternal.count=s),e&&e(n,this._isEnded,this.paginationInternal),this._dispatchEvent(J,n),this.getone||this.pageData===Q||i?this.dataList=n:this.dataList.push(...n)},_execLoadDataFail(t,e){this.errorMessage=t,e&&e(),this.$emit(Z,t)},_getExec(){return this.getTemp(!1)},_execRemove(t,e,i,a,s,n,o,l){if(!this.collection||!t)return;const r=U(t)?t:[t];if(!r.length)return;o&&v({mask:!0,title:l});const c=B.database(this.spaceInfo),d=c.command;let u=c;e&&(u=u.action(e)),u.collection(this.mainCollection).where({_id:d.in(r)}).remove().then((t=>{i&&i(t.result),this.pageData===Q?this.refresh():this.removeData(r)})).catch((t=>{a&&a(t),n&&T({content:t.message,showCancel:!1})})).finally((()=>{o&&$(),s&&s()}))},removeData(t){const e=t.slice(0),i=this.dataList;for(let a=i.length-1;a>=0;a--){const t=e.indexOf(i[a]._id);t>=0&&(i.splice(a,1),e.splice(t,1))}},_dispatchEvent(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}},[["render",function(t,e,i,o,l,c){const d=h;return a(),s(d,null,{default:n((()=>[r(t.$slots,"default",{options:i.options,data:o.dataList,pagination:l.paginationInternal,loading:l.loading,hasMore:l.hasMore,error:l.errorMessage})])),_:3})}]]);export{A as _,O as a,W as b,R as c,tt as d};
