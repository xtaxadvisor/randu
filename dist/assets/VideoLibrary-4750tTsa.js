import{j as e,I as s,S as a,B as l}from"./index-D3F6h_Dx.js";import{u as t,r as i}from"./vendor-react-CtOH9B0J.js";import{a1 as r,d as n,a2 as o,a3 as c,a4 as d,y as m}from"./vendor-ui-BUyqawzT.js";import{v as x}from"./videoData-D_ow2XlP.js";import"./vendor-query-BtzKWVaK.js";function h({video:s}){const a=t();return e.jsxs("div",{className:"bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",onClick:()=>a(`/browse-videos/${s.id}`),children:[e.jsxs("div",{className:"relative aspect-video",children:[e.jsx("img",{src:s.thumbnail,alt:s.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity",children:e.jsx(r,{className:"h-16 w-16 text-white"})})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:s.title}),e.jsx("p",{className:"text-gray-600 mb-4 line-clamp-2",children:s.description}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center text-gray-500",children:[e.jsx(n,{className:"h-4 w-4 mr-1"}),s.duration]}),e.jsxs("div",{className:"text-xl font-bold text-blue-600",children:["$",s.price]})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.tags.map(((s,a)=>e.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:[e.jsx(o,{className:"h-3 w-3 mr-1"}),s]},a)))})]})]})}function u({searchTerm:l,onSearchChange:t,selectedCategory:i,onCategoryChange:r}){return e.jsxs("div",{className:"flex items-center space-x-4 mb-8",children:[e.jsx("div",{className:"flex-1",children:e.jsx(s,{placeholder:"Search videos...",value:l,onChange:e=>t(e.target.value),icon:c})}),e.jsx("div",{className:"w-64",children:e.jsx(a,{options:[{value:"all",label:"All Categories"},{value:"Tax Planning",label:"Tax Planning"},{value:"Investment",label:"Investment"},{value:"Business",label:"Business"}],value:i,onChange:r,icon:d})})]})}function v(){const[s,a]=i.useState(""),[r,n]=i.useState("all"),o=t(),c=x.filter((e=>{const a=e.title.toLowerCase().includes(s.toLowerCase())||e.description.toLowerCase().includes(s.toLowerCase())||e.tags.some((e=>e.toLowerCase().includes(s.toLowerCase()))),l="all"===r||e.category===r;return a&&l}));return e.jsx("div",{className:"min-h-screen bg-gray-50 py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx(l,{variant:"ghost",onClick:()=>o("/"),icon:m,className:"mb-4",children:"Back to Home"}),e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Video Library"})})]}),e.jsx(u,{searchTerm:s,onSearchChange:a,selectedCategory:r,onCategoryChange:n}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:c.map((s=>e.jsx(h,{video:s},s.id)))})]})})}export{v as default};
