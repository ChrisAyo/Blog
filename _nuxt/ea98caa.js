(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{444:function(e,t,r){"use strict";r.r(t);var n=r(89),o=r(125),c=r.n(o),l=(r(10),r(12),r(17),r(18),r(2)),f=(r(5),r(26),r(13),r(23),r(55),r(396),r(43),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),r(409),r(45),r(44),r(11),r(60),r(264),r(1)),d=r(88),O=r(0);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=["sm","md","lg","xl"],m=y.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),w=y.reduce((function(e,t){return e["offset"+Object(O.s)(t)]={type:[String,Number],default:null},e}),{}),h=y.reduce((function(e,t){return e["order"+Object(O.s)(t)]={type:[String,Number],default:null},e}),{}),S={col:Object.keys(m),offset:Object.keys(w),order:Object.keys(h)};function k(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var P=new Map,C=f.a.extend({name:"v-col",functional:!0,props:j(j(j(j({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,n=t.children,o=(t.parent,"");for(var c in r)o+=String(r[c]);var f=P.get(o);return f||function(){var e,t;for(t in f=[],S)S[t].forEach((function(e){var n=r[e],o=k(t,e,n);o&&f.push(o)}));var n=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!n||!r.cols},Object(l.a)(e,"col-".concat(r.cols),r.cols),Object(l.a)(e,"offset-".concat(r.offset),r.offset),Object(l.a)(e,"order-".concat(r.order),r.order),Object(l.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),P.set(o,f)}(),e(r.tag,Object(d.a)(data,{class:f}),n)}}),N=r(439),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{staticClass:"text-center"},[r("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),e._v(" "),r("blockquote",{staticClass:"blockquote"},[e._v("\n      “First, solve the problem. Then, write the code.”\n      "),r("footer",[r("small",[r("em",[e._v("—Chris Ayodele")])])])])])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCol:C,VRow:N.a})}}]);