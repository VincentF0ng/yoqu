import{E as e,r as t,o as a,a as l,w as s,d as i,p as d,F as n,q as r,n as o,f as h,t as c,b as u,i as p,g,V as f,L as m,h as _,W as y}from"./index-3434cb5f.js";import{_ as v}from"./uni-load-more.64111488.js";import{_ as k,r as D}from"./uni-app.es.48ea7651.js";import{_ as S}from"./uni-icons.25b3795e.js";const x={props:{localdata:{type:[Array,Object],default:()=>[]},spaceInfo:{type:Object,default:()=>({})},collection:{type:String,default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String],default:!1},manual:{type:Boolean,default:!1},value:{type:[Array,String,Number],default:()=>[]},modelValue:{type:[Array,String,Number],default:()=>[]},preload:{type:Boolean,default:!1},stepSearh:{type:Boolean,default:!0},selfField:{type:String,default:""},parentField:{type:String,default:""},multiple:{type:Boolean,default:!1},map:{type:Object,default:()=>({text:"text",value:"value"})}},data(){return{loading:!1,errorMessage:"",loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},dataList:[],selected:[],selectedIndex:0,page:{current:this.pageCurrent,size:this.pageSize,count:0}}},computed:{isLocaldata(){return!this.collection.length},postField(){let e=[this.field];return this.parentField&&e.push(`${this.parentField} as parent_value`),e.join(",")},dataValue(){return(Array.isArray(this.modelValue)?this.modelValue.length>0:null!==this.modelValue||void 0!==this.modelValue)?this.modelValue:this.value},hasValue(){return"number"==typeof this.dataValue||null!=this.dataValue&&this.dataValue.length>0}},created(){this.$watch((()=>{var e=[];return["pageCurrent","pageSize","spaceInfo","value","modelValue","localdata","collection","action","field","orderby","where","getont","getcount","gettree"].forEach((t=>{e.push(this[t])})),e}),((e,t)=>{for(let a=2;a<e.length&&e[a]==t[a];a++);e[0]!=t[0]&&(this.page.current=this.pageCurrent),this.page.size=this.pageSize,this.onPropsChange()})),this._treeData=[]},methods:{onPropsChange(){this._treeData=[]},getCommand(t={}){let a=e.database(this.spaceInfo);const l=t.action||this.action;l&&(a=a.action(l));const s=t.collection||this.collection;a=a.collection(s);const i=t.where||this.where;i&&Object.keys(i).length&&(a=a.where(i));const d=t.field||this.field;d&&(a=a.field(d));const n=t.orderby||this.orderby;n&&(a=a.orderBy(n));const r=void 0!==t.pageCurrent?t.pageCurrent:this.page.current,o=void 0!==t.pageSize?t.pageSize:this.page.size,h={getCount:void 0!==t.getcount?t.getcount:this.getcount,getTree:void 0!==t.gettree?t.gettree:this.gettree};return t.getTreePath&&(h.getTreePath=t.getTreePath),a=a.skip(o*(r-1)).limit(o).get(h),a},getNodeData(e){this.loading||(this.loading=!0,this.getCommand({field:this.postField,where:this._pathWhere()}).then((t=>{this.loading=!1,this.selected=t.result.data,e&&e()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},getTreePath(e){this.loading||(this.loading=!0,this.getCommand({field:this.postField,getTreePath:{startWith:`${this.selfField}=='${this.dataValue}'`}}).then((t=>{this.loading=!1;let a=[];this._extractTreePath(t.result.data,a),this.selected=a,e&&e()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},loadData(){this.isLocaldata?this._processLocalData():null==this.dataValue?this.stepSearh?this._loadNodeData((e=>{this._treeData=e,this._updateBindData()})):this._loadAllData((e=>{this._treeData=[],this._extractTree(e,this._treeData,null),this._updateBindData()})):this._loadNodeData((e=>{this._treeData=e,this._updateBindData(),this._updateSelected()}))},_loadAllData(e){this.loading||(this.loading=!0,this.getCommand({field:this.postField,gettree:!0,startwith:`${this.selfField}=='${this.dataValue}'`}).then((t=>{this.loading=!1,e(t.result.data),this.onDataChange()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},_loadNodeData(e,t){this.loading||(this.loading=!0,this.getCommand({field:this.postField,where:t||this._postWhere(),pageSize:500}).then((t=>{this.loading=!1,e(t.result.data),this.onDataChange()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},_pathWhere(){let e=[],t=this._getParentNameByField();return t&&e.push(`${t} == '${this.dataValue}'`),this.where?`(${this.where}) && (${e.join(" || ")})`:e.join(" || ")},_postWhere(){let e=[],t=this.selected,a=this.parentField;if(a&&e.push(`${a} == null || ${a} == ""`),t.length)for(var l=0;l<t.length-1;l++)e.push(`${a} == '${t[l].value}'`);let s=[];return this.where&&s.push(`(${this.where})`),e.length&&s.push(`(${e.join(" || ")})`),s.join(" && ")},_nodeWhere(){let e=[],t=this.selected;return t.length&&e.push(`${this.parentField} == '${t[t.length-1].value}'`),this.where?`(${this.where}) && (${e.join(" || ")})`:e.join(" || ")},_getParentNameByField(){const e=this.field.split(",");let t=null;for(let a=0;a<e.length;a++){const l=e[a].split("as");if(!(l.length<2)&&"value"===l[1].trim()){t=l[0].trim();break}}return t},_isTreeView(){return this.parentField&&this.selfField},_updateSelected(){var e=this.dataList,t=this.selected;let a=this.map.text,l=this.map.value;for(var s=0;s<t.length;s++)for(var i=t[s].value,d=e[s],n=0;n<d.length;n++){var r=d[n];if(r[l]===i){t[s].text=r[a];break}}},_updateBindData(e){const{dataList:t,hasNodes:a}=this._filterData(this._treeData,this.selected);let l=!1===this._stepSearh&&!a;return e&&(e.isleaf=l),this.dataList=t,this.selectedIndex=t.length-1,!l&&this.selected.length<t.length&&this.selected.push({value:null,text:"请选择"}),{isleaf:l,hasNodes:a}},_filterData(e,t){let a=[],l=!0;a.push(e.filter((e=>null===e.parent_value||void 0===e.parent_value||""===e.parent_value)));for(let d=0;d<t.length;d++){var s=t[d].value,i=e.filter((e=>e.parent_value===s));i.length?a.push(i):l=!1}return{dataList:a,hasNodes:l}},_extractTree(e,t,a){let l=this.map.value;for(let s=0;s<e.length;s++){let i=e[s],d={};for(let e in i)"children"!==e&&(d[e]=i[e]);null!=a&&""!==a&&(d.parent_value=a),t.push(d);let n=i.children;n&&this._extractTree(n,t,i[l])}},_extractTreePath(e,t){for(let a=0;a<e.length;a++){let l=e[a],s={};for(let e in l)"children"!==e&&(s[e]=l[e]);t.push(s);let i=l.children;i&&this._extractTreePath(i,t)}},_findNodePath(e,t,a=[]){let l=this.map.text,s=this.map.value;for(let i=0;i<t.length;i++){let d=t[i],n=d.children,r=d[l],o=d[s];if(a.push({value:o,text:r}),o===e)return a;if(n){const t=this._findNodePath(e,n,a);if(t.length)return t}a.pop()}return[]},_processLocalData(){this._treeData=[],this._extractTree(this.localdata,this._treeData);var e=this.dataValue;void 0!==e&&(Array.isArray(e)&&"object"==typeof(e=e[e.length-1])&&e[this.map.value]&&(e=e[this.map.value]),this.selected=this._findNodePath(e,this.localdata))}}};const C=k({name:"UniDataPicker",emits:["popupopened","popupclosed","nodeclick","input","change","update:modelValue"],mixins:[x],components:{DataPickerView:k({name:"UniDataPickerView",emits:["nodeclick","change","datachange","update:modelValue"],mixins:[x],props:{managedMode:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!0}},data:()=>({}),created(){this.managedMode||this.$nextTick((()=>{this.load()}))},methods:{onPropsChange(){this._treeData=[],this.selectedIndex=0,this.load()},load(){this.isLocaldata?this.loadData():this.dataValue.length&&this.getTreePath((e=>{this.loadData()}))},handleSelect(e){this.selectedIndex=e},handleNodeClick(e,t,a){if(e.disable)return;const l=this.dataList[t][a],s=l[this.map.text],i=l[this.map.value];if(t<this.selected.length-1?(this.selected.splice(t,this.selected.length-t),this.selected.push({text:s,value:i})):t===this.selected.length-1&&this.selected.splice(t,1,{text:s,value:i}),l.isleaf)return void this.onSelectedChange(l,l.isleaf);const{isleaf:d,hasNodes:n}=this._updateBindData();(this._isTreeView()||n)&&(!this.isLocaldata||n&&!d)?d||n?this.onSelectedChange(l,!1):this._loadNodeData((e=>{e.length?(this._treeData.push(...e),this._updateBindData(l)):l.isleaf=!0,this.onSelectedChange(l,l.isleaf)}),this._nodeWhere()):this.onSelectedChange(l,!0)},updateData(e){this._treeData=e.treeData,this.selected=e.selected,this._treeData.length?this._updateBindData():this.loadData()},onDataChange(){this.$emit("datachange")},onSelectedChange(e,t){t&&this._dispatchEvent(),e&&this.$emit("nodeclick",e)},_dispatchEvent(){this.$emit("change",this.selected.slice(0))}}},[["render",function(e,m,_,y,k,S){const x=p,C=g,w=f,V=D(t("uni-load-more"),v);return a(),l(C,{class:"uni-data-pickerview"},{default:s((()=>[i(w,{class:"selected-area","scroll-x":"true","scroll-y":"false","show-scrollbar":!1},{default:s((()=>[i(C,{class:"selected-list"},{default:s((()=>[(a(!0),d(n,null,r(e.selected,((t,r)=>(a(),d(n,{key:r},[t.text?(a(),l(C,{key:0,class:o(["selected-item",{"selected-item-active":r==e.selectedIndex,"selected-item-text-overflow":_.ellipsis}]),onClick:e=>S.handleSelect(r)},{default:s((()=>[i(x,{class:""},{default:s((()=>[h(c(t.text),1)])),_:2},1024)])),_:2},1032,["class","onClick"])):u("",!0)],64)))),128))])),_:1})])),_:1}),i(C,{class:"tab-c"},{default:s((()=>[(a(!0),d(n,null,r(e.dataList,((t,p)=>(a(),d(n,{key:p},[p==e.selectedIndex?(a(),l(w,{class:"list",key:p,"scroll-y":!0},{default:s((()=>[(a(!0),d(n,null,r(t,((t,d)=>(a(),l(C,{class:o(["item",{"is-disabled":!!t.disable}]),key:"item"+d,onClick:e=>S.handleNodeClick(t,p,d)},{default:s((()=>[i(x,{class:"item-text item-text-overflow"},{default:s((()=>[h(c(t[e.map.text]),1)])),_:2},1024),e.selected.length>p&&t[e.map.value]==e.selected[p].value?(a(),l(C,{key:0,class:"check"})):u("",!0)])),_:2},1032,["class","onClick"])))),128))])),_:2},1024)):u("",!0)],64)))),128)),e.loading?(a(),l(C,{key:0,class:"loading-cover"},{default:s((()=>[i(V,{class:"load-more",contentText:e.loadMore,status:"loading"},null,8,["contentText"])])),_:1})):u("",!0),e.errorMessage?(a(),l(C,{key:1,class:"error-message"},{default:s((()=>[i(x,{class:"error-text"},{default:s((()=>[h(c(e.errorMessage),1)])),_:1})])),_:1})):u("",!0)])),_:1})])),_:1})}],["__scopeId","data-v-025aca9a"]])},props:{options:{type:[Object,Array],default:()=>({})},popupTitle:{type:String,default:"请选择"},placeholder:{type:String,default:"请选择"},heightMobile:{type:String,default:""},readonly:{type:Boolean,default:!1},clearIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!0},split:{type:String,default:"/"},ellipsis:{type:Boolean,default:!0}},data:()=>({isOpened:!1,inputSelected:[]}),created(){this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this)),this.$nextTick((()=>{this.load()}))},methods:{clear(){this.inputSelected.splice(0),this._dispatchEvent([])},onPropsChange(){this._treeData=[],this.selectedIndex=0,this.load()},load(){this.readonly?this._processReadonly(this.localdata,this.dataValue):this.isLocaldata?(this.loadData(),this.inputSelected=this.selected.slice(0)):this.parentField||this.selfField||!this.hasValue?this.hasValue&&this.getTreePath((()=>{this.inputSelected=this.selected.slice(0)})):this.getNodeData((()=>{this.inputSelected=this.selected.slice(0)}))},getForm(e="uniForms"){let t=this.$parent,a=t.$options.name;for(;a!==e;){if(t=t.$parent,!t)return!1;a=t.$options.name}return t},show(){this.isOpened=!0,setTimeout((()=>{this.$refs.pickerView.updateData({treeData:this._treeData,selected:this.selected,selectedIndex:this.selectedIndex})}),200),this.$emit("popupopened")},hide(){this.isOpened=!1,this.$emit("popupclosed")},handleInput(){this.readonly||this.show()},handleClose(e){this.hide()},onnodeclick(e){this.$emit("nodeclick",e)},ondatachange(e){this._treeData=this.$refs.pickerView._treeData},onchange(e){this.hide(),this.$nextTick((()=>{this.inputSelected=e})),this._dispatchEvent(e)},_processReadonly(e,t){if(e.findIndex((e=>e.children))>-1){let e;return Array.isArray(t)?(e=t[t.length-1],"object"==typeof e&&e.value&&(e=e.value)):e=t,void(this.inputSelected=this._findNodePath(e,this.localdata))}if(!this.hasValue)return void(this.inputSelected=[]);let a=[];for(let i=0;i<t.length;i++){var l=t[i],s=e.find((e=>e.value==l));s&&a.push(s)}a.length&&(this.inputSelected=a)},_filterForArray(e,t){var a=[];for(let i=0;i<t.length;i++){var l=t[i],s=e.find((e=>e.value==l));s&&a.push(s)}return a},_dispatchEvent(e){let t={};if(e.length){for(var a=new Array(e.length),l=0;l<e.length;l++)a[l]=e[l].value;t=e[e.length-1]}else t.value="";this.formItem&&this.formItem.setValue(t.value),this.$emit("input",t.value),this.$emit("update:modelValue",t.value),this.$emit("change",{detail:{value:e}})}}},[["render",function(e,k,x,C,w,V){const $=p,b=D(t("uni-load-more"),v),F=g,I=f,T=D(t("uni-icons"),S),N=m("data-picker-view");return a(),l(F,{class:"uni-data-tree"},{default:s((()=>[i(F,{class:"uni-data-tree-input",onClick:V.handleInput},{default:s((()=>[_(e.$slots,"default",{options:x.options,data:w.inputSelected,error:e.errorMessage},(()=>[i(F,{class:o(["input-value",{"input-value-border":x.border}])},{default:s((()=>[e.errorMessage?(a(),l($,{key:0,class:"selected-area error-text"},{default:s((()=>[h(c(e.errorMessage),1)])),_:1})):e.loading&&!w.isOpened?(a(),l(F,{key:1,class:"selected-area"},{default:s((()=>[i(b,{class:"load-more",contentText:e.loadMore,status:"loading"},null,8,["contentText"])])),_:1})):w.inputSelected.length?(a(),l(I,{key:2,class:"selected-area","scroll-x":"true"},{default:s((()=>[i(F,{class:"selected-list"},{default:s((()=>[(a(!0),d(n,null,r(w.inputSelected,((e,t)=>(a(),l(F,{class:"selected-item",key:t},{default:s((()=>[i($,null,{default:s((()=>[h(c(e.text),1)])),_:2},1024),t<w.inputSelected.length-1?(a(),l($,{key:0,class:"input-split-line"},{default:s((()=>[h(c(x.split),1)])),_:1})):u("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})):(a(),l($,{key:3,class:"selected-area placeholder"},{default:s((()=>[h(c(x.placeholder),1)])),_:1})),x.clearIcon&&!x.readonly&&w.inputSelected.length?(a(),l(F,{key:4,class:"icon-clear",onClick:y(V.clear,["stop"])},{default:s((()=>[i(T,{type:"clear",color:"#e1e1e1",size:"14"})])),_:1},8,["onClick"])):u("",!0),x.clearIcon&&w.inputSelected.length||x.readonly?u("",!0):(a(),l(F,{key:5,class:"arrow-area"},{default:s((()=>[i(F,{class:"input-arrow"})])),_:1}))])),_:1},8,["class"])]),!0)])),_:3},8,["onClick"]),w.isOpened?(a(),l(F,{key:0,class:"uni-data-tree-cover",onClick:V.handleClose},null,8,["onClick"])):u("",!0),w.isOpened?(a(),l(F,{key:1,class:"uni-data-tree-dialog"},{default:s((()=>[i(F,{class:"uni-popper__arrow"}),i(F,{class:"dialog-caption"},{default:s((()=>[i(F,{class:"title-area"},{default:s((()=>[i($,{class:"dialog-title"},{default:s((()=>[h(c(x.popupTitle),1)])),_:1})])),_:1}),i(F,{class:"dialog-close",onClick:V.handleClose},{default:s((()=>[i(F,{class:"dialog-close-plus","data-id":"close"}),i(F,{class:"dialog-close-plus dialog-close-rotate","data-id":"close"})])),_:1},8,["onClick"])])),_:1}),i(N,{class:"picker-view",ref:"pickerView",modelValue:e.dataValue,"onUpdate:modelValue":k[0]||(k[0]=t=>e.dataValue=t),localdata:e.localdata,preload:e.preload,collection:e.collection,field:e.field,orderby:e.orderby,where:e.where,"step-searh":e.stepSearh,"self-field":e.selfField,"parent-field":e.parentField,"managed-mode":!0,map:e.map,ellipsis:x.ellipsis,onChange:V.onchange,onDatachange:V.ondatachange,onNodeclick:V.onnodeclick},null,8,["modelValue","localdata","preload","collection","field","orderby","where","step-searh","self-field","parent-field","map","ellipsis","onChange","onDatachange","onNodeclick"])])),_:1})):u("",!0)])),_:3})}],["__scopeId","data-v-2c1a143f"]]);export{C as _};
