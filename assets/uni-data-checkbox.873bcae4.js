import{E as e,r as t,o as s,a,w as l,f as i,t as o,p as d,F as c,n as r,q as n,e as h,d as u,b as m,i as f,g,a6 as y,a7 as p,a8 as b,a9 as x,aa as k}from"./index-0cbfb94b.js";import{_ as v}from"./uni-load-more.da29d111.js";import{_,r as D}from"./uni-app.es.5d2879ae.js";const I=_({name:"uniDataChecklist",mixins:[e.mixinDatacom||{}],emits:["input","update:modelValue","change"],props:{mode:{type:String,default:"default"},multiple:{type:Boolean,default:!1},value:{type:[Array,String,Number],default:()=>""},modelValue:{type:[Array,String,Number],default:()=>""},localdata:{type:Array,default:()=>[]},min:{type:[Number,String],default:""},max:{type:[Number,String],default:""},wrap:{type:Boolean,default:!1},icon:{type:String,default:"left"},selectedColor:{type:String,default:""},selectedTextColor:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},disabled:{type:Boolean,default:!1},map:{type:Object,default:()=>({text:"text",value:"value"})}},watch:{localdata:{handler(e){this.range=e,this.dataList=this.getDataList(this.getSelectedValue(e))},deep:!0},mixinDatacomResData(e){this.range=e,this.dataList=this.getDataList(this.getSelectedValue(e))},value(e){this.dataList=this.getDataList(e),this.is_reset||(this.is_reset=!1,this.formItem&&this.formItem.setValue(e))},modelValue(e){this.dataList=this.getDataList(e),this.is_reset||(this.is_reset=!1,this.formItem&&this.formItem.setValue(e))}},data:()=>({dataList:[],range:[],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"},isLocal:!0,styles:{selectedColor:"#2979ff",selectedTextColor:"#666"},isTop:0}),computed:{dataValue(){return""===this.value?this.modelValue:(this.modelValue,this.value)}},created(){this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.formItem&&(this.isTop=6,this.formItem.name&&(this.is_reset||(this.is_reset=!1,this.formItem.setValue(this.dataValue)),this.rename=this.formItem.name,this.form.inputChildrens.push(this))),this.localdata&&0!==this.localdata.length?(this.isLocal=!0,this.range=this.localdata,this.dataList=this.getDataList(this.getSelectedValue(this.range))):this.collection&&(this.isLocal=!1,this.loadData())},methods:{loadData(){this.mixinDatacomGet().then((e=>{this.mixinDatacomResData=e.result.data,0===this.mixinDatacomResData.length?(this.isLocal=!1,this.mixinDatacomErrorMessage=this.emptyText):this.isLocal=!0})).catch((e=>{this.mixinDatacomErrorMessage=e.message}))},getForm(e="uniForms"){let t=this.$parent,s=t.$options.name;for(;s!==e;){if(t=t.$parent,!t)return!1;s=t.$options.name}return t},chagne(e){const t=e.detail.value;let s={value:[],data:[]};if(this.multiple)this.range.forEach((e=>{t.includes(e[this.map.value]+"")&&(s.value.push(e[this.map.value]),s.data.push(e))}));else{const e=this.range.find((e=>e[this.map.value]+""===t));e&&(s={value:e[this.map.value],data:e})}this.formItem&&this.formItem.setValue(s.value),this.$emit("input",s.value),this.$emit("update:modelValue",s.value),this.$emit("change",{detail:s}),this.multiple?this.dataList=this.getDataList(s.value,!0):this.dataList=this.getDataList(s.value)},getDataList(e){let t=JSON.parse(JSON.stringify(this.range)),s=[];return this.multiple&&(Array.isArray(e)||(e=[])),t.forEach(((t,a)=>{if(t.disabled=t.disable||t.disabled||!1,this.multiple)if(e.length>0){let s=e.find((e=>e===t[this.map.value]));t.selected=void 0!==s}else t.selected=!1;else t.selected=e===t[this.map.value];s.push(t)})),this.setRange(s)},setRange(e){let t=e.filter((e=>e.selected)),s=Number(this.min)||0,a=Number(this.max)||"";return e.forEach(((l,i)=>{if(this.multiple){if(t.length<=s){void 0!==t.find((e=>e[this.map.value]===l[this.map.value]))&&(l.disabled=!0)}if(t.length>=a&&""!==a){void 0===t.find((e=>e[this.map.value]===l[this.map.value]))&&(l.disabled=!0)}}this.setStyles(l,i),e[i]=l})),e},setStyles(e,t){e.styleBackgroud=this.setStyleBackgroud(e),e.styleIcon=this.setStyleIcon(e),e.styleIconText=this.setStyleIconText(e),e.styleRightIcon=this.setStyleRightIcon(e)},getSelectedValue(e){if(!this.multiple)return this.dataValue;let t=[];return e.forEach((e=>{e.selected&&t.push(e[this.map.value])})),this.dataValue&&this.dataValue.length>0?this.dataValue:t},setStyleBackgroud(e){let t={},s=this.selectedColor?this.selectedColor:"#2979ff";"list"!==this.mode&&(t["border-color"]=e.selected?s:"#DCDFE6"),"tag"===this.mode&&(t["background-color"]=e.selected?s:"#f5f5f5");let a="";for(let l in t)a+=`${l}:${t[l]};`;return a},setStyleIcon(e){let t={},s="",a=this.selectedColor?this.selectedColor:"#2979ff";t["background-color"]=e.selected?a:"#fff",t["border-color"]=e.selected?a:"#DCDFE6",!e.selected&&e.disabled&&(t["background-color"]="#F2F6FC",t["border-color"]=e.selected?a:"#DCDFE6");for(let l in t)s+=`${l}:${t[l]};`;return s},setStyleIconText(e){let t={},s="",a=this.selectedColor?this.selectedColor:"#2979ff";"tag"===this.mode?t.color=e.selected?this.selectedTextColor?this.selectedTextColor:"#fff":"#666":t.color=e.selected?this.selectedTextColor?this.selectedTextColor:a:"#666",!e.selected&&e.disabled&&(t.color="#999");for(let l in t)s+=`${l}:${t[l]};`;return s},setStyleRightIcon(e){let t={},s="";"list"===this.mode&&(t["border-color"]=e.selected?this.styles.selectedColor:"#DCDFE6");for(let a in t)s+=`${a}:${t[a]};`;return s}}},[["render",function(e,_,I,C,S,L){const V=D(t("uni-load-more"),v),T=f,$=g,F=y,E=p,B=b,R=x,w=k;return s(),a($,{class:"uni-data-checklist",style:h({"margin-top":S.isTop+"px"})},{default:l((()=>[S.isLocal?(s(),d(c,{key:1},[I.multiple?(s(),a(B,{key:0,class:r(["checklist-group",{"is-list":"list"===I.mode||I.wrap}]),onChange:L.chagne},{default:l((()=>[(s(!0),d(c,null,n(S.dataList,((e,t)=>(s(),a(E,{class:r(["checklist-box",["is--"+I.mode,e.selected?"is-checked":"",I.disabled||e.disabled?"is-disable":"",0!==t&&"list"===I.mode?"is-list-border":""]]),style:h(e.styleBackgroud),key:t},{default:l((()=>[u(F,{class:"hidden",hidden:"",disabled:I.disabled||!!e.disabled,value:e[I.map.value]+"",checked:e.selected},null,8,["disabled","value","checked"]),"tag"!==I.mode&&"list"!==I.mode||"list"===I.mode&&"left"===I.icon?(s(),a($,{key:0,class:"checkbox__inner",style:h(e.styleIcon)},{default:l((()=>[u($,{class:"checkbox__inner-icon"})])),_:2},1032,["style"])):m("",!0),u($,{class:r(["checklist-content",{"list-content":"list"===I.mode&&"left"===I.icon}])},{default:l((()=>[u(T,{class:"checklist-text",style:h(e.styleIconText)},{default:l((()=>[i(o(e[I.map.text]),1)])),_:2},1032,["style"]),"list"===I.mode&&"right"===I.icon?(s(),a($,{key:0,class:"checkobx__list",style:h(e.styleBackgroud)},null,8,["style"])):m("",!0)])),_:2},1032,["class"])])),_:2},1032,["class","style"])))),128))])),_:1},8,["class","onChange"])):(s(),a(w,{key:1,class:r(["checklist-group",{"is-list":"list"===I.mode,"is-wrap":I.wrap}]),onChange:L.chagne},{default:l((()=>[(s(!0),d(c,null,n(S.dataList,((e,t)=>(s(),a(E,{class:r(["checklist-box",["is--"+I.mode,e.selected?"is-checked":"",I.disabled||e.disabled?"is-disable":"",0!==t&&"list"===I.mode?"is-list-border":""]]),style:h(e.styleBackgroud),key:t},{default:l((()=>[u(R,{class:"hidden",hidden:"",disabled:I.disabled||e.disabled,value:e[I.map.value]+"",checked:e.selected},null,8,["disabled","value","checked"]),"tag"!==I.mode&&"list"!==I.mode||"list"===I.mode&&"left"===I.icon?(s(),a($,{key:0,class:"radio__inner",style:h(e.styleBackgroud)},{default:l((()=>[u($,{class:"radio__inner-icon",style:h(e.styleIcon)},null,8,["style"])])),_:2},1032,["style"])):m("",!0),u($,{class:r(["checklist-content",{"list-content":"list"===I.mode&&"left"===I.icon}])},{default:l((()=>[u(T,{class:"checklist-text",style:h(e.styleIconText)},{default:l((()=>[i(o(e[I.map.text]),1)])),_:2},1032,["style"]),"list"===I.mode&&"right"===I.icon?(s(),a($,{key:0,style:h(e.styleRightIcon),class:"checkobx__list"},null,8,["style"])):m("",!0)])),_:2},1032,["class"])])),_:2},1032,["class","style"])))),128))])),_:1},8,["class","onChange"]))],64)):(s(),a($,{key:0,class:"uni-data-loading"},{default:l((()=>[e.mixinDatacomErrorMessage?(s(),a(T,{key:1},{default:l((()=>[i(o(e.mixinDatacomErrorMessage),1)])),_:1})):(s(),a(V,{key:0,status:"loading",iconType:"snow",iconSize:18,"content-text":S.contentText},null,8,["content-text"]))])),_:1}))])),_:1},8,["style"])}],["__scopeId","data-v-f4158c96"]]);export{I as _};
