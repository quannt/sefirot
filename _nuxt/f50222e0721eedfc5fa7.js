(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{354:function(t,n,l){"use strict";var e=l(3),c=Object(e.b)({props:{title:{type:String,default:null}}}),v=(l(360),l(2)),component=Object(v.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("article",{staticClass:"StoryBase"},[this.title?n("h1",{staticClass:"title"},[this._v(this._s(this.title))]):this._e(),this._v(" "),n("div",{staticClass:"component"},[this._t("default")],2)])}),[],!1,null,"ecaac85c",null);n.a=component.exports},356:function(t,n,l){},360:function(t,n,l){"use strict";var e=l(356);l.n(e).a},432:function(t,n,l){},501:function(t,n,l){"use strict";var e=l(432);l.n(e).a},523:function(t,n,l){"use strict";l.r(n);var e=l(3),c=l(38),v=l(354),_=Object(e.b)({components:{SButton:c.a,StoryBase:v.a},setup:function(t,n){return{openNormalSnackbar:function(){n.root.$store.dispatch("snackbars/push",{text:"This is the snackbar message."})},openWithActions:function(){n.root.$store.dispatch("snackbars/push",{text:"This is the snackbar message with actions.",actions:[{type:"mute",label:"MUTE ACTION",callback:function(){}},{type:"text",label:"ACTION",callback:function(){}}]})}}}}),r=(l(501),l(2)),h=Object(r.a)(_,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",[n("StoryBase",[n("div",{staticClass:"list"},[n("div",{staticClass:"item"},[n("SButton",{attrs:{label:"NORMAL"},on:{click:this.openNormalSnackbar}})],1),this._v(" "),n("div",{staticClass:"item"},[n("SButton",{attrs:{label:"WITH ACTIONS"},on:{click:this.openWithActions}})],1)])]),this._v(" "),this._m(0)],1)}),[function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("pre",[l("code",{staticClass:"hljs"},[l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"list"')]),t._v(">")]),t._v("\n    "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"item"')]),t._v(">")]),t._v("\n      "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"NORMAL"')]),t._v(" @"),l("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"openNormalSnackbar"')]),t._v(" />")]),t._v("\n    "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"item"')]),t._v(">")]),t._v("\n      "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"WITH ACTIONS"')]),t._v(" @"),l("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"openWithActions"')]),t._v(" />")]),t._v("\n    "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n  "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("lang")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"ts"')]),t._v(">")]),l("span",{staticClass:"javascript"},[t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { createComponent } "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@vue/composition-api'")]),t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SButton "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@@/lib/components/SButton.vue'")]),t._v("\n\n"),l("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),l("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" createComponent({\n  "),l("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SButton\n  },\n\n  setup (_props, context) {\n    "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("openNormalSnackbar")]),t._v(" ("),l("span",{staticClass:"hljs-params"}),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("void")]),t._v(" ")]),t._v("{\n      context.root.$store.dispatch("),l("span",{staticClass:"hljs-string"},[t._v("'snackbars/push'")]),t._v(", {\n        "),l("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'This is the snackbar message.'")]),t._v("\n      })\n    }\n\n    "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[t._v("function")]),t._v(" "),l("span",{staticClass:"hljs-title"},[t._v("openWithActions")]),t._v(" ("),l("span",{staticClass:"hljs-params"}),t._v("): "),l("span",{staticClass:"hljs-title"},[t._v("void")]),t._v(" ")]),t._v("{\n      context.root.$store.dispatch("),l("span",{staticClass:"hljs-string"},[t._v("'snackbars/push'")]),t._v(", {\n        "),l("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'This is the snackbar message with actions.'")]),t._v(",\n        "),l("span",{staticClass:"hljs-attr"},[t._v("actions")]),t._v(": [\n          { "),l("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'mute'")]),t._v(", "),l("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'MUTE ACTION'")]),t._v(", "),l("span",{staticClass:"hljs-attr"},[t._v("callback")]),t._v(": "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" {} },\n          { "),l("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'text'")]),t._v(", "),l("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'ACTION'")]),t._v(", "),l("span",{staticClass:"hljs-attr"},[t._v("callback")]),t._v(": "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" {} }\n        ]\n      })\n    }\n\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      openNormalSnackbar,\n      openWithActions\n    }\n  }\n})\n")]),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n"),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("lang")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"postcss"')]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("scoped")]),t._v(">")]),l("span",{staticClass:"css"},[t._v("\n"),l("span",{staticClass:"hljs-selector-class"},[t._v(".list")]),t._v(" {\n  "),l("span",{staticClass:"hljs-attribute"},[t._v("display")]),t._v(": flex;\n  "),l("span",{staticClass:"hljs-attribute"},[t._v("flex-wrap")]),t._v(": wrap;\n  "),l("span",{staticClass:"hljs-attribute"},[t._v("margin")]),t._v(": -"),l("span",{staticClass:"hljs-number"},[t._v("8px")]),t._v(";\n}\n\n"),l("span",{staticClass:"hljs-selector-class"},[t._v(".item")]),t._v(" {\n  "),l("span",{staticClass:"hljs-attribute"},[t._v("padding")]),t._v(": "),l("span",{staticClass:"hljs-number"},[t._v("8px")]),t._v(";\n}\n")]),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")])])])}],!1,null,"6e7d5cef",null).exports,o=Object(e.b)({components:{StorySnackbarShowcase:h},head:{title:"Snackbars"},scrollToTop:!0}),C=Object(r.a)(o,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("section",[l("h1",[t._v("Snackbars")]),t._v(" "),l("p",[t._v("Snackbars provide brief messages about app processes at the bottom of the screen.")]),t._v(" "),l("StorySnackbarShowcase"),t._v(" "),l("h2",[t._v("Description")]),t._v(" "),l("p",[t._v("The Snakbars are controlled by Vuex. To be able to use Snackbars, you must set up Vuex and Portal component for the Snakbars.")]),t._v(" "),l("p",[t._v("First, let's register the Sefirot Vuex plugin. Here we have an example of installing the plugin in Nuxt.js.")]),t._v(" "),t._m(0),l("p",[t._v("Next, register the portal component to the top-level component. Probably this could be your layout file.")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),l("h2",[t._v("Controlling the Timeout")]),t._v(" "),t._m(4),t._v(" "),t._m(5),l("h2",[t._v("Snackbar with Actions")]),t._v(" "),t._m(6),t._v(" "),t._m(7),l("p",[t._v("Actions will take 3 arguments.")]),t._v(" "),t._m(8)],1)}),[function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("pre",[l("code",{staticClass:"hljs"},[l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { Plugin } "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'vuex'")]),t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" Sefirot "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/sefirot/lib/store/Sefirot'")]),t._v("\n\n"),l("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" plugins: Plugin<State>[] = [Sefirot]")])])},function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("pre",[l("code",{staticClass:"hljs"},[l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"App"')]),t._v(">")]),t._v("\n    "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("nuxt")]),t._v(" />")]),t._v("\n\n    "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("SPortalSnackbars")]),t._v(" />")]),t._v("\n  "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("lang")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"ts"')]),t._v(">")]),l("span",{staticClass:"javascript"},[t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { createComponent } "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@vue/composition-api'")]),t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SPortalSnackbars "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/lib/components/SPortalSnackbars.vue'")]),t._v("\n\n"),l("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),l("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" createComponent({\n  "),l("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SPortalSnackbars\n  }\n})\n")]),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Now you're ready to go. You may use Snackbar via "),n("code",[this._v("snackbars/push")]),this._v(" action.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[n("code",{staticClass:"hljs"},[this._v("store.dispatch("),n("span",{staticClass:"hljs-string"},[this._v("'snackbars/push'")]),this._v(", {\n  "),n("span",{staticClass:"hljs-attr"},[this._v("text")]),this._v(": "),n("span",{staticClass:"hljs-string"},[this._v("'This is the snackbar message.'")]),this._v("\n})")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("By default, a Snackbar will disappear after 10sec. You can control this timing by passing in "),n("code",[this._v("timeout")]),this._v(" option to the action. The value is in ms.")])},function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("pre",[l("code",{staticClass:"hljs"},[t._v("store.dispatch("),l("span",{staticClass:"hljs-string"},[t._v("'snackbars/push'")]),t._v(", {\n  "),l("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'This is the snackbar message.'")]),t._v(",\n  "),l("span",{staticClass:"hljs-attr"},[t._v("timeout")]),t._v(": "),l("span",{staticClass:"hljs-number"},[t._v("5000")]),t._v(" "),l("span",{staticClass:"hljs-comment"},[t._v("// <- Disappear after 5sec.")]),t._v("\n})")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("The Snackbar can also have action buttons. You can pass actions through "),n("code",[this._v("actions")]),this._v(" property when dispatching the Vuex Action.")])},function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("pre",[l("code",{staticClass:"hljs"},[t._v("store.dispatch("),l("span",{staticClass:"hljs-string"},[t._v("'snackbars/push'")]),t._v(", {\n  "),l("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'This is the snackbar message.'")]),t._v(",\n  "),l("span",{staticClass:"hljs-attr"},[t._v("actions")]),t._v(": [\n    { "),l("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'mute'")]),t._v(", "),l("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'MUTE ACTION'")]),t._v(", "),l("span",{staticClass:"hljs-attr"},[t._v("callback")]),t._v(": "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" {} },\n    { "),l("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'text'")]),t._v(", "),l("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'ACTION'")]),t._v(", "),l("span",{staticClass:"hljs-attr"},[t._v("callback")]),t._v(": "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" {} }\n  ]\n})")])])},function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("ul",[l("li",[l("code",[t._v("type: string")]),t._v(" – The type of the button. You can pass the same types as the SButton component takes.")]),t._v(" "),l("li",[l("code",[t._v("label: string")]),t._v(" – The label for the button. Again, it's the same as SButton options.")]),t._v(" "),l("li",[l("code",[t._v("callback: Function")]),t._v(" – The callback function that should be called when a user clicks the button.")])])}],!1,null,null,null);n.default=C.exports}}]);