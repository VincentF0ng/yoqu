import{r as e,o as t,a,w as o,d as l,n as s,e as r,b as i,q as n,F as u,h as d,U as c,I as m,g as p,D as h,E as f,G as y,k as g,f as b,i as x}from"./index-c8b85e9c.js";import{_}from"./uni-data-picker.f64a85a6.js";import{_ as V,r as k}from"./uni-app.es.a0b016b8.js";import{_ as v,a as I}from"./uni-forms.f9f05a77.js";import{_ as w}from"./uni-icons.e1934763.js";import{_ as C}from"./uni-data-checkbox.445613c2.js";import{_ as S}from"./v-btn.e49c851c.js";import"./uni-load-more.10c7c454.js";const D=V({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm"],model:{prop:"modelValue",event:"update:modelValue"},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:String,placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:15},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!0},passwordIcon:{type:Boolean,default:!0},styles:{type:Object,default:()=>({color:"#333",disableColor:"#F7F6F6",borderColor:"#e5e5e5"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,errMsg:"",val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1}),computed:{msg(){return this.errorMessage||this.errMsg},inputMaxlength(){return Number(this.maxlength)}},watch:{value(e){this.errMsg&&(this.errMsg=""),this.val=e,this.form&&this.formItem&&!this.is_reset&&(this.is_reset=!1,this.formItem.setValue(e))},modelValue(e){this.errMsg&&(this.errMsg=""),this.val=e,this.form&&this.formItem&&!this.is_reset&&(this.is_reset=!1,this.formItem.setValue(e))},focus(e){this.$nextTick((()=>{this.focused=this.focus}))}},created(){this.value||0===this.value||(this.val=this.modelValue),this.modelValue||0===this.modelValue||(this.val=this.value),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.is_reset||(this.is_reset=!1,this.formItem.setValue(this.val)),this.rename=this.formItem.name,this.form.inputChildrens.push(this))},mounted(){this.$nextTick((()=>{this.focused=this.focus}))},methods:{init(){},onClickIcon(e){this.$emit("iconClick",e)},getForm(e="uniForms"){let t=this.$parent,a=t.$options.name;for(;a!==e;){if(t=t.$parent,!t)return!1;a=t.$options.name}return t},onEyes(){this.showPassword=!this.showPassword},onInput(e){let t=e.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(t=this.trimStr(t)),"string"==typeof this.trim&&(t=this.trimStr(t,this.trim))),this.errMsg&&(this.errMsg=""),this.val=t,this.$emit("input",t),this.$emit("update:modelValue",t)},onFocus(e){this.$emit("focus",e)},onBlur(e){e.detail.value,this.$emit("blur",e)},onConfirm(e){this.$emit("confirm",e.detail.value)},onClear(e){this.val="",this.$emit("input",""),this.$emit("update:modelValue","")},fieldClick(){this.$emit("click")},trimStr:(e,t="both")=>"both"===t?e.trim():"left"===t?e.trimLeft():"right"===t?e.trimRight():"start"===t?e.trimStart():"end"===t?e.trimEnd():"all"===t?e.replace(/\s+/g,""):e}},[["render",function(h,f,y,g,b,x){const _=k(e("uni-icons"),w),V=c,v=m,I=p;return t(),a(I,{class:s(["uni-easyinput",{"uni-easyinput-error":x.msg}]),style:r({color:y.inputBorder&&x.msg?"#e43d33":y.styles.color})},{default:o((()=>[l(I,{class:s(["uni-easyinput__content",{"is-input-border":y.inputBorder,"is-input-error-border":y.inputBorder&&x.msg,"is-textarea":"textarea"===y.type,"is-disabled":y.disabled}]),style:r({"border-color":y.inputBorder&&x.msg?"#dd524d":y.styles.borderColor,"background-color":y.disabled?y.styles.disableColor:""})},{default:o((()=>[y.prefixIcon?(t(),a(_,{key:0,class:"content-clear-icon",type:y.prefixIcon,color:"#c0c4cc",onClick:f[0]||(f[0]=e=>x.onClickIcon("prefix"))},null,8,["type"])):i("",!0),"textarea"===y.type?(t(),a(V,{key:1,class:s(["uni-easyinput__content-textarea",{"input-padding":y.inputBorder}]),name:y.name,value:b.val,placeholder:y.placeholder,placeholderStyle:y.placeholderStyle,disabled:y.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:x.inputMaxlength,focus:b.focused,autoHeight:y.autoHeight,onInput:x.onInput,onBlur:x.onBlur,onFocus:x.onFocus,onConfirm:x.onConfirm},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","onInput","onBlur","onFocus","onConfirm"])):(t(),a(v,{key:2,type:"password"===y.type?"text":y.type,class:"uni-easyinput__content-input",style:r({"padding-right":"password"===y.type||y.clearable||y.prefixIcon?"":"10px","padding-left":y.prefixIcon?"":"10px"}),name:y.name,value:b.val,password:!b.showPassword&&"password"===y.type,placeholder:y.placeholder,placeholderStyle:y.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:y.disabled,maxlength:x.inputMaxlength,focus:b.focused,confirmType:y.confirmType,onFocus:x.onFocus,onBlur:x.onBlur,onInput:x.onInput,onConfirm:x.onConfirm},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","onFocus","onBlur","onInput","onConfirm"])),"password"===y.type&&y.passwordIcon?(t(),n(u,{key:3},[b.val?(t(),a(_,{key:0,class:s(["content-clear-icon",{"is-textarea-icon":"textarea"===y.type}]),type:b.showPassword?"eye-slash-filled":"eye-filled",size:18,color:"#c0c4cc",onClick:x.onEyes},null,8,["class","type","onClick"])):i("",!0)],64)):y.suffixIcon?(t(),n(u,{key:4},[y.suffixIcon?(t(),a(_,{key:0,class:"content-clear-icon",type:y.suffixIcon,color:"#c0c4cc",onClick:f[1]||(f[1]=e=>x.onClickIcon("suffix"))},null,8,["type"])):i("",!0)],64)):(t(),n(u,{key:5},[y.clearable&&b.val&&!y.disabled?(t(),a(_,{key:0,class:s(["content-clear-icon",{"is-textarea-icon":"textarea"===y.type}]),type:"clear",size:y.clearSize,color:"#c0c4cc",onClick:x.onClear},null,8,["class","size","onClick"])):i("",!0)],64)),d(h.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-5e6d6801"]]);const B=V({data:()=>({type:1,types:[{value:1,text:"投稿 - 海龟汤"},{value:2,text:"建议"}],formData:{title:"",question:"",answer:"",authour:"",share:1,contact:"",content:""},rules:{title:{rules:[{required:!0,errorMessage:"标题不能为空"}]},question:{rules:[{required:!0,errorMessage:"汤面不能为空"}]},answer:{rules:[{required:!0,errorMessage:"汤底不能为空"}]},content:{rules:[{required:!0,errorMessage:"内容不能为空"}]}}}),methods:{submit(e){this.$refs[e].validate().then((e=>{const t=this.type;if(h({title:"上传中"}),1===t){f.importObject("tutleSoupsOptions").addOne(e).then((e=>{y(),g({title:"感谢投稿，后台审核成功后将在列表页置顶喔。",icon:"none",duration:4e3}),this.formData.title="",this.formData.question="",this.formData.answer="",this.formData.content=""})).catch((e=>{y(),g({title:"提交失败",icon:"error"})}))}else if(2===t){f.importObject("suggestionOptions").addOne(e).then((e=>{y(),g({title:"感谢建议"}),this.formData.content=""})).catch((e=>{y(),g({title:"提交失败",icon:"error"})}))}}))}},onLoad:function(e){e.type&&this.$nextTick((t=>{this.type=Number(e.type)||1}))}},[["render",function(s,r,d,c,m,h){const f=k(e("uni-data-picker"),_),y=k(e("uni-forms-item"),v),g=k(e("uni-easyinput"),D),V=k(e("uni-data-checkbox"),C),B=p,F=k(e("uni-forms"),I),M=x,$=k(e("uni-icons"),w),q=k(e("v-btn"),S);return t(),a(B,{class:"form-wrap"},{default:o((()=>[l(F,{ref:"valiForm",rules:m.rules,modelValue:m.formData},{default:o((()=>[l(y,{label:"类型",name:"type",required:""},{default:o((()=>[l(f,{modelValue:m.type,"onUpdate:modelValue":r[0]||(r[0]=e=>m.type=e),localdata:m.types,"clear-icon":!1},null,8,["modelValue","localdata"])])),_:1}),2===m.type?(t(),a(y,{key:0,label:"建议",required:"",name:"content"},{default:o((()=>[l(g,{type:"textarea",modelValue:m.formData.content,"onUpdate:modelValue":r[1]||(r[1]=e=>m.formData.content=e),autoHeight:"",placeholder:"请输入建议"},null,8,["modelValue"])])),_:1})):(t(),n(u,{key:1},[l(y,{label:"标题",required:"",name:"title"},{default:o((()=>[l(g,{modelValue:m.formData.title,"onUpdate:modelValue":r[2]||(r[2]=e=>m.formData.title=e),trim:"all",placeholder:"请输入标题"},null,8,["modelValue"])])),_:1}),l(y,{label:"汤面",required:"",name:"question"},{default:o((()=>[l(g,{type:"textarea",modelValue:m.formData.question,"onUpdate:modelValue":r[3]||(r[3]=e=>m.formData.question=e),autoHeight:"",placeholder:"请输入汤面"},null,8,["modelValue"])])),_:1}),l(y,{label:"汤底",required:"",name:"answer"},{default:o((()=>[l(g,{type:"textarea",modelValue:m.formData.answer,"onUpdate:modelValue":r[4]||(r[4]=e=>m.formData.answer=e),autoHeight:"",placeholder:"请输入汤底"},null,8,["modelValue"])])),_:1}),l(y,{label:"作者",name:"authour"},{default:o((()=>[l(g,{modelValue:m.formData.authour,"onUpdate:modelValue":r[5]||(r[5]=e=>m.formData.authour=e),placeholder:"请输入作者"},null,8,["modelValue"])])),_:1}),l(y,{label:"允许转发",name:"share"},{default:o((()=>[l(V,{mode:"tag",selectedColor:"#6d5dfc",modelValue:m.formData.share,"onUpdate:modelValue":r[6]||(r[6]=e=>m.formData.share=e),localdata:[{text:"是",value:1},{text:"否",value:0}]},null,8,["modelValue"])])),_:1}),0===m.formData.share?(t(),a(y,{key:0,label:"联系方式",name:"contact"},{default:o((()=>[l(g,{modelValue:m.formData.contact,"onUpdate:modelValue":r[7]||(r[7]=e=>m.formData.contact=e),placeholder:"请输入联系方式"},null,8,["modelValue"])])),_:1})):i("",!0)],64)),l(B,{class:"msg"},{default:o((()=>[1===m.type&&0===m.formData.share?(t(),a(B,{key:0},{default:o((()=>[b("不允许转发将在文章中注明，并展示您的联系方式，感谢投稿。")])),_:1})):i("",!0),l(B,null,{default:o((()=>[b("有任何问题，可右上角点击小程序介绍页，联系客服。")])),_:1})])),_:1})])),_:1},8,["rules","modelValue"]),l(q,{class:"btn",type:"primary",onClick:r[8]||(r[8]=e=>h.submit("valiForm"))},{default:o((()=>[l(M,{style:{"margin-right":"10px"}},{default:o((()=>[b("提交")])),_:1}),l($,{type:"paperplane-filled",size:"20",color:"#E4EBF5"})])),_:1})])),_:1})}],["__scopeId","data-v-c21481b0"]]);export{B as default};
