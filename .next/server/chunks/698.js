exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 59268:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46051))

/***/ }),

/***/ 15659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   ry: () => (/* binding */ createProduct),
/* harmony export */   wv: () => (/* binding */ getProduct)
/* harmony export */ });
/* unused harmony export productSlice */
/* harmony import */ var _services_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83850);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59739);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);




//create Product
const createProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("createProduct", async (data, { rejectWithValue })=>{
    try {
        const response = await (0,_services_apis__WEBPACK_IMPORTED_MODULE_1__/* .postProduct */ .hZ)(data);
        return response;
    //     const res = await fetch(`${BASE_URL}/postProduct`, {
    //       method: "POST",
    //       headers: {
    //         "Access-Control-Allow-Credentials": true,
    //         "Content-Type": "application/json",
    //       },
    //       withCredentials: true,
    //       credentials: "include",
    //       body: JSON.stringify(data),
    //     });
    //     const result = await res.json();
    //     return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});
//get all products
const getProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("getProduct", async (data, { rejectWithValue })=>{
    try {
        const res = await fetch(`${_services_helper__WEBPACK_IMPORTED_MODULE_2__/* .BASE_URL */ ._}/getAllProduct`, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Content-Type": "application/json"
            },
            withCredentials: true,
            credentials: "include"
        });
        const result = await res.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "productSlice",
    initialState: {
        product: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [createProduct.pending]: (state, action)=>{
            state.loading = true;
            state.error = false; // Reset error to false when making a new request
        },
        [createProduct.rejected]: (state, action)=>{
            state.loading = false;
            state.error = true; // Set error to true on rejection
        },
        [createProduct.fulfilled]: (state, action)=>{
            state.loading = false;
            state.error = false; // Set error to false on successful response
            state.product.push(action.payload);
        },
        [getProduct.pending]: (state, action)=>{
            state.loading = true;
        },
        [getProduct.fulfilled]: (state, action)=>{
            state.loading = false;
            state.error = false;
            state.product = action.payload;
        },
        [getProduct.rejected]: (state, action)=>{
            state.loading = false;
            state.error = true;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);


/***/ }),

/***/ 46051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Poppins","arguments":[{"weight":"400","subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Poppins_arguments_weight_400_subsets_latin_variableName_inter_ = __webpack_require__(35282);
var target_path_src_app_layout_tsx_import_Poppins_arguments_weight_400_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Poppins_arguments_weight_400_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(15816);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(42454);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ShoppingCart.js
var ShoppingCart = __webpack_require__(43480);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js + 1 modules
var disclosure = __webpack_require__(17747);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/menu/menu.js + 8 modules
var menu = __webpack_require__(50057);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 3 modules
var transition = __webpack_require__(20975);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(57048);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(46140);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/useQuery.mjs + 6 modules
var useQuery = __webpack_require__(53993);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/useMutation.mjs + 1 modules
var useMutation = __webpack_require__(30012);
// EXTERNAL MODULE: ./src/services/apis.js + 1 modules
var apis = __webpack_require__(83850);
// EXTERNAL MODULE: ./node_modules/cogo-toast/dist/index.js
var dist = __webpack_require__(99690);
// EXTERNAL MODULE: ./node_modules/react-loader-spinner/dist/esm/index.js + 35 modules
var esm = __webpack_require__(22602);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(212);
;// CONCATENATED MODULE: ./src/component/navbar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



// import HomeIcon from '@mui/material/HomeIcon';













// import { queryClient } from "@tanstack/react-query";

// const navigation = [
//   { name: "Dashboard", href: "/dashboard", current: true },
//   { name: "Login", href: "/login", current: false },
// ];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Navbar() {
    //start logic getLoginUserDetails
    //getLogin user Details Api
    const { isLoading, error, data } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            "getLoginUserDetails"
        ],
        queryFn: async ()=>{
            const res = await (0,apis/* getLoginUserDetails */.hH)();
            return res;
        }
    });
    console.log(data);
    const cartLength = data?.data ? data.data.user.cart.length : null;
    const queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
    const logOutMutation = (0,useMutation/* useMutation */.D)(async ()=>{
        const response = await (0,apis/* userLogout */.Kv)();
        return response;
    }, {
        onSuccess: ()=>{
            dist/* default */.ZP.success("logOut SuccessFully");
            queryClient.clear();
            queryClient.invalidateQueries("getLoginUserDetails"); // Trigger revalidation
        },
        onError: ()=>{
            dist/* default */.ZP.error("somthing went wrong try again ....");
        }
    });
    const StyledBadge = (0,styles.styled)((Badge_default()))(({ theme })=>({
            "& .MuiBadge-badge": {
                right: -3,
                top: 13,
                border: `2px solid ${theme.palette.background.paper}`,
                padding: "0 4px"
            }
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
        as: "nav",
        className: "bg-gray-800",
        children: ({ open })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative flex h-16 items-center justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(disclosure/* Disclosure */.p.Button, {
                                        className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "absolute -inset-0.5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }),
                                            open ? /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-shrink-0 items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiFillHome */.V9Z, {
                                                    className: "text-blue-500 w-[20px]"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden sm:ml-6 sm:block",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex space-x-4 ",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "text-gray-300 cursor-pointer  hover:bg-gray-700 hover:text-white",
                                                        onClick: ()=>{
                                                            if (data?.data?.user.role == "user") {
                                                                dist/* default */.ZP.error("only admin can access");
                                                            }
                                                        },
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: data?.data?.user.role == "user" ? "" : "/dashboard",
                                                                children: "DashBoard"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/login",
                                                            children: "Login"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            className: "relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "cursor-pointer",
                                                onClick: ()=>{
                                                    if (!data?.data?.user) {
                                                        dist/* default */.ZP.error("login to access Your Cart Data");
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: data?.data?.user ? "/cart" : "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "relative",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                            "aria-label": "cart",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledBadge, {
                                                                badgeContent: cartLength ? cartLength : "0",
                                                                color: "secondary",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(ShoppingCart/* default */.Z, {
                                                                    className: "text-orange-500"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v, {
                                            as: "div",
                                            className: "relative ml-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v.Button, {
                                                        className: "relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "absolute -inset-1.5"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sr-only",
                                                                children: "Open user menu"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "h-8 w-8 rounded-full",
                                                                // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                src: data ? `http://localhost:27017/uploads/${data?.data?.user.avatar}` : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                                alt: ""
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                                                    as: react_.Fragment,
                                                    enter: "transition ease-out duration-100",
                                                    enterFrom: "transform opacity-0 scale-95",
                                                    enterTo: "transform opacity-100 scale-100",
                                                    leave: "transition ease-in duration-75",
                                                    leaveFrom: "transform opacity-100 scale-100",
                                                    leaveTo: "transform opacity-0 scale-95",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v.Items, {
                                                        className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                                                children: ({ active })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        onClick: ()=>{
                                                                            if (!data?.data?.user) {
                                                                                dist/* default */.ZP.error("Please Login To access");
                                                                            }
                                                                        },
                                                                        href: data?.data?.user ? "/profile" : "",
                                                                        className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                        children: "Your Profile"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                                                children: ({ active })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                        className: classNames(active ? "bg-gray-100 w-[100%]" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                        onClick: logOutMutation.mutate,
                                                                        children: [
                                                                            " ",
                                                                            "Log out"
                                                                        ]
                                                                    })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p.Panel, {
                        className: "sm:hidden",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-1 px-2 pb-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-gray-300 cursor-pointer  hover:bg-gray-700 hover:text-white",
                                    onClick: ()=>{
                                        if (data?.data?.user.role == "user") {
                                            dist/* default */.ZP.error("only admin can access");
                                        }
                                    },
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: data?.data?.user.role == "user" ? "" : "/dashboard",
                                            children: "DashBoard"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/login",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-white",
                                        children: "Login"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
    });
}

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(23824);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/queryClient.mjs + 4 modules
var lib_queryClient = __webpack_require__(85167);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query-devtools/build/lib/index.mjs
var lib = __webpack_require__(5570);
;// CONCATENATED MODULE: ./src/queryProvider/queryProvider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
// import React from 'react';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// const QueryProvider = ({children}:any) => {
//     const queryClient = new QueryClient()
//   return (
//     <div>
//          <QueryClientProvider client={queryClient}>
//         {children}
//         </QueryClientProvider>
//     </div>
//   )
// }
// export default QueryProvider;


const QueryProvider = ({ children })=>{
    const queryClient = new lib_queryClient/* QueryClient */.S();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(QueryClientProvider/* QueryClientProvider */.aH, {
            client: queryClient,
            children: [
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(lib/* ReactQueryDevtools */.t, {
                    initialIsOpen: false
                })
            ]
        })
    });
};
/* harmony default export */ const queryProvider = (QueryProvider);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
// EXTERNAL MODULE: ./src/RTK/productSlice.js
var productSlice = __webpack_require__(15659);
;// CONCATENATED MODULE: ./src/RTK/store.js


const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        createProduct: productSlice/* default */.ZP
    }
}); // export default store;

;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_redux_lib.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(queryProvider, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    className: (target_path_src_app_layout_tsx_import_Poppins_arguments_weight_400_subsets_latin_variableName_inter_default()).className,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                        children
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 83850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xq: () => (/* binding */ addToCart),
  ul: () => (/* binding */ deleteToCart),
  de: () => (/* binding */ getAllProduct),
  hH: () => (/* binding */ getLoginUserDetails),
  _0: () => (/* binding */ getSingleProduct),
  hZ: () => (/* binding */ postProduct),
  a$: () => (/* binding */ registerUser),
  z1: () => (/* binding */ updateProfileAfterLogin),
  n$: () => (/* binding */ userLogin),
  Kv: () => (/* binding */ userLogout)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
;// CONCATENATED MODULE: ./src/services/apiCall.js

const commonRequest = async (method, url, body, header)=>{
    try {
        const config = {
            method,
            url,
            data: body,
            headers: header ? {
                ...header
            } : {
                "Content-Type": "application/json"
            },
            withCredentials: true,
            credentials: "include"
        };
        const response = await (0,axios/* default */.Z)(config);
        return {
            status: 200,
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            status: 400,
            success: false,
            error: error.response ? error.response.data : error
        };
    }
};

// EXTERNAL MODULE: ./src/services/helper.js
var helper = __webpack_require__(59739);
;// CONCATENATED MODULE: ./src/services/apis.js


//regsiter User Api
const registerUser = async (data, config)=>{
    return await commonRequest("POST", `${helper/* BASE_URL */._}/registerUser`, data, config);
};
//user login APi
const userLogin = async (data)=>{
    return await commonRequest("POST", `${helper/* BASE_URL */._}/userLogin`, data);
};
//get Login UserDetails
const getLoginUserDetails = async ()=>{
    return await commonRequest("GET", `${helper/* BASE_URL */._}/getLoginUserDetails`, "");
};
//userLogout
const userLogout = async ()=>{
    return await commonRequest("GET", `${helper/* BASE_URL */._}/userLogout`, "");
};
//updateProfileAfterLogin
const updateProfileAfterLogin = async (data, config)=>{
    return await commonRequest("PUT", `${helper/* BASE_URL */._}/updateProfileAfterLogin`, data, config);
};
//get all products details
const getAllProduct = async (page)=>{
    return await commonRequest("GET", `${helper/* BASE_URL */._}/getAllProduct/${page}`, "");
};
//getSingleProduct
const getSingleProduct = async (productId)=>{
    return await commonRequest("GET", `${helper/* BASE_URL */._}/getSingleProduct/${productId}`, "");
};
//addToCart
const addToCart = async (_id, data)=>{
    console.log(data, "data data dtadtad ad tadatd ", _id);
    return await commonRequest("POST", `${helper/* BASE_URL */._}/addToCart/${_id}`, data);
};
//deleteToCart
const deleteToCart = async (_id)=>{
    return await commonRequest("DELETE", `${helper/* BASE_URL */._}/deleteToCart/${_id}`); //do not add empty string like ""
};
//Admin panel Product Section
const postProduct = async (data)=>{
    return await commonRequest("POST", `${helper/* BASE_URL */._}/postProduct`, data);
};


/***/ }),

/***/ 59739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ BASE_URL)
/* harmony export */ });
// export const BASE_URL="http://localhost:27017" ;  //use for localhost
const BASE_URL = "https://e-commerce-backend-xh0l.onrender.com";


/***/ }),

/***/ 74053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Asus\Desktop\ecommerce\frontend\src\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 23824:
/***/ (() => {



/***/ })

};
;