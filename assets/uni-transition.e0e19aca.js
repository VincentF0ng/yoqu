import{ae as t,o as i,a as s,w as e,h as a,n,e as o,b as r,g as l}from"./index-52f4615d.js";import{_ as h}from"./uni-app.es.112b1a50.js";class m{constructor(i,s){this.options=i,this.animation=t(i),this.currentStepAnimates={},this.next=0,this.$=s}_nvuePushAnimates(t,i){let s=this.currentStepAnimates[this.next],e={};if(e=s||{styles:{},config:{}},c.includes(t)){e.styles.transform||(e.styles.transform="");let s="";"rotate"===t&&(s="deg"),e.styles.transform+=`${t}(${i+s}) `}else e.styles[t]=`${i}`;this.currentStepAnimates[this.next]=e}_animateRun(t={},i={}){let s=this.$.$refs.ani.ref;if(s)return new Promise(((e,a)=>{nvueAnimation.transition(s,{styles:t,...i},(t=>{e()}))}))}_nvueNextAnimate(t,i=0,s){let e=t[i];if(e){let{styles:a,config:n}=e;this._animateRun(a,n).then((()=>{i+=1,this._nvueNextAnimate(t,i,s)}))}else this.currentStepAnimates={},"function"==typeof s&&s(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const c=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function u(t,i){if(i)return clearTimeout(i.timer),new m(t,i)}c.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{m.prototype[t]=function(...i){return this.animation[t](...i),this}}));const d=h({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},i="";for(let s in t){i+=this.toLine(s)+":"+t[s]+";"}return i},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=u(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,i={}){if(this.animation){for(let i in t)try{"object"==typeof t[i]?this.animation[i](...t[i]):this.animation[i](t[i])}catch(s){console.error(`方法 ${i} 不存在`)}return this.animation.step(i),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:i}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=i,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=u(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:i}=this.styleInit(!1);this.opacity=t||1,this.transform=i,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let i={transform:""},s=(t,s)=>{"fade"===s?i.opacity=this.animationType(t)[s]:i.transform+=this.animationType(t)[s]+" "};return"string"==typeof this.modeClass?s(t,this.modeClass):this.modeClass.forEach((i=>{s(t,i)})),i},tranfromInit(t){let i=(t,i)=>{let s=null;"fade"===i?s=t?0:1:(s=t?"-100%":"0","zoom-in"===i&&(s=t?.8:1),"zoom-out"===i&&(s=t?1.2:1),"slide-right"===i&&(s=t?"100%":"0"),"slide-bottom"===i&&(s=t?"100%":"0")),this.animation[this.animationMode()[i]](s)};return"string"==typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((s=>{i(t,s)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,h,m,c,u,d){const f=l;return u.isShow?(i(),s(f,{key:0,ref:"ani",animation:u.animationData,class:n(m.customClass),style:o(d.transformStyles),onClick:d.onClick},{default:e((()=>[a(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])):r("",!0)}]]);export{d as _};
