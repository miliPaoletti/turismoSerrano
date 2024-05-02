"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{3207:function(e,n,t){var r=t(5893);t(5233),t(7294);n.Z=function(e){var n=e.text,t=e.error,o=e.placeholder;return(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-xs",children:o}),(0,r.jsx)("div",{className:"input",children:(0,r.jsx)("div",{className:"flex text-lg",children:n})}),t]})}},9782:function(e,n,t){t.d(n,{_g:function(){return r},ix:function(){return o}});var r="tracker",o=function(){return localStorage.getItem(r)}},2788:function(e,n,t){t.d(n,{AG:function(){return x},Iy:function(){return s},RA:function(){return p},W9:function(){return v},Wd:function(){return h},Wr:function(){return a},X3:function(){return i},cw:function(){return u},lB:function(){return c},oM:function(){return l},rY:function(){return o},sB:function(){return m},sR:function(){return b},vF:function(){return r},vJ:function(){return d},yb:function(){return f}});var r="Click on destination card",o="Click on button Search",a="Click on whatsapp button",i="Click on contact button",s="Click on Send button inside contact modal",c="Click on Whatsapp button inside contact modal",u="Click on logo",l="Click on home button - navbar",d="Click on buscar button - navbar",f="Click on radio link",m="Click on Instagram link",p="Click on Facebbok  link",v="Click on Location ",h="Click on number",x="Click on email (footer)",b="TRACKER"},8530:function(e,n,t){t.d(n,{X4:function(){return i},zt:function(){return a}});var r=t(7294),o=(0,r.createContext)(null),a=(o.Consumer,o.Provider),i=function(){return(0,r.useContext)(o)}},9321:function(e,n,t){t.d(n,{Q:function(){return i}});var r=t(1799),o=t(9782),a=t(8530),i=function(e,n){var t=(0,a.X4)();return{handlePreClickAction:function(a){null===t||!Object.prototype.hasOwnProperty.call(t,"config")||null!==localStorage.getItem(o._g)&&"true"!==localStorage.getItem(o._g)||null===t||void 0===t||t.track(e,(0,r.Z)({},n,a))},disableMixpanel:function(){localStorage.setItem(o._g,"false")},enableMixpanel:function(){localStorage.setItem(o._g,"true")}}}},2252:function(e,n,t){var r=t(5893),o=t(5233),a=t(1664),i=t.n(a),s=(t(7294),t(3750));n.Z=function(e){var n=e.page,t=e.onClick;return(0,r.jsx)("div",{className:"".concat(n===o.Yc?"text-xl p-":"bottom-16 left-[80%] md:left-[90%] lg:left-[92%] p-3 text-4xl"," rounded-full bg-green-400 sticky w-fit z-[9999] hover:bg-green-500 transition transform duration-200 ease-out"),children:(0,r.jsx)(i(),{href:o.Gs,children:(0,r.jsx)("a",{rel:"noreferrer",target:"_blank",onClick:t,children:(0,r.jsx)(s.RGt,{className:" text-white"})})})})}},8586:function(e,n,t){t.d(n,{l:function(){return k}});var r=t(5893),o=t(1355),a=t(3825),i=t(7294),s=t(2175),c=t(5233),u="".concat("".concat("https://7mxapon4sb.execute-api.us-east-1.amazonaws.com"));var l=t(3207),d=t(4547),f=t(2252),m=t(1664),p=t.n(m),v=t(2788),h=t(9321);function x(e){var n;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(n=c.tL.validations.emailInvalid):n=c.tL.validations.emailRequired,n}function b(e){var n;return e||(n=c.tL.validations.nameRequired),n}function g(e){var n;return e||(n=c.tL.validations.consultRequired),n}var N={name:"",phoneNumber:"",passengers:"",email:"",consult:""};function C(e){var n=e.setIsOpen,t=e.dataForConsult,o=e.section,a=(0,i.useContext)(d.ZP).setNotification,m=(0,h.Q)(v.Iy).handlePreClickAction,C=(0,h.Q)(v.lB).handlePreClickAction;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.J9,{initialValues:N,validateOnChange:!1,validateOnBlur:!1,onSubmit:function(e){return n(!1),a(c.br),function(e,n){var t,r=e.name,o=e.phoneNumber,a=e.passengers,i=e.email,s=e.consult,c=e.cv,l={name:r,mail:i,passengers:""===a?void 0:a,phone_number:""===o?void 0:o,request:s,destination:null===n||void 0===n?void 0:n.DESTINATION,cv:c,url:null===n||void 0===n?void 0:n.URL,price:null===n||void 0===n?void 0:n.PRICE,destination_names:null===n||void 0===n?void 0:n.DESTINATIONS_NAMES,regimen:null===n||void 0===n?void 0:n.REGIMEN,boarding:null===n||void 0===n?void 0:n.BOARDING,provider:null===n||void 0===n?void 0:n.PROVIDER,months:null===n||void 0===n?void 0:n.MONTHS,days:null===n||void 0===n?void 0:n.DAYS,token:null!==(t="956e17ddd629fdfe76508d116f1be51f99d9d26b5da92d61267366284c18159a")?t:""};return fetch("".concat(u,"/sendMail"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){if(!e.ok)throw new Error("Response is NOT ok");return!0}))}(e,t).then((function(){a(c.MR),m({status:"success"})})).catch((function(e){a(c.ES),m({status:"fail",error:e}),console.log(e)}))},children:function(e){var n=e.errors,t=e.isSubmitting,a=e.touched;return(0,r.jsxs)(s.l0,{className:"form space-y-3 my-7",children:[(0,r.jsx)("div",{className:"text-center text-2xl font-medium",children:c.tL.title}),o===c.F7&&(0,r.jsx)("div",{children:c.FU}),(0,r.jsx)(l.Z,{text:(0,r.jsx)(s.gN,{className:n.name?"error":"",name:"name",placeholder:"".concat(c.tL.name," * "),validate:b}),error:n.name&&a.name&&(0,r.jsx)("small",{className:"form-error",children:n.name})}),(0,r.jsx)(l.Z,{text:(0,r.jsx)(s.gN,{className:n.phoneNumber?"error":"",name:"phoneNumber",placeholder:"".concat(c.tL.phone," "),type:"text"})}),(0,r.jsx)(l.Z,{text:(0,r.jsx)(s.gN,{className:n.passengers?"error":"",name:"passengers",placeholder:"".concat(c.tL.passengers," "),type:"number"})}),(0,r.jsx)(l.Z,{text:(0,r.jsx)(s.gN,{className:n.email?"error":"",name:"email",placeholder:"".concat(c.tL.email," * "),type:"text",validate:x}),error:n.email&&a.email&&(0,r.jsx)("small",{className:"form-error",children:n.email})}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"flex items-top ",children:[(0,r.jsx)(s.gN,{className:n.consult?"error text-lg":"text-lg",name:"consult",placeholder:"".concat(c.tL.consult," * "),type:"text",as:"textarea",rows:"4",validate:g})," "]}),n.consult&&a.consult&&(0,r.jsx)("small",{className:"form-error",children:n.consult})]}),(0,r.jsx)("button",{type:"submit",className:"button-primary w-full",disabled:t,children:c.tL.send}),(0,r.jsxs)("div",{className:"flex items-center text-left space-x-3 ",children:[(0,r.jsx)(p(),{href:c.Gs,children:(0,r.jsx)("a",{rel:"noreferrer",target:"_blank",onClick:function(){C()},children:(0,r.jsx)("p",{className:"text-base",children:c.oy})})}),(0,r.jsx)(f.Z,{page:c.Yc,onClick:function(){C()}})]})]})}})})}var j=t(1649),k=function(e){var n=e.dataForConsult,t=e.trigger,s=e.section,u=function(){f(!1)},l=(0,i.useState)(!1),d=l[0],f=l[1],m=(0,h.Q)(v.X3).handlePreClickAction;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"".concat(s===c.F7?"medium-card":""),onClick:function(){f(!0),m()},children:t}),(0,r.jsx)(o.u,{appear:!0,show:d,as:i.Fragment,onClose:function(e,n){},children:(0,r.jsxs)(a.V,{as:"div",className:"relative z-[999999]",children:[(0,r.jsx)(o.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,r.jsx)("div",{className:"fixed inset-0 container-modal ",children:(0,r.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,r.jsx)(o.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)(a.V.Panel,{className:"relative transform overflow-hidden w-full md:w-1/2 2xl:w-1/4 shadow-black rounded-2xl bg-white px-6 text-center align-middle shadow-xl transition-all ",children:[(0,r.jsx)("div",{className:"text-sm text-black",children:(0,r.jsx)(C,{setIsOpen:f,dataForConsult:n,section:s})}),(0,r.jsx)("div",{className:"text-orange-950 absolute top-3 right-3 text-3xl cursor-pointer",onClick:function(){return u()},children:(0,r.jsx)(j.mpJ,{})})]})})})})]})})]})}},5233:function(e,n,t){t.d(n,{A6:function(){return w},C$:function(){return Z},ES:function(){return f},F7:function(){return p},FU:function(){return v},Gs:function(){return m},H9:function(){return C},Id:function(){return N},J:function(){return u},Jx:function(){return g},MC:function(){return I},MR:function(){return d},QN:function(){return a},Tp:function(){return s},WD:function(){return o},Yc:function(){return h},_3:function(){return E},aJ:function(){return T},br:function(){return l},dn:function(){return c},e7:function(){return i},g3:function(){return P},gg:function(){return y},if:function(){return q},jZ:function(){return j},kZ:function(){return k},lW:function(){return R},nF:function(){return F},oy:function(){return x},qW:function(){return O},rE:function(){return b},tL:function(){return L},wn:function(){return _},yb:function(){return M},yf:function(){return D},z1:function(){return S}});var r=t(3454),o="Consultar",a="todos",i=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],s="".concat(void 0===r.env.NEXT_PUBLIC_BASE_PATH?"default_img.jpg":"/".concat(r.env.NEXT_PUBLIC_BASE_PATH,"/default_img.jpg")),c="search_img.jpeg",u=6,l="LOADING",d="SUCCESS",f="FAIL",m="https://wa.me/5492494563653",p="mediumCard",v="El destino elegido a\xfan no tiene informaci\xf3n cargada. Env\xede su consulta y le responderemos a la brevedad.",h="FORM",x="O consultanos por ",b="DESTINATION",g="URL",N="PRICE",C="NIGHTS",j="DESTINATIONS NAMES",k="REGIMEN",w="BOARDING",I="PROVIDER",y="MONTHS",S="DAYS",E={text:"Destinos ",text2:"Destacados"},T={text:"Destinos ",text2:"Relacionados"},R={title:"Informaci\xf3n de contacto"},A="info@turismoserrano.com",q={name:"Turismo Serrano",description:"Turismo Serrano es una agencia de viajes y turismo fundada el 1 de diciembre de 1991. Conformamos una empresa familiar especializada tanto en salidas grupales propias como en salidas nacionales e internacionales. Contamos con un equipo de trabajo eficiente, honesto y comprometido con la prestaci\xf3n de un servicio integral y personalizado. Con el objetivo de cubrir las necesidades de nuestros clientes, brindamos asesor\xeda efectiva en la obtenci\xf3n de billetes a\xe9reos y de micro, seguros de asistencia m\xe9dica, alquiler de veh\xedculos, alquiler de departamentos temporarios y guiadas exclusivas.",address:"San Martin 186 - Tandil - Argentina",number:"(54 249) 443 1894",linkRadioMega:"http://megatandil.com.ar",radioMega:"MegaStereo (100.9) - Mi\xe9rcoles 12hs",linkRadioEco:"https://www.eleco.com.ar/tandilfm",radioEco:"Tandil FM - El Eco - Viernes 9hs",linkEcoTv:"https://www.eleco.com.ar/ecotv",ecoTv:"Tandil Despierta (Eco Tv) - Viernes 9hs",linkIg:"https://www.instagram.com/turismo.serrano/",ig:"turismo.serrano",linkFb:"https://www.facebook.com/Turismo-Serrano-EVT-179888245394193/",fb:"Turismo Serrano (E.V.T)",legajo:"Legajo 7320",openHours:"Atenci\xf3n al P\xfablico Lun a Vie: 10 a 17hs",workWithUs:"Trabaja con nosotros",email:A,linkLocation:"https://www.google.com/maps/dir//turismo+serrano/@1.1965479,-71.241989,3z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95911f9bdb035e47:0x9efcc38df263ae10!2m2!1d-59.1425245!2d-37.3284937",linkNumber:"tel:542494431894",linkEmail:"mailto:".concat(A)},D={home:"home",search:"buscar",contact:"contacto"},P="buscar",O={search:"search",destination:"destination",home:"/",error404:"404"},_={loading:"Enviando consulta...",success:"Tu consulta fue enviada correctamente",fail:"Hubo un error al enviar la consulta"},F={textBanner:"\xbfBusc\xe1s otro destino?",firstInput:"Destino",secondInput:"Mes",multipleDest:"Destinos",multipleDest2:"encontrados",singleDest:"Destino",singleDest2:"encontrado",showMore:"Mostrar m\xe1s"},M={orderBy:"Ordenar por",populars:"Populares",asc:"Precio asc",desc:"Precio desc"},L={title:"  Consultanos sobre tu pr\xf3ximo destino",name:"Nombre",phone:"N\xfamero de tel\xe9fono",passengers:"Cantidad de pasajeros",email:"Correo electr\xf3nico",consult:"Consulta",send:"Enviar",validations:{emailRequired:"Email requerido",emailInvalid:"Direcci\xf3n de correo inv\xe1lida",nameRequired:"Nombre requerido",phoneRequired:"N\xfamero de tel\xe9fono requerido",passengersRequired:"Cantidad de pasajeros requerida",consultRequired:"Por favor, escriba su consulta"}},Z={title:"Trabaja con nosotros!",name:"Nombre",email:"Correo electr\xf3nico",consult:"Cuentanos por que te queres unir a nuestro equipo",cv:"Adjuntar Curriculum",position:"Posici\xf3n",other_position:"Indique el puesto",send:"Enviar",validations:{emailRequired:"Email requerido",emailInvalid:"Direcci\xf3n de correo inv\xe1lida",nameRequired:"Nombre requerido",cvRequired:"CV requerido",positionRequired:"Puesto requerido",otherPositionRequired:"Especifique el puesto"}}},4547:function(e,n,t){t.d(n,{JB:function(){return i}});var r=t(5893),o=t(7294),a=(0,o.createContext)({});function i(e){var n=e.children,t=(0,o.useState)(""),i=t[0],s=t[1];return(0,r.jsx)(a.Provider,{value:{notification:i,setNotification:s},children:n})}n.ZP=a},6814:function(e,n,t){t.d(n,{U:function(){return i}});var r=t(6257),o=t(5503);function a(){var e=(0,o.C6)().length>0,n=function(e){try{return(0,o.Mq)()}catch(n){return(0,o.ZF)(e)}}(JSON.parse('{"apiKey": "AIzaSyBAXW3wjyfRNZ6vIszZ-xbZP2pPG_IvVoM", "authDomain": "turismo-serrano-web-api.firebaseapp.com", "databaseURL": "https://turismo-serrano-web-api-default-rtdb.firebaseio.com", "projectId": "turismo-serrano-web-api", "storageBucket": "turismo-serrano-web-api.appspot.com", "messagingSenderId": "140584913747", "appId": "1:140584913747:web:3727bc3ef9e94f48ba2fa6", "measurementId": "G-HLRTEXXP7B"}'));return{firebaseApp:n,database:(0,r.ad)(n),isConfigured:e}}function i(){var e=a();return e.isConfigured||(0,r.fH)(e.database).catch((function(e){("failed-precondition"==e.code||"unimplemented"==e.code)&&console.log(e.code)})),e}},4068:function(e,n,t){t.d(n,{EW:function(){return c},HC:function(){return s},JC:function(){return a},OE:function(){return d},dP:function(){return i},hF:function(){return l},kQ:function(){return u}});var r=t(6257),o=t(6814),a=function(e){var n=(0,o.U)().database;return(0,r.hJ)(n,e)},i="carousel",s="destinations",c="credentials",u=(0,r.IO)(a(s)),l=(0,r.IO)(a(i)),d=3},5318:function(e,n,t){t.d(n,{Gx:function(){return l},QL:function(){return v},Rl:function(){return u},WJ:function(){return h}});var r=t(7568),o=t(4051),a=t.n(o),i=t(7702),s=t(6257),c=t(4068),u="timeQueryServer",l=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,i.v0)(),e.next=3,(0,i.XB)(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.zN)(t);case 2:return localStorage.setItem(u,new Date),e.next=5,(0,s.UQ)(n);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=new Date,n=new Date(localStorage.getItem(u));return Math.abs(e.getTime()-n.getTime())/36e5},m=function(){var e=(0,r.Z)(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,s.IO)((0,c.JC)(c.HC),(0,s.ar)("visibility","==",!0),(0,s.Xo)("ts","desc"),(0,s.b9)(1)),e.next=3,(0,s.zN)(n);case 3:return t=e.sent,r=t.docs[0].data().ts,e.abrupt("return",new Date(1e3*r));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,s.IO)((0,c.JC)(c.HC),(0,s.ar)("timestamp",">",n),(0,s.ar)("visibility","==",!0),(0,s.b9)(1)),e.next=3,(0,s.zN)(t);case 3:if(0===e.sent.length){e.next=6;break}return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),window.location.href="/500";case 8:return e.next=10,(0,s.UQ)(n);case 10:if(r=e.sent,0!==r.docs.length){e.next=14;break}return e.abrupt("return",d(n,t));case 14:if(!(f()>3)){e.next=26;break}return e.next=17,m();case 17:return o=e.sent,e.next=20,p(o);case 20:if(!e.sent){e.next=25;break}return e.abrupt("return",d(n,t));case 25:localStorage.setItem(u,new Date);case 26:return e.abrupt("return",r);case 27:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n,t){return e.apply(this,arguments)}}(),h=function(e){return Array.from(new Set(e.map((function(e){return e.id})))).map((function(n){return e.find((function(e){return e.id===n}))}))}}}]);