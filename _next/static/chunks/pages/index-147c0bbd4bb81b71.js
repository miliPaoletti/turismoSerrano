(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1511)}])},2519:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(5893),r=n(1649),i=function(e){var t=e.prevSlide,n=e.nextSlide,i=e.onMouseEnter,a=e.onMouseOver;return(0,o.jsxs)("div",{children:[(0,o.jsx)(r.u1R,{onClick:t,className:"prev",onMouseEnter:i,onMouseOver:a}),(0,o.jsx)(r.hjJ,{onClick:n,className:"next",onMouseEnter:i,onMouseOver:a})]})},a=n(5675),s=n.n(a),l=function(e){var t=e.activeIndex,n=e.sliderImage,r=e.onMouseEnter,i=e.onMouseLeave,a=e.showImage,l=e.sliderStyles;return(0,o.jsx)("section",{className:"pt-0 relative ".concat(l?"cursor-pointer":"opacity-imgs"),onMouseEnter:r,onMouseLeave:i,onClick:function(){return a&&a(n[t].images,t)},children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,o.jsxs)("div",{className:n===t?"active ".concat(l||"slides"):"inactive",children:[(0,o.jsx)("div",{className:"relative w-full h-full",children:(0,o.jsx)(s(),{src:e.images,layout:"fill",objectFit:"cover",alt:"Imagen",className:n===t?"slide-image animation ":"slide-image",priority:"true"})}),(0,o.jsxs)("div",{className:"slider-text-container",children:[(0,o.jsx)("p",{className:"slide-title",style:{textShadow:"0 0 2px #333"},children:e.title}),(0,o.jsx)("p",{className:"slide-text",children:e.text})]})]},n)}))})},c=n(7294),u=function(e){var t=e.images,n=e.showImage,r=e.sliderStyles,a=function(e,t){var n=(null===e||void 0===e?void 0:e.length)-1,o=(0,c.useState)(0),r=o[0],i=o[1],a=(0,c.useState)(!1),s=a[0],l=a[1];(0,c.useEffect)((function(){var e=setInterval((function(){!1===s&&i(r===n?0:r+1)}),t);return function(){return clearInterval(e)}}),[r,s,n,t]);var u=(0,c.useCallback)((function(){i(r===n?0:r+1),l(!0)}),[r,n]),d=(0,c.useCallback)((function(){i(r<1?n:r-1),l(!0)}),[r,n]);return{activeIndex:r,setIsPaused:l,prevSlide:d,nextSlide:u}}(t,e.timeInterval),s=a.activeIndex,u=a.setIsPaused,d=a.prevSlide,p=a.nextSlide;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{activeIndex:s,sliderImage:t,onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},showImage:n,sliderStyles:r}),t.length>1&&(0,o.jsx)(i,{prevSlide:d,nextSlide:p,onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}})]})}},162:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var o=n(5893),r=n(5233),i=n(423),a=n(7294),s=n(6653),l=function(e){var t=e.content,n=e.icon;return(0,o.jsxs)("div",{className:"flex-grow flex items-center md:border-none md:w-auto w-full bg-white md:bg-transparent py-0 z-2 mb-2 border md:mb-0 md:border-0 first:mt-2 md:first:mt-0 shadow-md",children:[n,t]})},c=n(1147),u=n(1355),d=n(3750),p=n(7516),f=function(e){var t=(0,a.useState)(e),n=t[0],o=t[1];return{input:n,handleInput:function(e){o(e.target.value.toLowerCase())}}},x=function(e){var t,n=e.data,s=e.icon,l=e.onChange,x=e.text,m=e.selected,b=e.updateMonths,v=(0,a.useRef)(null),h=f(""),g=h.input,R=h.handleInput;return(0,o.jsx)("div",{className:"w-full md:w-72 lg:w-96 md:bg-white md:mx-1 py-3 rounded-md ",children:(0,o.jsx)(c.h,{value:m,onChange:function(e){l(e),b&&b(r.QN)},children:(0,o.jsxs)("div",{className:"relative w-full md:w-auto ",children:[(0,o.jsxs)("span",{className:"text-left cursor-default sm:text-sm flex items-center ",children:[(0,o.jsxs)("div",{className:"flex items-center ",children:[s," ",(0,o.jsxs)("p",{className:"mx-2 text-md md:text-lg text-gray-950 w-[90px] md:w-auto remove-selection ",children:[x,":"," "]})," ",(0,o.jsx)(c.h.Button,{children:(0,o.jsx)(c.h.Input,{ref:v,onFocus:function(){v.current.select()},className:"border-none text-left capitalize text-md md:text-xl text-black text-ellipsis overflow-hidden whitespace-nowrap",displayValue:g,onChange:R,spellCheck:"false"})})]}),(0,o.jsx)(c.h.Button,{className:"",children:(0,o.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center ",children:(0,o.jsx)(p.OrA,{className:"w-5 h-5 text-gray-400 ml-5 mr-1","aria-hidden":"true"})})})]}),(0,o.jsx)(u.u,{as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)(c.h.Options,{className:"z-[40] capitalize absolute w-full py-1 mt-1 overflow-auto text-md md:text-base lg:text-lg bg-white top-[29px] md:top-[31px] shadow-lg max-h-60 focus:outline-none sm:text-lg",children:null===(t=(0,i.a)(g,n))||void 0===t?void 0:t.map((function(e,t){return(0,o.jsx)(c.h.Option,{className:function(e){var t=e.active;return"cursor-default select-none relative py-2 pl-10 pr-4 ".concat(t?"text-white bg-orange-950":"text-gray-900")},value:e,children:function(t){var n=t.selected;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"block text-center ".concat(n?"font-medium":"font-normal"),children:e}),n?(0,o.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-orange-400",children:(0,o.jsx)(d.oFd,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},t)}))})})]})})})},m=n(1664),b=n.n(m),v=function(e){var t=e.destinationsNames,n=e.months,c=e.destination,u=e.month,d=(0,a.useState)(c),p=d[0],f=d[1],m=(0,a.useState)(u),v=m[0],h=m[1],g=(0,a.useState)([c]),R=g[0],j=g[1],O=(0,a.useState)([u]),S=O[0],y=O[1];return(0,a.useEffect)((function(){f(c)}),[c]),(0,a.useEffect)((function(){h(u)}),[u]),(0,a.useEffect)((function(){var e;j((e=t,Object.keys(e))),p!==r.QN?y(function(e,t){var n=[r.QN],o=e[t];return n.concat((0,i.Gu)(o))}(t,p)):y(n)}),[p,n,t]),(0,o.jsx)("div",{className:"search-bar-container",children:(0,o.jsxs)("div",{className:"search-bar-container-input",children:[(0,o.jsx)(l,{content:(0,o.jsx)(x,{data:R,onChange:f,icon:(0,o.jsx)(s.Sw5,{className:"icon",size:20}),text:r.nF.firstInput,selected:p,updateMonths:h})}),(0,o.jsx)(l,{content:(0,o.jsx)(x,{data:S,onChange:h,icon:(0,o.jsx)(s.bgj,{className:"icon",size:20}),text:r.nF.secondInput,selected:v})}),(0,o.jsx)(b(),{href:{pathname:r.qW.search,query:{destination:p,month:v}},children:(0,o.jsx)("a",{className:"relative overflow-hidden z-30 w-full md:w-auto",children:(0,o.jsx)("div",{className:"button-search",children:r.g3})})})]})})}},1511:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var o=n(5893),r=n(7294),i=n(3750),a=n(5434),s=n(9583),l=n(6138),c=n(5233),u=function(){return(0,o.jsx)("section",{className:"about-us",children:(0,o.jsx)("div",{className:"container-general z-40 pb-5",children:(0,o.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 align-center",children:[(0,o.jsxs)("div",{className:"space-y-5 px-11",children:[(0,o.jsx)("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-medium text-center",children:"Sobre Nosotros"}),(0,o.jsx)("div",{className:"text-md sm:text-lg font-medium xl:text-xl text-justify",children:c.if.description})]}),(0,o.jsx)("div",{className:"z-40 flex justify-center lg:justify-end mt-10 lg:mt-0",children:(0,o.jsxs)("div",{className:"space-y-1 md:space-y-2 lg:space-y-4 px-11 ",children:[(0,o.jsx)(l.Z,{icon:(0,o.jsx)(a.$0r,{}),text:c.if.address,href:c.if.linkLocation,apply:!0}),(0,o.jsx)(l.Z,{icon:(0,o.jsx)(a.qiG,{}),text:c.if.number,apply:!1,href:c.if.linkNumber}),(0,o.jsx)(l.Z,{href:c.if.linkRadioMega,icon:(0,o.jsx)(a.BQb,{}),text:c.if.radioMega,apply:!0}),(0,o.jsx)(l.Z,{href:c.if.linkEcoTv,icon:(0,o.jsx)(a.NjS,{}),text:c.if.ecoTv,apply:!0}),(0,o.jsx)(l.Z,{href:c.if.linkRadioEco,icon:(0,o.jsx)(a.BQb,{}),text:c.if.radioEco,apply:!0}),(0,o.jsx)(l.Z,{href:c.if.linkIg,icon:(0,o.jsx)(i.Vs6,{}),text:c.if.ig,own_style:"text-orange-950",apply:!0}),(0,o.jsx)(l.Z,{href:c.if.linkFb,icon:(0,o.jsx)(s.R9i,{}),text:c.if.fb,own_style:"text-blue-400",apply:!0})]})})]})})})},d=n(2379),p=n(423),f=n(2906),x=function(){var e=(0,r.useState)([]),t=e[0],n=e[1];return(0,r.useEffect)((function(){(0,f.R9)().then(n)}),[]),(0,o.jsx)("div",{className:"bg-gray-100",children:(0,o.jsx)("div",{className:"container-general md:pt-11",children:(0,o.jsxs)("section",{children:[(0,o.jsx)(d.Z,{text:c._3.text,text2:c._3.text2}),(0,o.jsx)("div",{className:"display-medium-cards",children:(0,p.bm)(t)})]})})})},m=n(162),b=function(){var e=(0,r.useState)([]),t=e[0],n=e[1],i=(0,r.useState)([]),a=i[0],s=i[1];return(0,r.useEffect)((function(){(0,f.RA)().then((function(e){n((0,f.wH)(e)),s(Object.assign({todos:[1]},(0,f.dN)(e)))}))}),[]),(0,o.jsx)(m.Z,{destinationsNames:a,months:t,index:!0,destination:c.QN,month:c.QN})},v=n(2519),h=n(7568),g=n(4051),R=n.n(g),j=n(6257),O=n(4068),S=n(5318),y=function(){var e=(0,h.Z)(R().mark((function e(){var t,n,o;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,j.IO)((0,O.JC)(O.dP)),e.next=3,(0,S.QL)(t,O.hF);case 3:return n=e.sent,o=n.docs.map((function(e){return e.data()})),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,r.useState)([]),t=e[0],n=e[1];return(0,r.useEffect)((function(){y().then((function(e){if(e.length<1){var t={};t.images="".concat("".concat("/turismoSerrano","/").concat(c.dn)),n([t])}else n(e)}))}),[]),(0,o.jsx)("div",{className:"slider-container group",children:(0,o.jsx)(v.Z,{images:t,timeInterval:7e3})})},C=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(I,{}),(0,o.jsx)(b,{}),(0,o.jsx)(x,{}),(0,o.jsx)(u,{})]})},N=n(2931);function w(){return(0,o.jsx)(N.Z,{content:(0,o.jsx)(C,{}),title:c.if.name})}},1147:function(e,t,n){"use strict";n.d(t,{h:function(){return U}});var o=n(7294),r=n(6723),i=n(3855);function a(e,t){let[n,a]=(0,o.useState)(e),s=(0,i.E)(e);return(0,r.e)((()=>a(s.current)),[s,a,...t]),n}var s=n(4192),l=n(3781),c=n(9946),u=n(292),d=n(4157),p=n(3784),f=n(1591),x=n(1497),m=n(9362),b=n(2351),v=n(4103),h=n(2984);function g(e={},t=null,n=[]){for(let[o,r]of Object.entries(e))j(n,R(t,o),r);return n}function R(e,t){return e?e+"["+t+"]":t}function j(e,t,n){if(Array.isArray(n))for(let[o,r]of n.entries())j(e,R(t,o.toString()),r);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):g(n,t,e)}var O,S,y=n(4575),I=n(6045),C=n(6567),N=n(1363),w=((S=w||{})[S.Open=0]="Open",S[S.Closed=1]="Closed",S),T=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(T||{}),E=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(E||{}),P=((O=P||{})[O.OpenCombobox=0]="OpenCombobox",O[O.CloseCombobox=1]="CloseCombobox",O[O.GoToOption=2]="GoToOption",O[O.RegisterOption=3]="RegisterOption",O[O.UnregisterOption=4]="UnregisterOption",O);function M(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,o=(0,y.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),r=n?o.indexOf(n):null;return-1===r&&(r=null),{options:o,activeOptionIndex:r}}let k={1:e=>e.dataRef.current.disabled||1===e.comboboxState?e:{...e,activeOptionIndex:null,comboboxState:1},0(e){if(e.dataRef.current.disabled||0===e.comboboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,o=e.options.findIndex((e=>n(e.dataRef.current.value)));return-1!==o&&(t=o),{...e,comboboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||e.dataRef.current.optionsRef.current&&!e.dataRef.current.optionsPropsRef.current.static&&1===e.comboboxState)return e;let o=M(e);if(null===o.activeOptionIndex){let e=o.options.findIndex((e=>!e.dataRef.current.disabled));-1!==e&&(o.activeOptionIndex=e)}let r=(0,x.d)(t,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...o,activeOptionIndex:r,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},o=M(e,(e=>[...e,n]));null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(n));let r={...e,...o,activationTrigger:1};return e.dataRef.current.__demoMode&&void 0===e.dataRef.current.value&&(r.activeOptionIndex=0),r},4:(e,t)=>{let n=M(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}}},F=(0,o.createContext)(null);function _(e){let t=(0,o.useContext)(F);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,_),t}return t}F.displayName="ComboboxActionsContext";let z=(0,o.createContext)(null);function A(e){let t=(0,o.useContext)(z);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}function D(e,t){return(0,h.E)(t.type,k,e,t)}z.displayName="ComboboxDataContext";let L=o.Fragment,Z=(0,b.yV)((function(e,t){let{name:n,value:i,onChange:a,disabled:s=!1,__demoMode:c=!1,nullable:d=!1,multiple:p=!1,...f}=e,[m,v]=(0,o.useReducer)(D,{dataRef:(0,o.createRef)(),comboboxState:c?0:1,options:[],activeOptionIndex:null,activationTrigger:1}),R=(0,o.useRef)(!1),j=(0,o.useRef)({static:!1,hold:!1}),O=(0,o.useRef)({displayValue:void 0}),S=(0,o.useRef)(null),y=(0,o.useRef)(null),N=(0,o.useRef)(null),w=(0,o.useRef)(null),T=(0,l.z)(((e,t)=>e===t)),E=(0,o.useCallback)((e=>(0,h.E)(P.mode,{1:()=>i.some((t=>T(t,e))),0:()=>T(i,e)})),[i]),P=(0,o.useMemo)((()=>({...m,optionsPropsRef:j,inputPropsRef:O,labelRef:S,inputRef:y,buttonRef:N,optionsRef:w,value:i,disabled:s,mode:p?1:0,get activeOptionIndex(){if(R.current&&null===m.activeOptionIndex&&m.options.length>0){let e=m.options.findIndex((e=>!e.dataRef.current.disabled));if(-1!==e)return e}return m.activeOptionIndex},compare:T,isSelected:E,nullable:d,__demoMode:c})),[i,s,p,d,c,m]);(0,r.e)((()=>{m.dataRef.current=P}),[P]),(0,u.O)([P.buttonRef,P.inputRef,P.optionsRef],(()=>v({type:1})),0===P.comboboxState);let M=(0,o.useMemo)((()=>({open:0===P.comboboxState,disabled:s,activeIndex:P.activeOptionIndex,activeOption:null===P.activeOptionIndex?null:P.options[P.activeOptionIndex].dataRef.current.value})),[P,s]),k=(0,o.useCallback)((()=>{var e;if(!P.inputRef.current)return;let t=O.current.displayValue;P.inputRef.current.value="function"==typeof t?null!=(e=t(i))?e:"":"string"==typeof i?i:""}),[i,P.inputRef,O]),_=(0,l.z)((e=>{let t=P.options.find((t=>t.id===e));!t||(Q(t.dataRef.current.value),k())})),A=(0,l.z)((()=>{if(null!==P.activeOptionIndex){let{dataRef:e,id:t}=P.options[P.activeOptionIndex];Q(e.current.value),k(),v({type:2,focus:x.T.Specific,id:t})}})),Z=(0,l.z)((()=>{v({type:0}),R.current=!0})),V=(0,l.z)((()=>{v({type:1}),R.current=!1})),B=(0,l.z)(((e,t,n)=>(R.current=!1,e===x.T.Specific?v({type:2,focus:x.T.Specific,id:t,trigger:n}):v({type:2,focus:e,trigger:n})))),$=(0,l.z)(((e,t)=>(v({type:3,id:e,dataRef:t}),()=>v({type:4,id:e})))),Q=(0,l.z)((e=>(0,h.E)(P.mode,{0:()=>a(e),1(){let t=P.value.slice(),n=t.indexOf(e);return-1===n?t.push(e):t.splice(n,1),a(t)}}))),q=(0,o.useMemo)((()=>({onChange:Q,registerOption:$,goToOption:B,closeCombobox:V,openCombobox:Z,selectActiveOption:A,selectOption:_})),[]);(0,r.e)((()=>{1===P.comboboxState&&k()}),[k,P.comboboxState]),(0,r.e)(k,[k]);let G=null===t?{}:{ref:t};return o.createElement(F.Provider,{value:q},o.createElement(z.Provider,{value:P},o.createElement(C.up,{value:(0,h.E)(P.comboboxState,{0:C.ZM.Open,1:C.ZM.Closed})},null!=n&&null!=i&&g({[n]:i}).map((([e,t])=>o.createElement(I._,{features:I.A.Hidden,...(0,b.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,b.sY)({ourProps:G,theirProps:f,slot:M,defaultTag:L,name:"Combobox"}))))})),V=(0,b.yV)((function(e,t){var n,i;let{value:u,onChange:d,displayValue:f,type:m="text",...v}=e,g=A("Combobox.Input"),R=_("Combobox.Input"),j=(0,p.T)(g.inputRef,t),O=g.inputPropsRef,S=`headlessui-combobox-input-${(0,c.M)()}`,y=(0,s.G)();(0,r.e)((()=>{O.current.displayValue=f}),[f,O]);let I=(0,l.z)((e=>{switch(e.key){case N.R.Backspace:case N.R.Delete:if(0!==g.mode||!g.nullable)return;let t=e.currentTarget;y.requestAnimationFrame((()=>{""===t.value&&(R.onChange(null),g.optionsRef.current&&(g.optionsRef.current.scrollTop=0),R.goToOption(x.T.Nothing))}));break;case N.R.Enter:if(0!==g.comboboxState)return;if(e.preventDefault(),e.stopPropagation(),null===g.activeOptionIndex)return void R.closeCombobox();R.selectActiveOption(),0===g.mode&&R.closeCombobox();break;case N.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),(0,h.E)(g.comboboxState,{0:()=>{R.goToOption(x.T.Next)},1:()=>{R.openCombobox()}});case N.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),(0,h.E)(g.comboboxState,{0:()=>{R.goToOption(x.T.Previous)},1:()=>{R.openCombobox(),y.nextFrame((()=>{g.value||R.goToOption(x.T.Last)}))}});case N.R.Home:case N.R.PageUp:return e.preventDefault(),e.stopPropagation(),R.goToOption(x.T.First);case N.R.End:case N.R.PageDown:return e.preventDefault(),e.stopPropagation(),R.goToOption(x.T.Last);case N.R.Escape:return 0!==g.comboboxState?void 0:(e.preventDefault(),g.optionsRef.current&&!g.optionsPropsRef.current.static&&e.stopPropagation(),R.closeCombobox());case N.R.Tab:if(0!==g.comboboxState)return;R.selectActiveOption(),R.closeCombobox()}})),C=(0,l.z)((e=>{R.openCombobox(),null==d||d(e)})),w=a((()=>{if(g.labelRef.current)return[g.labelRef.current.id].join(" ")}),[g.labelRef.current]),T=(0,o.useMemo)((()=>({open:0===g.comboboxState,disabled:g.disabled})),[g]),E={ref:j,id:S,role:"combobox",type:m,"aria-controls":null==(n=g.optionsRef.current)?void 0:n.id,"aria-expanded":g.disabled?void 0:0===g.comboboxState,"aria-activedescendant":null===g.activeOptionIndex||null==(i=g.options[g.activeOptionIndex])?void 0:i.id,"aria-multiselectable":1===g.mode||void 0,"aria-labelledby":w,disabled:g.disabled,onKeyDown:I,onChange:C};return(0,b.sY)({ourProps:E,theirProps:v,slot:T,defaultTag:"input",name:"Combobox.Input"})})),B=(0,b.yV)((function(e,t){var n;let r=A("Combobox.Button"),i=_("Combobox.Button"),u=(0,p.T)(r.buttonRef,t),f=`headlessui-combobox-button-${(0,c.M)()}`,m=(0,s.G)(),h=(0,l.z)((e=>{switch(e.key){case N.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&i.openCombobox(),m.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case N.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&(i.openCombobox(),m.nextFrame((()=>{r.value||i.goToOption(x.T.Last)}))),m.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case N.R.Escape:return 0!==r.comboboxState?void 0:(e.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&e.stopPropagation(),i.closeCombobox(),m.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})})));default:return}})),g=(0,l.z)((e=>{if((0,v.P)(e.currentTarget))return e.preventDefault();0===r.comboboxState?i.closeCombobox():(e.preventDefault(),i.openCombobox()),m.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}))})),R=a((()=>{if(r.labelRef.current)return[r.labelRef.current.id,f].join(" ")}),[r.labelRef.current,f]),j=(0,o.useMemo)((()=>({open:0===r.comboboxState,disabled:r.disabled})),[r]),O=e,S={ref:u,id:f,type:(0,d.f)(e,r.buttonRef),tabIndex:-1,"aria-haspopup":!0,"aria-controls":null==(n=r.optionsRef.current)?void 0:n.id,"aria-expanded":r.disabled?void 0:0===r.comboboxState,"aria-labelledby":R,disabled:r.disabled,onClick:g,onKeyDown:h};return(0,b.sY)({ourProps:S,theirProps:O,slot:j,defaultTag:"button",name:"Combobox.Button"})})),$=(0,b.yV)((function(e,t){let n=A("Combobox.Label"),r=`headlessui-combobox-label-${(0,c.M)()}`,i=(0,p.T)(n.labelRef,t),a=(0,l.z)((()=>{var e;return null==(e=n.inputRef.current)?void 0:e.focus({preventScroll:!0})})),s=(0,o.useMemo)((()=>({open:0===n.comboboxState,disabled:n.disabled})),[n]);return(0,b.sY)({ourProps:{ref:i,id:r,onClick:a},theirProps:e,slot:s,defaultTag:"label",name:"Combobox.Label"})})),Q=b.AN.RenderStrategy|b.AN.Static,q=(0,b.yV)((function(e,t){var n;let{hold:i=!1,...s}=e,l=A("Combobox.Options"),u=(0,p.T)(l.optionsRef,t),d=`headlessui-combobox-options-${(0,c.M)()}`,x=(0,C.oJ)(),m=null!==x?x===C.ZM.Open:0===l.comboboxState;(0,r.e)((()=>{var t;l.optionsPropsRef.current.static=null!=(t=e.static)&&t}),[l.optionsPropsRef,e.static]),(0,r.e)((()=>{l.optionsPropsRef.current.hold=i}),[l.optionsPropsRef,i]),(0,f.B)({container:l.optionsRef.current,enabled:0===l.comboboxState,accept:e=>"option"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let v=a((()=>{var e,t,n;return null!=(n=null==(e=l.labelRef.current)?void 0:e.id)?n:null==(t=l.buttonRef.current)?void 0:t.id}),[l.labelRef.current,l.buttonRef.current]),h=(0,o.useMemo)((()=>({open:0===l.comboboxState})),[l]),g={"aria-activedescendant":null===l.activeOptionIndex||null==(n=l.options[l.activeOptionIndex])?void 0:n.id,"aria-labelledby":v,role:"listbox",id:d,ref:u};return(0,b.sY)({ourProps:g,theirProps:s,slot:h,defaultTag:"ul",features:Q,visible:m,name:"Combobox.Options"})})),G=(0,b.yV)((function(e,t){var n,a;let{disabled:s=!1,value:u,...d}=e,f=A("Combobox.Option"),v=_("Combobox.Option"),h=`headlessui-combobox-option-${(0,c.M)()}`,g=null!==f.activeOptionIndex&&f.options[f.activeOptionIndex].id===h,R=f.isSelected(u),j=(0,o.useRef)(null),O=(0,i.E)({disabled:s,value:u,domRef:j,textValue:null==(a=null==(n=j.current)?void 0:n.textContent)?void 0:a.toLowerCase()}),S=(0,p.T)(t,j),y=(0,l.z)((()=>v.selectOption(h)));(0,r.e)((()=>v.registerOption(h,O)),[O,h]);let I=(0,o.useRef)(!f.__demoMode);(0,r.e)((()=>{if(!f.__demoMode)return;let e=(0,m.k)();return e.requestAnimationFrame((()=>{I.current=!0})),e.dispose}),[]),(0,r.e)((()=>{if(0!==f.comboboxState||!g||!I.current||0===f.activationTrigger)return;let e=(0,m.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=j.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[j,g,f.comboboxState,f.activationTrigger,f.activeOptionIndex]);let C=(0,l.z)((e=>{var t;if(s)return e.preventDefault();y(),0===f.mode&&(v.closeCombobox(),null==(t=f.inputRef.current)||t.focus({preventScroll:!0}))})),N=(0,l.z)((()=>{if(s)return v.goToOption(x.T.Nothing);v.goToOption(x.T.Specific,h)})),w=(0,l.z)((()=>{s||g||v.goToOption(x.T.Specific,h,0)})),T=(0,l.z)((()=>{s||!g||f.optionsPropsRef.current.hold||v.goToOption(x.T.Nothing)})),E=(0,o.useMemo)((()=>({active:g,selected:R,disabled:s})),[g,R,s]);return(0,b.sY)({ourProps:{id:h,ref:S,role:"option",tabIndex:!0===s?void 0:-1,"aria-disabled":!0===s||void 0,"aria-selected":!0===R||void 0,disabled:void 0,onClick:C,onFocus:N,onPointerMove:w,onMouseMove:w,onPointerLeave:T,onMouseLeave:T},theirProps:d,slot:E,defaultTag:"li",name:"Combobox.Option"})})),U=Object.assign(Z,{Input:V,Button:B,Label:$,Options:q,Option:G})},1591:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var o=n(7294),r=n(6723),i=n(5466);function a({container:e,accept:t,walk:n,enabled:a=!0}){let s=(0,o.useRef)(t),l=(0,o.useRef)(n);(0,o.useEffect)((()=>{s.current=t,l.current=n}),[t,n]),(0,r.e)((()=>{if(!e||!a)return;let t=(0,i.r)(e);if(!t)return;let n=s.current,o=l.current,r=Object.assign((e=>n(e)),{acceptNode:n}),c=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,r,!1);for(;c.nextNode();)o(c.currentNode)}),[e,a,s,l])}},1497:function(e,t,n){"use strict";n.d(t,{T:function(){return r},d:function(){return i}});var o,r=((o=r||{})[o.First=0]="First",o[o.Previous=1]="Previous",o[o.Next=2]="Next",o[o.Last=3]="Last",o[o.Specific=4]="Specific",o[o.Nothing=5]="Nothing",o);function i(e,t){let n=t.resolveItems();if(n.length<=0)return null;let o=t.resolveActiveIndex(),r=null!=o?o:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,o)=>!(-1!==r&&o.length-n-1>=r)&&!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=r)&&!t.resolveDisabled(e)));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===i?o:i}}},function(e){e.O(0,[228,13,16,866,440,445,874,399,107,906,344,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);