(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6094],{86094:function(e,n,i){"use strict";i.r(n);var c=i(49664),a=i(49713),t=i(67294),l=i(87356),r=i(80127),o=i.n(r),u=i(65355),s=i(85893);const h=({price:e,clicked:n,updatePrice:i,updateClick:c})=>{return(0,s.jsxs)("div",{className:o().finanzcheckLeftColumnBigScreen,children:[(0,s.jsx)("label",{children:"Kreditbetrag"}),(0,s.jsx)("input",{className:o().finanzcheckInput,type:"text",pattern:"[0-9]*",placeholder:"Kaufpreis (\u20ac)",value:n&&e?e:(a=e,0===a?"":l.ZP.priceFormatting(a)),onClick:()=>c(!0),onBlur:()=>c(!1),onChange:e=>e.target.validity.valid&&i(Number(e.target.value))})]});var a},d=({durationInput:e,updateDurationInput:n})=>(0,s.jsxs)("div",{className:o().finanzcheckRightColumnBigScreen,children:[(0,s.jsx)("label",{children:"Laufzeit"}),(0,s.jsx)("select",{className:o().finanzcheckArrow,value:e,onChange:e=>n(Number(e.target.value)),children:(0,a.w6H)(1,11).map((e=>(0,s.jsxs)("option",{value:12*e,children:[12*e," Monate"]},`month-option-${e}`)))})]});n.default=({url:e,rawPrice:n,rawDuration:i,coordinator:a,trackingLabel:l,optimizelyEvent:r,optimizelyEventCombinedFinance:k})=>{var z,f,g,p,m;const{0:_,1:v}=(0,t.useState)(!1),{0:C,1:F}=(0,t.useState)(n),{0:b,1:x}=(0,t.useState)(null!==i&&void 0!==i?i:36),S=new URL(e);S.searchParams.set("amount",null!==(z=null===C||void 0===C?void 0:C.toString())&&void 0!==z?z:""),S.searchParams.set("term",null!==(f=null===b||void 0===b?void 0:b.toString())&&void 0!==f?f:"");const j=(0,u.E)();null!==(g=j.optimizelyResults)&&void 0!==g&&g.enableDPSliceContextFinanzcheckTest&&S.searchParams.set("subId","original_financeslice");const w=a.requireFinanzcheck&&a.requireOverlayRate&&null!==(p=null===(m=j.optimizelyResults)||void 0===m?void 0:m.enableDPFinanzcheckLogoTest)&&void 0!==p?p:null;if(w){const e=S.searchParams.get("subId");S.searchParams.set("subId","variant"===w?e+"_variant_nologo":"original"===w?e+"_original_withlogo":null!==e&&void 0!==e?e:"")}return(0,s.jsxs)("div",{className:o().finanzcheck,"data-cy":"finanzcheck-widget",children:[(0,s.jsx)("div",{className:o().finanzcheckTitle,children:"Dein Autokreditvergleich"}),(0,s.jsxs)("div",{className:o().finanzcheckInputContainer,children:[(0,s.jsx)(h,{price:C,updatePrice:F,clicked:_,updateClick:v}),(0,s.jsx)(d,{durationInput:b,updateDurationInput:x}),(0,s.jsx)(c.g,{className:o().finanzcheckButton,url:S.toString(),whenDealerScrollToContactForm:!!a.whenDealerScrollToContactForm,trackingId:l,wrappedComponent:"Vergleichen",optimizelyEvent:r,optimizelyEventCombinedFinance:k})]})]})}},80127:function(e){e.exports={finanzcheck:"FinanzcheckWidget_finanzcheck__MXPuP",finanzcheckTitle:"FinanzcheckWidget_finanzcheckTitle__ZJCMN",finanzcheckInput:"FinanzcheckWidget_finanzcheckInput__bWzJh",finanzcheckArrow:"FinanzcheckWidget_finanzcheckArrow__Vrrfo",finanzcheckInputContainer:"FinanzcheckWidget_finanzcheckInputContainer__XXj3G",finanzcheckColumn:"FinanzcheckWidget_finanzcheckColumn__aYepa",finanzcheckRightColumnBigScreen:"FinanzcheckWidget_finanzcheckRightColumnBigScreen___lLdH",finanzcheckLeftColumnBigScreen:"FinanzcheckWidget_finanzcheckLeftColumnBigScreen__4EzfQ",finanzcheckButton:"FinanzcheckWidget_finanzcheckButton__y3d2U"}}}]);