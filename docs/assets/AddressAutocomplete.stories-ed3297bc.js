var j=Object.defineProperty;var a=(e,t)=>j(e,"name",{value:t,configurable:!0});import{r as i,R as L}from"./index-fb97c91d.js";import"./iframe-be235edb.js";var n={},T={get exports(){return n},set exports(e){n=e}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=i,z=Symbol.for("react.element"),I=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,O=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,s){var o,r={},d=null,c=null;s!==void 0&&(d=""+s),t.key!==void 0&&(d=""+t.key),t.ref!==void 0&&(c=t.ref);for(o in t)M.call(t,o)&&!k.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:z,type:e,key:d,ref:c,props:r,_owner:O.current}}a(D,"q");h.Fragment=I;h.jsx=D;h.jsxs=D;(function(e){e.exports=h})(T);function N(e,t=500){const[s,o]=L.useState(e);return L.useEffect(()=>{const r=setTimeout(()=>{o(e)},t);return()=>{clearTimeout(r)}},[e,t]),s}a(N,"useDebounce");const $="https://nominatim.openstreetmap.org/search",V=a(({countrycodes:e=[]})=>{const[t,s]=i.useState("idle"),[o,r]=i.useState([]);return{status:t,data:o,setAddress:a(async u=>{if(u.length>2){const b={q:u,format:"json",addressdetails:"1",limit:"10",countrycodes:e.join(",")};s("fetching");try{const y=await(await fetch(`${$}?${new URLSearchParams(b).toString()}`)).json();r(y),s("fetched")}catch(m){console.error(m)}}else r([]),s("fetched")},"setAddress"),clear:a(()=>r([]),"clear")}},"useFetch"),q=V,F=`.rottitime-address.enable-styles{--color1: #000;--color2: #888;position:relative;display:inline-block}.rottitime-address.enable-styles .input-wrapper{position:relative}.rottitime-address.enable-styles .input-wrapper input{padding:10px 14px;font-size:1.1em}.rottitime-address.enable-styles label{display:block;margin-bottom:5px}.rottitime-address.enable-styles ul{list-style:none;margin:0;border:1px solid var(--color1);padding:5px;position:absolute;overflow-y:scroll;overflow-x:overlay;max-height:230px;width:100%;background-color:#fff}.rottitime-address.enable-styles li{padding:10px 0;color:var(--color2);cursor:pointer;transition:all .5s;font-size:.9em;text-align:left}.rottitime-address.enable-styles li:hover{color:var(--color1)}.rottitime-address svg{animation:rottitime-spinner 1s linear infinite;opacity:.5;position:absolute;right:5px;top:0;height:100%}@keyframes rottitime-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`,P=a((e,t)=>n.jsx("svg",{height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",ref:t,...e,children:n.jsx("path",{d:"M13 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 2 0zm-1 19a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm-8-8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm19-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-4.982-9.382a1 1 0 0 0-1.367.364l-1 1.731a1 1 0 0 0 .365 1.366.987.987 0 0 0 .5.135 1 1 0 0 0 .866-.5l1-1.731a1 1 0 0 0-.364-1.365zM7.987 18.921a1 1 0 0 0-1.366.364l-1 1.731a1 1 0 0 0 .364 1.366.989.989 0 0 0 .5.135 1 1 0 0 0 .867-.5l1-1.731a1 1 0 0 0-.365-1.365zm-3.272-12.3-1.731-1a1 1 0 0 0-1 1.731l1.731 1a1 1 0 0 0 1-1.731zm17.3 10.03-1.731-1a1 1 0 0 0-1 1.731l1.731 1a.987.987 0 0 0 .5.135 1 1 0 0 0 .5-1.866zM7.349 1.982a1 1 0 0 0-1.731 1l1 1.731a1 1 0 0 0 .866.5.987.987 0 0 0 .5-.135 1 1 0 0 0 .365-1.366zm10.03 17.3a1 1 0 0 0-1.731 1l1 1.731a1 1 0 0 0 1.731-1zm2.408-10.8a1 1 0 0 0 .5-.134l1.731-1a1 1 0 0 0-1-1.731l-1.731 1a1 1 0 0 0 .5 1.865zM3.713 15.648l-1.731 1a1 1 0 0 0 .5 1.866.987.987 0 0 0 .5-.135l1.731-1a1 1 0 0 0-1-1.731z"})}),"SvgComponent"),U=i.forwardRef(P),W=U;try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{}}}catch{}function H(){const e=document.createElement("style");e.innerHTML=F,document.head.appendChild(e)}a(H,"addStyles");function f({countrycodes:e,label:t,onSelected:s,onChange:o,disableStyles:r,...d}){const{data:c,setAddress:u,clear:b,status:m}=q({countrycodes:e}),y=i.useId(),x=`input_${y}`,_=`list_${y}`,[p,v]=i.useState(""),E=N(p,600);i.useEffect(()=>{u(p)},[E]),i.useEffect(()=>{H()},[]);const S=c.filter(l=>l.display_name!==p),w=!!p&&!!S.length;return n.jsxs("div",{className:`rottitime-address ${r?"diable-styles":"enable-styles"}`,children:[!!t&&n.jsx("label",{htmlFor:x,children:t}),n.jsxs("div",{className:"input-wrapper",children:[n.jsx("input",{"aria-label":t,"aria-owns":_,"aria-autocomplete":"list",autoComplete:"off",type:"text",id:x,value:p,onChange:l=>{v(l.target.value),typeof o=="function"&&o(l)},...d}),m==="fetching"&&n.jsx(W,{})]}),n.jsx("div",{role:"listbox","aria-live":"polite",id:_,"aria-expanded":w,children:w&&n.jsx("ul",{children:S.map((l,C)=>n.jsx("li",{onClick:()=>{const B=c[C];v(B.display_name),b(),typeof s=="function"&&s(B)},children:l==null?void 0:l.display_name},C))})})]})}a(f,"AddressAutocomplete");try{f.displayName="AddressAutocomplete",f.__docgenInfo={description:"",displayName:"AddressAutocomplete",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},disableStyles:{defaultValue:null,description:"",name:"disableStyles",required:!1,type:{name:"boolean"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:"((data: MapData) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(((event: ChangeEvent<HTMLInputElement>) => void) & ChangeEventHandler<HTMLInputElement>)"}},countrycodes:{defaultValue:null,description:"",name:"countrycodes",required:!1,type:{name:'("AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | ... 223 more ... | "ZW")[]'}}}}}catch{}const Y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{default:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"styles-disabled":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"with-country-code":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"AddressAutocomplete",component:f,argTypes:{countrycodes:{description:"Limit search results to one or more countries. <countrycode> must be the ISO 3166-1alpha2 code, e.g. gb for the United Kingdom, de for Germany."}}},g=a(e=>n.jsx(f,{...e}),"Template"),A=g.bind({});A.args={label:"Enter your address",placeholder:"e.g. 10 downing street",style:{width:500}};const G=g.bind({});G.args={...A.args,disableStyles:!0};const Z=g.bind({});Z.args={...A.args,countrycodes:["GB"]};const X=["Default","StylesDisabled","WithCountryCode"];export{A as Default,G as StylesDisabled,Z as WithCountryCode,X as __namedExportsOrder,Y as default};
//# sourceMappingURL=AddressAutocomplete.stories-ed3297bc.js.map
