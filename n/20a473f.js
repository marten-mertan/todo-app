(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{196:function(t,e,o){var content=o(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("4419c0b2",content,!0,{sourceMap:!1})},197:function(t,e,o){var content=o(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("57d2421c",content,!0,{sourceMap:!1})},198:function(t,e,o){var content=o(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("d3108b16",content,!0,{sourceMap:!1})},199:function(t,e,o){var content=o(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("8c2e20c4",content,!0,{sourceMap:!1})},200:function(t,e,o){t.exports=o.p+"img/all.6a370e2.svg"},201:function(t,e,o){"use strict";var r=o(196);o.n(r).a},202:function(t,e,o){(e=o(19)(!1)).push([t.i,".todos-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;border-bottom:1px solid #e0e0e0;cursor:pointer}.todos-item._completed{text-decoration:line-through}.todos-item__check{display:block;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:12px;height:12px;background:#fff;margin-right:12px;border:2px solid #9098bc;border-radius:50%}.todos-item__check._completed{background:#d1a5fe}.todos-item__text{color:#9098bc}.todos-item__delete{border:none;padding:5px 10px;margin-left:auto;cursor:pointer}",""]),t.exports=e},203:function(t,e,o){"use strict";var r=o(197),n=o.n(r);e.default=n.a},204:function(t,e,o){(e=o(19)(!1)).push([t.i,"",""]),t.exports=e},205:function(t,e,o){"use strict";var r=o(198);o.n(r).a},206:function(t,e,o){(e=o(19)(!1)).push([t.i,"",""]),t.exports=e},207:function(t,e,o){"use strict";var r=o(199),n=o.n(r);e.default=n.a},208:function(t,e,o){(e=o(19)(!1)).push([t.i,"",""]),t.exports=e},211:function(t,e,o){"use strict";o.r(e);o(68),o(21),o(22),o(8),o(50);var r=o(38),n=o(46);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={name:"TodoItem",props:{todo:{type:Object,default:function(){return{id:0,title:"- Empty -",completed:!1}}}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)("todo",["removeTodo","toggleTodo"]))},d=(o(201),o(14)),f=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"todos-item",class:{_completed:t.todo.completed},on:{click:function(e){return t.toggleTodo(t.todo)}}},[r("div",{staticClass:"todos-item__check",class:{_completed:t.todo.completed}}),t._v(" "),r("div",{staticClass:"todos-item__text"},[t._v("\n        "+t._s(t.todo.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"todos-item__delete",on:{click:function(e){return t.removeTodo(t.todo)}}},[r("svg",{staticClass:"icon-trash"},[r("use",{attrs:{"xlink:href":o(200)+"#icon-trash"}})])])])}),[],!1,null,null,null).exports;function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"AddTodo",data:function(){return{title:""}},methods:O(O({},Object(n.b)("todo",["addTodo"])),{},{onSubmit:function(t){t.preventDefault(),this.addTodo(this.title)}})},h=o(203);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"Todos",components:{TodoItem:f,AddTodo:Object(d.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("\n        Add Todo\n    ")]),t._v(" "),o("form",{on:{submit:t.onSubmit}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Add todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),o("input",{attrs:{type:"submit",value:"Submit"}})])])}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null).exports},computed:j({},Object(n.c)("todo",["allTodos"])),created:function(){this.fetchTodos()},methods:j({},Object(n.b)("todo",["fetchTodos"]))},_=(o(205),{name:"HomePage",components:{Todos:Object(d.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"todos"},[e("AddTodo"),this._v(" "),this._l(this.allTodos,(function(t){return e("TodoItem",{key:t.id,attrs:{todo:t}})}))],2)}),[],!1,null,null,null).exports}}),w=o(207);var P=Object(d.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page",class:this.$style.home},[e("div",{staticClass:"container"},[e("Todos")],1)])}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null);e.default=P.exports}}]);