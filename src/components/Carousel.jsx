import React, { useEffect, useRef, useState } from "react";
import slide_1 from "../assets/carousel/image_1.jpg";
import slide_2 from "../assets/carousel/image_2.jpg";
import { motion } from "motion/react";
motion;
const carousel = [
  {
    img: slide_1,
    text_1: "Opening Sale Discount 50%",
    text_2: "SuperMarket For  Fresh Grocery",
    text_3:
      "Introduced a new model for online grocery shopping  and convinient home delivery",
  },
  {
    img: slide_2,
    text_1: "Opening Sale Discount 50%",
    text_2: "Free Shipping on Orders over $100",
    text_3:
      "Introduced a new model for online grocery shopping  and convinient home delivery",
  },
];
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carRef = useRef(null);

  function nextSlide() {
    carRef.current = setInterval(() => {
      setCurrentIndex((curr) => (curr < carousel.length - 1 ? curr + 1 : 0));
    }, 4000);
  }

  function pauseSlide() {
    clearInterval(carRef.current);
  }
  useEffect(() => {
    nextSlide();

    return () => pauseSlide();
  }, []);

  return (
    <div className="my-3">
      <div className=" relative  flex mt-5 h-[55vh] md:h-[75vh] overflow-hidden scrollbar-hide">
        <div className=" absolute z-50 bottom-10 flex gap-3  w-full justify-center">
          {Array.from({ length: carousel.length }, (_, i) => i).map((value) => (
            <span
              key={value}
              className={`w-2 h-2  bg-gray-400 rounded-full ${
                value === currentIndex && "bg-gray-700"
              }  `}
            ></span>
          ))}
        </div>
        {carousel.map((value, index) => (
          <motion.div
            animate={{ translateX: `-${currentIndex * 100}%` }}
            transition={{
              duration: 0.5,
              translateX: { type: "spring", bounce: 0.5 },
            }}
            onMouseEnter={pauseSlide}
            onMouseLeave={nextSlide}
            key={index}
            className={`bg-amber-400   bg-center rounded-xl    w-full h-full flex pl-7  md:pl-10 items-center flex-shrink-0 `}
            style={{
              backgroundImage: `url(${value.img})`,
              // backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div>
              <span className="inline-block mb-5 text-xs font-semibold py-1 px-3 rounded-full bg-[#ffc107]">
                {value.text_1}
              </span>
              <h1 className="font-extrabold text-4xl md:text-5xl md:max-w-[60%] mb-3 text-[#001e2b] md:leading-14">
                {value.text_2}
              </h1>
              <p className="text-[#5c6c75] font-medium max-w-[80%] md:max-w-[60%] mb-3">
                {value.text_3}
              </p>
              <button className="bg-[#001e2b] hover:bg-[#26404B] text-white py-3 w-34 rounded-lg">
                Shop now 👉
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
