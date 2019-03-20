(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./docz/examples/11-example-detail-panel.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return g});var a=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),r=t.n(a),i=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),l=t.n(i),o=t("./node_modules/@babel/runtime/helpers/createClass.js"),u=t.n(o),c=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=t.n(c),m=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),s=t.n(m),h=t("./node_modules/@babel/runtime/helpers/inherits.js"),p=t.n(h),b=t("./node_modules/react/index.js"),f=t.n(b),y=t("./node_modules/@mdx-js/tag/dist/index.js"),w=t("./docz/utils/Playground.jsx"),C=t("./src/material-table.js"),g=function(e){function n(e){var t;return l()(this,n),(t=d()(this,s()(n).call(this,e))).layout=null,t}return p()(n,e),u()(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=r()(e,["components"]);return f.a.createElement(y.MDXTag,{name:"wrapper",components:n},f.a.createElement(y.MDXTag,{name:"h2",components:n,props:{id:"detail-panel-examples"}},"Detail Panel Examples"),f.a.createElement(w.a,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n  ]}\n  title=\"Detail Panel Example\"\n  detailPanel={rowData => {\n    return (\n      <iframe\n        width=\"100%\"\n        height=\"315\"\n        src=\"https://www.youtube.com/embed/C0DPdy98e4c\"\n        frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen\n      />\n    )\n  }}\n/>",__scope:{props:this?this.props:t,Playground:w.a,MaterialTable:C.b}},f.a.createElement(C.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:1987,birthCity:63}],title:"Detail Panel Example",detailPanel:function(e){return f.a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/C0DPdy98e4c",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}})),f.a.createElement(w.a,{__codesandbox:"undefined",__position:1,__code:"<MaterialTable\n  columns={[\n    { title: 'Ad\u0131', field: 'name' },\n    { title: 'Soyad\u0131', field: 'surname' },\n    { title: 'Do\u011fum Y\u0131l\u0131', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Do\u011fum Yeri',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n  ]}\n  title=\"Multiple Detail Panel Example\"\n  detailPanel={[\n    {\n      tooltip: 'Show Name',\n      render: rowData => {\n        return (\n          <div\n            style={{\n              fontSize: 100,\n              textAlign: 'center',\n              color: 'white',\n              backgroundColor: '#43A047',\n            }}\n          >\n            {rowData.name}\n          </div>\n        )\n      },\n    },\n    {\n      icon: 'account_circle',\n      tooltip: 'Show Surname',\n      render: rowData => {\n        return (\n          <div\n            style={{\n              fontSize: 100,\n              textAlign: 'center',\n              color: 'white',\n              backgroundColor: '#E53935',\n            }}\n          >\n            {rowData.surname}\n          </div>\n        )\n      },\n    },\n    {\n      icon: 'favorite_border',\n      openIcon: 'favorite',\n      tooltip: 'Show Both',\n      render: rowData => {\n        return (\n          <div\n            style={{\n              fontSize: 100,\n              textAlign: 'center',\n              color: 'white',\n              backgroundColor: '#FDD835',\n            }}\n          >\n            {rowData.name} {rowData.surname}\n          </div>\n        )\n      },\n    },\n  ]}\n/>",__scope:{props:this?this.props:t,Playground:w.a,MaterialTable:C.b}},f.a.createElement(C.b,{columns:[{title:"Ad\u0131",field:"name"},{title:"Soyad\u0131",field:"surname"},{title:"Do\u011fum Y\u0131l\u0131",field:"birthYear",type:"numeric"},{title:"Do\u011fum Yeri",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:1987,birthCity:63}],title:"Multiple Detail Panel Example",detailPanel:[{tooltip:"Show Name",render:function(e){return f.a.createElement("div",{style:{fontSize:100,textAlign:"center",color:"white",backgroundColor:"#43A047"}},e.name)}},{icon:"account_circle",tooltip:"Show Surname",render:function(e){return f.a.createElement("div",{style:{fontSize:100,textAlign:"center",color:"white",backgroundColor:"#E53935"}},e.surname)}},{icon:"favorite_border",openIcon:"favorite",tooltip:"Show Both",render:function(e){return f.a.createElement("div",{style:{fontSize:100,textAlign:"center",color:"white",backgroundColor:"#FDD835"}},e.name," ",e.surname)}}]})),f.a.createElement(w.a,{__codesandbox:"undefined",__position:2,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n  ]}\n  title=\"Detail Panel With RowClick Example\"\n  detailPanel={rowData => {\n    return (\n      <iframe\n        width=\"100%\"\n        height=\"315\"\n        src=\"https://www.youtube.com/embed/C0DPdy98e4c\"\n        frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen\n      />\n    )\n  }}\n  onRowClick={(event, rowData, togglePanel) => togglePanel()}\n/>",__scope:{props:this?this.props:t,Playground:w.a,MaterialTable:C.b}},f.a.createElement(C.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:1987,birthCity:63}],title:"Detail Panel With RowClick Example",detailPanel:function(e){return f.a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/C0DPdy98e4c",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})},onRowClick:function(e,n,t){return t()}})),f.a.createElement(w.a,{__codesandbox:"undefined",__position:3,__code:"<MaterialTable\n  columns={[\n    { title: 'Ad\u0131', field: 'name' },\n    { title: 'Soyad\u0131', field: 'surname' },\n    { title: 'Do\u011fum Y\u0131l\u0131', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Do\u011fum Yeri',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n  ]}\n  title=\"Multiple Detail Panel With RowClickExample\"\n  detailPanel={[\n    {\n      tooltip: 'Show Name',\n      render: rowData => {\n        return (\n          <div\n            style={{\n              fontSize: 100,\n              textAlign: 'center',\n              color: 'white',\n              backgroundColor: '#43A047',\n            }}\n          >\n            {rowData.name}\n          </div>\n        )\n      },\n    },\n    {\n      icon: 'account_circle',\n      tooltip: 'Show Surname',\n      render: rowData => {\n        return (\n          <div\n            style={{\n              fontSize: 100,\n              textAlign: 'center',\n              color: 'white',\n              backgroundColor: '#E53935',\n            }}\n          >\n            {rowData.surname}\n          </div>\n        )\n      },\n    },\n    rowData => ({\n      disabled: rowData.name === 'ax',\n      icon: 'favorite_border',\n      openIcon: 'favorite',\n      tooltip: 'Show Both',\n      render: rowData => {\n        return (\n          <div\n            style={{\n              fontSize: 100,\n              textAlign: 'center',\n              color: 'white',\n              backgroundColor: '#FDD835',\n            }}\n          >\n            {rowData.name} {rowData.surname}\n          </div>\n        )\n      },\n    }),\n  ]}\n  onRowClick={(event, rowData, togglePanel) => togglePanel(1)}\n/>",__scope:{props:this?this.props:t,Playground:w.a,MaterialTable:C.b}},f.a.createElement(C.b,{columns:[{title:"Ad\u0131",field:"name"},{title:"Soyad\u0131",field:"surname"},{title:"Do\u011fum Y\u0131l\u0131",field:"birthYear",type:"numeric"},{title:"Do\u011fum Yeri",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:1987,birthCity:63}],title:"Multiple Detail Panel With RowClickExample",detailPanel:[{tooltip:"Show Name",render:function(e){return f.a.createElement("div",{style:{fontSize:100,textAlign:"center",color:"white",backgroundColor:"#43A047"}},e.name)}},{icon:"account_circle",tooltip:"Show Surname",render:function(e){return f.a.createElement("div",{style:{fontSize:100,textAlign:"center",color:"white",backgroundColor:"#E53935"}},e.surname)}},function(e){return{disabled:"ax"===e.name,icon:"favorite_border",openIcon:"favorite",tooltip:"Show Both",render:function(e){return f.a.createElement("div",{style:{fontSize:100,textAlign:"center",color:"white",backgroundColor:"#FDD835"}},e.name," ",e.surname)}}}],onRowClick:function(e,n,t){return t(1)}})))}}]),n}(f.a.Component);g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docz/utils/Playground.jsx":function(e,n,t){"use strict";var a=t("./node_modules/docz/dist/index.m.js"),r=t("./node_modules/codemirror/lib/codemirror.js");t.n(r).a.defaults.viewportMargin=1/0,n.a=a.e}}]);
//# sourceMappingURL=docz-examples-11-example-detail-panel.3b41105a52546fe33f43.js.map