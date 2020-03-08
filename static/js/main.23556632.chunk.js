(this["webpackJsonprocketseat-rocketshoes"]=this["webpackJsonprocketseat-rocketshoes"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(55),l=n(15),u=n(9),s=(n(68),n(80),n(14)),d=n(27),m=n.n(d),p=n(46),f=n(56),g=n(13);function b(e,t){return{type:"@cart/UPDATE_AMOUNT",id:e,amount:t}}var h=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),x=n(47),E=n.n(x).a.create({baseURL:"https://my-json-server.typicode.com/mcodex/rocketseat-rocketshoes/"}),y=n(8),v=n(20),w=y.b.ul.withConfig({displayName:"styles__ProductList",componentId:"sc-1xnhzx5-0"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:20px;list-style:none;li{display:flex;flex-direction:column;background:#fff;border-radius:4px;padding:20px;img{align-self:center;max-width:250px;}> strong{font-size:16px;line-height:20px;color:#333;margin-top:5px;}> span{font-size:21px;font-weight:bold;margin:5px 0 20px;}button{background:#7159c1;color:#fff;border:0;border-radius:4px;overflow:hidden;margin-top:auto;display:flex;align-items:center;transition:background 0.2s;&:hover{background:",";}div{display:flex;align-items:center;padding:12px;background:rgba(0,0,0,0.1);svg{margin-right:5px;}}span{flex:1;text-align:center;font-weight:bold;}}}"],Object(v.a)(.03,"#7159c1")),k=Object(a.memo)((function(){var e=Object(u.c)((function(e){return e.cart.reduce((function(e,t){return e[t.id]=t.amount,e}),{})})),t=Object(u.b)(),n=Object(a.useState)([]),o=Object(f.a)(n,2),c=o[0],i=o[1],l=Object(a.useCallback)(Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("products");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)}))),[]);Object(a.useEffect)((function(){l()}),[l]);var s=function(n){var a=n.id,o=n.title,c=n.price,i=n.image;return r.a.createElement("li",{key:a.toString()},r.a.createElement("img",{src:i,alt:o}),r.a.createElement("strong",null,o),r.a.createElement("span",null,h.format(c)),r.a.createElement("button",{type:"submit",onClick:function(){return function(e){return t(function(e){return{type:"@cart/ADD",product:e}}(e))}(n)}},r.a.createElement("div",null,r.a.createElement(g.b,{size:16,color:"#fff"})," ",e[a]||0),r.a.createElement("span",null,"ADICIONAR AO CARRINHO")))};return r.a.createElement(w,null,c.map((function(e){return s(e)})))})),O=n(21),j=y.b.div.withConfig({displayName:"styles__Container",componentId:"sc-14mxjxt-0"})(["padding:30px;background:#fff;border-radius:4px;footer{margin-top:30px;display:flex;justify-content:space-between;align-items:center;button{background:#7159c1;color:#fff;border:0;border-radius:4px;padding:12px 20px;font-weight:bold;text-transform:uppercase;transition:background 0.2s;&:hover{background:",";}}}"],Object(v.a)(.03,"#7159c1")),C=y.b.table.withConfig({displayName:"styles__ProductTable",componentId:"sc-14mxjxt-1"})(["width:100%;thead th{color:#999;text-align:left;padding:12px;}tbody td{padding:12px;border-bottom:1px solid #eee;}img{height:100px;}strong{color:#333;display:block;}span{display:block;margin-top:5px;font-size:18px;font-weight:bold;}div{display:flex;align-items:center;input{border:1px solid #ddd;border-radius:4px;color:#666;padding:6px;width:50px;}}button{background:none;border:0;padding:6px;}"]),A=y.b.div.withConfig({displayName:"styles__Total",componentId:"sc-14mxjxt-2"})(["display:flex;align-items:baseline;span{color:#999;font-weight:bold;}strong{font-size:28px;margin-left:5px;}"]),I=Object(a.memo)((function(){var e=Object(u.c)((function(e){return e.cart.map((function(e){return Object(O.a)({},e,{subtotal:e.price*e.amount})}))})),t=Object(u.c)((function(e){return e.cart.reduce((function(e,t){return e+t.price*t.amount}),0)})),n=Object(u.b)(),a=function(e){var t=e.id,a=e.title,o=e.price,c=e.image,i=e.amount,l=e.subtotal;return r.a.createElement("tr",{key:t.toString()},r.a.createElement("td",null,r.a.createElement("img",{src:c,alt:a})),r.a.createElement("td",null,r.a.createElement("strong",null,a),r.a.createElement("span",null,h.format(o))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return function(e){return n(b(e.id,e.amount-1))}(e)}},r.a.createElement(g.d,{size:20,color:"#7151c9"})),r.a.createElement("input",{type:"number",readOnly:!0,value:i}),r.a.createElement("button",{type:"button",onClick:function(){return function(e){return n(b(e.id,e.amount+1))}(e)}},r.a.createElement(g.a,{size:20,color:"#7151c9"})))),r.a.createElement("td",null,r.a.createElement("strong",null,h.format(l))),r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:function(){return function(e){return n(function(e){return{type:"@cart/REMOVE",id:e}}(e))}(t)}},r.a.createElement(g.c,{size:20,color:"#7151c9"}))))};return r.a.createElement(j,null,r.a.createElement(C,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"PRODUTO"),r.a.createElement("th",null,"QTD"),r.a.createElement("th",null,"SUBTOTAL"),r.a.createElement("th",null))),r.a.createElement("tbody",null,e.map((function(e){return a(e)})))),r.a.createElement("footer",null,r.a.createElement("button",{type:"submit"},"Finalizar Pedido"),r.a.createElement(A,null,r.a.createElement("span",null,"TOTAL"),r.a.createElement("strong",null,h.format(t)))))})),N=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:k}),r.a.createElement(s.a,{path:"/cart",component:I}))},T=n(52),_=n(53),z=n.n(_);function R(){var e=Object(T.a)(["\n\n@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');\n\n * {\n     margin: 0;\n     padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n }\n\n body {\n     background: #191920 url(",") no-repeat center top;\n     -webkit-font-smoothing: antialiased;\n }\n\n body, input , button {\n     font: 14px Lato, sans-serif;\n }\n\n #root {\n     max-width: 1020px;\n     margin: 0 auto;\n     padding: 0 20px 50px;\n }\n\n button {\n     cursor: pointer;\n }\n\n\n"]);return R=function(){return e},e}var U=Object(y.a)(R(),z.a),D=y.b.header.withConfig({displayName:"styles__Container",componentId:"sc-1gxj9mm-0"})(["display:flex;justify-content:space-between;align-items:center;margin:50px 0;"]),L=Object(y.b)(l.b).withConfig({displayName:"styles__Cart",componentId:"sc-1gxj9mm-1"})(["display:flex;align-items:center;text-decoration:none;transition:opacity 0.2s;&:hover{opacity:0.7;}div{text-align:right;margin-right:10px;strong{display:block;color:#fff;}span{font-size:12px;color:#999;}}"]),P=n(54),S=n.n(P),W=Object(a.memo)((function(){var e=Object(u.c)((function(e){return e.cart.length}));return r.a.createElement(D,null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:S.a,alt:"Rocketshoes"})),r.a.createElement(L,{to:"/cart"},r.a.createElement("div",null,r.a.createElement("strong",null,"Meu Carrinho"),r.a.createElement("span",null,"".concat(e," ").concat(e>1?"itens":"item"))),r.a.createElement(g.e,{size:36,color:"#fff"})))})),B=(n(99),n(12)),M=n(22),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@cart/ADD":return Object(M.a)(e,(function(e){var n=e.findIndex((function(e){return e.id===t.product.id}));n>=0?e[n].amount+=1:e.push(Object(O.a)({},t.product,{amount:1}))}));case"@cart/REMOVE":return Object(M.a)(e,(function(e){var n=e.findIndex((function(e){return e.id===t.id}));n>=0&&e.splice(n,1)}));case"@cart/UPDATE_AMOUNT":return t.amount<=0?e:Object(M.a)(e,(function(e){var n=e.findIndex((function(e){return e.id===t.id}));n>=0&&(e[n].amount=Number(t.amount))}));default:return e}},J=Object(B.c)({cart:F}),V=Object(B.d)(Object(B.a)()),H=Object(B.e)(J,V);i.a.configure();var Q=function(){return r.a.createElement(u.a,{store:H},r.a.createElement(l.a,{basename:"/rocketseat-rocketshoes"},r.a.createElement(W,null),r.a.createElement(N,null),r.a.createElement(U,null)))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(Q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rocketseat-rocketshoes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rocketseat-rocketshoes","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()},53:function(e,t,n){e.exports=n.p+"static/media/bg.3c9a1ce5.svg"},54:function(e,t,n){e.exports=n.p+"static/media/logo.879557c5.svg"},58:function(e,t,n){e.exports=n(100)}},[[58,1,2]]]);
//# sourceMappingURL=main.23556632.chunk.js.map