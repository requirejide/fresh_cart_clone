import React from "react";
import good_1 from "../assets/goods_cta/image_7.jpg";
import good_2 from "../assets/goods_cta/image_8.jpg";

export default function Cta() {
  return (
    <>
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto mt-8 mb-10">
        <div className="md:flex md:items-center md:gap-x-10">
          <div className="md:w-1/2 h-[200px] md:h-full relative mb-3 md:mb-0">
            <img
              src={good_1}
              alt="goods"
              className="w-full h-full object-cover "
            />

            <div className="absolute top-10 md:top-10 left-7 md:left-8 ">
              <h1 className={`text-2xl leading-[1.2] mb-1   font-bold`}>
                Fruits & Vegetables
              </h1>
              <p className="text-base md:text-lg font-semibold mb-5 lg:mb-3 text-[#5D6E77] max-w-[33rem]">
                Get Upto 30% Off
              </p>

              <button className="bg-[#15242b] hover:bg-[#2e4c5a] flex items-center gap-x-2 py-2 px-3 rounded-md text-white font-semibold">
                <p>Shop Now</p>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 h-[200px] md:h-full relative mb-3 md:mb-0">
            <img
              src={good_2}
              alt="goods"
              className="w-full h-full object-cover "
            />

            <div className="absolute top-10 md:top-10 left-7 md:left-8 ">
              <h1 className={`text-2xl leading-[1.2] mb-1   font-bold`}>
                Freshly Baked Buns
              </h1>
              <p className="text-base md:text-lg font-semibold mb-5 lg:mb-3 text-[#5D6E77] max-w-[33rem]">
                Get Upto 25% Off
              </p>

              <button className="bg-[#15242b] hover:bg-[#2e4c5a] flex items-center gap-x-2 py-2 px-3 rounded-md text-white font-semibold">
                <p>Shop Now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
