(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docz/examples/example-basic.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),i=n.n(t),r=n("./node_modules/react/index.js"),l=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),m=n("./src/material-table.js");a.default=function(e){var a=e.components,n=i()(e,["components"]);return l.a.createElement(o.MDXTag,{name:"wrapper",components:a},l.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"basic-example"}},"Basic Example"),l.a.createElement(s.Playground,{__position:0,__codesandbox:"undefined",__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Basic\"\n  options={{\n    toolbar: false,\n    paging: false,\n  }}\n/>",__scope:{props:n,MaterialTable:m.a}},l.a.createElement(m.a,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Basic",options:{toolbar:!1,paging:!1}})))}}}]);