(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{1163:function(e,t,o){e.exports=o(387)},1147:function(e,t,o){"use strict";o.d(t,{h:function(){return j}});var n=o(7294),r=o(6723),a=o(3855);function i(e,t){let[o,i]=(0,n.useState)(e),u=(0,a.E)(e);return(0,r.e)((()=>i(u.current)),[u,i,...t]),o}var u=o(4192),l=o(3781),s=o(9946),c=o(292),d=o(4157),p=o(3784),f=o(1591),b=o(1497),v=o(9362),m=o(2351),x=o(4103),R=o(2984);function g(e={},t=null,o=[]){for(let[n,r]of Object.entries(e))y(o,I(t,n),r);return o}function I(e,t){return e?e+"["+t+"]":t}function y(e,t,o){if(Array.isArray(o))for(let[n,r]of o.entries())y(e,I(t,n.toString()),r);else o instanceof Date?e.push([t,o.toISOString()]):"boolean"==typeof o?e.push([t,o?"1":"0"]):"string"==typeof o?e.push([t,o]):"number"==typeof o?e.push([t,`${o}`]):null==o?e.push([t,""]):g(o,t,e)}var S,T,O=o(4575),h=o(6045),C=o(6567),P=o(1363),M=((T=M||{})[T.Open=0]="Open",T[T.Closed=1]="Closed",T),E=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(E||{}),k=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(k||{}),D=((S=D||{})[S.OpenCombobox=0]="OpenCombobox",S[S.CloseCombobox=1]="CloseCombobox",S[S.GoToOption=2]="GoToOption",S[S.RegisterOption=3]="RegisterOption",S[S.UnregisterOption=4]="UnregisterOption",S);function w(e,t=(e=>e)){let o=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,n=(0,O.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),r=o?n.indexOf(o):null;return-1===r&&(r=null),{options:n,activeOptionIndex:r}}let F={1:e=>e.dataRef.current.disabled||1===e.comboboxState?e:{...e,activeOptionIndex:null,comboboxState:1},0(e){if(e.dataRef.current.disabled||0===e.comboboxState)return e;let t=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,n=e.options.findIndex((e=>o(e.dataRef.current.value)));return-1!==n&&(t=n),{...e,comboboxState:0,activeOptionIndex:t}},2(e,t){var o;if(e.dataRef.current.disabled||e.dataRef.current.optionsRef.current&&!e.dataRef.current.optionsPropsRef.current.static&&1===e.comboboxState)return e;let n=w(e);if(null===n.activeOptionIndex){let e=n.options.findIndex((e=>!e.dataRef.current.disabled));-1!==e&&(n.activeOptionIndex=e)}let r=(0,b.d)(t,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,activeOptionIndex:r,activationTrigger:null!=(o=t.trigger)?o:1}},3:(e,t)=>{let o={id:t.id,dataRef:t.dataRef},n=w(e,(e=>[...e,o]));null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(o));let r={...e,...n,activationTrigger:1};return e.dataRef.current.__demoMode&&void 0===e.dataRef.current.value&&(r.activeOptionIndex=0),r},4:(e,t)=>{let o=w(e,(e=>{let o=e.findIndex((e=>e.id===t.id));return-1!==o&&e.splice(o,1),e}));return{...e,...o,activationTrigger:1}}},A=(0,n.createContext)(null);function N(e){let t=(0,n.useContext)(A);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return t}A.displayName="ComboboxActionsContext";let z=(0,n.createContext)(null);function L(e){let t=(0,n.useContext)(z);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return t}function _(e,t){return(0,R.E)(t.type,F,e,t)}z.displayName="ComboboxDataContext";let V=n.Fragment,U=(0,m.yV)((function(e,t){let{name:o,value:a,onChange:i,disabled:u=!1,__demoMode:s=!1,nullable:d=!1,multiple:p=!1,...f}=e,[v,x]=(0,n.useReducer)(_,{dataRef:(0,n.createRef)(),comboboxState:s?0:1,options:[],activeOptionIndex:null,activationTrigger:1}),I=(0,n.useRef)(!1),y=(0,n.useRef)({static:!1,hold:!1}),S=(0,n.useRef)({displayValue:void 0}),T=(0,n.useRef)(null),O=(0,n.useRef)(null),P=(0,n.useRef)(null),M=(0,n.useRef)(null),E=(0,l.z)(((e,t)=>e===t)),k=(0,n.useCallback)((e=>(0,R.E)(D.mode,{1:()=>a.some((t=>E(t,e))),0:()=>E(a,e)})),[a]),D=(0,n.useMemo)((()=>({...v,optionsPropsRef:y,inputPropsRef:S,labelRef:T,inputRef:O,buttonRef:P,optionsRef:M,value:a,disabled:u,mode:p?1:0,get activeOptionIndex(){if(I.current&&null===v.activeOptionIndex&&v.options.length>0){let e=v.options.findIndex((e=>!e.dataRef.current.disabled));if(-1!==e)return e}return v.activeOptionIndex},compare:E,isSelected:k,nullable:d,__demoMode:s})),[a,u,p,d,s,v]);(0,r.e)((()=>{v.dataRef.current=D}),[D]),(0,c.O)([D.buttonRef,D.inputRef,D.optionsRef],(()=>x({type:1})),0===D.comboboxState);let w=(0,n.useMemo)((()=>({open:0===D.comboboxState,disabled:u,activeIndex:D.activeOptionIndex,activeOption:null===D.activeOptionIndex?null:D.options[D.activeOptionIndex].dataRef.current.value})),[D,u]),F=(0,n.useCallback)((()=>{var e;if(!D.inputRef.current)return;let t=S.current.displayValue;D.inputRef.current.value="function"==typeof t?null!=(e=t(a))?e:"":"string"==typeof a?a:""}),[a,D.inputRef,S]),N=(0,l.z)((e=>{let t=D.options.find((t=>t.id===e));!t||(Q(t.dataRef.current.value),F())})),L=(0,l.z)((()=>{if(null!==D.activeOptionIndex){let{dataRef:e,id:t}=D.options[D.activeOptionIndex];Q(e.current.value),F(),x({type:2,focus:b.T.Specific,id:t})}})),U=(0,l.z)((()=>{x({type:0}),I.current=!0})),B=(0,l.z)((()=>{x({type:1}),I.current=!1})),$=(0,l.z)(((e,t,o)=>(I.current=!1,e===b.T.Specific?x({type:2,focus:b.T.Specific,id:t,trigger:o}):x({type:2,focus:e,trigger:o})))),Y=(0,l.z)(((e,t)=>(x({type:3,id:e,dataRef:t}),()=>x({type:4,id:e})))),Q=(0,l.z)((e=>(0,R.E)(D.mode,{0:()=>i(e),1(){let t=D.value.slice(),o=t.indexOf(e);return-1===o?t.push(e):t.splice(o,1),i(t)}}))),G=(0,n.useMemo)((()=>({onChange:Q,registerOption:Y,goToOption:$,closeCombobox:B,openCombobox:U,selectActiveOption:L,selectOption:N})),[]);(0,r.e)((()=>{1===D.comboboxState&&F()}),[F,D.comboboxState]),(0,r.e)(F,[F]);let K=null===t?{}:{ref:t};return n.createElement(A.Provider,{value:G},n.createElement(z.Provider,{value:D},n.createElement(C.up,{value:(0,R.E)(D.comboboxState,{0:C.ZM.Open,1:C.ZM.Closed})},null!=o&&null!=a&&g({[o]:a}).map((([e,t])=>n.createElement(h._,{features:h.A.Hidden,...(0,m.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:e,value:t})}))),(0,m.sY)({ourProps:K,theirProps:f,slot:w,defaultTag:V,name:"Combobox"}))))})),B=(0,m.yV)((function(e,t){var o,a;let{value:c,onChange:d,displayValue:f,type:v="text",...x}=e,g=L("Combobox.Input"),I=N("Combobox.Input"),y=(0,p.T)(g.inputRef,t),S=g.inputPropsRef,T=`headlessui-combobox-input-${(0,s.M)()}`,O=(0,u.G)();(0,r.e)((()=>{S.current.displayValue=f}),[f,S]);let h=(0,l.z)((e=>{switch(e.key){case P.R.Backspace:case P.R.Delete:if(0!==g.mode||!g.nullable)return;let t=e.currentTarget;O.requestAnimationFrame((()=>{""===t.value&&(I.onChange(null),g.optionsRef.current&&(g.optionsRef.current.scrollTop=0),I.goToOption(b.T.Nothing))}));break;case P.R.Enter:if(0!==g.comboboxState)return;if(e.preventDefault(),e.stopPropagation(),null===g.activeOptionIndex)return void I.closeCombobox();I.selectActiveOption(),0===g.mode&&I.closeCombobox();break;case P.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),(0,R.E)(g.comboboxState,{0:()=>{I.goToOption(b.T.Next)},1:()=>{I.openCombobox()}});case P.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),(0,R.E)(g.comboboxState,{0:()=>{I.goToOption(b.T.Previous)},1:()=>{I.openCombobox(),O.nextFrame((()=>{g.value||I.goToOption(b.T.Last)}))}});case P.R.Home:case P.R.PageUp:return e.preventDefault(),e.stopPropagation(),I.goToOption(b.T.First);case P.R.End:case P.R.PageDown:return e.preventDefault(),e.stopPropagation(),I.goToOption(b.T.Last);case P.R.Escape:return 0!==g.comboboxState?void 0:(e.preventDefault(),g.optionsRef.current&&!g.optionsPropsRef.current.static&&e.stopPropagation(),I.closeCombobox());case P.R.Tab:if(0!==g.comboboxState)return;I.selectActiveOption(),I.closeCombobox()}})),C=(0,l.z)((e=>{I.openCombobox(),null==d||d(e)})),M=i((()=>{if(g.labelRef.current)return[g.labelRef.current.id].join(" ")}),[g.labelRef.current]),E=(0,n.useMemo)((()=>({open:0===g.comboboxState,disabled:g.disabled})),[g]),k={ref:y,id:T,role:"combobox",type:v,"aria-controls":null==(o=g.optionsRef.current)?void 0:o.id,"aria-expanded":g.disabled?void 0:0===g.comboboxState,"aria-activedescendant":null===g.activeOptionIndex||null==(a=g.options[g.activeOptionIndex])?void 0:a.id,"aria-multiselectable":1===g.mode||void 0,"aria-labelledby":M,disabled:g.disabled,onKeyDown:h,onChange:C};return(0,m.sY)({ourProps:k,theirProps:x,slot:E,defaultTag:"input",name:"Combobox.Input"})})),$=(0,m.yV)((function(e,t){var o;let r=L("Combobox.Button"),a=N("Combobox.Button"),c=(0,p.T)(r.buttonRef,t),f=`headlessui-combobox-button-${(0,s.M)()}`,v=(0,u.G)(),R=(0,l.z)((e=>{switch(e.key){case P.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&a.openCombobox(),v.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case P.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&(a.openCombobox(),v.nextFrame((()=>{r.value||a.goToOption(b.T.Last)}))),v.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case P.R.Escape:return 0!==r.comboboxState?void 0:(e.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&e.stopPropagation(),a.closeCombobox(),v.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})})));default:return}})),g=(0,l.z)((e=>{if((0,x.P)(e.currentTarget))return e.preventDefault();0===r.comboboxState?a.closeCombobox():(e.preventDefault(),a.openCombobox()),v.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}))})),I=i((()=>{if(r.labelRef.current)return[r.labelRef.current.id,f].join(" ")}),[r.labelRef.current,f]),y=(0,n.useMemo)((()=>({open:0===r.comboboxState,disabled:r.disabled})),[r]),S=e,T={ref:c,id:f,type:(0,d.f)(e,r.buttonRef),tabIndex:-1,"aria-haspopup":!0,"aria-controls":null==(o=r.optionsRef.current)?void 0:o.id,"aria-expanded":r.disabled?void 0:0===r.comboboxState,"aria-labelledby":I,disabled:r.disabled,onClick:g,onKeyDown:R};return(0,m.sY)({ourProps:T,theirProps:S,slot:y,defaultTag:"button",name:"Combobox.Button"})})),Y=(0,m.yV)((function(e,t){let o=L("Combobox.Label"),r=`headlessui-combobox-label-${(0,s.M)()}`,a=(0,p.T)(o.labelRef,t),i=(0,l.z)((()=>{var e;return null==(e=o.inputRef.current)?void 0:e.focus({preventScroll:!0})})),u=(0,n.useMemo)((()=>({open:0===o.comboboxState,disabled:o.disabled})),[o]);return(0,m.sY)({ourProps:{ref:a,id:r,onClick:i},theirProps:e,slot:u,defaultTag:"label",name:"Combobox.Label"})})),Q=m.AN.RenderStrategy|m.AN.Static,G=(0,m.yV)((function(e,t){var o;let{hold:a=!1,...u}=e,l=L("Combobox.Options"),c=(0,p.T)(l.optionsRef,t),d=`headlessui-combobox-options-${(0,s.M)()}`,b=(0,C.oJ)(),v=null!==b?b===C.ZM.Open:0===l.comboboxState;(0,r.e)((()=>{var t;l.optionsPropsRef.current.static=null!=(t=e.static)&&t}),[l.optionsPropsRef,e.static]),(0,r.e)((()=>{l.optionsPropsRef.current.hold=a}),[l.optionsPropsRef,a]),(0,f.B)({container:l.optionsRef.current,enabled:0===l.comboboxState,accept:e=>"option"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let x=i((()=>{var e,t,o;return null!=(o=null==(e=l.labelRef.current)?void 0:e.id)?o:null==(t=l.buttonRef.current)?void 0:t.id}),[l.labelRef.current,l.buttonRef.current]),R=(0,n.useMemo)((()=>({open:0===l.comboboxState})),[l]),g={"aria-activedescendant":null===l.activeOptionIndex||null==(o=l.options[l.activeOptionIndex])?void 0:o.id,"aria-labelledby":x,role:"listbox",id:d,ref:c};return(0,m.sY)({ourProps:g,theirProps:u,slot:R,defaultTag:"ul",features:Q,visible:v,name:"Combobox.Options"})})),K=(0,m.yV)((function(e,t){var o,i;let{disabled:u=!1,value:c,...d}=e,f=L("Combobox.Option"),x=N("Combobox.Option"),R=`headlessui-combobox-option-${(0,s.M)()}`,g=null!==f.activeOptionIndex&&f.options[f.activeOptionIndex].id===R,I=f.isSelected(c),y=(0,n.useRef)(null),S=(0,a.E)({disabled:u,value:c,domRef:y,textValue:null==(i=null==(o=y.current)?void 0:o.textContent)?void 0:i.toLowerCase()}),T=(0,p.T)(t,y),O=(0,l.z)((()=>x.selectOption(R)));(0,r.e)((()=>x.registerOption(R,S)),[S,R]);let h=(0,n.useRef)(!f.__demoMode);(0,r.e)((()=>{if(!f.__demoMode)return;let e=(0,v.k)();return e.requestAnimationFrame((()=>{h.current=!0})),e.dispose}),[]),(0,r.e)((()=>{if(0!==f.comboboxState||!g||!h.current||0===f.activationTrigger)return;let e=(0,v.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=y.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[y,g,f.comboboxState,f.activationTrigger,f.activeOptionIndex]);let C=(0,l.z)((e=>{var t;if(u)return e.preventDefault();O(),0===f.mode&&(x.closeCombobox(),null==(t=f.inputRef.current)||t.focus({preventScroll:!0}))})),P=(0,l.z)((()=>{if(u)return x.goToOption(b.T.Nothing);x.goToOption(b.T.Specific,R)})),M=(0,l.z)((()=>{u||g||x.goToOption(b.T.Specific,R,0)})),E=(0,l.z)((()=>{u||!g||f.optionsPropsRef.current.hold||x.goToOption(b.T.Nothing)})),k=(0,n.useMemo)((()=>({active:g,selected:I,disabled:u})),[g,I,u]);return(0,m.sY)({ourProps:{id:R,ref:T,role:"option",tabIndex:!0===u?void 0:-1,"aria-disabled":!0===u||void 0,"aria-selected":!0===I||void 0,disabled:void 0,onClick:C,onFocus:P,onPointerMove:M,onMouseMove:M,onPointerLeave:E,onMouseLeave:E},theirProps:d,slot:k,defaultTag:"li",name:"Combobox.Option"})})),j=Object.assign(U,{Input:B,Button:$,Label:Y,Options:G,Option:K})},2510:function(e,t,o){"use strict";o.d(t,{v:function(){return _}});var n,r,a=o(7294),i=o(2984),u=o(2351),l=o(9362),s=o(4192),c=o(6723),d=o(3784),p=o(9946),f=o(1363),b=o(1497),v=o(4103),m=o(4575),x=o(292),R=o(1591),g=o(6567),I=o(4157),y=o(1074),S=o(3781),T=((r=T||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),O=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(O||{}),h=((n=h||{})[n.OpenMenu=0]="OpenMenu",n[n.CloseMenu=1]="CloseMenu",n[n.GoToItem=2]="GoToItem",n[n.Search=3]="Search",n[n.ClearSearch=4]="ClearSearch",n[n.RegisterItem=5]="RegisterItem",n[n.UnregisterItem=6]="UnregisterItem",n);function C(e,t=(e=>e)){let o=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,m.z2)(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),r=o?n.indexOf(o):null;return-1===r&&(r=null),{items:n,activeItemIndex:r}}let P={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var o;let n=C(e),r=(0,b.d)(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:r,activationTrigger:null!=(o=t.trigger)?o:1}},3:(e,t)=>{let o=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),r=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+o).concat(e.items.slice(0,e.activeItemIndex+o)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled})),a=r?e.items.indexOf(r):-1;return-1===a||a===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:a,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let o=C(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...o}},6:(e,t)=>{let o=C(e,(e=>{let o=e.findIndex((e=>e.id===t.id));return-1!==o&&e.splice(o,1),e}));return{...e,...o,activationTrigger:1}}},M=(0,a.createContext)(null);function E(e){let t=(0,a.useContext)(M);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,E),t}return t}function k(e,t){return(0,i.E)(t.type,P,e,t)}M.displayName="MenuContext";let D=a.Fragment,w=(0,u.yV)((function(e,t){let o=(0,a.useReducer)(k,{menuState:1,buttonRef:(0,a.createRef)(),itemsRef:(0,a.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:n,itemsRef:r,buttonRef:l},s]=o,c=(0,d.T)(t);(0,x.O)([l,r],((e,t)=>{var o;s({type:1}),(0,m.sP)(t,m.tJ.Loose)||(e.preventDefault(),null==(o=l.current)||o.focus())}),0===n);let p=(0,a.useMemo)((()=>({open:0===n})),[n]),f=e,b={ref:c};return a.createElement(M.Provider,{value:o},a.createElement(g.up,{value:(0,i.E)(n,{0:g.ZM.Open,1:g.ZM.Closed})},(0,u.sY)({ourProps:b,theirProps:f,slot:p,defaultTag:D,name:"Menu"})))})),F=(0,u.yV)((function(e,t){var o;let[n,r]=E("Menu.Button"),i=(0,d.T)(n.buttonRef,t),l=`headlessui-menu-button-${(0,p.M)()}`,c=(0,s.G)(),m=(0,S.z)((e=>{switch(e.key){case f.R.Space:case f.R.Enter:case f.R.ArrowDown:e.preventDefault(),e.stopPropagation(),r({type:0}),c.nextFrame((()=>r({type:2,focus:b.T.First})));break;case f.R.ArrowUp:e.preventDefault(),e.stopPropagation(),r({type:0}),c.nextFrame((()=>r({type:2,focus:b.T.Last})))}})),x=(0,S.z)((e=>{if(e.key===f.R.Space)e.preventDefault()})),R=(0,S.z)((t=>{if((0,v.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===n.menuState?(r({type:1}),c.nextFrame((()=>{var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),r({type:0})))})),g=(0,a.useMemo)((()=>({open:0===n.menuState})),[n]),y=e,T={ref:i,id:l,type:(0,I.f)(e,n.buttonRef),"aria-haspopup":!0,"aria-controls":null==(o=n.itemsRef.current)?void 0:o.id,"aria-expanded":e.disabled?void 0:0===n.menuState,onKeyDown:m,onKeyUp:x,onClick:R};return(0,u.sY)({ourProps:T,theirProps:y,slot:g,defaultTag:"button",name:"Menu.Button"})})),A=u.AN.RenderStrategy|u.AN.Static,N=(0,u.yV)((function(e,t){var o,n;let[r,i]=E("Menu.Items"),c=(0,d.T)(r.itemsRef,t),v=(0,y.i)(r.itemsRef),m=`headlessui-menu-items-${(0,p.M)()}`,x=(0,s.G)(),I=(0,g.oJ)(),T=null!==I?I===g.ZM.Open:0===r.menuState;(0,a.useEffect)((()=>{let e=r.itemsRef.current;!e||0===r.menuState&&e!==(null==v?void 0:v.activeElement)&&e.focus({preventScroll:!0})}),[r.menuState,r.itemsRef,v]),(0,R.B)({container:r.itemsRef.current,enabled:0===r.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let O=(0,S.z)((e=>{var t,o;switch(x.dispose(),e.key){case f.R.Space:if(""!==r.searchQuery)return e.preventDefault(),e.stopPropagation(),i({type:3,value:e.key});case f.R.Enter:if(e.preventDefault(),e.stopPropagation(),i({type:1}),null!==r.activeItemIndex){let{dataRef:e}=r.items[r.activeItemIndex];null==(o=null==(t=e.current)?void 0:t.domRef.current)||o.click()}(0,l.k)().nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case f.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:b.T.Next});case f.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:b.T.Previous});case f.R.Home:case f.R.PageUp:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:b.T.First});case f.R.End:case f.R.PageDown:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:b.T.Last});case f.R.Escape:e.preventDefault(),e.stopPropagation(),i({type:1}),(0,l.k)().nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case f.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(i({type:3,value:e.key}),x.setTimeout((()=>i({type:4})),350))}})),h=(0,S.z)((e=>{if(e.key===f.R.Space)e.preventDefault()})),C=(0,a.useMemo)((()=>({open:0===r.menuState})),[r]),P=e,M={"aria-activedescendant":null===r.activeItemIndex||null==(o=r.items[r.activeItemIndex])?void 0:o.id,"aria-labelledby":null==(n=r.buttonRef.current)?void 0:n.id,id:m,onKeyDown:O,onKeyUp:h,role:"menu",tabIndex:0,ref:c};return(0,u.sY)({ourProps:M,theirProps:P,slot:C,defaultTag:"div",features:A,visible:T,name:"Menu.Items"})})),z=a.Fragment,L=(0,u.yV)((function(e,t){let{disabled:o=!1,...n}=e,[r,i]=E("Menu.Item"),s=`headlessui-menu-item-${(0,p.M)()}`,f=null!==r.activeItemIndex&&r.items[r.activeItemIndex].id===s,v=(0,a.useRef)(null),m=(0,d.T)(t,v);(0,c.e)((()=>{if(0!==r.menuState||!f||0===r.activationTrigger)return;let e=(0,l.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=v.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[v,f,r.menuState,r.activationTrigger,r.activeItemIndex]);let x=(0,a.useRef)({disabled:o,domRef:v});(0,c.e)((()=>{x.current.disabled=o}),[x,o]),(0,c.e)((()=>{var e,t;x.current.textValue=null==(t=null==(e=v.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[x,v]),(0,c.e)((()=>(i({type:5,id:s,dataRef:x}),()=>i({type:6,id:s}))),[x,s]);let R=(0,S.z)((e=>{if(o)return e.preventDefault();i({type:1}),(0,l.k)().nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))})),g=(0,S.z)((()=>{if(o)return i({type:2,focus:b.T.Nothing});i({type:2,focus:b.T.Specific,id:s})})),I=(0,S.z)((()=>{o||f||i({type:2,focus:b.T.Specific,id:s,trigger:0})})),y=(0,S.z)((()=>{o||!f||i({type:2,focus:b.T.Nothing})})),T=(0,a.useMemo)((()=>({active:f,disabled:o})),[f,o]);return(0,u.sY)({ourProps:{id:s,ref:m,role:"menuitem",tabIndex:!0===o?void 0:-1,"aria-disabled":!0===o||void 0,disabled:void 0,onClick:R,onFocus:g,onPointerMove:I,onMouseMove:I,onPointerLeave:y,onMouseLeave:y},theirProps:n,slot:T,defaultTag:z,name:"Menu.Item"})})),_=Object.assign(w,{Button:F,Items:N,Item:L})},4157:function(e,t,o){"use strict";o.d(t,{f:function(){return i}});var n=o(7294),r=o(6723);function a(e){var t;if(e.type)return e.type;let o=null!=(t=e.as)?t:"button";return"string"==typeof o&&"button"===o.toLowerCase()?"button":void 0}function i(e,t){let[o,i]=(0,n.useState)((()=>a(e)));return(0,r.e)((()=>{i(a(e))}),[e.type,e.as]),(0,r.e)((()=>{o||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&i("button")}),[o,t]),o}},1591:function(e,t,o){"use strict";o.d(t,{B:function(){return i}});var n=o(7294),r=o(6723),a=o(5466);function i({container:e,accept:t,walk:o,enabled:i=!0}){let u=(0,n.useRef)(t),l=(0,n.useRef)(o);(0,n.useEffect)((()=>{u.current=t,l.current=o}),[t,o]),(0,r.e)((()=>{if(!e||!i)return;let t=(0,a.r)(e);if(!t)return;let o=u.current,n=l.current,r=Object.assign((e=>o(e)),{acceptNode:o}),s=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,r,!1);for(;s.nextNode();)n(s.currentNode)}),[e,i,u,l])}},1497:function(e,t,o){"use strict";o.d(t,{T:function(){return r},d:function(){return a}});var n,r=((n=r||{})[n.First=0]="First",n[n.Previous=1]="Previous",n[n.Next=2]="Next",n[n.Last=3]="Last",n[n.Specific=4]="Specific",n[n.Nothing=5]="Nothing",n);function a(e,t){let o=t.resolveItems();if(o.length<=0)return null;let n=t.resolveActiveIndex(),r=null!=n?n:-1,a=(()=>{switch(e.focus){case 0:return o.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=o.slice().reverse().findIndex(((e,o,n)=>!(-1!==r&&n.length-o-1>=r)&&!t.resolveDisabled(e)));return-1===e?e:o.length-1-e}case 2:return o.findIndex(((e,o)=>!(o<=r)&&!t.resolveDisabled(e)));case 3:{let e=o.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:o.length-1-e}case 4:return o.findIndex((o=>t.resolveId(o)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===a?n:a}}}]);