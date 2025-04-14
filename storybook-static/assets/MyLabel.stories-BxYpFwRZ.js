import{j as x}from"./jsx-runtime-D_zvdyIk.js";const y=({label:l="Hola mundo",size:f="normal",allCaps:b=!1,color:g,fontColor:s})=>x.jsx("span",{style:{color:s||""},className:`${f} ${g}`,children:b?l.toLocaleUpperCase():l});y.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!1,tsType:{name:"string"},description:"Text to display",defaultValue:{value:'"Hola mundo"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'h1'|'h2' |'h3' |'normal'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'normal'"}]},description:"",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary'|'text-secondary'|'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:""},fontColor:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"myComponents/MyLabel",component:y,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"All caps label",allCaps:!0}},r={args:{label:"Secondary label",fontColor:"red"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All caps label',
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    fontColor: "red"
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const h=["Basic","AllCaps","Secondary"];export{a as AllCaps,e as Basic,r as Secondary,h as __namedExportsOrder,C as default};
