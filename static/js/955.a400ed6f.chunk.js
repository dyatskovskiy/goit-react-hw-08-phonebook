"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[955],{1955:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,a,o,s,c,u=t(5705),m=t(168),l=t(6487),d=(0,l.ZP)(u.l0)(r||(r=(0,m.Z)(["\n  max-width: 200px;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n"]))),x=(0,l.ZP)(u.gN)(i||(i=(0,m.Z)(["\n  &:focus-visible {\n    box-shadow: 0 0 0 3px lightskyblue;\n  }\n"]))),f=(0,l.ZP)(u.Bc)(a||(a=(0,m.Z)(["\n  color: #f96722;\n  font-size: 14px;\n"]))),h=t(6727),p=t(9434),j=t(3634),b=t(6916),Z=function(n){return n.contacts.items},v=(0,b.P1)([Z,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),g=t(4294),w=t(3329),y=h.Ry().shape({name:h.Z_().min(3,"Too Short!").max(50,"Too Long!").required("Required field"),number:h.Z_().matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,'Please, enter only digits in format of "123-12-12"').required("Required field")}),C=function(){var n=(0,p.I0)(),e=(0,p.v9)(Z);return(0,w.jsx)(u.J9,{initialValues:{name:"",number:""},validationSchema:y,onSubmit:function(t,r){if(e.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(t.name," is already in contacts!"));n((0,j.uK)({name:t.name,number:t.number})),r.resetForm()},children:(0,w.jsxs)(d,{children:[(0,w.jsx)("label",{htmlFor:"name",children:"Name"}),(0,w.jsx)(x,{id:"name",name:"name"}),(0,w.jsx)(f,{name:"name",component:"span"}),(0,w.jsx)("label",{htmlFor:"number",children:"Number"}),(0,w.jsx)(x,{id:"number",name:"number",type:"tel"}),(0,w.jsx)(f,{name:"number",component:"span"}),(0,w.jsx)(g.Z,{variant:"contained",type:"submit",children:"Add contact"})]})})},P=t(493),k=t(7247),F=t(3400),_=t(6930),L=t(4852),q=(0,l.ZP)(L.ZP)(o||(o=(0,m.Z)(["\n  justify-content: space-between !important;\n  max-width: 400px !important;\n"]))),I=function(n){var e=n.id,t=n.name,r=n.number,i=(0,p.I0)();return(0,w.jsxs)(q,{divider:!0,children:[(0,w.jsxs)("p",{children:[t,": ",r]}),(0,w.jsx)(_.Z,{title:"Delete",children:(0,w.jsx)(F.Z,{onClick:function(){return i((0,j.GK)(e))},children:(0,w.jsx)(k.Z,{})})})]})},N=function(){var n=(0,p.v9)(v);return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(P.Z,{children:n.map((function(n){return(0,w.jsx)(I,{id:n.id,name:n.name,number:n.number},n.id)}))})})},R=t(6895),S=function(){var n=(0,p.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("p",{children:"Find contacts by name"}),(0,w.jsx)("input",{type:"text",onChange:function(e){return n((0,R.a)(e.target.value))}})]})},T=t(2791),z=l.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  align-items: start;\n  gap: 24px;\n  margin-bottom: 30px;\n"]))),K=l.ZP.p(c||(c=(0,m.Z)(["\n  font-size: 24px;\n  margin-bottom: 12px;\n"])));function A(){var n=(0,p.I0)(),e=(0,p.v9)(Z);return(0,T.useEffect)((function(){n((0,j.yF)())}),[n]),(0,w.jsxs)("div",{children:[(0,w.jsxs)(z,{children:[(0,w.jsx)(C,{}),e.length>0&&(0,w.jsx)(S,{})]}),(0,w.jsx)(K,{children:"Contacts:"}),e.length>0?(0,w.jsx)(N,{}):(0,w.jsx)("p",{children:"There are no contacts"})]})}}}]);
//# sourceMappingURL=955.a400ed6f.chunk.js.map