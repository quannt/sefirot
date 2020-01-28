(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{355:function(t,e,n){},357:function(t,e,n){"use strict";var l=n(3),r=Object(l.b)({props:{name:{type:String,default:null},note:{type:String,default:null},label:{type:String,default:null},help:{type:String,default:null},validation:{type:Object,default:null}},setup:function(t){var e=Object(l.a)((function(){return!!t.validation&&(t.validation.$isDirty.value&&!t.validation.$isValid.value)})),n=Object(l.a)((function(){if(!t.validation)return null;var e=t.validation.$errors.value;return e.length>0?e[0][1]:null})),r=Object(l.a)((function(){return e.value&&n.value}));return{hasError:e,errorMsg:n,showError:r}}}),o=(n(359),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SInputBase",class:{"has-error":t.hasError}},[t.label?n("label",{staticClass:"label",attrs:{for:t.name}},[t._v("\n    "+t._s(t.label)+" "),n("span",{staticClass:"note"},[t._v(t._s(t.note))])]):t._e(),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"help"},[t.help?n("p",{staticClass:"help-text"},[t._v(t._s(t.help))]):t._e(),t._v(" "),n("transition",{attrs:{name:"slide",mode:"out-in"}},[t.showError?n("p",{key:t.errorMsg,staticClass:"help-error"},[t._v(t._s(t.errorMsg))]):t._e()])],1)],2)}),[],!1,null,"33688120",null);e.a=component.exports},359:function(t,e,n){"use strict";var l=n(355);n.n(l).a},369:function(t,e,n){},408:function(t,e,n){"use strict";var l=n(369);n.n(l).a},410:function(t,e,n){},437:function(t,e,n){"use strict";var l={components:{SInputBase:n(357).a},model:{prop:"value",event:"change"},props:{name:{type:String,default:null},label:{type:String,default:null},note:{type:String,default:null},help:{type:String,default:null},text:{type:String,required:!0},value:{type:Boolean,required:!0}},methods:{emitChange:function(){this.$emit("change",!this.value)}}},r=(n(408),n(2)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SInputBase",{staticClass:"SInputSwitch",attrs:{name:t.name,label:t.label,note:t.note,help:t.help}},[n("div",{staticClass:"container"},[n("div",{staticClass:"input",class:{on:t.value},attrs:{role:"button"},on:{click:t.emitChange}},[n("p",{staticClass:"text"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"box"},[n("div",{staticClass:"check"})])])])])}),[],!1,null,"532464d2",null);e.a=component.exports},478:function(t,e,n){"use strict";var l=n(410);n.n(l).a},516:function(t,e,n){"use strict";n.r(e);n(136),n(137);var l=n(357),r=n(437),o={components:{SInputBase:l.a,SInputSwitch:r.a},model:{prop:"value",event:"change"},props:{name:{type:String,default:null},label:{type:String,default:null},note:{type:String,default:null},help:{type:String,default:null},options:{type:Array,required:!0},value:{type:Array,required:!0}},methods:{isChecked:function(t){return this.value.includes(t)},handleChange:function(t){var e=this.value.filter((function(e){return e!==t})).concat(this.value.includes(t)?[]:[t]);this.$emit("change",e)}}},c=(n(478),n(2)),v={components:{SInputSwitches:Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SInputBase",{staticClass:"SInputSwitches",attrs:{name:t.name,label:t.label,note:t.note,help:t.help}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.options,(function(option){return n("div",{key:option.value,staticClass:"col"},[n("SInputSwitch",{attrs:{text:option.label,value:t.isChecked(option.value)},on:{change:function(e){return t.handleChange(option.value)}}})],1)})),0)])])}),[],!1,null,"42036338",null).exports,StoryBase:n(354).a},data:function(){return{form:{input:[2]},options:[{label:"Switch 1",value:1},{label:"Switch 2",value:2},{label:"Switch 3",value:3}]}}},h=Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("StoryBase",[n("SInputSwitches",{attrs:{name:"input",label:"Label",note:"Note text",help:"This is a help text.",options:t.options},model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"hljs"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SInputSwitches")]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"input"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Label"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("note")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Note text"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("help")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"This is a help text."')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v(":options")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"options"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"form.input"')]),t._v("\n  />")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SInputSwitches "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/sefirot/lib/components/inputs/SInputSwitches'")]),t._v("\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SInputSwitches\n  },\n\n  data () {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("form")]),t._v(": {\n        "),n("span",{staticClass:"hljs-attr"},[t._v("input")]),t._v(": ["),n("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("]\n      },\n\n      "),n("span",{staticClass:"hljs-attr"},[t._v("options")]),t._v(": [\n        { "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Switch 1'")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(" },\n        { "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Switch 2'")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(" },\n        { "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Switch 3'")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("3")]),t._v(" }\n      ]\n    }\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])])}],!1,null,null,null).exports,_=n(358),d=n(363),f={components:{StoryInputSwitchesShowcase:h,SpecProps:_.a,SpecEvents:d.a},data:function(){return{props:[{name:"name",type:"String",required:!1,default:"null",description:"The name for the field. It will be set to `for` attribute at label, and `id` attribute at input so that when user clicks the label, the input will get focus."},{name:"label",type:"String",required:!1,default:"null",description:"The label for the input."},{name:"note",type:"String",required:!1,default:"null",description:"The small note text that will be displayed next to label. The note should be short for example `Optional` or `Max length 160`."},{name:"help",type:"String",required:!1,default:"null",description:"The help text that will be displayed under the input. Useful to add a little detailed information about the input."},{name:"options",type:"Array",required:!0,default:"—",description:"The available options for the switch group. The array should contain object with properties of `label` and `value`. `label` is used as a text for the radio button, and `value` is the value corresponding to the radio button."},{name:"value",type:"Array",required:!0,default:"—",description:"The currently selcted values of the switch group."}],events:[{name:"change",description:"Fires when a user clicks a switch."}]}},head:{title:"Inputs: Switches"},scrollToTop:!0},C=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Inputs: Switches")]),t._v(" "),n("p",[t._v("Switches toggle the state of a single setting on or off.")]),t._v(" "),n("StoryInputSwitchesShowcase"),t._v(" "),n("h2",[t._v("API")]),t._v(" "),n("SpecProps",{attrs:{props:t.props}}),t._v(" "),n("SpecEvents",{attrs:{events:t.events}})],1)}),[],!1,null,null,null);e.default=C.exports}}]);