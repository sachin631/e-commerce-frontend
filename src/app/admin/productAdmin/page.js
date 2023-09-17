"use client";
import { getProduct } from "@/RTK/productSlice";
import DashBoard from "@/app/dashboard/page";
import cogoToast from "cogo-toast";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
const productAdmin = () => {
  const dispatch = useDispatch();
  const { error, loading, product } = useSelector(
    (state) => state.createProduct
  );

  console.log(product?.message, "product messagwe");

  useEffect(() => {
    callFunction();
  }, []);

  const callFunction = async () => {
    const productsData = await dispatch(getProduct());
    // console.log("productsData",productsData);
  };

  if (error) {
    cogoToast.error("try again or Refresh page");
  }
  if (loading) {
    cogoToast.loading("loading data----");
  }

  return (
    <>
      <DashBoard />
      {/* <Link href="/dashboard">
        <h1 className="font-bold text-center text-4xl mt-6 cursor-pointer">
          DashBoard
        </h1>
      </Link> */}
      <Link href="/admin/createAdminProduct">
        <button className="bg-orange-500 px-3 py-3 ml-3 rounded-2xl mt-10">
          Create New Product
        </button>
      </Link>
      <div>
        <table className="w-[100%] mr-2 mt-6">
          <caption className="text-2xl"> All Products</caption>

          <tbody>
            <tr className="w-[100%] bg-black text-white py-4">
              <th className="text-blac cursor-pointer py-4">ProductsId</th>
              <th className="text-blac cursor-pointer py-4">Name</th>
              <th className="text-blac cursor-pointer text-center py-4">
                Stock
              </th>
              <th className="text-blac cursor-pointer py-4">Price</th>
              <th className="text-blac cursor-pointer py-4">Actions</th>
            </tr>

            {product?.message?.map((curelem,index) => {
              return(
              <tr className="w-[100%] bg-blue-500 py-4 mt-8 overflow-x-auto" key={index}>
                <td className="text-white cursor-pointer text-center py-4">
                  {curelem._id}
                </td>
                <td className="text-white cursor-pointer text-center">
                 {curelem.name}
                </td>
                <td className="text-white cursor-pointer text-center">{curelem.stock}</td>
                <td className="text-white cursor-pointer text-center">{curelem.sellingPrice}</td>
                <td className="text-white cursor-pointer text-center  ">
                  <button className="mr-3 text-[brown] ">
                    <FiEdit2 />
                  </button>
                  <button>
                    <MdDelete />
                  </button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default productAdmin;
