import{j as e,c as s,C as a,u as t,I as i,B as l,e as r,L as n,S as d,M as c,N as o}from"./index-D3F6h_Dx.js";import{a7 as m,c as x,a8 as u,k as h,a9 as g,aa as p,D as j,H as y,J as v,ab as b,ac as f,ad as N,d as w,l as S,I as C,a3 as k,a4 as M,ae as A,af as L,U as T,ag as F}from"./vendor-ui-BUyqawzT.js";import{L as U,u as q,d as D,r as E,N as R,e as P,f as K}from"./vendor-react-CtOH9B0J.js";import{C as I,a as Q,L as $,B as O,p as z,b as J,c as V,d as B,P as G,e as Z,i as H,f as W}from"./vendor-charts-DMZdl2LH.js";import{u as X,a as Y,b as _}from"./vendor-query-BtzKWVaK.js";function ee({user:s,onLogout:a}){return e.jsx("nav",{className:"bg-white border-b border-gray-200 fixed w-full z-30",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsx("div",{className:"flex items-center",children:e.jsx("span",{className:"text-xl font-bold text-red-600",children:"Admin Portal"})}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{className:"text-gray-500 hover:text-gray-700",children:e.jsx(m,{className:"h-6 w-6"})}),e.jsxs("div",{className:"relative group",children:[e.jsxs("button",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-red-500 flex items-center justify-center",children:e.jsx(x,{className:"h-5 w-5 text-white"})}),e.jsx("span",{className:"text-gray-700",children:null==s?void 0:s.name})]}),e.jsx("div",{className:"absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",children:e.jsx("button",{onClick:a,className:"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100",children:"Sign Out"})})]})]})]})})})}function se({menuItems:s,currentPath:a}){return e.jsx("aside",{className:"w-64 bg-white h-[calc(100vh-4rem)] border-r border-gray-200 fixed",children:e.jsx("nav",{className:"mt-5 px-2",children:s.map((s=>{const t=a===s.href;return e.jsxs(U,{to:s.href,className:"group flex items-center px-2 py-2 text-base font-medium rounded-md mb-1\n                "+(t?"bg-red-50 text-red-600":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"),children:[e.jsx(s.icon,{className:"mr-4 h-6 w-6 "+(t?"text-red-600":"text-gray-400")}),s.title]},s.title)}))})})}const ae=[{title:"Dashboard",href:"/admin",icon:u},{title:"Team Management",href:"/admin/team",icon:h},{title:"User Management",href:"/admin/users",icon:g},{title:"System Logs",href:"/admin/logs",icon:p},{title:"Database",href:"/admin/database",icon:j},{title:"Settings",href:"/admin/settings",icon:y}];function te({children:a}){const{user:t,logout:i}=s(),l=q(),r=D();return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsx(ee,{user:t,onLogout:async()=>{try{await i(),l("/")}catch(e){console.error("Logout failed:",e)}}}),e.jsxs("div",{className:"flex pt-16",children:[e.jsx(se,{menuItems:ae,currentPath:r.pathname}),e.jsx("main",{className:"flex-1 ml-64 p-8",children:a})]})]})}function ie(){return e.jsx(B,{data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Resource Usage",data:[65,59,80,81,56,55],backgroundColor:"rgba(59, 130, 246, 0.8)",borderRadius:4}]},options:{responsive:!0,plugins:{legend:{display:!1},tooltip:{mode:"index",intersect:!1}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.05)"}},x:{grid:{display:!1}}}}})}function le(){return e.jsx(W,{data:{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"User Growth",data:[30,45,57,75,85,95],fill:!0,borderColor:"rgb(59, 130, 246)",backgroundColor:"rgba(59, 130, 246, 0.1)",tension:.4}]},options:{responsive:!0,plugins:{legend:{display:!1},tooltip:{mode:"index",intersect:!1}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.05)"}},x:{grid:{display:!1}}}}})}function re(){return e.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"System Metrics"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500 mb-2",children:"User Growth"}),e.jsx(le,{})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-500 mb-2",children:"Resource Usage"}),e.jsx(ie,{})]})]})]})}function ne(){const s=[{id:1,action:"User Created",details:"New professional account registered",time:"2 hours ago",icon:h},{id:2,action:"Settings Updated",details:"System security policy modified",time:"4 hours ago",icon:y},{id:3,action:"Document Approved",details:"Tax return document approved",time:"5 hours ago",icon:v}];return e.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Recent Activity"}),e.jsx("div",{className:"space-y-4",children:s.map((s=>e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center",children:e.jsx(s.icon,{className:"h-4 w-4 text-blue-600"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:s.action}),e.jsx("p",{className:"text-sm text-gray-500",children:s.details}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.time})]})]},s.id)))})]})}function de(){const s=[{name:"API Server",status:"Operational",uptime:"99.9%",icon:b,health:"good"},{name:"Database",status:"Operational",uptime:"99.8%",icon:j,health:"good"},{name:"Storage",status:"Operational",uptime:"99.9%",icon:f,health:"good"},{name:"CDN",status:"Operational",uptime:"99.9%",icon:N,health:"good"}];return e.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"System Status"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:s.map((s=>e.jsx("div",{className:"bg-gray-50 rounded-lg p-4",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(s.icon,{className:"h-6 w-6 text-gray-400"}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900",children:s.name}),e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx("div",{className:"h-2 w-2 rounded-full "+("good"===s.health?"bg-green-500":"bg-red-500")}),e.jsx("span",{className:"ml-2 text-sm text-gray-500",children:s.status})]}),e.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:["Uptime: ",s.uptime]})]})]})},s.name)))})]})}function ce(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Dashboard"})}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",children:[e.jsx(a,{icon:h,title:"Total Users",value:"1,234",description:"24 new this week"}),e.jsx(a,{icon:v,title:"Total Documents",value:"5,678",description:"142 pending review"}),e.jsx(a,{icon:w,title:"Average Response",value:"2.5h",description:"15% faster than last week"}),e.jsx(a,{icon:S,title:"System Health",value:"98.5%",description:"All systems operational"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(re,{}),e.jsx(ne,{})]}),e.jsx(de,{})]})}function oe({initialData:s,onSubmit:a,onCancel:r}){const[n,d]=E.useState(s||{name:"",role:"",description:"",image:"",email:"",linkedin:"",website:""}),{addNotification:c}=t();return e.jsxs("form",{onSubmit:e=>{e.preventDefault(),n.name&&n.role&&n.description?a(n):c("Please fill in all required fields","error")},className:"space-y-6",children:[e.jsx(i,{label:"Full Name",value:n.name,onChange:e=>d({...n,name:e.target.value}),required:!0}),e.jsx(i,{label:"Role/Title",value:n.role,onChange:e=>d({...n,role:e.target.value}),required:!0}),e.jsx(i,{label:"Description",value:n.description,onChange:e=>d({...n,description:e.target.value}),multiline:!0,rows:4,required:!0}),e.jsx(i,{label:"Profile Image URL",value:n.image,onChange:e=>d({...n,image:e.target.value}),placeholder:"https://example.com/image.jpg"}),e.jsx(i,{label:"Email",type:"email",value:n.email||"",onChange:e=>d({...n,email:e.target.value}),placeholder:"john@example.com"}),e.jsx(i,{label:"LinkedIn Profile",value:n.linkedin||"",onChange:e=>d({...n,linkedin:e.target.value}),placeholder:"https://linkedin.com/in/username"}),e.jsx(i,{label:"Website",value:n.website||"",onChange:e=>d({...n,website:e.target.value}),placeholder:"https://example.com"}),e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx(l,{type:"button",variant:"outline",onClick:r,children:"Cancel"}),e.jsxs(l,{type:"submit",variant:"primary",children:[s?"Update":"Add"," Team Member"]})]})]})}I.register(Q,$,O,z,J,V),I.register(Q,$,G,Z,z,J,V,H);const me={getTeamMembers:()=>r.get("/team"),getTeamMemberById:e=>r.get(`/team/${e}`),addTeamMember:e=>r.post("/team",e),updateTeamMember:({id:e,...s})=>r.put(`/team/${e}`,s),deleteTeamMember:e=>r.delete(`/team/${e}`)};function xe(){const[s,a]=E.useState(!1),[i,r]=E.useState(null),[o,m]=E.useState(""),[x,u]=E.useState("all"),{teamMembers:h,isLoading:g,addTeamMember:p,updateTeamMember:j,deleteTeamMember:y}=function(){const e=X(),{addNotification:s}=t(),{data:a,isLoading:i}=Y({queryKey:["team-members"],queryFn:me.getTeamMembers}),l=_({mutationFn:me.addTeamMember,onSuccess:()=>{e.invalidateQueries({queryKey:["team-members"]}),s("Team member added successfully","success")},onError:()=>{s("Failed to add team member","error")}}),r=_({mutationFn:me.updateTeamMember,onSuccess:()=>{e.invalidateQueries({queryKey:["team-members"]}),s("Team member updated successfully","success")},onError:()=>{s("Failed to update team member","error")}}),n=_({mutationFn:me.deleteTeamMember,onSuccess:()=>{e.invalidateQueries({queryKey:["team-members"]}),s("Team member removed successfully","success")},onError:()=>{s("Failed to remove team member","error")}});return{teamMembers:a,isLoading:i,addTeamMember:l.mutate,updateTeamMember:r.mutate,deleteTeamMember:n.mutate}}(),v=null==h?void 0:h.filter((e=>{var s;const a=e.name.toLowerCase().includes(o.toLowerCase())||(null==(s=e.email)?void 0:s.toLowerCase().includes(o.toLowerCase())),t="all"===x||e.role===x;return a&&t}));return g?e.jsx(n,{}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Team Management"}),e.jsx(l,{variant:"primary",icon:C,onClick:()=>{r(null),a(!0)},children:"Add Team Member"})]}),e.jsx("div",{className:"bg-white rounded-lg shadow",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("div",{className:"relative flex-1 max-w-md",children:[e.jsx(k,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"}),e.jsx("input",{type:"text",placeholder:"Search team members...",value:o,onChange:e=>m(e.target.value),className:"pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(M,{className:"h-5 w-5 text-gray-400"}),e.jsx(d,{options:[{value:"all",label:"All Roles"},{value:"admin",label:"Admin"},{value:"manager",label:"Manager"},{value:"staff",label:"Staff"}],value:x,onChange:u})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Member"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Role"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),e.jsx("th",{className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:null==v?void 0:v.map((s=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"h-10 w-10 flex-shrink-0",children:e.jsx("img",{className:"h-10 w-10 rounded-full object-cover",src:s.image,alt:s.name})}),e.jsx("div",{className:"ml-4",children:e.jsx("div",{className:"text-sm font-medium text-gray-900",children:s.name})})]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("div",{className:"text-sm text-gray-900",children:s.role})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("div",{className:"text-sm text-gray-500",children:s.email})}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:[e.jsx(l,{variant:"ghost",size:"sm",icon:A,onClick:()=>(e=>{r(e),a(!0)})(s),className:"mr-2",children:"Edit"}),e.jsx(l,{variant:"ghost",size:"sm",icon:L,onClick:()=>(async e=>{window.confirm("Are you sure you want to remove this team member?")&&await y(e)})(s.id),className:"text-red-600 hover:text-red-700",children:"Delete"})]})]},s.id)))})]})})]})}),e.jsx(c,{isOpen:s,onClose:()=>{a(!1),r(null)},title:i?"Edit Team Member":"Add Team Member",children:e.jsx(oe,{initialData:i,onSubmit:async e=>{i?await j({id:i.id,...e}):await p(e),a(!1),r(null)},onCancel:()=>{a(!1),r(null)}})})]})}function ue(){const[s,a]=E.useState(""),[i,c]=E.useState("all"),{users:o,isLoading:m}=function(){const e=X(),{addNotification:s}=t(),{data:a,isLoading:i}=Y({queryKey:["users"],queryFn:()=>r.get("/users")}),l=_({mutationFn:e=>r.post("/users",e),onSuccess:()=>{e.invalidateQueries({queryKey:["users"]}),s("User created successfully","success")},onError:()=>{s("Failed to create user","error")}}),n=_({mutationFn:({id:e,...s})=>r.put(`/users/${e}`,s),onSuccess:()=>{e.invalidateQueries({queryKey:["users"]}),s("User updated successfully","success")},onError:()=>{s("Failed to update user","error")}}),d=_({mutationFn:e=>r.delete(`/users/${e}`),onSuccess:()=>{e.invalidateQueries({queryKey:["users"]}),s("User deleted successfully","success")},onError:()=>{s("Failed to delete user","error")}});return{users:a,isLoading:i,createUser:l.mutate,updateUser:n.mutate,deleteUser:d.mutate,isCreating:l.isLoading,isUpdating:n.isLoading,isDeleting:d.isLoading}}();if(m)return e.jsx(n,{});const x=null==o?void 0:o.filter((e=>{const a=e.name.toLowerCase().includes(s.toLowerCase())||e.email.toLowerCase().includes(s.toLowerCase()),t="all"===i||e.role===i;return a&&t}));return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"User Management"}),e.jsx(l,{variant:"primary",icon:C,children:"Add User"})]}),e.jsx("div",{className:"bg-white rounded-lg shadow",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("div",{className:"relative flex-1 max-w-md",children:[e.jsx(k,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"}),e.jsx("input",{type:"text",placeholder:"Search users...",value:s,onChange:e=>a(e.target.value),className:"pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(M,{className:"h-5 w-5 text-gray-400"}),e.jsx(d,{options:[{value:"all",label:"All Roles"},{value:"admin",label:"Admin"},{value:"professional",label:"Professional"},{value:"client",label:"Client"}],value:i,onChange:c})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"User"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Role"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Last Active"}),e.jsx("th",{className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:null==x?void 0:x.map((s=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center",children:e.jsx(T,{className:"h-5 w-5 text-gray-500"})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("div",{className:"text-sm font-medium text-gray-900",children:s.name}),e.jsx("div",{className:"text-sm text-gray-500",children:s.email})]})]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"text-sm text-gray-900",children:s.role})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:"Active"})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:"2 hours ago"}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:[e.jsx(l,{variant:"ghost",size:"sm",icon:A,className:"mr-2",children:"Edit"}),e.jsx(l,{variant:"ghost",size:"sm",icon:L,className:"text-red-600 hover:text-red-700",children:"Delete"})]})]},s.id)))})]})})]})})]})}const he={getSettings:()=>r.get("/settings"),updateSettings:({section:e,data:s})=>r.put(`/settings/${e}`,s),exportSettings:()=>r.get("/settings/export",{headers:{Accept:"application/json"}}),importSettings:e=>r.post("/settings/import",e)};function ge(){var s,a,r,n,c,o,u;const{settings:h,updateSettings:g,isLoading:p}=function(){const e=X(),{addNotification:s}=t(),{data:a,isLoading:i}=Y({queryKey:["settings"],queryFn:he.getSettings});return{settings:a,isLoading:i,updateSettings:_({mutationFn:he.updateSettings,onSuccess:()=>{e.invalidateQueries({queryKey:["settings"]}),s("Settings updated successfully","success")},onError:()=>{s("Failed to update settings","error")}}).mutate}}(),[y,v]=E.useState("general"),b=[{id:"general",label:"General Settings",icon:N},{id:"security",label:"Security",icon:x},{id:"notifications",label:"Notifications",icon:m},{id:"database",label:"Database",icon:j}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Admin Settings"}),e.jsx(l,{variant:"primary",icon:F,disabled:p,children:"Save Changes"})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:"w-64",children:e.jsx("nav",{className:"space-y-1",children:b.map((s=>e.jsxs("button",{onClick:()=>v(s.id),className:"w-full flex items-center px-3 py-2 text-sm font-medium rounded-md "+(y===s.id?"bg-blue-50 text-blue-600":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"),children:[e.jsx(s.icon,{className:"mr-3 h-5 w-5 "+(y===s.id?"text-blue-600":"text-gray-400")}),s.label]},s.id)))})}),e.jsx("div",{className:"flex-1",children:e.jsx("div",{className:"bg-white rounded-lg shadow",children:e.jsxs("div",{className:"p-6",children:["general"===y&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{label:"Site Name",defaultValue:null==(s=null==h?void 0:h.general)?void 0:s.siteName}),e.jsx(i,{label:"Support Email",type:"email",defaultValue:null==(a=null==h?void 0:h.general)?void 0:a.supportEmail}),e.jsx(d,{label:"Default Language",options:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"}],value:null==(r=null==h?void 0:h.general)?void 0:r.defaultLanguage})]}),"security"===y&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Two-Factor Authentication"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Require 2FA for all admin users"})]}),e.jsx("input",{type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",defaultChecked:null==(n=null==h?void 0:h.security)?void 0:n.require2FA})]}),e.jsx(i,{label:"Session Timeout (minutes)",type:"number",defaultValue:null==(c=null==h?void 0:h.security)?void 0:c.sessionTimeout})]}),"notifications"===y&&e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"space-y-4",children:["userRegistration","systemAlerts","securityAlerts"].map((s=>{var a;return e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:s.replace(/([A-Z])/g," $1").replace(/^./,(e=>e.toUpperCase()))})}),e.jsx("input",{type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",defaultChecked:null==(a=null==h?void 0:h.notifications)?void 0:a[s]})]},s)}))})}),"database"===y&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{label:"Backup Schedule",defaultValue:null==(o=null==h?void 0:h.database)?void 0:o.backupSchedule}),e.jsx(i,{label:"Retention Period (days)",type:"number",defaultValue:null==(u=null==h?void 0:h.database)?void 0:u.retentionPeriod})]})]})})})]})]})}function pe({children:a}){const{user:t,loading:i}=s(),l=D();return i?e.jsx(n,{}):t&&"admin"===t.role?e.jsx(e.Fragment,{children:a}):e.jsx(R,{to:"/admin/login",state:{from:l},replace:!0})}function je(){return e.jsx(pe,{children:e.jsx(te,{children:e.jsxs(P,{children:[e.jsx(K,{path:"/",element:e.jsx(ce,{})}),e.jsx(K,{path:"/team",element:e.jsx(xe,{})}),e.jsx(K,{path:"/users",element:e.jsx(ue,{})}),e.jsx(K,{path:"/settings",element:e.jsx(ge,{})}),e.jsx(K,{path:"/404",element:e.jsx(o,{})}),e.jsx(K,{path:"*",element:e.jsx(R,{to:"/admin/404",replace:!0})})]})})})}export{je as default};
