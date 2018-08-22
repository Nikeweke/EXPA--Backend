(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{188:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"useful-funcs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useful-funcs","aria-hidden":"true"}},[t._v("#")]),t._v(" Useful funcs")]),t._v(" "),a("h4",{attrs:{id:"get-random-number-for-some-array-in-his-range-of-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-random-number-for-some-array-in-his-range-of-size","aria-hidden":"true"}},[t._v("#")]),t._v(" Get random number for some array in his range of size")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/*\n|--------------------------------------------------------------------------\n|   Random number of array\n|--------------------------------------------------------------------------\n*/")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("GetRandomNumb")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  s         "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rand"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("NewSource")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Now")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Unix")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  r         "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rand"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("New")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// initialize local pseudorandom generator")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("    r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Intn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("len")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// using ")]),t._v("\n  wicther "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v('"..."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"..."')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n  rand_numb "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("GetRandomNumb")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("witcher"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"checkerr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkerr","aria-hidden":"true"}},[t._v("#")]),t._v(" CheckErr")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("checkErr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),a("span",{attrs:{class:"token builtin"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fmt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// os.Exit(1)")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"get-full-path-to-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-full-path-to-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Get full path to project")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("main")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  curr_dir"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Getwd")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("checkErr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  fmt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Prinln")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curr_dir"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="useful-fns.md";s.default=o.exports}}]);