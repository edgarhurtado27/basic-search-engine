(this["webpackJsonpbasic-search-engine"]=this["webpackJsonpbasic-search-engine"]||[]).push([[0],{71:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(10),r=n.n(c),s=n(38),l=n(45),o=[{id:1,title:"Zacatecas, estado de",text:"Estado de"},{id:2,title:"Zacatecas, division politica",text:"Division politica"},{id:3,title:"Zapata Emiliano",text:"Emiliano Zapata (Biografia)"},{id:4,title:"Zaragoza Ignacio",text:"Ignacio Zaragoza (Biografia)"},{id:5,title:"Otro intento",text:"Un simple contenido"}],d=function(){var e=Object(i.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){n||function(){var e=new l.a({fields:["title","text"],storeFields:["title","text"]});e.addAll(o),a(e)}()}),[n,a]),{searchEngine:n}},j=n(98),u=n(102),x=n(6),b=function(e){var t=e.children;return Object(x.jsx)(j.a,{fixed:!0,children:Object(x.jsx)(u.a,{container:!0,justifyContent:"space-around",direction:"column",spacing:3,children:t})})},h=n(103),f=function(){return Object(x.jsx)(u.a,{item:!0,container:!0,justifyContent:"center",alignItems:"flex-end",xs:12,children:Object(x.jsx)(h.a,{display:"inline",variant:"h4",children:"Buscador basico"})})},O=n(107),g=n(105),m=n(51),p=n.n(m),v=function(e){var t=e.handleChange,n=e.cleanResults;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{item:!0,container:!0,justifyContent:"center",alignItems:"flex-end",xs:12,children:Object(x.jsx)(u.a,{item:!0,container:!0,justifyContent:"center",alignItems:"flex-end",xs:8,children:Object(x.jsx)(O.a,{id:"standard-basic",fullWidth:!0,label:"Inicia busqueda",onChange:t})})}),Object(x.jsx)(u.a,{item:!0,container:!0,justifyContent:"center",alignItems:"flex-end",xs:12,children:Object(x.jsx)(g.a,{variant:"contained",color:"secondary",startIcon:Object(x.jsx)(p.a,{}),onClick:n,children:"Limpiar resultados"})})]})},y=n(106),C=n(104),I=function(e){var t=e.result;return Object(x.jsx)(C.a,{children:t&&t.length>0&&t.map((function(e){return function(e){var t=e.text,n=e.title,i=e.id;return Object(x.jsx)(y.a,{button:!0,children:Object(x.jsxs)(u.a,{container:!0,justifyContent:"space-between",direction:"row",children:[Object(x.jsxs)(u.a,{item:!0,xs:10,container:!0,justifyContent:"center",direction:"column",alignItems:"flex-start",children:[Object(x.jsx)(h.a,{display:"inline",variant:"h4",children:n}),Object(x.jsx)(h.a,{display:"inline",variant:"subtitle1",children:t})]}),Object(x.jsx)(u.a,{item:!0,xs:2,container:!0,justifyContent:"center",direction:"column",alignItems:"center",children:Object(x.jsx)(h.a,{display:"inline",variant:"h3",children:i})})]})},i)}(e)}))})};var E=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=d().searchEngine;return Object(x.jsxs)(b,{children:[Object(x.jsx)(f,{}),Object(x.jsx)(v,{handleChange:function(e){!function(e){if(e&&e.length>5){var t=c.search(e);a(t)}}(e&&e.target&&e.target.value)},cleanResults:function(){return a([])}}),Object(x.jsx)(I,{result:n})]})};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.5db60bb7.chunk.js.map