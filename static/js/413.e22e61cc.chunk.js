"use strict";(self.webpackChunkreact_pet_apps=self.webpackChunkreact_pet_apps||[]).push([[413],{9413:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,a,i,s,o,u,c=t(9439),d=t(1087),l=t(1344),p=t(168),f=t(4934),x=f.Z.ul(r||(r=(0,p.Z)(["\n  padding: 0px;\n"]))),h=f.Z.li(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n  font-weight: bold;\n"]))),m=f.Z.p(i||(i=(0,p.Z)(["\n  margin-right: 15px;\n"]))),g=t(9434),j=t(9119),v=t(863),b=t(6766),Z=t(3329),C=function(n){var e=n.filter,t=(0,g.I0)(),r=(0,b.A)(),a=r.contacts,i=r.isLoading,s=a.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,Z.jsxs)(Z.Fragment,{children:[i?(0,Z.jsx)(v.T,{}):null,(0,Z.jsx)(x,{children:Array.isArray(s)&&s.length>0&&s.map((function(n){var e=n.name,r=n.number,a=n.id;return(0,Z.jsxs)(h,{children:[(0,Z.jsxs)(m,{children:[e,": ",(0,Z.jsx)("span",{children:r})]}),(0,Z.jsx)(l.z,{text:"Delete",onClick:function(n){return t((0,j.GK)(n.target.dataset.id))},id:a})]},a)}))})]})},y=t(2791),A=f.Z.form(s||(s=(0,p.Z)(["\n  padding: 10px 10px 10px 0;\n"]))),w=f.Z.input(o||(o=(0,p.Z)(["\n  padding: 5px;\n  margin-right: 15px;\n  border-radius: 5px;\n  border: 1px solid blue;\n"]))),z=f.Z.input(u||(u=(0,p.Z)(["\n  padding: 5px;\n  margin-right: 15px;\n  border-radius: 5px;\n  border: 1px solid blue;\n"]))),k=t(8174),S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},L=function(){var n=(0,y.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,y.useState)(""),i=(0,c.Z)(a,2),s=i[0],o=i[1],u=(0,b.A)().contacts,d=(0,g.I0)();return(0,Z.jsxs)(A,{onSubmit:function(n){n.preventDefault();var e=n.target,t=e.name.value,r=e.number.value;if(u.find((function(n){return n.name.toLowerCase()===t.toLowerCase()})))k.Am.error("Contact ".concat(t," is already exists"));else{var a={name:t,number:r,id:S()};d((0,j.uK)(a)),k.Am.info("Contact ".concat(t," added")),e.reset()}},children:[(0,Z.jsx)(w,{type:"text",name:"name",value:t,onChange:function(n){return r(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,Z.jsx)(z,{type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:function(n){return o(n.target.value)},required:!0}),(0,Z.jsx)(l.z,{type:"submit",text:"Save contact"})]})},_=t(3559),F=function(n){var e=n.title;return(0,Z.jsx)("h2",{children:e})},I=t(5610),N=function(){var n=(0,d.lr)(),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=t.get("filter")||"",i=(0,g.I0)();(0,y.useEffect)((function(){i((0,j.yF)())}),[i]);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(_.$,{title:"Phonebook",children:[(0,Z.jsx)(L,{}),(0,Z.jsx)(F,{title:"Contacts"}),(0,Z.jsx)(I.b,{onChange:function(n){r(""!==n?{filter:n}:{})},filter:a}),(0,Z.jsx)(C,{filter:a})]})})}},863:function(n,e,t){t.d(e,{T:function(){return a}});t(2791);var r=t(3329),a=function(){return(0,r.jsx)("div",{className:"spinner-container",children:(0,r.jsx)("div",{className:"loading-spinner"})})}},3559:function(n,e,t){t.d(e,{$:function(){return o}});var r,a=t(168),i=t(4934).Z.section(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: ",";\n  align-items: flex-start;\n  padding: 15px;\n"])),(function(n){return n.direction||"column"})),s=t(3329),o=function(n){var e=n.children,t=n.title,r=n.direction;return(0,s.jsxs)(i,{direction:r,children:[t&&(0,s.jsx)("h2",{children:t}),e]})}}}]);
//# sourceMappingURL=413.e22e61cc.chunk.js.map