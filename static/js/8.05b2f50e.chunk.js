(this.webpackJsonponline_store=this.webpackJsonponline_store||[]).push([[8],{372:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(2),l=n(0),c=n.n(l),r=n(4);function u(){var e=Object(l.useState)((new Date).getTime()),t=Object(a.a)(e,2),n=t[0],u=t[1],o=Object(l.useState)(null),i=Object(a.a)(o,2),s=i[0],m=i[1],f=new Date(2021,0,0).getTime(),E=Object(r.b)(),h=Object(a.a)(E,1)[0],p=f-n;return Object(l.useEffect)((function(){return n===f?clearInterval(s):(m(setInterval((function(){u((new Date).getTime())}),1e3)),function(){clearInterval(s)})}),[]),-1===Math.sign(p)&&clearInterval(s),c.a.createElement("h1",null,c.a.createElement("span",{className:"d-inline-flex flex-column align-items-center"},c.a.createElement("span",null,h("Timer|1")),c.a.createElement("span",null,-1!==Math.sign(p)?"".concat(Math.floor(p/864e5)," : \n                ").concat(Math.floor(p%864e5/36e5)," : \n                ").concat(Math.floor(p%36e5/6e4)," : \n                ").concat(Math.floor(p%6e4/1e3)):"0 : 0 : 0 : 0")))}},378:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),l=n.n(a),c=n(5),r=n(14),u=n(372),o=n(67);function i(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.j,{className:"d-flex flex-column"},l.a.createElement("img",{src:n(112),alt:""}),l.a.createElement("hr",null),l.a.createElement(u.a,null)),l.a.createElement(c.k,null,l.a.createElement(r.a,null,(function(e){return e.data.filter((function(e){return"Laptops"===e.category&&!0===e.hasDiscount})).map((function(t){return l.a.createElement(o.a,{key:t.id,dataItem:t,value:e})}))}))))}}}]);
//# sourceMappingURL=8.05b2f50e.chunk.js.map