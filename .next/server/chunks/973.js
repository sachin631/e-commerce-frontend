"use strict";
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 84973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_apis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83850);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(212);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30012);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99690);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7625);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70320);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Cart = ()=>{
    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__/* .useQueryClient */ .NL)();
    //deletToCart
    const { isLoading, mutate } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .useMutation */ .D)(async (_id)=>{
        const responseOfDelete = await (0,_services_apis__WEBPACK_IMPORTED_MODULE_8__/* .deleteToCart */ .ul)(_id);
        console.log("responseOfDelete", responseOfDelete);
        if (responseOfDelete.status !== 200) {
            throw new Error;
        }
        return responseOfDelete;
    }, {
        onSuccess: async ()=>{
            cogo_toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.success("product deleted successFuly");
            queryClient.invalidateQueries("getLoginUserDetails");
            await queryClient.refetchQueries("getLoginUserDetails");
            await getUserData();
        },
        onError: ()=>{
            cogo_toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.error("product not deleted try again");
        }
    });
    const getUserData = async ()=>{
        const userDetailQueryData = await queryClient.getQueryData([
            "getLoginUserDetails"
        ]);
        console.log(userDetailQueryData ? userDetailQueryData : "");
        setData(userDetailQueryData);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setTimeout(()=>{
            getUserData();
        }, 1000);
    //  getUserData();
    }, [
        data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (data?.data?.user?.cart) {
            // Calculate total price
            const totalPrice = data.data.user.cart.reduce((acc, curelem)=>{
                return acc + curelem.product.sellingPrice * curelem.quantity;
            }, 0);
            setTotal(totalPrice);
        }
    }, [
        data
    ]);
    if (!data) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-center items-center mt-[200px] ",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__/* .RotatingLines */ .s5, {
                strokeColor: "brown",
                strokeWidth: "3",
                animationDuration: "0.75",
                width: "100",
                visible: true
            })
        });
    }
    console.warn(data?.data?.user);
    //deleteButton
    const deleteButton = (_id)=>{
        if (!isLoading) {
            mutate(_id);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-slate-200 min-h-[100vh] py-10",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container bg-white mx-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-4 py-4 flex flex-col justify-start items-start gap-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-2xl",
                            children: "Cart"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "h-[1] w-[100%]"
                        }),
                        data?.data?.user?.cart.map((curelem, index)=>{
                            console.warn("asdasd", curelem.product?.images[0].url);
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex sm:justify-between justify-center items-center w-[100%] sm:flex-row flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex sm:flex-row flex-col  gap-4 ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: curelem.product.images[0].url,
                                                            width: 100,
                                                            height: 100
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "font-bold text-orange-500",
                                                                        children: [
                                                                            "Name:",
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    " ",
                                                                    curelem.product.name
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "font-bold text-orange-500",
                                                                        children: [
                                                                            "Category:",
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    " ",
                                                                    curelem.product.category
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "font-bold text-orange-500",
                                                                        children: "Quantity :"
                                                                    }),
                                                                    " ",
                                                                    curelem.quantity
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col gap-4 ",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "font-bold text-orange-500",
                                                                children: [
                                                                    " ",
                                                                    "Price : ₹",
                                                                    " "
                                                                ]
                                                            }),
                                                            curelem.product.sellingPrice
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "font-bold text-orange-500",
                                                                children: "TotalPrice :"
                                                            }),
                                                            " ",
                                                            curelem.product.sellingPrice,
                                                            "*",
                                                            curelem.quantity,
                                                            " = ₹",
                                                            curelem.product.sellingPrice * curelem.quantity
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "text-blue-500  flex justify-end active:text-red-500",
                                                        onClick: ()=>deleteButton(curelem.product._id),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__/* .MdDelete */ .ZkW, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: "w-[100%]"
                                    })
                                ]
                            });
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between w-[100%]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "SubTotal"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm",
                                            children: "shopping and taxes added at checkout"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: total
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[100%]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/checkout",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "bg-blue-500 text-white hover:text-black w-[100%] text-center rounded py-3",
                                    children: "Checkout"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[100%] flex justify-center items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "text-center",
                                    children: "Continue Shopping -- "
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


/***/ })

};
;