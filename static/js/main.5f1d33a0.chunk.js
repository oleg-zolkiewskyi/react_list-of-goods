(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,r=n(3),c=n.n(r),o=n(4),a=n(5),i=n(8),u=n(6),l=n(7),b=n(1),d=(n(13),n(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={isStarted:!0,isReversed:!1,sortType:s.NONE},t.start=function(){t.setState({isStarted:!1,sortType:s.NONE})},t.sortAlpabet=function(){t.setState({sortType:s.ALPABET})},t.sortLength=function(){t.setState({sortType:s.LENGTH})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({sortType:s.NONE,isReversed:!1})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,r=e.sortType,c=e.isReversed,o=function(t,e,n){var r=Object(l.a)(t);return r.sort((function(t,n){switch(e){case s.ALPABET:return t.localeCompare(n);case s.LENGTH:return t.length-n.length;default:return 0}})),n?r.reverse():r}(p,r,c);return Object(d.jsxs)("div",{className:"App",children:[n&&Object(d.jsx)("button",{type:"button",className:"button-start",onClick:function(){t.start()},children:"Start"}),!n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"button",children:[Object(d.jsx)("button",{type:"button",className:"button",onClick:function(){t.sortAlpabet()},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button",onClick:function(){t.sortLength()},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"button-reverse",onClick:function(){t.reverse()},children:"Reverse"}),Object(d.jsx)("button",{type:"button",className:"button-reset",onClick:function(){t.reset()},children:"Reset"})]}),Object(d.jsx)("ul",{className:"Goods",children:o.map((function(t){return Object(d.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})}}]),n}(b.Component);c.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5f1d33a0.chunk.js.map