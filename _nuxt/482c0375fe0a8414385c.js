(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{419:function(t,n,e){},420:function(t,n,e){},421:function(t,n,e){},422:function(t,n,e){},423:function(t,n,e){},487:function(t,n,e){"use strict";var l=e(419);e.n(l).a},488:function(t,n,e){"use strict";var l=e(420);e.n(l).a},489:function(t,n,e){"use strict";var l=e(421);e.n(l).a},490:function(t,n,e){"use strict";var l=e(422);e.n(l).a},491:function(t,n,e){"use strict";var l=e(423);e.n(l).a},507:function(t,n,e){"use strict";e.r(n);var l=e(38),o=e(354),c=e(135),r=e(98),d={components:{SIconX:c.a,SButton:l.a,SModalBase:r.a},props:{name:{type:String,required:!0},title:{type:String,default:null},lead:{type:String,default:null},actions:{type:Array,default:null},closable:{type:Boolean,default:!1}},computed:{showHeader:function(){return!!this.title}},methods:{close:function(){this.$store.dispatch("window/close")}}},h=(e(487),e(2)),v=Object(h.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("SModalBase",{attrs:{name:t.name,closable:t.closable}},[e("div",{staticClass:"SWindow"},[t.closable?e("button",{staticClass:"close",on:{click:t.close}},[e("SIconX",{staticClass:"close-icon"})],1):t._e(),t._v(" "),t.showHeader?e("div",{staticClass:"header"},[e("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.lead?e("p",{staticClass:"lead"},[t._v(t._s(t.lead))]):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),t.actions?e("div",{staticClass:"actions"},t._l(t.actions,(function(t,n){return e("div",{key:n,staticClass:"action"},[e("SButton",{attrs:{label:t.label,type:t.type,mode:t.mode,size:"large"},on:{click:t.callback}})],1)})),0):t._e()])])}),[],!1,null,"0d9c52ba",null).exports,_={components:{SWindow:v},data:function(){return{actions:[{type:"mute",label:"DISMISS",callback:this.close},{type:"primary",label:"CLOSE WINDOW",callback:this.close}]}},methods:{close:function(){this.$store.dispatch("window/close")}}},w=(e(488),Object(h.a)(_,(function(){var t=this.$createElement,n=this._self._c||t;return n("SWindow",{staticClass:"StorySWindowMinimal",attrs:{name:"story-modals-s-window-minimal",title:"The title for the window.",actions:this.actions}},[n("p",{staticClass:"text"},[this._v("This is the content for the window.")])])}),[],!1,null,"7d261e24",null).exports),m={components:{SWindow:v},data:function(){return{actions:[{type:"mute",label:"DISMISS",callback:this.close},{type:"primary",label:"CLOSE WINDOW",callback:this.close}]}},methods:{close:function(){this.$store.dispatch("window/close")}}},C=(e(489),Object(h.a)(m,(function(){var t=this.$createElement,n=this._self._c||t;return n("SWindow",{staticClass:"StorySWindowMinimalWithLead",attrs:{name:"story-modals-s-window-minimal-with-lead",title:"The title for the window.",lead:"This is the lead text.",actions:this.actions}},[n("p",{staticClass:"text"},[this._v("This is the content for the window.")])])}),[],!1,null,"bfbd0432",null).exports),f={components:{SWindow:v}},j=(e(490),Object(h.a)(f,(function(){var t=this.$createElement,n=this._self._c||t;return n("SWindow",{staticClass:"StorySWindowMinimalBlank",attrs:{name:"story-modals-s-window-minimal-blank",closable:!0}},[n("p",{staticClass:"text"},[this._v("This is the content for the window.")])])}),[],!1,null,"38de6c41",null).exports),S={components:{SButton:l.a,StoryBase:o.a,WindowMinimalBasic:w,WindowMinimalWithLead:C,WindowMinimalBlank:j},methods:{openWindow01:function(){this.$store.dispatch("window/open",{name:"story-modals-s-window-minimal"})},openWindow02:function(){this.$store.dispatch("window/open",{name:"story-modals-s-window-minimal-with-lead"})},openWindow03:function(){this.$store.dispatch("window/open",{name:"story-modals-s-window-minimal-blank"})}}},y=(e(491),Object(h.a)(S,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("StoryBase",[e("div",{staticClass:"actions"},[e("SButton",{staticClass:"button",attrs:{label:"BASIC WINDOW"},on:{click:t.openWindow01}}),t._v(" "),e("SButton",{staticClass:"button",attrs:{label:"WITH LEAD TEXT"},on:{click:t.openWindow02}}),t._v(" "),e("SButton",{staticClass:"button",attrs:{label:"BLANK WINDOW"},on:{click:t.openWindow03}})],1),t._v(" "),e("WindowMinimalBasic"),t._v(" "),e("WindowMinimalWithLead"),t._v(" "),e("WindowMinimalBlank")],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",[e("code",{staticClass:"hljs"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"BASIC WINDOW"')]),t._v(" @"),e("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"openWindow01"')]),t._v(" />")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"WITH LEAD TEXT"')]),t._v(" @"),e("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"openWindow02"')]),t._v(" />")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"BLANK WINDOW"')]),t._v(" @"),e("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"openWindow03"')]),t._v(" />")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n"),e("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SButton "),e("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/sefirot/lib/components/SButton'")]),t._v("\n\n"),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),e("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SButton\n  },\n\n  "),e("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    openWindow01 () {\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$store.dispatch("),e("span",{staticClass:"hljs-string"},[t._v("'window/open'")]),t._v(", {\n        "),e("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("'story-modals-s-window-minimal'")]),t._v("\n      })\n    },\n\n    openWindow02 () {\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$store.dispatch("),e("span",{staticClass:"hljs-string"},[t._v("'window/open'")]),t._v(", {\n        "),e("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("'story-modals-s-window-minimal-with-lead'")]),t._v("\n      })\n    },\n\n    openWindow03 () {\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$store.dispatch("),e("span",{staticClass:"hljs-string"},[t._v("'window/open'")]),t._v(", {\n        "),e("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("'story-modals-s-window-minimal-blank'")]),t._v("\n      })\n    }\n  }\n}\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])])}],!1,null,"0dc78a34",null).exports),W=e(358),k=e(363),B={components:{StoryWindowShowcase:y,SpecProps:W.a,SpecEvents:k.a},data:function(){return{props:[{name:"name",type:"String",required:!0,default:"—",description:"The name for the window. The value is used when opening modal through Vuex Action."},{name:"title",type:"String",required:!1,default:"null",description:"The title text for the window."},{name:"lead",type:"String",required:!1,default:"null",description:"The lead text for the window. Only visible when `title` is not null."},{name:"actions",type:"Array",required:!1,default:"null",description:'Adds action buttons at end of the window. The array should contain object with properties of `type`, `mode`, `label`, and `callback`. `type`, `mode`, and `label` is same as "SButton" props, and `callback` should be a function which will be triggered when users clicks the button.'},{name:"closable",type:"Boolean",required:!1,default:"false",description:"When this is set to true, users may click backdrop to close the modal. Also, the close icon will be shown at the top right of the window."}],events:[{name:"before-open",description:"Fires before opening window."},{name:"openend",description:"Fires when window is opened."},{name:"before-close",description:"Fires before closing window."},{name:"closed",description:"Fires when window is closed."}]}},head:{title:"Modals: Window"},scrollToTop:!0},T=Object(h.a)(B,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h1",[t._v("Modals: Window")]),t._v(" "),e("p",[t._v("A window is a most customizable modal component which can display almost anything.")]),t._v(" "),e("StoryWindowShowcase"),t._v(" "),e("h2",[t._v("API")]),t._v(" "),e("SpecProps",{attrs:{props:t.props}}),t._v(" "),e("SpecEvents",{attrs:{events:t.events}})],1)}),[],!1,null,null,null);n.default=T.exports}}]);