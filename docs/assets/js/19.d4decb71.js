(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{164:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"шабnонизаторы"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#шабnонизаторы","aria-hidden":"true"}},[t._v("#")]),t._v(" Шаблонизаторы")]),t._v(" "),a("h4",{attrs:{id:"содержание"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#содержание","aria-hidden":"true"}},[t._v("#")]),t._v(" Содержание")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("EJS")]),t._v(" - стандартный для Sails шаблонизатор")]),t._v(" "),a("li",[a("strong",[t._v("Nunjucks")]),t._v(" - практичный как Blade из Laravel")]),t._v(" "),a("li",[a("strong",[t._v("Pug")]),t._v(" - удобный для быстрого верстания страницы, но только если страница простая")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"ejs-ejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ejs-ejs","aria-hidden":"true"}},[t._v("#")]),t._v(" EJS (.ejs)")]),t._v(" "),a("h6",{attrs:{id:"index-ejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-ejs","aria-hidden":"true"}},[t._v("#")]),t._v(" index.ejs")]),t._v(" "),a("div",{staticClass:"language-ejs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<% layout('layout') -%>\n<% script('foo.js') -%>\n<% stylesheet('foo.css') -%>\n<h1>I am the  template</h1>\n<% block('header', \"<p>I'm in the header.</p>\") -%>\n<% block('footer', \"<p>I'm in the footer.</p>\") -%>\n")])])]),a("h6",{attrs:{id:"layout-ejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout-ejs","aria-hidden":"true"}},[t._v("#")]),t._v(" layout.ejs")]),t._v(" "),a("div",{staticClass:"language-ejs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<!DOCTYPE html>\n<html>\n  <head>\n  <%/* Comment */%>\n    <title>It's</title>\n    <%-scripts%>\n    <%-stylesheets%>\n  </head>\n  <body>\n    <header>\n      <%-blocks.header%>\n    </header>\n    <section>\n      <%-body -%>\n    </section>\n    <footer>\n      <%-blocks.footer%>\n    </footer>\n  </body>\n</html>\n")])])]),a("h2",{attrs:{id:"nunjucks-njk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nunjucks-njk","aria-hidden":"true"}},[t._v("#")]),t._v(" Nunjucks (.njk)")]),t._v(" "),a("h6",{attrs:{id:"config-views-js-sailsjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-views-js-sailsjs","aria-hidden":"true"}},[t._v("#")]),t._v(" config/views.js (sailsjs)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("engine"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          ext"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'njk'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" engine "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'nunjucks'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                  engine"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("configure")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'views'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    autoescape       "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    throwOnUndefined "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    trimBlocks       "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    lstripBlocks     "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    express          "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sails"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    watch            "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    noCache          "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    web              "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                          useCache "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              engine"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h6",{attrs:{id:"index-njk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-njk","aria-hidden":"true"}},[t._v("#")]),t._v(" index.njk")]),t._v(" "),a("div",{staticClass:"language-nunjucks extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{% extends 'layout.njk' %}\n    {% block content %}\n         <h2>Hello {{ Hello }}</h2>\n    {% endblock %}\n")])])]),a("h6",{attrs:{id:"layout-njk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout-njk","aria-hidden":"true"}},[t._v("#")]),t._v(" layout.njk")]),t._v(" "),a("div",{staticClass:"language-nunjucks extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<!DOCTYPE html>\n\n{# Comment #}\n{% include "elem/styles.njk" %}\n\n<html>\n    <body>\n          {% block content %}{% endblock %}\n    </body>\n</html>\n')])])]),a("h2",{attrs:{id:"pug-pug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pug-pug","aria-hidden":"true"}},[t._v("#")]),t._v(" Pug (.pug)")]),t._v(" "),a("h6",{attrs:{id:"config-views-js-sailsjs-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-views-js-sailsjs-2","aria-hidden":"true"}},[t._v("#")]),t._v(" config/views.js (sailsjs)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("engine"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'pug'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h6",{attrs:{id:"index-pug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-pug","aria-hidden":"true"}},[t._v("#")]),t._v(" index.pug")]),t._v(" "),a("div",{staticClass:"language-pug extra-class"},[a("pre",{pre:!0,attrs:{class:"language-pug"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("extends layout")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("block content")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[t._v("div.w3-container.w3-content.w3-indigo")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//- title - это переменная дана из котроллера")]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token code"}},[t._v(" title")]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[t._v("p")]),t._v(" "),a("span",{attrs:{class:"token plain-text"}},[t._v("Welcome to #{shit}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("block footer")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[t._v("div.w3-container.w3-content.w3-lime")]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[t._v("h2")]),t._v(" "),a("span",{attrs:{class:"token plain-text"}},[t._v("I am footer")]),t._v("\n")])])]),a("h6",{attrs:{id:"layout-pug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout-pug","aria-hidden":"true"}},[t._v("#")]),t._v(" layout.pug")]),t._v(" "),a("div",{staticClass:"language-pug extra-class"},[a("pre",{pre:!0,attrs:{class:"language-pug"}},[a("code",[a("span",{attrs:{class:"token doctype"}},[t._v("doctype html")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[t._v("html"),a("span",{attrs:{class:"token attributes"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v('"en"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[t._v("head")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//- title - это переменная дана из котроллера")]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token code"}},[t._v(" title")]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[t._v("link"),a("span",{attrs:{class:"token attributes"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v("'stylesheet'")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v("'assets/css/w3.css'")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n        \n    "),a("span",{attrs:{class:"token tag"}},[t._v("body.w3-pale-green")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("block content")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("block footer")]),t._v("\n        \n        "),a("span",{attrs:{class:"token keyword"}},[t._v("include elem/javascript.pug")]),t._v("\n")])])]),a("h6",{attrs:{id:"javascript-pug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-pug","aria-hidden":"true"}},[t._v("#")]),t._v(" javascript.pug")]),t._v(" "),a("div",{staticClass:"language-pug extra-class"},[a("pre",{pre:!0,attrs:{class:"language-pug"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// JQUERY")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[t._v("script"),a("span",{attrs:{class:"token attributes"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v("'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v(" "),a("span",{attrs:{class:"token plain-text"}},[t._v(" ")]),a("span",{attrs:{class:"token script"}},[t._v(" ")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// ANGULAR-JS")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[t._v("script"),a("span",{attrs:{class:"token attributes"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v("'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js'")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v(" \n"),a("span",{attrs:{class:"token comment"}},[t._v("// MA-JS")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[t._v("script"),a("span",{attrs:{class:"token attributes"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token string"}},[t._v("'assets/js/main.js'")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("                                                  "),a("span",{attrs:{class:"token plain-text"}},[t._v(" ")]),a("span",{attrs:{class:"token script"}},[t._v(" ")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="templaters.md";s.default=e.exports}}]);