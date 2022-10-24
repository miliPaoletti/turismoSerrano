(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{2774:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(6992)}])},162:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var s=n(5893),a=n(5233),r=n(423),i=n(7294),c=n(6653),l=function(e){var t=e.content,n=e.icon;return(0,s.jsxs)("div",{className:"flex-grow flex items-center md:border-none md:w-auto w-full bg-white md:bg-transparent py-0 z-2 mb-2 border md:mb-0 md:border-0 first:mt-2 md:first:mt-0 shadow-md",children:[n,t]})},o=n(1147),d=n(1355),u=n(3750),m=n(7516),x=function(e){var t=(0,i.useState)(e),n=t[0],s=t[1];return{input:n,handleInput:function(e){s(e.target.value.toLowerCase())}}},h=function(e){var t,n=e.data,c=e.icon,l=e.onChange,h=e.text,f=e.selected,p=e.updateMonths,v=(0,i.useRef)(null),j=x(""),g=j.input,w=j.handleInput;return(0,s.jsx)("div",{className:"w-full md:w-72 lg:w-96 md:bg-white md:mx-1 py-3 rounded-md ",children:(0,s.jsx)(o.h,{value:f,onChange:function(e){l(e),p&&p(a.QN)},children:(0,s.jsxs)("div",{className:"relative w-full md:w-auto ",children:[(0,s.jsxs)("span",{className:"text-left cursor-default sm:text-sm flex items-center ",children:[(0,s.jsxs)("div",{className:"flex items-center ",children:[c," ",(0,s.jsxs)("p",{className:"mx-2 text-md md:text-lg text-gray-950 w-[90px] md:w-auto remove-selection ",children:[h,":"," "]})," ",(0,s.jsx)(o.h.Button,{children:(0,s.jsx)(o.h.Input,{ref:v,onFocus:function(){v.current.select()},className:"border-none text-left capitalize text-md md:text-xl text-black text-ellipsis overflow-hidden whitespace-nowrap",displayValue:g,onChange:w,spellCheck:"false"})})]}),(0,s.jsx)(o.h.Button,{className:"",children:(0,s.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center ",children:(0,s.jsx)(m.OrA,{className:"w-5 h-5 text-gray-400 ml-5 mr-1","aria-hidden":"true"})})})]}),(0,s.jsx)(d.u,{as:i.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(o.h.Options,{className:"z-[40] capitalize absolute w-full py-1 mt-1 overflow-auto text-md md:text-base lg:text-lg bg-white top-[29px] md:top-[31px] shadow-lg max-h-60 focus:outline-none sm:text-lg",children:null===(t=(0,r.a)(g,n))||void 0===t?void 0:t.map((function(e,t){return(0,s.jsx)(o.h.Option,{className:function(e){var t=e.active;return"cursor-default select-none relative py-2 pl-10 pr-4 ".concat(t?"text-white bg-orange-950":"text-gray-900")},value:e,children:function(t){var n=t.selected;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"block text-center ".concat(n?"font-medium":"font-normal"),children:e}),n?(0,s.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-orange-400",children:(0,s.jsx)(u.oFd,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},t)}))})})]})})})},f=n(1664),p=n.n(f),v=function(e){var t=e.destinationsNames,n=e.months,o=e.destination,d=e.month,u=(0,i.useState)(o),m=u[0],x=u[1],f=(0,i.useState)(d),v=f[0],j=f[1],g=(0,i.useState)([o]),w=g[0],b=g[1],N=(0,i.useState)([d]),y=N[0],O=N[1];return(0,i.useEffect)((function(){x(o)}),[o]),(0,i.useEffect)((function(){j(d)}),[d]),(0,i.useEffect)((function(){var e;b((e=t,Object.keys(e))),m!==a.QN?O(function(e,t){var n=[a.QN],s=e[t];return n.concat((0,r.Gu)(s))}(t,m)):O(n)}),[m,n,t]),(0,s.jsx)("div",{className:"search-bar-container",children:(0,s.jsxs)("div",{className:"search-bar-container-input",children:[(0,s.jsx)(l,{content:(0,s.jsx)(h,{data:w,onChange:x,icon:(0,s.jsx)(c.Sw5,{className:"icon",size:20}),text:a.nF.firstInput,selected:m,updateMonths:j})}),(0,s.jsx)(l,{content:(0,s.jsx)(h,{data:y,onChange:j,icon:(0,s.jsx)(c.bgj,{className:"icon",size:20}),text:a.nF.secondInput,selected:v})}),(0,s.jsx)(p(),{href:{pathname:a.qW.search,query:{destination:m,month:v}},children:(0,s.jsx)("a",{className:"relative overflow-hidden z-30 w-full md:w-auto",children:(0,s.jsx)("div",{className:"button-search",children:a.g3})})})]})})}},6992:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var s=n(5893),a=n(2931),r=n(7294),i=n(162),c=n(5233),l=n(1163),o=n(2906),d=function(){var e=(0,l.useRouter)(),t=e.query,n=e.isReady,a=(0,r.useState)(""),d=a[0],u=a[1],m=(0,r.useState)(""),x=m[0],h=m[1],f=(0,r.useState)([]),p=f[0],v=f[1],j=(0,r.useState)([]),g=j[0],w=j[1];return(0,r.useEffect)((function(){n&&(u(t.destination),h(t.month))}),[n,t.destination,t.month]),(0,r.useEffect)((function(){(0,o.RA)().then((function(e){v((0,o.wH)(e)),w(Object.assign({todos:[1]},(0,o.dN)(e)))}))}),[]),(0,s.jsxs)("div",{className:"items-center text-center relative",children:[(0,s.jsx)("div",{className:"container-search",children:(0,s.jsx)("p",{className:"container-search-text",children:c.nF.textBanner})}),(0,s.jsx)(i.Z,{destinationsNames:g,months:p,destination:d,month:x})]})},u=n(2510),m=n(1355),x=n(3750),h=n(9352),f=n(9583);function p(e){var t=e.handleOrderAsc,n=e.handleOrderDesc,a=e.handleOrderName,i=e.text;return(0,s.jsxs)(u.v,{as:"div",className:"relative pb-3 lg:mx-5 ",children:[(0,s.jsx)("div",{children:(0,s.jsxs)(u.v.Button,{className:"inline-flex items-center rounded-md lg:px-5 py-2 text-md font-medium text-black focus:outline-none focus-visible:ring-2 ",children:[i,(0,s.jsx)(x.IAR,{className:"ml-2 -mr-1 h-5 w-5 ","aria-hidden":"true"})]})}),(0,s.jsx)(m.u,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,s.jsx)(u.v.Items,{className:"absolute text-sm rounded-md bg-white shadow-lg border border-gray-100 focus:outline-none z-[9999]",children:(0,s.jsxs)("div",{className:"px-1 py-1 flex flex-col",children:[(0,s.jsx)(u.v.Item,{children:function(e){var n=e.active;return(0,s.jsxs)("button",{onClick:function(){t()},className:"".concat(n?"bg-orange-950 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 text-sm"),children:[(0,s.jsx)(h.xPw,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),c.yb.asc]})}}),(0,s.jsx)(u.v.Item,{children:function(e){var t=e.active;return(0,s.jsxs)("button",{onClick:function(){n()},className:"".concat(t?"bg-orange-950 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 text-sm"),children:[(0,s.jsx)(h.Sr8,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),c.yb.desc]})}}),(0,s.jsx)(u.v.Item,{children:function(e){var t=e.active;return(0,s.jsxs)("button",{onClick:function(){a()},className:"".concat(t?"bg-orange-950 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 text-sm"),children:[(0,s.jsx)(f.Llq,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),c.yb.populars]})}})]})})})]})}var v=n(2379),j=n(797),g=n(423),w=function(){var e=function(){var e=(0,r.useState)([]),t=e[0],n=e[1],s=(0,r.useState)(t),a=s[0],i=s[1],d=(0,r.useState)(c.yb.orderBy),u=d[0],m=d[1],x=(0,r.useState)(c.J),h=x[0],f=x[1],p=(0,l.useRouter)().query;(0,r.useEffect)((function(){0!==Object.keys(p).length&&(0,o.VL)(p.month,p.destination).then((function(e){n((0,g.bm)(e))}))}),[p]),(0,r.useEffect)((function(){i((0,g.WC)(t)),m(c.yb.populars)}),[t]);var v=0;return void 0!==t&&(v=t.length),{lenDest:v,dest:a,visible:h,handleOrderAsc:function(){var e=(0,g.xP)((0,g.al)(t)),n=(0,g.xP)((0,g.oR)(t)).concat(e);i((0,j.Z)(n)),m(c.yb.asc)},handleOrderDesc:function(){var e=(0,g.fi)((0,g.al)(t)),n=(0,g.fi)((0,g.oR)(t)),s=e.concat(n);i((0,j.Z)(s)),m(c.yb.desc)},handleOrderName:function(){var e=(0,g.WC)(t);i((0,j.Z)(e)),m(c.yb.populars)},textDropdown:u,showMoreItems:function(e){e.preventDefault(),f(h+c.J)}}}(),t=e.lenDest,n=e.dest,a=e.visible,i=e.handleOrderAsc,d=e.handleOrderDesc,u=e.handleOrderName,m=e.textDropdown,x=e.showMoreItems,h=c.nF.multipleDest,f=c.nF.multipleDest2;return 1===t&&(h=c.nF.singleDest,f=c.nF.singleDest2),(0,s.jsxs)("div",{className:"container-general pb-8 md:pt-11",children:[(0,s.jsx)("div",{className:"mb-8 py-2 text-2xl w-full"}),(0,s.jsx)(v.Z,{text:t+" "+h,text2:f}),t>1?(0,s.jsx)(p,{handleOrderAsc:i,handleOrderDesc:d,handleOrderName:u,text:m}):"",(0,s.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",children:null===n||void 0===n?void 0:n.slice(0,a)}),a<t?(0,s.jsx)("div",{className:"text-center ",children:(0,s.jsx)("button",{className:"bg-orange-950 text-white p-4 rounded-xl hover:shadow-lg transition transform duration-200 ease-out font-semibold uppercase text-xl",onClick:x,children:c.nF.showMore})}):""]})},b=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{}),(0,s.jsx)(w,{})]})};function N(){return(0,s.jsx)(a.Z,{content:(0,s.jsx)(b,{}),title:"Turismo Serrano"})}}},function(e){e.O(0,[228,445,13,16,866,440,937,874,275,473,34,774,888,179],(function(){return t=2774,e(e.s=t);var t}));var t=e.O();_N_E=t}]);