var E=Object.defineProperty;var a=(e,t)=>E(e,"name",{value:t,configurable:!0});import{r as d,R as L}from"./index-37164710.js";import"./iframe-e3ae7755.js";var n={},T={get exports(){return n},set exports(e){n=e}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=d,I=Symbol.for("react.element"),O=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,M=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,r){var o,s={},c=null,i=null;r!==void 0&&(c=""+r),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)z.call(t,o)&&!$.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:I,type:e,key:c,ref:i,props:s,_owner:M.current}}a(D,"q");h.Fragment=O;h.jsx=D;h.jsxs=D;(function(e){e.exports=h})(T);function N(e,t=500){const[r,o]=L.useState(e);return L.useEffect(()=>{const s=setTimeout(()=>{o(e)},t);return()=>{clearTimeout(s)}},[e,t]),r}a(N,"useDebounce");const V="https://nominatim.openstreetmap.org/search",k=a(({countrycodes:e=[]})=>{const[t,r]=d.useState("idle"),[o,s]=d.useState([]);return{status:t,data:o,setAddress:a(async u=>{if(u.length>2){const A={q:u,format:"json",addressdetails:"1",limit:"10",countrycodes:e.join(",")};r("fetching");try{const y=await(await fetch(`${V}?${new URLSearchParams(A).toString()}`)).json();s(y),r("fetched")}catch(m){console.error(m)}}else s([]),r("fetched")},"setAddress"),clear:a(()=>s([]),"clear")}},"useFetch"),q=k;const F=a((e,t)=>n.jsx("svg",{height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",ref:t,...e,children:n.jsx("path",{d:"M13 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 2 0zm-1 19a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm-8-8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm19-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-4.982-9.382a1 1 0 0 0-1.367.364l-1 1.731a1 1 0 0 0 .365 1.366.987.987 0 0 0 .5.135 1 1 0 0 0 .866-.5l1-1.731a1 1 0 0 0-.364-1.365zM7.987 18.921a1 1 0 0 0-1.366.364l-1 1.731a1 1 0 0 0 .364 1.366.989.989 0 0 0 .5.135 1 1 0 0 0 .867-.5l1-1.731a1 1 0 0 0-.365-1.365zm-3.272-12.3-1.731-1a1 1 0 0 0-1 1.731l1.731 1a1 1 0 0 0 1-1.731zm17.3 10.03-1.731-1a1 1 0 0 0-1 1.731l1.731 1a.987.987 0 0 0 .5.135 1 1 0 0 0 .5-1.866zM7.349 1.982a1 1 0 0 0-1.731 1l1 1.731a1 1 0 0 0 .866.5.987.987 0 0 0 .5-.135 1 1 0 0 0 .365-1.366zm10.03 17.3a1 1 0 0 0-1.731 1l1 1.731a1 1 0 0 0 1.731-1zm2.408-10.8a1 1 0 0 0 .5-.134l1.731-1a1 1 0 0 0-1-1.731l-1.731 1a1 1 0 0 0 .5 1.865zM3.713 15.648l-1.731 1a1 1 0 0 0 .5 1.866.987.987 0 0 0 .5-.135l1.731-1a1 1 0 0 0-1-1.731z"})}),"SvgComponent"),P=d.forwardRef(F),U=P;try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{}}}catch{}function f({countrycodes:e,label:t,onSelected:r,onChange:o,disableStyles:s,...c}){const{data:i,setAddress:u,clear:A,status:m}=q({countrycodes:e}),y=d.useId(),b=`input_${y}`,x=`list_${y}`,[p,S]=d.useState(""),j=N(p,600);d.useEffect(()=>{u(p)},[j]);const v=i.filter(l=>l.display_name!==p),C=!!p&&!!v.length;return n.jsxs("div",{className:`rottitime-address ${s?"diable-styles":"enable-styles"}`,children:[!!t&&n.jsx("label",{htmlFor:b,children:t}),n.jsxs("div",{className:"input-wrapper",children:[n.jsx("input",{"aria-label":t,"aria-owns":x,"aria-autocomplete":"list",autoComplete:"off",type:"text",id:b,value:p,onChange:l=>{S(l.target.value),typeof o=="function"&&o(l)},...c}),m==="fetching"&&n.jsx(U,{})]}),n.jsx("div",{role:"listbox","aria-live":"polite",id:x,"aria-expanded":C,children:C&&n.jsx("ul",{children:v.map((l,w)=>n.jsx("li",{onClick:()=>{const B=i[w];S(B.display_name),A(),typeof r=="function"&&r(B)},children:l==null?void 0:l.display_name},w))})})]})}a(f,"AddressAutocomplete");try{f.displayName="AddressAutocomplete",f.__docgenInfo={description:"",displayName:"AddressAutocomplete",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disableStyles:{defaultValue:null,description:"",name:"disableStyles",required:!1,type:{name:"boolean"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:"((data: MapData) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(((event: ChangeEvent<HTMLInputElement>) => void) & ChangeEventHandler<HTMLInputElement>)"}},countrycodes:{defaultValue:null,description:"",name:"countrycodes",required:!1,type:{name:'("AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | ... 223 more ... | "ZW")[]'}}}}}catch{}const K={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { ComponentProps } from 'react'
import AddressAutocomplete from '../components/AddressAutocomplete'

export default {
  title: 'AddressAutocomplete',
  component: AddressAutocomplete,
  argTypes: {
    countrycodes: {
      description:
        'Limit search results to one or more countries. <countrycode> must be the ISO 3166-1alpha2 code, e.g. gb for the United Kingdom, de for Germany.'
    }
  }
} as ComponentMeta<typeof AddressAutocomplete>

const Template: ComponentStory<typeof AddressAutocomplete> = (args) => (
  <AddressAutocomplete {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Enter your address',
  placeholder: 'e.g. 10 downing street',
  style: { width: 500 }
} as ComponentProps<typeof AddressAutocomplete>

export const StylesDisabled = Template.bind({})
StylesDisabled.args = {
  ...Default.args,
  disableStyles: true
}

export const WithCountryCode = Template.bind({})
WithCountryCode.args = {
  ...Default.args,
  countrycodes: ['GB']
}
`,locationsMap:{default:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"styles-disabled":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"with-country-code":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"AddressAutocomplete",component:f,argTypes:{countrycodes:{description:"Limit search results to one or more countries. <countrycode> must be the ISO 3166-1alpha2 code, e.g. gb for the United Kingdom, de for Germany."}}},_=a(e=>n.jsx(f,{...e}),"Template"),g=_.bind({});g.args={label:"Enter your address",placeholder:"e.g. 10 downing street",style:{width:500}};const W=_.bind({});W.args={...g.args,disableStyles:!0};const G=_.bind({});G.args={...g.args,countrycodes:["GB"]};const Q=["Default","StylesDisabled","WithCountryCode"];export{g as Default,W as StylesDisabled,G as WithCountryCode,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=AddressAutocomplete.stories-15658595.js.map
