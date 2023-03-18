import{o as a,a as e,w as t,h as s,d as i,b as l,f as d,t as n,e as r,n as c,u as o,g as u,i as _}from"./index-58106c7f.js";import{_ as p}from"./uni-app.es.3372d794.js";const f=p({name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick(a){this.$emit("click",a)}}},[["render",function(p,f,h,g,y,x){const m=o,k=u,b=_;return a(),e(k,{class:c(["uni-card",{"uni-card--full":h.isFull,"uni-card--shadow":h.isShadow,"uni-card--border":h.border}]),style:r({margin:h.isFull?0:h.margin,padding:h.spacing,"box-shadow":h.isShadow?h.shadow:""})},{default:t((()=>[s(p.$slots,"cover",{},(()=>[h.cover?(a(),e(k,{key:0,class:"uni-card__cover"},{default:t((()=>[i(m,{class:"uni-card__cover-image",mode:"widthFix",onClick:f[0]||(f[0]=a=>x.onClick("cover")),src:h.cover},null,8,["src"])])),_:1})):l("",!0)]),!0),s(p.$slots,"title",{},(()=>[h.title||h.extra?(a(),e(k,{key:0,class:"uni-card__header"},{default:t((()=>[i(k,{class:"uni-card__header-box",onClick:f[1]||(f[1]=a=>x.onClick("title"))},{default:t((()=>[h.thumbnail?(a(),e(k,{key:0,class:"uni-card__header-avatar"},{default:t((()=>[i(m,{class:"uni-card__header-avatar-image",src:h.thumbnail,mode:"aspectFit"},null,8,["src"])])),_:1})):l("",!0),i(k,{class:"uni-card__header-content"},{default:t((()=>[i(b,{class:"uni-card__header-content-title uni-ellipsis"},{default:t((()=>[d(n(h.title),1)])),_:1}),h.title&&h.subTitle?(a(),e(b,{key:0,class:"uni-card__header-content-subtitle uni-ellipsis"},{default:t((()=>[d(n(h.subTitle),1)])),_:1})):l("",!0)])),_:1})])),_:1}),i(k,{class:"uni-card__header-extra",onClick:f[2]||(f[2]=a=>x.onClick("extra"))},{default:t((()=>[i(b,{class:"uni-card__header-extra-text"},{default:t((()=>[d(n(h.extra),1)])),_:1})])),_:1})])),_:1})):l("",!0)]),!0),i(k,{class:"uni-card__content",style:r({padding:h.padding}),onClick:f[3]||(f[3]=a=>x.onClick("content"))},{default:t((()=>[s(p.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),i(k,{class:"uni-card__actions",onClick:f[4]||(f[4]=a=>x.onClick("actions"))},{default:t((()=>[s(p.$slots,"actions",{},void 0,!0)])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-64011453"]]);export{f as _};
