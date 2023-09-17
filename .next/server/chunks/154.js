exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 32763:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 51899:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 97756));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23312));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96210))

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

/***/ 23312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rtkProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
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

;// CONCATENATED MODULE: ./src/RTK/rtkProvider.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ProviderRtk = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: children
    });
};
/* harmony default export */ const rtkProvider = (ProviderRtk); // import React from 'react'
 // const rtkProvider = () => {
 //   return (
 //     <div>rtkProvider</div>
 //   )
 // }
 // export default rtkProvider


/***/ }),

/***/ 97756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34751);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45996);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15816);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42454);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(43480);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17747);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50057);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20975);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57048);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46140);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53993);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30012);
/* harmony import */ var _services_apis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83850);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22602);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(212);
/* __next_internal_client_entry_do_not_use__ default auto */ 





// import HomeIcon from '@mui/material/HomeIcon';











// import cogoToast from "cogo-toast";

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
    const { isLoading, error, data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__/* .useQuery */ .a)({
        queryKey: [
            "getLoginUserDetails"
        ],
        queryFn: async ()=>{
            const res = await (0,_services_apis__WEBPACK_IMPORTED_MODULE_7__/* .getLoginUserDetails */ .hH)();
            return res;
        }
    });
    console.log(data);
    const cartLength = data?.data ? data.data.user.cart.length : null;
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__/* .useQueryClient */ .NL)();
    const logOutMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__/* .useMutation */ .D)(async ()=>{
        const response = await (0,_services_apis__WEBPACK_IMPORTED_MODULE_7__/* .userLogout */ .Kv)();
        return response;
    }, {
        onSuccess: ()=>{
            // cogoToast.success("logOut SuccessFully");
            react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.success("logOut SuccessFully");
            queryClient.clear();
            queryClient.invalidateQueries("getLoginUserDetails"); // Trigger revalidation
        },
        onError: ()=>{
            // cogoToast.error("somthing went wrong try again ....");
            react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("somthing went wrong try again ....");
        }
    });
    const StyledBadge = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.styled)((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_11___default()))(({ theme })=>({
            "& .MuiBadge-badge": {
                right: -3,
                top: 13,
                border: `2px solid ${theme.palette.background.paper}`,
                padding: "0 4px"
            }
        }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__/* .Disclosure */ .p, {
        as: "nav",
        className: "bg-gray-800",
        children: ({ open })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative flex h-16 items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__/* .Disclosure */ .p.Button, {
                                            className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "absolute -inset-0.5"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Open main menu"
                                                }),
                                                open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    className: "block h-6 w-6",
                                                    "aria-hidden": "true"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                    className: "block h-6 w-6",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-shrink-0 items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__/* .AiFillHome */ .V9Z, {
                                                        className: "text-blue-500 w-[20px]"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "hidden sm:ml-6 sm:block",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex space-x-4 ",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-gray-300 cursor-pointer  hover:bg-gray-700 hover:text-white",
                                                            onClick: ()=>{
                                                                if (data?.data?.user.role == "user") {
                                                                    // cogoToast.error("only admin can access");
                                                                    react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("only admin can access");
                                                                }
                                                            },
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    href: data?.data?.user.role == "user" ? "" : "/dashboard",
                                                                    children: "DashBoard"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/login",
                                                                children: "Login"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "cursor-pointer",
                                                    onClick: ()=>{
                                                        if (!data?.data?.user) {
                                                            // cogoToast.error("login to access Your Cart Data");
                                                            react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("login to access Your Cart Data");
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: data?.data?.user ? "/cart" : "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "relative",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                                "aria-label": "cart",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBadge, {
                                                                    badgeContent: cartLength ? cartLength : "0",
                                                                    color: "secondary",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                                        className: "text-orange-500"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__/* .Menu */ .v, {
                                                as: "div",
                                                className: "relative ml-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__/* .Menu */ .v.Button, {
                                                            className: "relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "absolute -inset-1.5"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "sr-only",
                                                                    children: "Open user menu"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "h-8 w-8 rounded-full",
                                                                    // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                    src: data ? `http://localhost:27017/uploads/${data?.data?.user.avatar}` : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                                    alt: ""
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_19__/* .Transition */ .u, {
                                                        as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                                                        enter: "transition ease-out duration-100",
                                                        enterFrom: "transform opacity-0 scale-95",
                                                        enterTo: "transform opacity-100 scale-100",
                                                        leave: "transition ease-in duration-75",
                                                        leaveFrom: "transform opacity-100 scale-100",
                                                        leaveTo: "transform opacity-0 scale-95",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__/* .Menu */ .v.Items, {
                                                            className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__/* .Menu */ .v.Item, {
                                                                    children: ({ active })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                            onClick: ()=>{
                                                                                if (!data?.data?.user) {
                                                                                    // cogoToast.error("Please Login To access");
                                                                                    react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("Please Login To access");
                                                                                }
                                                                            },
                                                                            href: data?.data?.user ? "/profile" : "",
                                                                            className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                            children: "Your Profile"
                                                                        })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__/* .Menu */ .v.Item, {
                                                                    children: ({ active })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
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
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .ToastContainer */ .Ix, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__/* .Disclosure */ .p.Panel, {
                        className: "sm:hidden",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-1 px-2 pb-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-gray-300 cursor-pointer  hover:bg-gray-700 hover:text-white",
                                    onClick: ()=>{
                                        if (data?.data?.user.role == "user") {
                                            // cogoToast.error("only admin can access");
                                            react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("only admin can access");
                                        }
                                    },
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: data?.data?.user.role == "user" ? "" : "/dashboard",
                                            children: "DashBoard"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/login",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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


/***/ }),

/***/ 96210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85167);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(212);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5570);
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
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .QueryClient */ .S();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .QueryClientProvider */ .aH, {
            client: queryClient,
            children: [
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__/* .ReactQueryDevtools */ .t, {
                    initialIsOpen: false
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryProvider);


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

/***/ 34607:
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
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Poppins","arguments":[{"weight":"400","subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Poppins_arguments_weight_400_subsets_latin_variableName_inter_ = __webpack_require__(58365);
var target_path_src_app_layout_js_import_Poppins_arguments_weight_400_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Poppins_arguments_weight_400_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/component/navbar.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Asus\Desktop\ecommerce\frontend\src\component\navbar.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navbar = (__default__);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/queryProvider/queryProvider.tsx

const queryProvider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Asus\Desktop\ecommerce\frontend\src\queryProvider\queryProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: queryProvider_esModule, $$typeof: queryProvider_$$typeof } = queryProvider_proxy;
const queryProvider_default_ = queryProvider_proxy.default;


/* harmony default export */ const queryProvider = (queryProvider_default_);
;// CONCATENATED MODULE: ./src/RTK/rtkProvider.js

const rtkProvider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Asus\Desktop\ecommerce\frontend\src\RTK\rtkProvider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: rtkProvider_esModule, $$typeof: rtkProvider_$$typeof } = rtkProvider_proxy;
const rtkProvider_default_ = rtkProvider_proxy.default;


/* harmony default export */ const rtkProvider = (rtkProvider_default_);
;// CONCATENATED MODULE: ./src/app/layout.js
// "use client";





// import { Provider } from "react-redux";
// import { store } from "../RTK/store";

const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx(queryProvider, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(rtkProvider, {
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                        className: (target_path_src_app_layout_js_import_Poppins_arguments_weight_400_subsets_latin_variableName_inter_default()).className,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                            children
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;