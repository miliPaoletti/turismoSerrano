(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1511)}])},2519:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(5893),r=n(1649),i=function(e){var t=e.prevSlide,n=e.nextSlide,i=e.onMouseEnter,a=e.onMouseOver;return(0,o.jsxs)("div",{children:[(0,o.jsx)(r.u1R,{onClick:t,className:"prev",onMouseEnter:i,onMouseOver:a}),(0,o.jsx)(r.hjJ,{onClick:n,className:"next",onMouseEnter:i,onMouseOver:a})]})},a=n(5675),s=n.n(a),l=function(e){var t=e.activeIndex,n=e.sliderImage,r=e.onMouseEnter,i=e.onMouseLeave,a=e.showImage,l=e.sliderStyles;return(0,o.jsx)("section",{className:"pt-0 relative ".concat(l?"cursor-pointer":"opacity-imgs"),onMouseEnter:r,onMouseLeave:i,onClick:function(){return a&&a(n[t].images,t)},children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,o.jsxs)("div",{className:n===t?"active ".concat(l||"slides"):"inactive",children:[(0,o.jsx)(s(),{src:e.images,layout:"fill",objectFit:"cover",alt:e.images,className:n===t?"slide-image animation ":"slide-image"}),(0,o.jsx)("p",{className:"slide-title",style:{textShadow:"0 0 2px #333"},children:e.title}),(0,o.jsx)("p",{className:"slide-text",children:e.text})]},n)}))})},u=n(7294),c=function(e){var t=e.images,n=e.showImage,r=e.sliderStyles,a=function(e){var t=(null===e||void 0===e?void 0:e.length)-1,n=(0,u.useState)(0),o=n[0],r=n[1],i=(0,u.useState)(!1),a=i[0],s=i[1];(0,u.useEffect)((function(){var e=setInterval((function(){!1===a&&r(o===t?0:o+1)}),7e3);return function(){return clearInterval(e)}}),[o,a,t]);var l=(0,u.useCallback)((function(){r(o===t?0:o+1),s(!0)}),[o,t]),c=(0,u.useCallback)((function(){r(o<1?t:o-1),s(!0)}),[o,t]);return{activeIndex:o,setIsPaused:s,prevSlide:c,nextSlide:l}}(t),s=a.activeIndex,c=a.setIsPaused,d=a.prevSlide,p=a.nextSlide;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{activeIndex:s,sliderImage:t,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},showImage:n,sliderStyles:r}),t.length>1&&(0,o.jsx)(i,{prevSlide:d,nextSlide:p,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}})]})}},162:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var o=n(5893),r=n(5233),i=n(423),a=n(7294),s=n(6653),l=function(e){var t=e.content,n=e.icon;return(0,o.jsxs)("div",{className:"flex-grow flex items-center md:border-none md:w-auto w-full bg-white md:bg-transparent py-0 z-2 ",children:[n,t]})},u=n(1147),c=n(1355),d=n(3750),p=n(7106),f=function(e){var t=(0,a.useState)(e),n=t[0],o=t[1];return{input:n,handleInput:function(e){o(e.target.value.toLowerCase())}}},x=function(e){var t,n=e.data,s=e.separator,l=e.icon,x=e.onChange,b=e.text,m=e.selected,v=e.updateMonths,h=(0,a.useRef)(null),g=f(""),R=g.input,j=g.handleInput;return(0,o.jsx)("div",{className:"w-full md:w-72 lg:w-96 ",children:(0,o.jsx)(u.h,{value:m,onChange:function(e){x(e),v&&v(r.QN)},children:(0,o.jsxs)("div",{className:"relative w-full md:w-auto border-b py-2 border-b-gray-200 md:py-0 md:border-b-transparent",children:[(0,o.jsxs)("span",{className:!0===s?"text-left cursor-default sm:text-sm separator flex items-center":"text-left cursor-default sm:text-sm flex items-center",children:[(0,o.jsxs)("div",{className:"flex items-center ",children:[l," ",(0,o.jsxs)("p",{className:"mx-2 text-md md:text-lg text-gray-950 w-[70px] md:w-auto",children:[b,":"," "]})," ",(0,o.jsx)(u.h.Input,{ref:h,onFocus:function(){h.current.select()},className:"border-none py-1 text-left capitalize text-md md:text-xl text-black",displayValue:R,onChange:j,spellCheck:"false"})]}),(0,o.jsx)(u.h.Button,{className:"",children:(0,o.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 ",children:(0,o.jsx)(p.ppD,{className:"w-5 h-5 text-gray-400 mx-5","aria-hidden":"true"})})})]}),(0,o.jsx)(c.u,{as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)(u.h.Options,{className:"z-[40] capitalize absolute w-full py-1 mt-1 overflow-auto text-md md:text-base lg:text-lg bg-white rounded-md shadow-lg max-h-60 focus:outline-none sm:text-lg",children:null===(t=(0,i.a)(R,n))||void 0===t?void 0:t.map((function(e,t){return(0,o.jsx)(u.h.Option,{className:function(e){var t=e.active;return"cursor-default select-none relative py-2 pl-10 pr-4 ".concat(t?"text-white bg-orange-950":"text-gray-900")},value:e,children:function(t){var n=t.selected;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"block text-center ".concat(n?"font-medium":"font-normal"),children:e}),n?(0,o.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-orange-400",children:(0,o.jsx)(d.oFd,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},t)}))})})]})})})},b=n(1664),m=n.n(b),v=function(e){var t=e.destinationsNames,n=e.months,u=e.destination,c=e.month,d=(0,a.useState)(u),p=d[0],f=d[1],b=(0,a.useState)(c),v=b[0],h=b[1],g=(0,a.useState)([u]),R=g[0],j=g[1],O=(0,a.useState)([c]),S=O[0],y=O[1];return(0,a.useEffect)((function(){f(u)}),[u]),(0,a.useEffect)((function(){h(c)}),[c]),(0,a.useEffect)((function(){var e;j((e=t,Object.keys(e))),p!==r.QN?y(function(e,t){var n=[r.QN],o=e[t];return n.concat((0,i.Gu)(o))}(t,p)):y(n)}),[p,n,t]),(0,o.jsx)("div",{className:"search-bar-container",children:(0,o.jsx)("div",{className:"shadow-[0_0_15px_0px] shadow-orange-400",children:(0,o.jsxs)("div",{className:"search-bar-container-input",children:[(0,o.jsx)(l,{content:(0,o.jsx)(x,{data:R,onChange:f,separator:!0,icon:(0,o.jsx)(s.Sw5,{className:"icon",size:20}),text:r.nF.firstInput,selected:p,updateMonths:h})}),(0,o.jsx)(l,{content:(0,o.jsx)(x,{data:S,onChange:h,icon:(0,o.jsx)(s.bgj,{className:"icon",size:20}),text:r.nF.secondInput,selected:v})}),(0,o.jsx)(m(),{href:{pathname:r.qW.search,query:{destination:p,month:v}},children:(0,o.jsx)("a",{className:"relative overflow-hidden z-30 w-full md:w-auto",children:(0,o.jsx)("div",{className:"button-search",children:r.g3})})})]})})})}},1511:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o=n(5893),r=n(7294),i=n(3750),a=n(5434),s=n(6138),l=n(5233),u=function(){return(0,o.jsx)("section",{className:"about-us",children:(0,o.jsx)("div",{className:"container-general z-40 pb-5",children:(0,o.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 align-center",children:[(0,o.jsxs)("div",{className:"space-y-5 px-11",children:[(0,o.jsx)("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-medium",children:"Sobre Nosotros"}),(0,o.jsx)("div",{className:"text-md sm:text-lg font-medium xl:text-xl text-justify",children:l.if.description})]}),(0,o.jsx)("div",{className:"z-40 flex justify-center lg:justify-end mt-10 lg:mt-0",children:(0,o.jsxs)("div",{className:"space-y-1 md:space-y-2 lg:space-y-4 px-11 ",children:[(0,o.jsx)(s.Z,{icon:(0,o.jsx)(a.$0r,{}),text:l.if.address,href:l.if.linkLocation,apply:!0}),(0,o.jsx)(s.Z,{icon:(0,o.jsx)(a.qiG,{}),text:l.if.number,apply:!1,href:l.if.linkNumber}),(0,o.jsx)(s.Z,{href:l.if.linkRadioMega,icon:(0,o.jsx)(a.BQb,{}),text:l.if.radioMega,apply:!0}),(0,o.jsx)(s.Z,{href:l.if.linkRadioEco,icon:(0,o.jsx)(a.BQb,{}),text:l.if.radioEco,apply:!0}),(0,o.jsx)(s.Z,{href:l.if.linkEcoTv,icon:(0,o.jsx)(a.NjS,{}),text:l.if.ecoTv,apply:!0}),(0,o.jsx)(s.Z,{href:l.if.linkIg,icon:(0,o.jsx)(i.Vs6,{}),text:l.if.ig,own_style:"text-orange-950",apply:!0}),(0,o.jsx)(s.Z,{href:l.if.linkFb,icon:(0,o.jsx)(a.ntA,{}),text:l.if.fb,own_style:"text-blue-400",apply:!0})]})})]})})})},c=n(2379),d=n(423),p=n(2906),f=function(){var e=(0,r.useState)([]),t=e[0],n=e[1];return(0,r.useEffect)((function(){(0,p.R9)().then(n)}),[]),(0,o.jsx)("div",{className:"bg-gray-100",children:(0,o.jsx)("div",{className:"container-general md:pt-11",children:(0,o.jsxs)("section",{children:[(0,o.jsx)(c.Z,{text:l._3.text,text2:l._3.text2}),(0,o.jsx)("div",{className:"display-medium-cards",children:(0,d.bm)(t)})]})})})},x=n(162),b=function(){var e=(0,r.useState)([]),t=e[0],n=e[1],i=(0,r.useState)([]),a=i[0],s=i[1];return(0,r.useEffect)((function(){(0,p.RA)().then((function(e){n((0,p.wH)(e)),s(Object.assign({todos:[1]},(0,p.dN)(e)))}))}),[]),(0,o.jsx)(x.Z,{destinationsNames:a,months:t,index:!0,destination:l.QN,month:l.QN})},m=n(2519),v=n(7568),h=n(4051),g=n.n(h),R=n(6257),j=n(4068),O=n(5318),S=function(){var e=(0,v.Z)(g().mark((function e(){var t,n,o;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,R.IO)((0,j.JC)(j.dP)),e.next=3,(0,O.Q)(t,j.hF);case 3:return n=e.sent,o=n.docs.map((function(e){return e.data()})),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=(0,r.useState)([]),t=e[0],n=e[1];return(0,r.useEffect)((function(){S().then((function(e){if(e.length<=1){var t={};t.images=l.Tp,n([t])}else n(e)}))}),[]),(0,o.jsx)("div",{className:"slider-container group",children:(0,o.jsx)(m.Z,{images:t})})},C=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{}),(0,o.jsx)(b,{}),(0,o.jsx)(f,{}),(0,o.jsx)(u,{})]})},I=n(2931);function N(){return(0,o.jsx)(I.Z,{content:(0,o.jsx)(C,{}),title:l.if.name})}},1147:function(e,t,n){"use strict";n.d(t,{h:function(){return U}});var o=n(7294),r=n(6723),i=n(3855);function a(e,t){let[n,a]=(0,o.useState)(e),s=(0,i.E)(e);return(0,r.e)((()=>a(s.current)),[s,a,...t]),n}var s=n(4192),l=n(3781),u=n(9946),c=n(292),d=n(4157),p=n(3784),f=n(1591),x=n(1497),b=n(9362),m=n(2351),v=n(4103),h=n(2984);function g(e={},t=null,n=[]){for(let[o,r]of Object.entries(e))j(n,R(t,o),r);return n}function R(e,t){return e?e+"["+t+"]":t}function j(e,t,n){if(Array.isArray(n))for(let[o,r]of n.entries())j(e,R(t,o.toString()),r);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):g(n,t,e)}var O,S,y=n(4575),C=n(6045),I=n(6567),N=n(1363),T=((S=T||{})[S.Open=0]="Open",S[S.Closed=1]="Closed",S),w=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(w||{}),E=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(E||{}),P=((O=P||{})[O.OpenCombobox=0]="OpenCombobox",O[O.CloseCombobox=1]="CloseCombobox",O[O.GoToOption=2]="GoToOption",O[O.RegisterOption=3]="RegisterOption",O[O.UnregisterOption=4]="UnregisterOption",O);function M(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,o=(0,y.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),r=n?o.indexOf(n):null;return-1===r&&(r=null),{options:o,activeOptionIndex:r}}let k={1:e=>e.dataRef.current.disabled||1===e.comboboxState?e:{...e,activeOptionIndex:null,comboboxState:1},0(e){if(e.dataRef.current.disabled||0===e.comboboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,o=e.options.findIndex((e=>n(e.dataRef.current.value)));return-1!==o&&(t=o),{...e,comboboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||e.dataRef.current.optionsRef.current&&!e.dataRef.current.optionsPropsRef.current.static&&1===e.comboboxState)return e;let o=M(e);if(null===o.activeOptionIndex){let e=o.options.findIndex((e=>!e.dataRef.current.disabled));-1!==e&&(o.activeOptionIndex=e)}let r=(0,x.d)(t,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...o,activeOptionIndex:r,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},o=M(e,(e=>[...e,n]));null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(n));let r={...e,...o,activationTrigger:1};return e.dataRef.current.__demoMode&&void 0===e.dataRef.current.value&&(r.activeOptionIndex=0),r},4:(e,t)=>{let n=M(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}}},_=(0,o.createContext)(null);function F(e){let t=(0,o.useContext)(_);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,F),t}return t}_.displayName="ComboboxActionsContext";let z=(0,o.createContext)(null);function D(e){let t=(0,o.useContext)(z);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,D),t}return t}function A(e,t){return(0,h.E)(t.type,k,e,t)}z.displayName="ComboboxDataContext";let L=o.Fragment,Z=(0,m.yV)((function(e,t){let{name:n,value:i,onChange:a,disabled:s=!1,__demoMode:u=!1,nullable:d=!1,multiple:p=!1,...f}=e,[b,v]=(0,o.useReducer)(A,{dataRef:(0,o.createRef)(),comboboxState:u?0:1,options:[],activeOptionIndex:null,activationTrigger:1}),R=(0,o.useRef)(!1),j=(0,o.useRef)({static:!1,hold:!1}),O=(0,o.useRef)({displayValue:void 0}),S=(0,o.useRef)(null),y=(0,o.useRef)(null),N=(0,o.useRef)(null),T=(0,o.useRef)(null),w=(0,l.z)(((e,t)=>e===t)),E=(0,o.useCallback)((e=>(0,h.E)(P.mode,{1:()=>i.some((t=>w(t,e))),0:()=>w(i,e)})),[i]),P=(0,o.useMemo)((()=>({...b,optionsPropsRef:j,inputPropsRef:O,labelRef:S,inputRef:y,buttonRef:N,optionsRef:T,value:i,disabled:s,mode:p?1:0,get activeOptionIndex(){if(R.current&&null===b.activeOptionIndex&&b.options.length>0){let e=b.options.findIndex((e=>!e.dataRef.current.disabled));if(-1!==e)return e}return b.activeOptionIndex},compare:w,isSelected:E,nullable:d,__demoMode:u})),[i,s,p,d,u,b]);(0,r.e)((()=>{b.dataRef.current=P}),[P]),(0,c.O)([P.buttonRef,P.inputRef,P.optionsRef],(()=>v({type:1})),0===P.comboboxState);let M=(0,o.useMemo)((()=>({open:0===P.comboboxState,disabled:s,activeIndex:P.activeOptionIndex,activeOption:null===P.activeOptionIndex?null:P.options[P.activeOptionIndex].dataRef.current.value})),[P,s]),k=(0,o.useCallback)((()=>{var e;if(!P.inputRef.current)return;let t=O.current.displayValue;P.inputRef.current.value="function"==typeof t?null!=(e=t(i))?e:"":"string"==typeof i?i:""}),[i,P.inputRef,O]),F=(0,l.z)((e=>{let t=P.options.find((t=>t.id===e));!t||(Q(t.dataRef.current.value),k())})),D=(0,l.z)((()=>{if(null!==P.activeOptionIndex){let{dataRef:e,id:t}=P.options[P.activeOptionIndex];Q(e.current.value),k(),v({type:2,focus:x.T.Specific,id:t})}})),Z=(0,l.z)((()=>{v({type:0}),R.current=!0})),V=(0,l.z)((()=>{v({type:1}),R.current=!1})),B=(0,l.z)(((e,t,n)=>(R.current=!1,e===x.T.Specific?v({type:2,focus:x.T.Specific,id:t,trigger:n}):v({type:2,focus:e,trigger:n})))),$=(0,l.z)(((e,t)=>(v({type:3,id:e,dataRef:t}),()=>v({type:4,id:e})))),Q=(0,l.z)((e=>(0,h.E)(P.mode,{0:()=>a(e),1(){let t=P.value.slice(),n=t.indexOf(e);return-1===n?t.push(e):t.splice(n,1),a(t)}}))),q=(0,o.useMemo)((()=>({onChange:Q,registerOption:$,goToOption:B,closeCombobox:V,openCombobox:Z,selectActiveOption:D,selectOption:F})),[]);(0,r.e)((()=>{1===P.comboboxState&&k()}),[k,P.comboboxState]),(0,r.e)(k,[k]);let G=null===t?{}:{ref:t};return o.createElement(_.Provider,{value:q},o.createElement(z.Provider,{value:P},o.createElement(I.up,{value:(0,h.E)(P.comboboxState,{0:I.ZM.Open,1:I.ZM.Closed})},null!=n&&null!=i&&g({[n]:i}).map((([e,t])=>o.createElement(C._,{features:C.A.Hidden,...(0,m.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,m.sY)({ourProps:G,theirProps:f,slot:M,defaultTag:L,name:"Combobox"}))))})),V=(0,m.yV)((function(e,t){var n,i;let{value:c,onChange:d,displayValue:f,type:b="text",...v}=e,g=D("Combobox.Input"),R=F("Combobox.Input"),j=(0,p.T)(g.inputRef,t),O=g.inputPropsRef,S=`headlessui-combobox-input-${(0,u.M)()}`,y=(0,s.G)();(0,r.e)((()=>{O.current.displayValue=f}),[f,O]);let C=(0,l.z)((e=>{switch(e.key){case N.R.Backspace:case N.R.Delete:if(0!==g.mode||!g.nullable)return;let t=e.currentTarget;y.requestAnimationFrame((()=>{""===t.value&&(R.onChange(null),g.optionsRef.current&&(g.optionsRef.current.scrollTop=0),R.goToOption(x.T.Nothing))}));break;case N.R.Enter:if(0!==g.comboboxState)return;if(e.preventDefault(),e.stopPropagation(),null===g.activeOptionIndex)return void R.closeCombobox();R.selectActiveOption(),0===g.mode&&R.closeCombobox();break;case N.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),(0,h.E)(g.comboboxState,{0:()=>{R.goToOption(x.T.Next)},1:()=>{R.openCombobox()}});case N.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),(0,h.E)(g.comboboxState,{0:()=>{R.goToOption(x.T.Previous)},1:()=>{R.openCombobox(),y.nextFrame((()=>{g.value||R.goToOption(x.T.Last)}))}});case N.R.Home:case N.R.PageUp:return e.preventDefault(),e.stopPropagation(),R.goToOption(x.T.First);case N.R.End:case N.R.PageDown:return e.preventDefault(),e.stopPropagation(),R.goToOption(x.T.Last);case N.R.Escape:return 0!==g.comboboxState?void 0:(e.preventDefault(),g.optionsRef.current&&!g.optionsPropsRef.current.static&&e.stopPropagation(),R.closeCombobox());case N.R.Tab:if(0!==g.comboboxState)return;R.selectActiveOption(),R.closeCombobox()}})),I=(0,l.z)((e=>{R.openCombobox(),null==d||d(e)})),T=a((()=>{if(g.labelRef.current)return[g.labelRef.current.id].join(" ")}),[g.labelRef.current]),w=(0,o.useMemo)((()=>({open:0===g.comboboxState,disabled:g.disabled})),[g]),E={ref:j,id:S,role:"combobox",type:b,"aria-controls":null==(n=g.optionsRef.current)?void 0:n.id,"aria-expanded":g.disabled?void 0:0===g.comboboxState,"aria-activedescendant":null===g.activeOptionIndex||null==(i=g.options[g.activeOptionIndex])?void 0:i.id,"aria-multiselectable":1===g.mode||void 0,"aria-labelledby":T,disabled:g.disabled,onKeyDown:C,onChange:I};return(0,m.sY)({ourProps:E,theirProps:v,slot:w,defaultTag:"input",name:"Combobox.Input"})})),B=(0,m.yV)((function(e,t){var n;let r=D("Combobox.Button"),i=F("Combobox.Button"),c=(0,p.T)(r.buttonRef,t),f=`headlessui-combobox-button-${(0,u.M)()}`,b=(0,s.G)(),h=(0,l.z)((e=>{switch(e.key){case N.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&i.openCombobox(),b.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case N.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&(i.openCombobox(),b.nextFrame((()=>{r.value||i.goToOption(x.T.Last)}))),b.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case N.R.Escape:return 0!==r.comboboxState?void 0:(e.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&e.stopPropagation(),i.closeCombobox(),b.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})})));default:return}})),g=(0,l.z)((e=>{if((0,v.P)(e.currentTarget))return e.preventDefault();0===r.comboboxState?i.closeCombobox():(e.preventDefault(),i.openCombobox()),b.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}))})),R=a((()=>{if(r.labelRef.current)return[r.labelRef.current.id,f].join(" ")}),[r.labelRef.current,f]),j=(0,o.useMemo)((()=>({open:0===r.comboboxState,disabled:r.disabled})),[r]),O=e,S={ref:c,id:f,type:(0,d.f)(e,r.buttonRef),tabIndex:-1,"aria-haspopup":!0,"aria-controls":null==(n=r.optionsRef.current)?void 0:n.id,"aria-expanded":r.disabled?void 0:0===r.comboboxState,"aria-labelledby":R,disabled:r.disabled,onClick:g,onKeyDown:h};return(0,m.sY)({ourProps:S,theirProps:O,slot:j,defaultTag:"button",name:"Combobox.Button"})})),$=(0,m.yV)((function(e,t){let n=D("Combobox.Label"),r=`headlessui-combobox-label-${(0,u.M)()}`,i=(0,p.T)(n.labelRef,t),a=(0,l.z)((()=>{var e;return null==(e=n.inputRef.current)?void 0:e.focus({preventScroll:!0})})),s=(0,o.useMemo)((()=>({open:0===n.comboboxState,disabled:n.disabled})),[n]);return(0,m.sY)({ourProps:{ref:i,id:r,onClick:a},theirProps:e,slot:s,defaultTag:"label",name:"Combobox.Label"})})),Q=m.AN.RenderStrategy|m.AN.Static,q=(0,m.yV)((function(e,t){var n;let{hold:i=!1,...s}=e,l=D("Combobox.Options"),c=(0,p.T)(l.optionsRef,t),d=`headlessui-combobox-options-${(0,u.M)()}`,x=(0,I.oJ)(),b=null!==x?x===I.ZM.Open:0===l.comboboxState;(0,r.e)((()=>{var t;l.optionsPropsRef.current.static=null!=(t=e.static)&&t}),[l.optionsPropsRef,e.static]),(0,r.e)((()=>{l.optionsPropsRef.current.hold=i}),[l.optionsPropsRef,i]),(0,f.B)({container:l.optionsRef.current,enabled:0===l.comboboxState,accept:e=>"option"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let v=a((()=>{var e,t,n;return null!=(n=null==(e=l.labelRef.current)?void 0:e.id)?n:null==(t=l.buttonRef.current)?void 0:t.id}),[l.labelRef.current,l.buttonRef.current]),h=(0,o.useMemo)((()=>({open:0===l.comboboxState})),[l]),g={"aria-activedescendant":null===l.activeOptionIndex||null==(n=l.options[l.activeOptionIndex])?void 0:n.id,"aria-labelledby":v,role:"listbox",id:d,ref:c};return(0,m.sY)({ourProps:g,theirProps:s,slot:h,defaultTag:"ul",features:Q,visible:b,name:"Combobox.Options"})})),G=(0,m.yV)((function(e,t){var n,a;let{disabled:s=!1,value:c,...d}=e,f=D("Combobox.Option"),v=F("Combobox.Option"),h=`headlessui-combobox-option-${(0,u.M)()}`,g=null!==f.activeOptionIndex&&f.options[f.activeOptionIndex].id===h,R=f.isSelected(c),j=(0,o.useRef)(null),O=(0,i.E)({disabled:s,value:c,domRef:j,textValue:null==(a=null==(n=j.current)?void 0:n.textContent)?void 0:a.toLowerCase()}),S=(0,p.T)(t,j),y=(0,l.z)((()=>v.selectOption(h)));(0,r.e)((()=>v.registerOption(h,O)),[O,h]);let C=(0,o.useRef)(!f.__demoMode);(0,r.e)((()=>{if(!f.__demoMode)return;let e=(0,b.k)();return e.requestAnimationFrame((()=>{C.current=!0})),e.dispose}),[]),(0,r.e)((()=>{if(0!==f.comboboxState||!g||!C.current||0===f.activationTrigger)return;let e=(0,b.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=j.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[j,g,f.comboboxState,f.activationTrigger,f.activeOptionIndex]);let I=(0,l.z)((e=>{var t;if(s)return e.preventDefault();y(),0===f.mode&&(v.closeCombobox(),null==(t=f.inputRef.current)||t.focus({preventScroll:!0}))})),N=(0,l.z)((()=>{if(s)return v.goToOption(x.T.Nothing);v.goToOption(x.T.Specific,h)})),T=(0,l.z)((()=>{s||g||v.goToOption(x.T.Specific,h,0)})),w=(0,l.z)((()=>{s||!g||f.optionsPropsRef.current.hold||v.goToOption(x.T.Nothing)})),E=(0,o.useMemo)((()=>({active:g,selected:R,disabled:s})),[g,R,s]);return(0,m.sY)({ourProps:{id:h,ref:S,role:"option",tabIndex:!0===s?void 0:-1,"aria-disabled":!0===s||void 0,"aria-selected":!0===R||void 0,disabled:void 0,onClick:I,onFocus:N,onPointerMove:T,onMouseMove:T,onPointerLeave:w,onMouseLeave:w},theirProps:d,slot:E,defaultTag:"li",name:"Combobox.Option"})})),U=Object.assign(Z,{Input:V,Button:B,Label:$,Options:q,Option:G})},1591:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var o=n(7294),r=n(6723),i=n(5466);function a({container:e,accept:t,walk:n,enabled:a=!0}){let s=(0,o.useRef)(t),l=(0,o.useRef)(n);(0,o.useEffect)((()=>{s.current=t,l.current=n}),[t,n]),(0,r.e)((()=>{if(!e||!a)return;let t=(0,i.r)(e);if(!t)return;let n=s.current,o=l.current,r=Object.assign((e=>n(e)),{acceptNode:n}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,r,!1);for(;u.nextNode();)o(u.currentNode)}),[e,a,s,l])}},1497:function(e,t,n){"use strict";n.d(t,{T:function(){return r},d:function(){return i}});var o,r=((o=r||{})[o.First=0]="First",o[o.Previous=1]="Previous",o[o.Next=2]="Next",o[o.Last=3]="Last",o[o.Specific=4]="Specific",o[o.Nothing=5]="Nothing",o);function i(e,t){let n=t.resolveItems();if(n.length<=0)return null;let o=t.resolveActiveIndex(),r=null!=o?o:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,o)=>!(-1!==r&&o.length-n-1>=r)&&!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=r)&&!t.resolveDisabled(e)));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===i?o:i}}},function(e){e.O(0,[228,445,13,16,866,440,907,275,34,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);