import{j as e,J as t,r as a,o as l,a as r,w as n,d as s,e as i,h as o,f as c,t as h,b as u,g as d,I as f,i as p,K as b,M as y,n as g}from"./index-ab7ec73d.js";import{_ as m}from"./uni-icons.63e5f710.js";import{r as _}from"./uni-app.es.f46513ae.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";const C={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:x}=e(C);const v=k({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||x("uni-search-bar.cancel")},placeholderText(){return this.placeholder||x("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,t){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,t())},confirm(){t(),this.$emit("confirm",{value:this.searchVal})},blur(){t(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,t,b,y,g,k){const C=_(a("uni-icons"),m),x=d,v=f,S=p;return l(),r(x,{class:"uni-searchbar"},{default:n((()=>[s(x,{style:i({borderRadius:b.radius+"px",backgroundColor:b.bgColor}),class:"uni-searchbar__box",onClick:k.searchClick},{default:n((()=>[s(x,{class:"uni-searchbar__box-icon-search"},{default:n((()=>[o(e.$slots,"searchIcon",{},(()=>[s(C,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),g.show||g.searchVal?(l(),r(v,{key:0,focus:g.showSync,disabled:b.readonly,placeholder:k.placeholderText,maxlength:b.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:g.searchVal,"onUpdate:modelValue":t[0]||(t[0]=e=>g.searchVal=e),onConfirm:k.confirm,onBlur:k.blur,onFocus:k.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","onConfirm","onBlur","onFocus"])):(l(),r(S,{key:1,class:"uni-searchbar__text-placeholder"},{default:n((()=>[c(h(b.placeholder),1)])),_:1})),g.show&&("always"===b.clearButton||"auto"===b.clearButton&&""!==g.searchVal)&&!b.readonly?(l(),r(x,{key:2,class:"uni-searchbar__box-icon-clear",onClick:k.clear},{default:n((()=>[o(e.$slots,"clearIcon",{},(()=>[s(C,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):u("",!0)])),_:3},8,["style","onClick"]),"always"===b.cancelButton||g.show&&"auto"===b.cancelButton?(l(),r(S,{key:0,onClick:k.cancel,class:"uni-searchbar__cancel"},{default:n((()=>[c(h(k.cancelTextI18n),1)])),_:1},8,["onClick"])):u("",!0)])),_:3})}],["__scopeId","data-v-298b95e8"]]);const S=e=>"number"==typeof e?e+"px":e;const B=k({name:"UniNavBar",components:{statusBar:k({name:"UniStatusBar",data:()=>({statusBarHeight:20}),mounted(){this.statusBarHeight=b().statusBarHeight+"px"}},[["render",function(e,t,a,s,c,h){const u=d;return l(),r(u,{style:i({height:c.statusBarHeight}),class:"uni-status-bar"},{default:n((()=>[o(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-40847dd0"]])},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight(){return S(this.height)},leftIconWidth(){return S(this.leftWidth)},rightIconWidth(){return S(this.rightWidth)}},mounted(){uni.report&&this.stat&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft(){this.$emit("clickLeft")},onClickRight(){this.$emit("clickRight")},onClickTitle(){this.$emit("clickTitle")}}},[["render",function(e,t,f,b,k,C){const x=y("status-bar"),v=_(a("uni-icons"),m),S=d,B=p;return l(),r(S,{class:g(["uni-navbar",{"uni-dark":f.dark}])},{default:n((()=>[s(S,{class:g([{"uni-navbar--fixed":f.fixed,"uni-navbar--shadow":f.shadow,"uni-navbar--border":f.border},"uni-navbar__content"]),style:i({"background-color":C.themeBgColor})},{default:n((()=>[f.statusBar?(l(),r(x,{key:0})):u("",!0),s(S,{style:i({color:C.themeColor,backgroundColor:C.themeBgColor,height:C.navbarHeight}),class:"uni-navbar__header"},{default:n((()=>[s(S,{onClick:C.onClickLeft,class:"uni-navbar__header-btns uni-navbar__header-btns-left",style:i({width:C.leftIconWidth})},{default:n((()=>[o(e.$slots,"left",{},(()=>[f.leftIcon.length>0?(l(),r(S,{key:0,class:"uni-navbar__content_view"},{default:n((()=>[s(v,{color:C.themeColor,type:f.leftIcon,size:"20"},null,8,["color","type"])])),_:1})):u("",!0),f.leftText.length?(l(),r(S,{key:1,class:g([{"uni-navbar-btn-icon-left":!f.leftIcon.length>0},"uni-navbar-btn-text"])},{default:n((()=>[s(B,{style:i({color:C.themeColor,fontSize:"12px"})},{default:n((()=>[c(h(f.leftText),1)])),_:1},8,["style"])])),_:1},8,["class"])):u("",!0)]),!0)])),_:3},8,["onClick","style"]),s(S,{class:"uni-navbar__header-container",onClick:C.onClickTitle},{default:n((()=>[o(e.$slots,"default",{},(()=>[f.title.length>0?(l(),r(S,{key:0,class:"uni-navbar__header-container-inner"},{default:n((()=>[s(B,{class:"uni-nav-bar-text uni-ellipsis-1",style:i({color:C.themeColor})},{default:n((()=>[c(h(f.title),1)])),_:1},8,["style"])])),_:1})):u("",!0)]),!0)])),_:3},8,["onClick"]),s(S,{onClick:C.onClickRight,class:"uni-navbar__header-btns uni-navbar__header-btns-right",style:i({width:C.rightIconWidth})},{default:n((()=>[o(e.$slots,"right",{},(()=>[f.rightIcon.length?(l(),r(S,{key:0},{default:n((()=>[s(v,{color:C.themeColor,type:f.rightIcon,size:"22"},null,8,["color","type"])])),_:1})):u("",!0),f.rightText.length&&!f.rightIcon.length?(l(),r(S,{key:1,class:"uni-navbar-btn-text"},{default:n((()=>[s(B,{class:"uni-nav-bar-right-text",style:i({color:C.themeColor})},{default:n((()=>[c(h(f.rightText),1)])),_:1},8,["style"])])),_:1})):u("",!0)]),!0)])),_:3},8,["onClick","style"])])),_:3},8,["style"])])),_:3},8,["class","style"]),f.fixed?(l(),r(S,{key:0,class:"uni-navbar__placeholder"},{default:n((()=>[f.statusBar?(l(),r(x,{key:0})):u("",!0),s(S,{class:"uni-navbar__placeholder-view",style:i({height:C.navbarHeight})},null,8,["style"])])),_:1})):u("",!0)])),_:3},8,["class"])}],["__scopeId","data-v-31795b35"]]);export{v as _,B as a};
