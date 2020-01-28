(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{355:function(t,n,l){},357:function(t,n,l){"use strict";var e=l(3),r=Object(e.b)({props:{name:{type:String,default:null},note:{type:String,default:null},label:{type:String,default:null},help:{type:String,default:null},validation:{type:Object,default:null}},setup:function(t){var n=Object(e.a)((function(){return!!t.validation&&(t.validation.$isDirty.value&&!t.validation.$isValid.value)})),l=Object(e.a)((function(){if(!t.validation)return null;var n=t.validation.$errors.value;return n.length>0?n[0][1]:null})),r=Object(e.a)((function(){return n.value&&l.value}));return{hasError:n,errorMsg:l,showError:r}}}),v=(l(359),l(2)),component=Object(v.a)(r,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"SInputBase",class:{"has-error":t.hasError}},[t.label?l("label",{staticClass:"label",attrs:{for:t.name}},[t._v("\n    "+t._s(t.label)+" "),l("span",{staticClass:"note"},[t._v(t._s(t.note))])]):t._e(),t._v(" "),t._t("default"),t._v(" "),l("div",{staticClass:"help"},[t.help?l("p",{staticClass:"help-text"},[t._v(t._s(t.help))]):t._e(),t._v(" "),l("transition",{attrs:{name:"slide",mode:"out-in"}},[t.showError?l("p",{key:t.errorMsg,staticClass:"help-error"},[t._v(t._s(t.errorMsg))]):t._e()])],1)],2)}),[],!1,null,"33688120",null);n.a=component.exports},359:function(t,n,l){"use strict";var e=l(355);l.n(e).a},402:function(t,n,l){},403:function(t,n,l){},438:function(t,n,l){"use strict";var e=l(42);function r(t){if(Array.isArray(t))return!!t.length;if(null==t)return!1;if(!1===t)return!0;if(t instanceof Date)return!0;if("object"===Object(e.a)(t)){for(var n in t)return!0;return!1}return!!String(t).length}function v(t){return{name:"required",message:t,validate:r}}l.d(n,"a",(function(){return v}))},444:function(t,n,l){"use strict";var e=l(3),r=l(42);l(32),l(22),l(49),l(23);function v(data,t,n){var l={_isValidation:!0,$data:Object(e.g)(null),$initData:null,$isDirty:Object(e.g)(!1),$isValid:Object(e.g)(!1),$errors:Object(e.g)([]),$touch:function(){},$reset:function(){},$init:function(){},$validate:function(){return!1}};return function(t,data,n,l){for(var e in l){var r=l[e];t[e]=Array.isArray(r)?c(e,data,n,r):v(data[e],r,n)}}(l,data,null!=n?n:data,t),function(t){var n=Object(e.a)((function(){return Object.keys(t).every((function(n){var l=t[n];return!_(l)||l.$isDirty.value}),[])})),l=Object(e.a)((function(){return Object.keys(t).reduce((function(n,l){var e=t[l];return _(e)?n.concat(e.$errors.value):n}),[])})),r=Object(e.a)((function(){return 0===l.value.length})),v=function(){o(t,"touch")};t.$isDirty=n,t.$errors=l,t.$isValid=r,t.$touch=v,t.$reset=function(){o(t,"reset")},t.$init=function(){o(t,"init")},t.$validate=function(){return v(),r.value}}(l),l}function c(t,data,n,l){var r=data[t],v=Object(e.h)(data)[t],c=Object(e.g)(!1),o=Object(e.a)((function(){return l.reduce((function(l,e){return e.validate(data[t],n)||l.push([e.name,e.message]),l}),[])})),_=Object(e.a)((function(){return 0===o.value.length})),h=function(){c.value=!0},d=function(){c.value=!1};return{_isValidation:!0,$data:v,$initData:r,$isDirty:c,$errors:o,$isValid:_,$touch:h,$reset:d,$init:function(){d(),v.value=r},$validate:function(){return h(),_.value}}}function o(t,n){for(var l in t){var e=t[l];_(e)&&e["$"+n]()}}function _(t){return null!==t&&"object"===Object(r.a)(t)&&!Array.isArray(t)&&t._isValidation}function h(t){var data=Object(e.f)(t.data);return{data:data,validation:v(data,t.rules)}}l.d(n,"a",(function(){return h}))},471:function(t,n,l){"use strict";var e=l(402);l.n(e).a},472:function(t,n,l){"use strict";var e=l(403);l.n(e).a},514:function(t,n,l){"use strict";l.r(n);var e=l(3),r=l(438),v=l(444),c=l(38),o=l(357),_=Object(e.b)({components:{SInputBase:o.a},props:{name:{type:String,default:null},label:{type:String,default:null},note:{type:String,default:null},help:{type:String,default:null},value:{type:Date,default:null},validation:{type:Object,default:null}},setup:function(t,n){return{emitInput:function(t){n.emit("input",t)},emitBlur:function(l){setTimeout((function(){t.validation&&t.validation.$touch(),n.emit("blur",l.target.value)}),100)}}}}),h=(l(471),l(2)),d=Object(h.a)(_,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("SInputBase",{staticClass:"SInputDate",attrs:{name:t.name,label:t.label,note:t.note,help:t.help,validation:t.validation}},[l("div",{staticClass:"container"},[l("ClientOnly",[l("v-date-picker",{attrs:{value:t.value,color:"blue","is-dark":"",masks:{input:"YYYY-MM-DD"},popover:{placement:"bottom",visibility:"click"}},on:{input:t.emitInput},scopedSlots:t._u([{key:"default",fn:function(n){var e=n.inputProps,r=n.inputEvents;return[l("input",t._g(t._b({staticClass:"input",attrs:{id:t.name,type:"text",placeholder:"YYYY-MM-DD"},on:{blur:t.emitBlur}},"input",e,!1),r))]}}])})],1)],1)])}),[],!1,null,"2ac2d930",null).exports,j=l(354),C=Object(e.b)({components:{SButton:c.a,SInputDate:d,StoryBase:j.a},setup:function(){var t=Object(v.a)({data:{birthday:null},rules:{birthday:[Object(r.a)("The field is required.")]}});return{data:t.data,validation:t.validation}}}),f=(l(472),Object(h.a)(C,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("section",[l("StoryBase",[l("div",{staticClass:"form"},[l("div",{staticClass:"input"},[l("SInputDate",{attrs:{name:"birthday",label:"Birthday",note:"Required",help:"Please fill in your birthday.",validation:t.validation.birthday},model:{value:t.data.birthday,callback:function(n){t.$set(t.data,"birthday",n)},expression:"data.birthday"}})],1),t._v(" "),l("ul",{staticClass:"actions"},[l("li",{staticClass:"action"},[l("SButton",{attrs:{label:"RESET",type:"secondary"},on:{click:t.validation.$reset}})],1),t._v(" "),l("li",{staticClass:"action"},[l("SButton",{attrs:{label:"VALIDATE"},on:{click:t.validation.$validate}})],1)])])]),t._v(" "),t._m(0)],1)}),[function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("pre",[l("code",{staticClass:"hljs"},[l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"form"')]),t._v(">")]),t._v("\n    "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"input"')]),t._v(">")]),t._v("\n      "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("SInputDate")]),t._v("\n        "),l("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"data.birthday"')]),t._v("\n        "),l("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"birthday"')]),t._v("\n        "),l("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"Birthday"')]),t._v("\n        "),l("span",{staticClass:"hljs-attr"},[t._v("note")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"Required"')]),t._v("\n        "),l("span",{staticClass:"hljs-attr"},[t._v("help")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"Please fill in your birthday."')]),t._v("\n        "),l("span",{staticClass:"hljs-attr"},[t._v(":validation")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"validation.birthday"')]),t._v("\n      />")]),t._v("\n    "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("ul")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"actions"')]),t._v(">")]),t._v("\n      "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"action"')]),t._v(">")]),t._v("\n        "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"RESET"')]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"secondary"')]),t._v(" @"),l("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"validation.$reset"')]),t._v(" />")]),t._v("\n      "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(">")]),t._v("\n      "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"action"')]),t._v(">")]),t._v("\n        "),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"VALIDATE"')]),t._v(" @"),l("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"validation.$validate"')]),t._v(" />")]),t._v("\n      "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("li")]),t._v(">")]),t._v("\n    "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("ul")]),t._v(">")]),t._v("\n  "),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("lang")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"ts"')]),t._v(">")]),l("span",{staticClass:"javascript"},[t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { createComponent } "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@vue/composition-api'")]),t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { required } "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/sefirot/lib/validation/rules'")]),t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" useForm "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/sefirot/lib/compositions/useForm'")]),t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SButton "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/sefirot/lib/components/SButton.vue'")]),t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SInputDate "),l("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/sefirot/lib/components/SInputDate.vue'")]),t._v("\n\n"),l("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),l("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" createComponent({\n  "),l("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SButton,\n    SInputDate\n  },\n\n  setup () {\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" { data, validation } = useForm({\n      "),l("span",{staticClass:"hljs-attr"},[t._v("data")]),t._v(": {\n        "),l("span",{staticClass:"hljs-attr"},[t._v("birthday")]),t._v(": "),l("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v("\n      },\n      "),l("span",{staticClass:"hljs-attr"},[t._v("rules")]),t._v(": {\n        "),l("span",{staticClass:"hljs-attr"},[t._v("birthday")]),t._v(": [required("),l("span",{staticClass:"hljs-string"},[t._v("'The field is required.'")]),t._v(")]\n      }\n    })\n\n    "),l("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      data,\n      validation\n    }\n  }\n})\n")]),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n"),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("lang")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"postcss"')]),t._v(" "),l("span",{staticClass:"hljs-attr"},[t._v("scoped")]),t._v(">")]),l("span",{staticClass:"css"},[t._v("\n"),l("span",{staticClass:"hljs-keyword"},[t._v("@import")]),t._v(" "),l("span",{staticClass:"hljs-string"},[t._v('"@/assets/styles/variables"')]),t._v(";\n\n"),l("span",{staticClass:"hljs-selector-class"},[t._v(".input")]),t._v(" {\n  "),l("span",{staticClass:"hljs-attribute"},[t._v("max-width")]),t._v(": "),l("span",{staticClass:"hljs-number"},[t._v("320px")]),t._v(";\n}\n\n"),l("span",{staticClass:"hljs-selector-class"},[t._v(".actions")]),t._v(" {\n  "),l("span",{staticClass:"hljs-attribute"},[t._v("display")]),t._v(": flex;\n  "),l("span",{staticClass:"hljs-attribute"},[t._v("padding-top")]),t._v(": "),l("span",{staticClass:"hljs-number"},[t._v("32px")]),t._v(";\n}\n\n"),l("span",{staticClass:"hljs-selector-class"},[t._v(".action")]),t._v(" + "),l("span",{staticClass:"hljs-selector-class"},[t._v(".action")]),t._v(" {\n  "),l("span",{staticClass:"hljs-attribute"},[t._v("padding-left")]),t._v(": "),l("span",{staticClass:"hljs-number"},[t._v("8px")]),t._v(";\n}\n")]),l("span",{staticClass:"hljs-tag"},[t._v("</"),l("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")])])])}],!1,null,"397a87f4",null).exports),m=l(358),y=l(363),$=Object(e.b)({components:{StoryInputDateShowcase:f,SpecProps:m.a,SpecEvents:y.a},setup:function(){return{props:[{name:"name",type:"string",required:!1,default:"null",description:"The name for the field. It will be set to `for` attribute at label, and `id` attribute at input so that when user clicks the label, the input will get focus."},{name:"label",type:"string",required:!1,default:"null",description:"The label for the input."},{name:"note",type:"string",required:!1,default:"null",description:"The small note text that will be displayed next to label. The note should be short for example `Optional` or `Max length 160`."},{name:"help",type:"string",required:!1,default:"null",description:"The help text that will be displayed under the input. Useful to add a little detailed information about the input."},{name:"placeholder",type:"string",required:!1,default:"null",description:"The placeholder text for the input."},{name:"value",type:"Date",required:!1,default:"null",description:"The value of the input. You may also use `v-model` to bind a value to the input."},{name:"validation",type:"Validation",required:!1,default:"null",description:"You can pass Validation object to let input display any errors."}],events:[{name:"input",description:"Fires when the user input any value to the filed."},{name:"blur",description:"Fires when the user blur focus from the filed."}]}},head:{title:"Inputs: Date"},scrollToTop:!0}),S=Object(h.a)($,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("section",[l("h1",[t._v("Inputs: Date")]),t._v(" "),l("p",[t._v("Date input let users select date from the calendar.")]),t._v(" "),l("StoryInputDateShowcase"),t._v(" "),l("h2",[t._v("API")]),t._v(" "),l("SpecProps",{attrs:{props:t.props}}),t._v(" "),l("SpecEvents",{attrs:{events:t.events}})],1)}),[],!1,null,null,null);n.default=S.exports}}]);