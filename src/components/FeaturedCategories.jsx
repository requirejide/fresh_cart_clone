import React, { useEffect, useState } from "react";
import cat_1 from "../assets/category_images/cat-1.jpg";
import cat_2 from "../assets/category_images/cat-2.jpg";
import cat_3 from "../assets/category_images/cat-3.jpg";
import cat_4 from "../assets/category_images/cat-4.jpg";
import cat_5 from "../assets/category_images/cat-5.jpg";
import cat_6 from "../assets/category_images/cat-6.jpg";
import cat_7 from "../assets/category_images/cat-7.jpg";
import cat_8 from "../assets/category_images/cat-8.jpg";
import cat_9 from "../assets/category_images/cat-9.jpg";
import cat_10 from "../assets/category_images/cat-10.jpg";
import cat_11 from "../assets/category_images/cat-11.jpg";
import cat_12 from "../assets/category_images/cat-12.jpg";

const featuredCat = [
  { title: "Atta, Rice & Dal", img: cat_1 },
  { title: "Baby Care", img: cat_2 },
  { title: "Bakery & Biscuits", img: cat_3 },
  { title: "Chicken, Meat & Fish", img: cat_4 },
  { title: "Cleaning Essentials", img: cat_5 },
  { title: "Fruits and Vegetables", img: cat_6 },
  { title: "Dairy, Bread and Egg", img: cat_7 },
  { title: "Fruits and Vegetable", img: cat_8 },
  { title: "Instant Food", img: cat_9 },
  { title: "Pet Care", img: cat_10 },
  { title: "Snacks and Munchies", img: cat_11 },
  { title: "Tea, Coffee and Drink", img: cat_12 },
];

export default function FeaturedCategories() {
  return (
    <>
      <div className="max-w-[94%] lg:max-w-[85%] mx-auto mb-10">
        <FeaturedTitle />
        <FeaturedSlider />
      </div>
    </>
  );
}

function FeaturedTitle() {
  return <h2 className="text-2xl mt-20 font-semibold">Featured Categories</h2>;
}

function FeaturedSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((curr) => (curr < featuredCat.length - 5 ? curr + 1 : 0));
    }, 4000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <ul className="w-full h-[30vh] scrollbar-hide  mt-8 flex gap-x-5  overflow-hidden px-3">
      {featuredCat.map((value, index) => (
        <li
          key={index}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          className="w-[200px] md:w-[300px] rounded-lg transition-all duration-[0.3s]  flex flex-col justify-center border gap-y-3  border-gray-300 items-center h-full flex-shrink-0"
        >
          <img src={value.img} alt={value.title} className="object-contain " />
          <span className="text-sm text-gray-700">{value.title}</span>
        </li>
      ))}
    </ul>
  );
}
