import React, { useState } from "react";
import category from "../data/categoryData";
import { FaAngleRight } from "react-icons/fa6";
import Card from "../components/Card";
import usePrdouct from "../stores/useProduct";
import { Link } from "react-router";

export default function Shop() {
  return (
    <>
      <BackwardLinks />
      <section className="flex gap-x-10">
        <aside className="hidden lg:block lg:w-[20%] p-3 py">
          <CategoriesInShop />
        </aside>
        <main className="lg:w-[80%] mb-10 ">
          <BannerTitle />
          <ShopProducts />
        </main>
      </section>
    </>
  );
}

function BannerTitle() {
  return (
    <>
      <div className="bg-[#F0F3F2] h-[15vh] rounded-lg flex items-center">
        <h3 className="text-4xl font-semibold pl-10">Snacks & Munchies</h3>
      </div>
    </>
  );
}

function CategoriesInShop() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  function handleCategory(id) {
    setSelectedCategory((curr) => (curr === id ? null : id));
  }
  return (
    <>
      <h4 className="text-xl font-semibold mb-2">Category</h4>
      {category.map((value) => (
        <ul key={value.id}>
          <li
            onClick={() => handleCategory(value.id)}
            className="flex items-center catgoriesPsuedo relative hover:text-green-600 cursor-pointer justify-between  text-sm font-semibold text-gray-900 py-3"
          >
            {value.title} <FaAngleRight className="ml-2 text-xs" />
          </li>
          {selectedCategory === value.id &&
            value.sub_category.map((value) => (
              <p
                key={value}
                className="text-sm mt-3 mb-5 transition-all duration-[0.5s] ml-2"
              >
                {value}
              </p>
            ))}
        </ul>
      ))}
    </>
  );
}

function ShopProducts() {
  const { allProduct } = usePrdouct();
  return (
    <>
      <div className="py-4">{allProduct.length} Products found</div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allProduct.map((value) => (
          <Card key={value.id} value={value} />
        ))}
      </div>
    </>
  );
}

function BackwardLinks() {
  return (
    <>
      <ul className="flex gap-x-5 text-[.9rem] my-5 ">
        <Link to="/">
          <li className="text-[#0AAD0A] font-medium">Home</li>
        </Link>
        <span className="text-slate-400">/</span>
        <Link to="/shop">
          <li className="text-[#0AAD0A] font-medium">Shop</li>
        </Link>
      </ul>
    </>
  );
}
