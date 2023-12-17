"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[730],{4730:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,i,a,o,s,m,c=t(5705),l=t(168),u=t(6487),d=(0,u.ZP)(c.l0)(r||(r=(0,l.Z)(["\n  max-width: 200px;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n"]))),x=(0,u.ZP)(c.gN)(i||(i=(0,l.Z)(["\n  &:focus-visible {\n    box-shadow: 0 0 0 3px lightskyblue;\n  }\n"]))),h=(0,u.ZP)(c.Bc)(a||(a=(0,l.Z)(["\n  color: #f96722;\n  font-size: 14px;\n"]))),p=t(6727),f=t(9434),j=t(3634),b=t(1775),Z=t(4294),v=t(3329),g=p.Ry().shape({name:p.Z_().min(3,"Too Short!").max(50,"Too Long!").required("Required field"),number:p.Z_().matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,'Please, enter only digits in format of "123-12-12"').required("Required field")}),y=function(){var n=(0,f.I0)(),e=(0,f.v9)(b.K2);return(0,v.jsx)(c.J9,{initialValues:{name:"",number:""},validationSchema:g,onSubmit:function(t,r){if(e.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(t.name," is already in contacts!"));n((0,j.uK)({name:t.name,number:t.number})),r.resetForm()},children:(0,v.jsxs)(d,{children:[(0,v.jsx)("label",{htmlFor:"name",children:"Name"}),(0,v.jsx)(x,{id:"name",name:"name"}),(0,v.jsx)(h,{name:"name",component:"span"}),(0,v.jsx)("label",{htmlFor:"number",children:"Number"}),(0,v.jsx)(x,{id:"number",name:"number",type:"tel"}),(0,v.jsx)(h,{name:"number",component:"span"}),(0,v.jsx)(Z.Z,{variant:"contained",type:"submit",children:"Add contact"})]})})},w=t(493),k=t(7247),P=t(3400),C=t(6930),F=t(4852),_=(0,u.ZP)(F.ZP)(o||(o=(0,l.Z)(["\n  justify-content: space-between !important;\n  max-width: 400px !important;\n"]))),q=function(n){var e=n.id,t=n.name,r=n.number,i=(0,f.I0)();return(0,v.jsxs)(_,{divider:!0,children:[(0,v.jsxs)("p",{children:[t,": ",r]}),(0,v.jsx)(C.Z,{title:"Delete",children:(0,v.jsx)(P.Z,{onClick:function(){return i((0,j.GK)(e))},children:(0,v.jsx)(k.Z,{})})})]})},I=function(){var n=(0,f.v9)(b.Jr);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(w.Z,{children:n.map((function(n){return(0,v.jsx)(q,{id:n.id,name:n.name,number:n.number},n.id)}))})})},K=t(6895),S=function(){var n=(0,f.I0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:"Find contacts by name"}),(0,v.jsx)("input",{type:"text",onChange:function(e){return n((0,K.a)(e.target.value))}})]})},L=t(2791),N=u.ZP.div(s||(s=(0,l.Z)(["\n  display: flex;\n  align-items: start;\n  gap: 24px;\n  margin-bottom: 30px;\n"]))),R=u.ZP.p(m||(m=(0,l.Z)(["\n  font-size: 24px;\n  margin-bottom: 12px;\n"]))),T=t(5680);function z(){var n=(0,f.I0)(),e=(0,f.v9)(b.K2),t=(0,f.v9)(b.Vc),r=(0,f.v9)(b.by);return(0,L.useEffect)((function(){n((0,j.yF)())}),[n]),(0,v.jsxs)("div",{children:[(0,v.jsxs)(N,{children:[(0,v.jsx)(y,{}),t&&(0,v.jsx)(T.Z,{color:"primary",variant:"indeterminate"}),null!==r&&(0,v.jsx)("p",{children:"Something went wrong "}),e.length>0&&(0,v.jsx)(S,{})]}),(0,v.jsx)(R,{children:"Contacts:"}),e.length>0?(0,v.jsx)(I,{}):(0,v.jsx)("p",{children:"There are no contacts"})]})}}}]);
//# sourceMappingURL=730.4bce08fc.chunk.js.map