"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[854],{3854:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i,a=n(885),l=n(2791),r=n(9434);!function(e){e.id="id",e.title="Title",e.content="Content",e.created_at="Create Date",e.updated_at="Update Date"}(i||(i={}));var s=n(9798),o=n(4942),c=n(1413),d=n(7345),u=n(9161),h=n(184),m={title:"",content:""},v=function(e){var t=(0,l.useState)((0,c.Z)((0,c.Z)({},m),{},{image:""})),n=(0,a.Z)(t,2),i=n[0],v=n[1],g=(0,l.useState)(m),x=(0,a.Z)(g,2),f=x[0],j=x[1],p=(0,l.useState)(""),b=(0,a.Z)(p,2),w=b[0],N=b[1],Z=e.show,y=e.onHide,C=e.blogParam,k=C&&(null===C||void 0===C?void 0:C.id),S=(0,r.I0)();(0,l.useEffect)((function(){if(k&&C){var e=C.title,t=C.content,n=C.image;v({title:e,content:t,image:(null===n||void 0===n?void 0:n.url)||""}),N((null===n||void 0===n?void 0:n.url)||"")}}),[C,k]);var z=function(){Object.values(f).forEach((function(e){!(e.length>0)}));var e=Object.assign({},{title:i.title,content:i.content});return Object.values(e).every((function(e){return e.length>0}))},L=function(e){e.preventDefault();var t=e.target,n=t.name,i=t.value;switch(n){case"title":j((function(e){return(0,c.Z)((0,c.Z)({},e),{},{title:i.length<1?"Title is required":""})}));break;case"content":j((function(e){return(0,c.Z)((0,c.Z)({},e),{},{content:i.length<1?"Content is required":""})}))}v((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,o.Z)({},n,i))}))},B=function(){v((0,c.Z)((0,c.Z)({},m),{},{image:""})),j(m),N(""),y()};return(0,h.jsxs)(u.Z,{show:Z,onHide:B,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,animation:!1,children:[(0,h.jsx)(u.Z.Header,{closeButton:!0,children:(0,h.jsx)(u.Z.Title,{id:"contained-modal-title-vcenter",children:(k?"Edit":"Create")+" Blog"})}),(0,h.jsx)(u.Z.Body,{children:(0,h.jsxs)("form",{className:"container",noValidate:!0,children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"title",children:"Title"}),(0,h.jsx)("input",{type:"text",id:"title",placeholder:"Title",className:f.title.length>0?"is-invalid form-control":"form-control",name:"title",value:i.title,onChange:L}),f.title.length>0&&(0,h.jsx)("span",{className:"invalid-feedback",children:f.title})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"content",children:"Content"}),(0,h.jsx)("textarea",{id:"content",placeholder:"Content",className:f.content.length>0?"is-invalid form-control":"form-control",name:"content",value:i.content,onChange:L}),f.content.length>0&&(0,h.jsx)("span",{className:"invalid-feedback",children:f.content})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"image",children:"Image"}),(0,h.jsxs)("div",{children:[w&&w.length>0?(0,h.jsx)("img",{className:"img-thumbnail mb-2",height:"64",width:"64",style:{objectFit:"cover"},src:w,alt:i.image.name}):(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-image",viewBox:"0 0 16 16",style:{height:"64px",width:"64px"},children:[(0,h.jsx)("path",{d:"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}),(0,h.jsx)("path",{d:"M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"})]}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];if(t&&null!==t&&void 0!==t&&t.name){var n=window.URL.createObjectURL(t);v((function(e){return(0,c.Z)((0,c.Z)({},e),{},{image:t})})),N(n)}else N(""),v((function(e){return(0,c.Z)((0,c.Z)({},e),{},{image:""})}))}})]})]})]})}),(0,h.jsxs)(u.Z.Footer,{children:[(0,h.jsx)(d.Z,{variant:"secondary",onClick:B,children:"Close"}),(0,h.jsx)(d.Z,{variant:"primary",onClick:function(e){z()?(k&&null!==C&&void 0!==C&&C.id?S((0,s.zZ)(C.id,i)):S((0,s.Vh)(i)),B()):(j({title:i.title.length<1?"Title is required":"",content:i.content.length<1?"Content is required":""}),console.log("Form is invalid!"))},children:"Save Changes"})]})]})},g=n(470),x=function(e){var t,n=(0,g.s0)(),i=(0,r.I0)(),o=(0,l.useState)(!1),c=(0,a.Z)(o,2),d=c[0],u=c[1],m=(0,l.useState)(null),x=(0,a.Z)(m,2),f=x[0],j=x[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("ul",{className:"list-unstyled",children:null===e||void 0===e||null===(t=e.blogs)||void 0===t?void 0:t.map((function(e,t){return(0,h.jsxs)("li",{className:"media justify-content-between"+(t%2!==0?" my-4":""),children:[(0,h.jsxs)("div",{className:"d-flex w-100",onClick:function(){return t=e,i((0,s.dD)(t.id)),void n("/blogs/".concat(t.id));var t},children:[(0,h.jsx)("img",{src:e.image.url,className:"mr-3",alt:"...",height:64,width:64,style:{objectFit:"cover"}}),(0,h.jsxs)("div",{className:"media-body",children:[(0,h.jsx)("h5",{children:e.title}),e.content]})]}),(0,h.jsx)("svg",{onClick:function(){return j(e),void u(!0)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pen",viewBox:"0 0 16 16",children:(0,h.jsx)("path",{d:"m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"})})]},e.id)}))}),(0,h.jsx)(v,{show:d,onHide:function(){u(!1),j(null)},blogParam:f})]})},f=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.blogs})),n=t.pagination,i=t.search,o=t.sort_by,c=n.next,d=void 0===c?null:c,u=n.page,m=void 0===u?1:u,v=n.prev,g=void 0===v?null:v,x=n.total,f=void 0===x?0:x,j=(0,l.useState)([1]),p=(0,a.Z)(j,2),b=p[0],w=p[1];(0,l.useEffect)((function(){if(f&&f>0){for(var e=new Array,t=1;t<=f;t++)e.push(t);w(e)}}),[f]);var N=function(t){var n={page:1,search:i,sort_by:o};n.page="next"===t?d:"prev"===t?g:t,e((0,s.og)(n))};return(0,h.jsx)("div",{children:(0,h.jsx)("nav",{className:"overflow-auto mt-3","aria-label":"Page navigation example",children:(0,h.jsxs)("ul",{className:"pagination pagination-sm justify-content-center",children:[(0,h.jsx)("li",{className:"page-item ".concat(g&&null!==g?"":"disabled"),children:(0,h.jsx)("a",{className:"page-link",tabIndex:g&&null!==g?0:-1,"aria-disabled":g&&null!==g?"false":"true",onClick:function(){return N("prev")},children:"Previous"})}),b.map((function(e,t){return(0,h.jsx)("li",{className:"page-item".concat(m===e?" active":""),children:(0,h.jsx)("a",{className:"page-link",onClick:function(){return N(e)},children:e})},t.toString())})),(0,h.jsx)("li",{className:"page-item ".concat(d&&null!==d?"":"disabled"),children:(0,h.jsx)("a",{className:"page-link",onClick:function(){return N("next")},children:"Next"})})]})})})},j=n(9239);var p=function(){var e=(0,l.useState)(""),t=(0,a.Z)(e,2),n=t[0],o=t[1],c=(0,l.useState)("created_at"),d=(0,a.Z)(c,2),u=d[0],m=d[1],g=(0,l.useState)(!1),p=(0,a.Z)(g,2),b=p[0],w=p[1],N=(0,l.useState)(window.innerWidth),Z=(0,a.Z)(N,2),y=Z[0],C=Z[1],k=(0,r.I0)(),S=(0,r.v9)((function(e){return e.blogs})),z=S.pending,L=S.blogs,B=S.pagination;(0,l.useEffect)((function(){F(n,u);var e=function(){var e=window.innerWidth;C(e)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n,u]);var F=function(e,t){var n={page:null!==B&&void 0!==B&&B.page?B.page:1,search:e,sort_by:t};k((0,s.og)(n))};return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"row col-12",children:[(0,h.jsxs)("form",{className:"input-group col-md-6 col-12 my-2",style:{maxHeight:"38px"},onSubmit:function(e){e.preventDefault(),F(n,u)},children:[(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Search title or content",value:n,onChange:function(e){return o(e.target.value)}}),(0,h.jsx)("div",{className:"input-group-append",children:(0,h.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:(0,h.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})})]}),(0,h.jsxs)("div",{className:"d-flex align-items-center col-md-4 col-12",children:[(0,h.jsx)("span",{className:"text-nowrap mr-2",children:"Sort by: "}),(0,h.jsx)("select",{className:"form-control",value:u,onChange:function(e){var t=e.target.value;m(t)},children:Object.entries(i).map((function(e,t){var n=(0,a.Z)(e,2),i=n[0],l=n[1];return(0,h.jsx)("option",{value:i,children:l},i)}))})]}),(0,h.jsx)("button",{className:"btn btn-primary btn-add my-2",type:"button",onClick:function(){return w(!0)},children:y<=767?(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"white",className:"bi bi-plus",viewBox:"0 0 16 16",children:(0,h.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})}):"Create Blog"}),(0,h.jsx)(v,{show:b,onHide:function(){return w(!1)},blogParam:void 0})]}),(0,h.jsx)("div",{className:"media-list my-3",children:z?(0,h.jsx)(j.J,{}):(0,h.jsx)(x,{blogs:L})}),!z&&(0,h.jsx)(f,{})]})}}}]);
//# sourceMappingURL=854.592033dc.chunk.js.map