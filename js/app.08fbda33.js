(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],p=0,v=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0992":function(t,e,r){},"183e":function(t,e,r){"use strict";r("db31")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/pic"}},[t._v("PicList")]),t._v(" | "),r("router-link",{attrs:{to:"/pic/1"}},[t._v("Pic1")]),t._v(" | "),r("router-link",{attrs:{to:"/pic/2"}},[t._v("Pic2")])],1),r("router-view"),r("div",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.lightbox,expression:"$route.meta.lightbox"}],staticClass:"lightbox"},[r("div",{staticClass:"content"},[r("router-view",{attrs:{name:"lightbox"}})],1),r("button",{on:{click:t.closeHandler}},[t._v("X")])])],1)},a=[],i={methods:{closeHandler:function(){var t=-1*this.$store.state.lightbox;this.$store.commit("RESET_LIGHTBOX"),this.$router.go(t)}}},s=i,l=(r("5c0b"),r("2877")),c=Object(l["a"])(s,o,a,!1,null,null,null),u=c.exports,p=r("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),t._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},_=b,g=(r("e2d3"),Object(l["a"])(_,f,m,!1,null,"1dfc7223",null)),d=g.exports,x={name:"Home",components:{HelloWorld:d}},j=x,k=Object(l["a"])(j,v,h,!1,null,null,null),w=k.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pic"},[r("h1",[t._v("This is an Pic page")]),r("div",{staticClass:"bigpic"},[t._v(t._s(t.$route.params.id))])])},O=[],$={mounted:function(){this.$route.meta.lightbox&&this.$store.commit("LIGHTBOX")},updated:function(){this.$route.meta.lightbox&&this.$store.commit("LIGHTBOX")}},E=$,P=(r("c7bf"),Object(l["a"])(E,y,O,!1,null,"76aee6c1",null)),C=P.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"piclist"},[r("h1",[t._v("This is an PicList page")]),r("router-link",{staticClass:"pic",attrs:{to:"./pic/1"}},[t._v("1")]),r("router-link",{staticClass:"pic",attrs:{to:"./pic/2"}},[t._v("2")])],1)},T=[],L=(r("183e"),{}),S=Object(l["a"])(L,H,T,!1,null,"606f5b60",null),I=S.exports;n["a"].use(p["a"]);var X=[{path:"/",name:"Home",component:w},{path:"/pic",name:"PicList",component:I,meta:{type:"container"}},{path:"/pic/:id",name:"Pic",component:C,meta:{type:"content",lightbox:!1}}],B=new p["a"]({mode:"history",base:"",routes:X});B.beforeEach((function(t,e,r){if(e.matched.length){var n=e.matched[0],o=(t.matched[0],null);"container"===n.meta.type&&"content"===t.meta.type?o=n.components.default:n.components.lightbox&&(o=n.components.default,n.components.default=n.components.lightbox,n.components.lightbox=null,e.meta.lightbox=!1),o&&"content"===t.meta.type&&(t.matched[0].components.lightbox=t.matched[0].components.default,t.matched[0].components.default=o,t.meta.lightbox=!0)}r()}));var G=B,M=r("2f62");n["a"].use(M["a"]);var W=new M["a"].Store({state:{lightbox:0},mutations:{LIGHTBOX:function(t){t.lightbox+=1},RESET_LIGHTBOX:function(t){t.lightbox=0}},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:G,store:W,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},b5be:function(t,e,r){},c7bf:function(t,e,r){"use strict";r("b5be")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},db31:function(t,e,r){},e2d3:function(t,e,r){"use strict";r("0992")}});
//# sourceMappingURL=app.08fbda33.js.map