(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{354:function(t,e,n){"use strict";var r=n(3),o=Object(r.b)({props:{title:{type:String,default:null}}}),c=(n(360),n(2)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"StoryBase"},[this.title?e("h1",{staticClass:"title"},[this._v(this._s(this.title))]):this._e(),this._v(" "),e("div",{staticClass:"component"},[this._t("default")],2)])}),[],!1,null,"ecaac85c",null);e.a=component.exports},356:function(t,e,n){},358:function(t,e,n){"use strict";var r=n(3),o=n(364),c=Object(r.b)({components:{SpecBase:o.a},props:{props:{type:Array,required:!0}}}),l=(n(367),n(2)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SpecBase",{staticClass:"SpecProps",attrs:{title:"Props"}},[n("div",{staticClass:"specs-columns"},[n("p",{staticClass:"specs-column name"},[t._v("NAME")]),t._v(" "),n("p",{staticClass:"specs-column type"},[t._v("TYPE")]),t._v(" "),n("p",{staticClass:"specs-column required"},[t._v("REQUIRED")]),t._v(" "),n("p",{staticClass:"specs-column default"},[t._v("DEFAULT")]),t._v(" "),n("p",{staticClass:"specs-column description"},[t._v("DESCRIPTION")])]),t._v(" "),t._l(t.props,(function(e,r){return n("div",{key:r,staticClass:"specs-row"},[n("div",{staticClass:"specs-record"},[n("div",{staticClass:"specs-cell name"},[n("p",{staticClass:"specs-label"},[t._v("NAME")]),t._v(" "),n("p",{staticClass:"specs-value"},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"specs-cell type"},[n("p",{staticClass:"specs-label"},[t._v("TYPE")]),t._v(" "),n("p",{staticClass:"specs-value"},[t._v(t._s(e.type))])]),t._v(" "),n("div",{staticClass:"specs-cell required"},[n("p",{staticClass:"specs-label"},[t._v("REQUIRED")]),t._v(" "),n("p",{staticClass:"specs-value"},[t._v(t._s(e.required?"Yes":"No"))])]),t._v(" "),n("div",{staticClass:"specs-cell default"},[n("p",{staticClass:"specs-label"},[t._v("DEFAULT")]),t._v(" "),n("p",{staticClass:"specs-value"},[t._v(t._s(e.default))])]),t._v(" "),n("div",{staticClass:"specs-cell description"},[n("p",{staticClass:"specs-label"},[t._v("DESCRIPTION")]),t._v(" "),n("p",{staticClass:"specs-value",domProps:{innerHTML:t._s(e.description)}})])])])}))],2)}),[],!1,null,"ad9b2ec4",null);e.a=component.exports},360:function(t,e,n){"use strict";var r=n(356);n.n(r).a},361:function(t,e,n){},362:function(t,e,n){},364:function(t,e,n){"use strict";var r=n(3),o=Object(r.b)({props:{title:{type:String,required:!0}}}),c=(n(366),n(2)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"SpecBase"},[e("h3",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)}),[],!1,null,"3ab1035e",null);e.a=component.exports},366:function(t,e,n){"use strict";var r=n(361);n.n(r).a},367:function(t,e,n){"use strict";var r=n(362);n.n(r).a},428:function(t,e,n){},445:function(t,e,n){"use strict";var strong=n(495),r=n(446);t.exports=n(496)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},446:function(t,e,n){var r=n(21);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},447:function(t,e,n){var r=n(21),meta=n(220).onFreeze;n(225)("freeze",(function(t){return function(e){return t&&r(e)?t(meta(e)):e}}))},495:function(t,e,n){"use strict";var r=n(13).f,o=n(102),c=n(223),l=n(50),v=n(221),h=n(222),_=n(138),f=n(224),d=n(139),C=n(11),j=n(220).fastKey,m=n(446),w=C?"_s":"size",y=function(t,e){var n,r=j(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,_){var f=t((function(t,r){v(t,f,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[w]=0,null!=r&&h(r,n,t[_],t)}));return c(f.prototype,{clear:function(){for(var t=m(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var n=m(this,e),r=y(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[w]--}return!!r},forEach:function(t){m(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(m(this,e),t)}}),C&&r(f.prototype,"size",{get:function(){return m(this,e)[w]}}),f},def:function(t,e,n){var r,o,c=y(t,e);return c?c.v=n:(t._l=c={i:o=j(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[w]++,"F"!==o&&(t._i[o]=c)),t},getEntry:y,setStrong:function(t,e,n){_(t,e,(function(t,n){this._t=m(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))}),n?"entries":"values",!n,!0),d(e)}}},496:function(t,e,n){"use strict";var r=n(5),o=n(10),c=n(17),l=n(223),meta=n(220),v=n(222),h=n(221),_=n(21),f=n(14),d=n(226),C=n(65),j=n(142);t.exports=function(t,e,n,m,w,y){var x=r[t],E=x,S=w?"set":"add",T=E&&E.prototype,O={},z=function(t){var e=T[t];c(T,t,"delete"==t?function(a){return!(y&&!_(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(y&&!_(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return y&&!_(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof E&&(y||T.forEach&&!f((function(){(new E).entries().next()})))){var B=new E,R=B[S](y?{}:-0,1)!=B,k=f((function(){B.has(1)})),P=d((function(t){new E(t)})),N=!y&&f((function(){for(var t=new E,e=5;e--;)t[S](e,e);return!t.has(-0)}));P||((E=e((function(e,n){h(e,E,t);var r=j(new x,e,E);return null!=n&&v(n,w,r[S],r),r}))).prototype=T,T.constructor=E),(k||N)&&(z("delete"),z("has"),w&&z("get")),(N||R)&&z(S),y&&T.clear&&delete T.clear}else E=m.getConstructor(e,t,w,S),l(E.prototype,n),meta.NEED=!0;return C(E,t),O[t]=E,o(o.G+o.W+o.F*(E!=x),O),y||m.setStrong(E,t,w),E}},497:function(t,e,n){"use strict";var r=n(428);n.n(r).a},506:function(t,e,n){"use strict";n.r(e);var r,o=n(3),c=(n(140),n(141),n(22),n(32),n(101),n(445),[]),l="ResizeObserver loop completed with undelivered notifications.";n(447);!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var v,h=function(){function t(t,e,n,r){return this.x=t,this.y=e,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),_=function(t){return t instanceof SVGElement&&"getBBox"in t},f=function(t){if(_(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var o=t,c=o.offsetWidth,l=o.offsetHeight;return!(c||l||t.getClientRects().length)},d="undefined"!=typeof window?window:{},C=new Map,j=/auto|scroll/,m=/^tb|vertical/,w=/msie|trident/i.test(d.navigator&&d.navigator.userAgent),y=function(t){return parseFloat(t||"0")},x=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},E=Object.freeze({devicePixelContentBoxSize:x(),borderBoxSize:x(),contentBoxSize:x(),contentRect:new h(0,0,0,0)}),S=function(t){if(C.has(t))return C.get(t);if(f(t))return C.set(t,E),E;var e=getComputedStyle(t),svg=_(t)&&t.ownerSVGElement&&t.getBBox(),n=!w&&"border-box"===e.boxSizing,r=m.test(e.writingMode||""),o=!svg&&j.test(e.overflowY||""),c=!svg&&j.test(e.overflowX||""),l=svg?0:y(e.paddingTop),v=svg?0:y(e.paddingRight),d=svg?0:y(e.paddingBottom),S=svg?0:y(e.paddingLeft),T=svg?0:y(e.borderTopWidth),O=svg?0:y(e.borderRightWidth),z=svg?0:y(e.borderBottomWidth),B=S+v,R=l+d,k=(svg?0:y(e.borderLeftWidth))+O,P=T+z,N=c?t.offsetHeight-P-t.clientHeight:0,I=o?t.offsetWidth-k-t.clientWidth:0,D=n?B+k:0,M=n?R+P:0,A=svg?svg.width:y(e.width)-D-I,F=svg?svg.height:y(e.height)-M-N,L=A+B+I+k,X=F+R+N+P,W=Object.freeze({devicePixelContentBoxSize:x(Math.round(A*devicePixelRatio),Math.round(F*devicePixelRatio),r),borderBoxSize:x(L,X,r),contentBoxSize:x(A,F,r),contentRect:new h(S,l,A,F)});return C.set(t,W),W},T=function(t,e){var n=S(t),o=n.borderBoxSize,c=n.contentBoxSize,l=n.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return l;case r.BORDER_BOX:return o;default:return c}},O=function(t){var e=S(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},z=function(t){if(f(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},B=function(){var t=1/0,e=[];c.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(e){var n=new O(e.target),o=z(e.target);r.push(n),e.lastReportedSize=T(e.target,e.observedBox),o<t&&(t=o)})),e.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=e;n<r.length;n++){(0,r[n])()}return t},R=function(t){C.clear(),c.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(z(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},k=function(){var t,e=0;for(R(e);c.some((function(t){return t.activeTargets.length>0}));)e=B(),R(e);return c.some((function(t){return t.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?t=new ErrorEvent("error",{message:l}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=l),window.dispatchEvent(t)),e>0},P=[],N=function(t){if(!v){var e=document.createTextNode("");new MutationObserver((function(){return P.splice(0).forEach((function(t){return t()}))})).observe(e,{characterData:!0}),v=function(){e.textContent=""}}P.push(t),v()},I=0,D={attributes:!0,characterData:!0,childList:!0,subtree:!0},M=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],A=!1,F=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e,n=this;A||(A=!0,e=function(){var e=!1;try{e=k()}finally{if(A=!1,!I)return;e?n.run(60):t?n.run(t-1):n.start()}},N((function(){requestAnimationFrame(e)})))},t.prototype.schedule=function(){this.stop(),this.run(12)},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,D)};document.body?e():d.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),M.forEach((function(e){return d.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),M.forEach((function(e){return d.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),L=function(t){!I&&t>0&&F.start(),!(I+=t)&&F.stop()},X=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=T(this.target,this.observedBox);return t=this.target,_(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),W=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},$=new Map,U=function(t,e){for(var i=0;i<t.length;i+=1)if(t[i].target===e)return i;return-1},V=function(){function t(){}return t.connect=function(t,e){var n=new W(t,e);c.push(n),$.set(t,n)},t.observe=function(t,e,n){if($.has(t)){var r=$.get(t);U(r.observationTargets,e)<0&&(r.observationTargets.push(new X(e,n&&n.box)),L(1),F.schedule())}},t.unobserve=function(t,e){if($.has(t)){var n=$.get(t),r=U(n.observationTargets,e);r>=0&&(n.observationTargets.splice(r,1),L(-1))}},t.disconnect=function(t){if($.has(t)){var e=$.get(t);c.splice(c.indexOf(e),1),$.delete(t),L(-e.observationTargets.length)}},t}(),G=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");V.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(t instanceof Element==!1)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");V.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(t instanceof Element==!1)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");V.unobserve(this,t)},t.prototype.disconnect=function(){V.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();var H=function(){return(H=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},Y=Object(o.b)({props:{bp:{type:Object,default:function(){return{}}}},setup:function(t){var e=Object(o.g)(null),n=function(t){var e=Object(o.f)({w:0,h:0}),n=new G((function(t){var n=t[0];e.w=n.contentBoxSize[0].inlineSize,e.h=n.contentBoxSize[0].blockSize}));return Object(o.d)((function(){n.observe(t.value)})),Object(o.e)((function(){n.disconnect()})),{el:Object(o.h)(e),ro:n}}(e).el,r=Object(o.f)(H(H({},n),{is:Object(o.a)((function(){var e={};for(var n in t.bp)e[n]=t.bp[n](r);return e}))}));return{target:e,el:r}}}),J=n(2),Q=Object(J.a)(Y,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"target",staticClass:"SResponsive",class:this.el.classes},[this._t("default",null,{el:this.el})],2)}),[],!1,null,null,null).exports,K=n(354),Z=Object(o.b)({components:{SResponsive:Q,StoryBase:K.a},setup:function(){return{bp:{sm:function(t){return t.w>=320},md:function(t){return t.w>=480},lg:function(t){return t.w>=640}}}}}),tt=(n(497),Object(J.a)(Z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("StoryBase",[n("SResponsive",{attrs:{bp:t.bp},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.el;return[n("p",{staticClass:"text",class:{red:r.is.sm}},[t._v("Turn red on >= 320px")]),t._v(" "),n("p",{staticClass:"text",class:{green:r.is.md}},[t._v("Turn green on >= 480px")]),t._v(" "),n("p",{staticClass:"text",class:{blue:r.is.lg}},[t._v("Turn blue on >= 640px")])]}}])})],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"hljs"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SResponsive")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("v-slot")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"{ el }"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":bp")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"bp"')]),t._v(">")]),t._v("\n    "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"text"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"{ red: el.is.sm }"')]),t._v(">")]),t._v("Turn red on >= 320px"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n    "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"text"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"{ green: el.is.md }"')]),t._v(">")]),t._v("Turn green on >= 480px"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n    "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"text"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"{ blue: el.is.lg }"')]),t._v(">")]),t._v("Turn blue on >= 640px"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("SResponsive")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("lang")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"ts"')]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { createComponent } "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'@vue/composition-api'")]),t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SResponsive, { BP } "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'@@/lib/components/SResponsive.vue'")]),t._v("\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" createComponent({\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SResponsive\n  },\n\n  setup () {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" bp: BP = {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("sm")]),t._v(": "),n("span",{staticClass:"hljs-function"},[t._v("("),n("span",{staticClass:"hljs-params"},[t._v("{ w }")]),t._v(") =>")]),t._v(" w >= "),n("span",{staticClass:"hljs-number"},[t._v("320")]),t._v(",\n      "),n("span",{staticClass:"hljs-attr"},[t._v("md")]),t._v(": "),n("span",{staticClass:"hljs-function"},[t._v("("),n("span",{staticClass:"hljs-params"},[t._v("{ w }")]),t._v(") =>")]),t._v(" w >= "),n("span",{staticClass:"hljs-number"},[t._v("480")]),t._v(",\n      "),n("span",{staticClass:"hljs-attr"},[t._v("lg")]),t._v(": "),n("span",{staticClass:"hljs-function"},[t._v("("),n("span",{staticClass:"hljs-params"},[t._v("{ w }")]),t._v(") =>")]),t._v(" w >= "),n("span",{staticClass:"hljs-number"},[t._v("640")]),t._v("\n    }\n\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      bp\n    }\n  }\n})\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("lang")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"postcss"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("scoped")]),t._v(">")]),n("span",{staticClass:"css"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("@import")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v('"@/assets/styles/variables"')]),t._v(";\n\n"),n("span",{staticClass:"hljs-selector-class"},[t._v(".text")]),t._v(" + "),n("span",{staticClass:"hljs-selector-class"},[t._v(".text")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attribute"},[t._v("padding-top")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("12px")]),t._v(";\n}\n\n"),n("span",{staticClass:"hljs-selector-class"},[t._v(".text")]),n("span",{staticClass:"hljs-selector-class"},[t._v(".red")]),t._v("   { "),n("span",{staticClass:"hljs-attribute"},[t._v("color")]),t._v(": "),n("span",{staticClass:"hljs-built_in"},[t._v("var")]),t._v("(--c-danger); }\n"),n("span",{staticClass:"hljs-selector-class"},[t._v(".text")]),n("span",{staticClass:"hljs-selector-class"},[t._v(".green")]),t._v(" { "),n("span",{staticClass:"hljs-attribute"},[t._v("color")]),t._v(": "),n("span",{staticClass:"hljs-built_in"},[t._v("var")]),t._v("(--c-success); }\n"),n("span",{staticClass:"hljs-selector-class"},[t._v(".text")]),n("span",{staticClass:"hljs-selector-class"},[t._v(".blue")]),t._v("  { "),n("span",{staticClass:"hljs-attribute"},[t._v("color")]),t._v(": "),n("span",{staticClass:"hljs-built_in"},[t._v("var")]),t._v("(--c-info-light); }\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")])])])}],!1,null,"6c8474d6",null).exports),st=n(358),et=Object(o.b)({components:{StoryResponsiveShowcase:tt,SpecProps:st.a},setup:function(){return{props:[{name:"bp",type:"BP",required:!1,default:"{}",description:"The breakpoints for the container."}]}},head:{title:"Responsive"},scrollToTop:!0}),nt=Object(J.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Responsive")]),t._v(" "),n("p",[t._v("A Responsive component handles content size changes, and add as a class name. It's very useful when you need a media query against the container element instead of the viewport of the window.")]),t._v(" "),n("StoryResponsiveShowcase"),t._v(" "),n("h2",[t._v("API")]),t._v(" "),n("SpecProps",{attrs:{props:t.props}})],1)}),[],!1,null,null,null);e.default=nt.exports}}]);