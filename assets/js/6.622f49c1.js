(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(t,e,s){},150:function(t,e,s){},155:function(t,e,s){"use strict";var a=s(149);s.n(a).a},156:function(t,e,s){"use strict";var a=s(150);s.n(a).a},159:function(t,e,s){"use strict";var a={name:"g-row",props:{gutter:{type:[String,Number]},align:{type:String,default:"left",validator:t=>["left","center","right"].includes(t)}},mounted(){this.$children.forEach(t=>{t.gutter=this.gutter})}},n=(s(155),s(6)),i=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:[this.align&&"align-"+this.align]},[this._t("default")],2)}),[],!1,null,"34bb362e",null);e.a=i.exports},160:function(t,e,s){"use strict";let a=t=>{let e=!0,s=Object.keys(t),a=["span","offset"];return s.forEach(t=>{a.includes(t)||(e=!1)}),e};var n={name:"g-col",props:{span:{type:[String,Number]},offset:{type:[String,Number]},phone:{type:Object,validator:a},ipad:{type:Object,validator:a},narrowPc:{type:Object,validator:a},pc:{type:Object,validator:a},widePc:{type:Object,validator:a}},data:()=>({gutter:0}),computed:{colClass(){let t=(t,e="")=>[t&&t.span&&`col-${e}${t.span}`,t&&t.offset&&`offset-${e}${t.offset}`];const{span:e,offset:s,phone:a,ipad:n,narrowPc:i,pc:r,widePc:c}=this;return[...t({span:e,offset:s}),...t(a,"phone-"),...t(n,"ipad-"),...t(i,"narrow-pc-"),...t(r,"pc-"),...t(c,"wide-pc-")]}}},i=(s(156),s(6)),r=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}},[this._t("default")],2)}),[],!1,null,"cf3cc9c0",null);e.a=r.exports},180:function(t,e,s){},208:function(t,e,s){"use strict";var a=s(180);s.n(a).a},224:function(t,e,s){"use strict";s.r(e);var a=s(159),n=s(160),i={name:"grid",components:{myrow:a.a,mycol:n.a}},r=(s(208),s(6)),c=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("myrow",[e("mycol",{staticClass:"bg",attrs:{phone:{span:24},ipad:{span:12},narrowPc:{span:6,offset:6}}},[this._v("1")]),this._v(" "),e("mycol",{staticClass:"bg",attrs:{phone:{span:24},ipad:{span:12},narrowPc:{span:6,offset:6}}},[this._v("2")])],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);