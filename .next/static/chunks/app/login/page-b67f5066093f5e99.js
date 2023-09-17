(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{5850:function(e,t,s){Promise.resolve().then(s.bind(s,1217))},1217:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var n=s(7437),a=s(3014);s(6518);var i=s(6770),r=s(1396),o=s.n(r),c=s(1865),l=s(165),d=s(5764),u=s(4033);function m(){let e=(0,u.useRouter)(),{register:t,handleSubmit:s,watch:r,formState:{errors:m},reset:g}=(0,c.cI)(),x=(0,l.NL)(),{mutate:f,isLoading:h}=(0,d.D)(async e=>{let t=await (0,i.n$)(e);if(console.log("res",t),200!==t.status)throw Error()},{onSuccess:async()=>{a.Am.success("login successFuly"),g(),await x.invalidateQueries("getLoginUserDetails"),await x.getQueryData(["getLoginUserDetails"]),setTimeout(()=>{e.push("/")},1e3)},onError:()=>{a.Am.error("Invalid Details")}});return(0,n.jsxs)(n.Fragment,{children:[h?a.Am.loading("loading..."):"",(0,n.jsxs)("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",children:[(0,n.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[(0,n.jsx)("img",{className:"mx-auto h-10 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"}),(0,n.jsx)("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})]}),(0,n.jsxs)("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[(0,n.jsxs)("form",{className:"space-y-6",onSubmit:s(e=>{console.log(e),h||f(e)}),children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("input",{...t("email",{required:!0}),id:"email",type:"email",autoComplete:"email",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),m.email?(0,n.jsx)("p",{children:"email error"}):""]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"}),(0,n.jsx)("div",{className:"text-sm",children:(0,n.jsx)("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"Forgot password?"})})]}),(0,n.jsxs)("div",{className:"mt-2",children:[(0,n.jsx)("input",{...t("passWord"),id:"password",type:"password",autoComplete:"current-password",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}),m.passWord&&(0,n.jsx)("p",{children:"Password error"})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Sign in"})})]}),(0,n.jsxs)("p",{className:"mt-10 text-center text-sm text-gray-500",children:["Not a member?"," ",(0,n.jsx)(o(),{href:"signup",className:"text-blue-500 font-bold",children:"SignUp"})]})]}),(0,n.jsx)(a.Ix,{})]})]})}},6770:function(e,t,s){"use strict";s.d(t,{Xq:function(){return g},ul:function(){return x},de:function(){return u},hH:function(){return c},_0:function(){return m},hZ:function(){return f},a$:function(){return r},z1:function(){return d},n$:function(){return o},Kv:function(){return l}});var n=s(9222);let a=async(e,t,s,a)=>{try{let i={method:e,url:t,data:s,headers:a?{...a}:{"Content-Type":"application/json"},withCredentials:!0,credentials:"include"},r=await (0,n.Z)(i);return{status:200,success:!0,data:r.data}}catch(e){return{status:400,success:!1,error:e.response?e.response.data:e}}};var i=s(9294);let r=async(e,t)=>await a("POST","".concat(i._,"/registerUser"),e,t),o=async e=>await a("POST","".concat(i._,"/userLogin"),e),c=async()=>await a("GET","".concat(i._,"/getLoginUserDetails"),""),l=async()=>await a("GET","".concat(i._,"/userLogout"),""),d=async(e,t)=>await a("PUT","".concat(i._,"/updateProfileAfterLogin"),e,t),u=async e=>await a("GET","".concat(i._,"/getAllProduct/").concat(e),""),m=async e=>await a("GET","".concat(i._,"/getSingleProduct/").concat(e),""),g=async(e,t)=>(console.log(t,"data data dtadtad ad tadatd ",e),await a("POST","".concat(i._,"/addToCart/").concat(e),t)),x=async e=>await a("DELETE","".concat(i._,"/deleteToCart/").concat(e)),f=async e=>await a("POST","".concat(i._,"/postProduct"),e)},9294:function(e,t,s){"use strict";s.d(t,{_:function(){return n}});let n="https://e-commerce-backend-xh0l.onrender.com"}},function(e){e.O(0,[685,856,717,542,971,596,744],function(){return e(e.s=5850)}),_N_E=e.O()}]);