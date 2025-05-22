import React, { useState } from "react";
import usePrdouct from "../stores/useProduct";
import { useParams } from "react-router";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCompareArrows } from "react-icons/md";
import BackwardLink from "./BackwardLink";

const tabs = ["Product Details", "Information", "Reviews", "Seller Info"];

export default function Product() {
  const { allProduct } = usePrdouct();
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const { title } = useParams();

  const details = allProduct.find(
    (value) => value.title.replaceAll(" ", "-") === title
  );

  return (
    <>
      <BackwardLink details={details} />
      <div className="bg-white  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-10">
          {/* Product Image */}
          <div className="flex justify-center flex-col ">
            <img
              src={details.image[selectedImg]}
              alt={details.title}
              className="rounded-lg object-cover w-full max-w-md"
            />
            <div className="w-full h-[100px] md:h-[120px]  flex gap-4 p-3 scrollbar-hide overflow-scroll">
              {details.image.map((value, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImg(index)}
                  className={`w-[100px]  md:w-[150px] h-full  ${
                    index === selectedImg
                      ? "border-2 border-green-600"
                      : "border border-gray-400"
                  } rounded-lg flex-shrink-0`}
                >
                  <img
                    src={value}
                    alt={details.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex  flex-col justify-between ">
            <div>
              <span className="text-green-600 mb-5 text-sm font-semibold inline-block">
                {details.category}
              </span>
              <h1 className="text-2xl  lg:text-4xl font-semibold text-gray-900">
                {details.title}
              </h1>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="ml-2 text-sm text-gray-600">(4 reviews)</span>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${details.unit_price}
                </span>
                <span className="text-base text-gray-500 line-through">
                  $30
                </span>
              </div>
              <div className="mt-5">
                <label className="block text-sm  mb-5 text-gray-300 font-medium ">
                  <hr />
                </label>
                <div className="mt-2 flex text-sm text-gray-400 font-semibold space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded">
                    250g
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded">
                    500g
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded">
                    1kg
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <button className="bg-green-600 text-sm flex items-center gap-x-2 text-white px-10 font-semibold py-2 rounded hover:bg-green-700">
                  <LuShoppingBag className="text-2xl" /> Add to Cart
                </button>
                <button className="text-gray-500 text-2xl cursor-pointer  hover:text-gray-700">
                  ♡
                </button>
                <button className="text-gray-500 text-2xl cursor-pointer hover:text-gray-700">
                  ⇄
                </button>
              </div>
              <ul className="mt-10 text-xs md:text-base text-gray-700 gap-x-14 flex">
                <li className="flex-shrink-0 flex flex-col space-y-4">
                  <p>Product Code:</p>
                  <p>Availability:</p>
                  <p>Type:</p>
                  <p>Shipping:</p>
                </li>
                <li className="flex-shrink-0 flex flex-col space-y-4">
                  <p>FBB00255</p>
                  <p>In Stock</p>
                  <p>Fruits</p>
                  <p>01 day shipping. (Free pickup today)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10  max-w-7xl mx-auto scrollbar-hide mb-10  overflow-scroll">
          <div className="border-b border-gray-200">
            <ul className="-mb-px flex space-x-8 " aria-label="Tabs">
              {tabs.map((value, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className={` min-w-fit  cursor-pointer hover:text-green-600 hover:border-green-600 ${
                    selectedTab === index
                      ? "border-green-600 border-b-2 text-green-600"
                      : " text-gray-900"
                  }  py-4 px-1 text-sm font-medium`}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          {selectedTab === 0 && <ProductDetails />}

          {selectedTab === 1 && <ProductInformation />}
        </div>
      </div>
    </>
  );
}

function ProductDetails() {
  return (
    <>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Nutrient Value & Benefits
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus
          iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed
          magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus.
        </p>

        <h3 className="mt-6 text-md font-semibold text-gray-900">
          Storage Tips
        </h3>
        <p className="mt-2 text-sm text-gray-700">
          Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet
          vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare
          ac rhoncus.
        </p>

        <h3 className="mt-6 text-md font-semibold text-gray-900">Unit</h3>
        <p className="mt-2 text-sm text-gray-700">3 units</p>

        <h3 className="mt-6 text-md font-semibold text-gray-900">Seller</h3>
        <p className="mt-2 text-sm text-gray-700">DMart Pvt. LTD</p>

        <h3 className="mt-6 text-md font-semibold text-gray-900">Disclaimer</h3>
        <p className="mt-2 text-sm text-gray-700">
          Image shown is a representation and may slightly vary from the actual
          product. Every effort is made to maintain accuracy of all information
          displayed.
        </p>
      </div>
    </>
  );
}

function ProductInformation() {
  return (
    <>
      <div>
        <h3 className="my-5 text-xl">Details</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <table className="">
            <tbody className="text-sm font-semibold text-gray-500">
              <tr className="border-b   border-gray-300 bg-[#F0F3F2] ">
                <td className=" p-3">Weight</td>
                <td className="p-3">1000 Grams</td>
              </tr>
              <tr className="border-b border-t border-gray-300">
                <td className="p-3">Ingredient Type </td>
                <td className="p-3">Vegetarian</td>
              </tr>
              <tr className="border-b border-t border-gray-300 bg-[#F0F3F2]">
                <td className="p-3">Brand </td>
                <td className="p-3">Dmart</td>
              </tr>
              <tr className="border-b border-t border-gray-300">
                <td className="p-3">Item Packed Quantity </td>
                <td className="p-3">1</td>
              </tr>
              <tr className="border-b border-t border-gray-300 bg-[#F0F3F2]">
                <td className="p-3">Form</td>
                <td className="p-3">Larry the Bird</td>
              </tr>
              <tr className="border-b border-t border-gray-300">
                <td className="p-3">Manufacturer</td>
                <td className="p-3">Dmart</td>
              </tr>
              <tr className="border-b border-t border-gray-300 bg-[#F0F3F2]">
                <td className="p-3">Net Quantity</td>
                <td className="p-3">340.0 Gram</td>
              </tr>
              <tr className="border-b border-t border-gray-300">
                <td className="p-3">Product Dimensions</td>
                <td className="p-3">9.6 x 7.49 x 18.49 cm</td>
              </tr>
            </tbody>
          </table>
          <table className="h-[50px]">
            <tbody className="text-sm font-semibold text-gray-500">
              <tr className="border-b   border-gray-300 bg-[#F0F3F2] ">
                <td className="p-3 ">ASIN</td>
                <td className="p-3 ">SB0025UJ75W</td>
              </tr>
              <tr className="border-b   border-t border-gray-300">
                <td className="p-3 ">Best Sellers Rank </td>
                <td className="p-3 ">#2 in Fruits</td>
              </tr>
              <tr className="border-b   border-t border-gray-300 bg-[#F0F3F2]">
                <td className="p-3 ">Date First Available</td>
                <td className="p-3 ">30 April 2022</td>
              </tr>
              <tr className="border-b   border-t border-gray-300 ">
                <td className="p-3 ">Item Weight</td>
                <td className="p-3 ">500g</td>
              </tr>
              <tr className="border-b   border-t border-gray-300 bg-[#F0F3F2]">
                <td className="p-3 ">Generic Name</td>
                <td className="p-3 ">Banana Robusta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
