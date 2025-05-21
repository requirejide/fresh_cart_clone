import React, { useEffect, useState } from "react";
import coffeBanner from "../assets/goods_cta/banner-deal.jpg";
import usePrdouct from "../stores/useProduct";
import {
  FaGift,
  FaPlus,
  FaRegHeart,
  FaShoppingBasket,
  FaStar,
  FaStarHalfAlt,
  FaTruck,
  FaUndoAlt,
} from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import CountdownTimer from "./CountdownTimer";

export default function DailyBestSells() {
  const { allProduct } = usePrdouct();
  return (
    <>
      <div className="max-w-[90%]  lg:max-w-[85%] mx-auto">
        <h2 className="text-2xl font-semibold mb-7">Daily Best Sells</h2>
        <div className="h-[500px] flex justify-between gap-x-3 overflow-scroll scrollbar-hide">
          <CoffeeBanner />
          {allProduct
            .map((value) => value)
            .filter((value) => value.bestSales)
            .map((value) => (
              <SalesList key={value.id} value={value} />
            ))}
        </div>
        <GridFeature />
      </div>
      ;
    </>
  );
}

function CoffeeBanner() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${coffeBanner})` }}
        className="min-w-[350px] rounded-lg h-full bg-amber-600 bg-cover bg-center p-7 py-9"
      >
        <div>
          <h3 className="text-white text-2xl font-bold mb-3">
            100% Organic Coffee <br /> Beans.
          </h3>
          <p className="text-gray-300 mb-3">Get the best deal before close.</p>
          <button className="bg-green-700 p-3 rounded-lg text-white">
            Shop Now 👉
          </button>
        </div>
      </div>
    </>
  );
}

function SalesList({ value }) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const days = 30;
    const hours = 23;
    const minutes = 50;
    const seconds = 40;

    const totalHours = days * 24 + hours;
    const totalMinutes = totalHours * 60 + minutes;
    const totalSeconds = totalMinutes * 60 + seconds;

    return totalSeconds;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (24 * 3600));
  const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="relative flex flex-col min-w-[300px]   border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all hover:border-teal-500 cursor-pointer bg-white">
      {/* Product Image */}

      <div className="relative w-full h-48 sm:h-56 flex items-center justify-center rounded-md bg-gray-50 overflow-hidden">
        <img
          src={value.image[0]}
          alt="Product"
          className="object-contain w-full h-full p-4"
        />
      </div>

      {/* Action Buttons (centered on image) */}
      {/* <div className="absolute top-4 right-4 flex gap-2 z-20">
        <IconButton icon={<IoEyeOutline />} />
        <IconButton icon={<FaRegHeart />} />
        <IconButton icon={<MdOutlineCompareArrows />} />
      </div> */}

      {/* Product Info */}
      <div className="mt-4">
        <p className="text-xs text-gray-400 uppercase font-medium tracking-wide">
          Sale Category
        </p>
        <p className="font-semibold text-sm md:text-base mt-1">{value.title}</p>

        {/* Pricing & Rating */}
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm space-x-2">
            <span className="font-bold text-black">$50</span>
            <span className="line-through text-gray-400 text-xs">
              sale price
            </span>
          </div>
          <div className="flex items-center text-[#FFC107] text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <span className="text-gray-500 text-xs font-medium ml-2">
              4.3 (4)
            </span>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <button className="mt-4 bg-green-700 w-full flex items-center justify-center gap-2 py-2 text-sm rounded-md text-white hover:bg-green-800 transition">
        <FaPlus />
        <span>Add to cart</span>
      </button>

      {/* Countdown Timer */}
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {/* <CountdownTimer  day={30} hour={23} minute={59} second={59} /> */}

        <div className="border p-2 px-3 rounded-lg border-gray-300 text-center">
          <p className="lowercase">{days}</p>
          <p className="text-gray-700 text-sm">Days</p>
        </div>
        <div className="border p-2 px-3 rounded-lg border-gray-300 text-center">
          <p className="lowercase">{hours}</p>
          <p className="text-gray-700 text-sm">Hours</p>
        </div>
        <div className="border p-2 px-3 rounded-lg border-gray-300 text-center">
          <p className="lowercase">{minutes}</p>
          <p className="text-gray-700 text-sm">Mins</p>
        </div>
        <div className="border p-2 px-3 rounded-lg border-gray-300 text-center">
          <p className="lowercase">{seconds}</p>
          <p className="text-gray-700 text-sm">Sec</p>
        </div>
      </div>
    </div>
  );
}

const IconButton = ({ icon }) => (
  <div className="w-10 h-10 rounded-lg border bg-white flex items-center justify-center shadow-md hover:border-teal-600 hover:bg-teal-600 hover:text-white transition">
    {icon}
  </div>
);

function GridFeature() {
  return (
    <section className="relative  mt-40 mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading (optional) */}
        <h2 className="text-2xl font-semibold text-center mb-8">
          Why Shop With FreshCart?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="flex flex-col  p-4">
            <FaTruck className="text-3xl text-green-600 mb-5" />
            <h3 className="font-semibold text-lg mb-2">
              10 minute grocery now
            </h3>
            <p className="text-gray-600">
              Get your order delivered to your doorstep at the earliest from
              FreshCart pickup stores near you.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col   p-4">
            <FaGift className="text-3xl text-green-600 mb-5" />
            <h3 className="font-semibold text-lg mb-2">Best Prices & Offers</h3>
            <p className="text-gray-600">
              Cheaper prices than your local supermarket, plus great cashback
              offers. Get the best prices & deals here.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col   p-4">
            <FaShoppingBasket className="text-3xl text-green-600 mb-5" />
            <h3 className="font-semibold text-lg mb-2">Wide Assortment</h3>
            <p className="text-gray-600">
              Choose from 5000+ products across food, personal care, household,
              bakery, veg and non-veg & other categories.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col   p-4">
            <FaUndoAlt className="text-3xl text-green-600 mb-5" />
            <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
            <p className="text-gray-600">
              Not satisfied with a product? Return it at the doorstep & get a
              refund within hours. No questions asked!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
