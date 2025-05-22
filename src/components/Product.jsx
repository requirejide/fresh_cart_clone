import React, { useState } from "react";
import usePrdouct from "../stores/useProduct";
import { useParams } from "react-router";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCompareArrows } from "react-icons/md";
import BackwardLink from "./BackwardLink";

export default function Product() {
  const { allProduct } = usePrdouct();
  const [selectedImg, setSelectedImg] = useState(0);
  const { title } = useParams();

  const details = allProduct.find(
    (value) => value.title.replaceAll(" ", "-") === title
  );

  return (
    <>
      <BackwardLink details={details} />
      <div className="bg-white  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="flex justify-center flex-col">
            <img
              src={details.image[selectedImg]}
              alt={details.title}
              className="rounded-lg object-cover w-full max-w-md"
            />
            <div className="w-full h-[120px]  flex gap-4 p-3 scrollbar-hide overflow-scroll">
              {details.image.map((value, index) => (
                <div
                  onClick={() => setSelectedImg(index)}
                  className={`w-[150px] h-full  ${
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
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
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
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Weight
                </label>
                <div className="mt-2 flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded">
                    250g
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded">
                    500g
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded">
                    1kg
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                  Add to Cart
                </button>
                <button className="text-gray-500 hover:text-gray-700">♡</button>
                <button className="text-gray-500 hover:text-gray-700">⇄</button>
              </div>
              <div className="mt-6 text-sm text-gray-700 space-y-2">
                <p>
                  <strong>Product Code:</strong> FBB00255
                </p>
                <p>
                  <strong>Availability:</strong> In Stock
                </p>
                <p>
                  <strong>Type:</strong> Fruits
                </p>
                <p>
                  <strong>Shipping:</strong> 01 day shipping. (Free pickup
                  today)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 max-w-7xl mx-auto">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                href="#"
                className="text-gray-900 border-b-2 border-green-600 py-4 px-1 text-sm font-medium"
              >
                Product Details
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 py-4 px-1 text-sm font-medium"
              >
                Information
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 py-4 px-1 text-sm font-medium"
              >
                Reviews
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 py-4 px-1 text-sm font-medium"
              >
                Seller Info
              </a>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Nutrient Value & Benefits
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
              tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae
              varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac
              rhoncus.
            </p>

            <h3 className="mt-6 text-md font-semibold text-gray-900">
              Storage Tips
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet
              vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant
              ornare ac rhoncus.
            </p>

            <h3 className="mt-6 text-md font-semibold text-gray-900">Unit</h3>
            <p className="mt-2 text-sm text-gray-700">3 units</p>

            <h3 className="mt-6 text-md font-semibold text-gray-900">Seller</h3>
            <p className="mt-2 text-sm text-gray-700">DMart Pvt. LTD</p>

            <h3 className="mt-6 text-md font-semibold text-gray-900">
              Disclaimer
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              Image shown is a representation and may slightly vary from the
              actual product. Every effort is made to maintain accuracy of all
              information displayed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
