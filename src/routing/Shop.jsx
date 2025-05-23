import React, { useState } from "react";
import category from "../data/categoryData";
import { FaAngleRight } from "react-icons/fa6";
import Card from "../components/Card";
import usePrdouct from "../stores/useProduct";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoFunnelOutline } from "react-icons/io5";

export default function Shop() {
  const { allProduct } = usePrdouct();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(allProduct.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProduct = allProduct.slice(startIndex, endIndex);

  function handleCurrentPage(id) {
    setCurrentPage(id);
  }

  return (
    <>
      <BackwardLinks />
      <section className="flex gap-x-10">
        <aside className="hidden lg:block lg:w-[20%] p-3 py">
          <CategoriesInShop />
        </aside>
        <main className="lg:w-[80%] mb-10 ">
          <BannerTitle />
          <ShopProducts currentProduct={currentProduct} />
          <PaginationButtons
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            totalPages={totalPages}
            nextPage={() =>
              setCurrentPage((curr) => (totalPages > curr ? curr + 1 : curr))
            }
            prevPage={() => setCurrentPage((curr) => (curr > 1 ? curr - 1 : 1))}
          />
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
      <h4 className=" text-xl font-semibold mb-2">Category</h4>
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

function ShopProducts({ currentProduct }) {
  const { allProduct } = usePrdouct();
  return (
    <>
      <p className="py-4 ">
        <span className="font-bold">{allProduct.length}</span> Products found
      </p>
      <button className="lg:hidden   mb-4 flex gap-x-2 border text-gray-900 rounded-lg px-4 py-2 items-center">
        <IoFunnelOutline className="text-xl" />
        <span className="text-base">Filters</span>
      </button>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {currentProduct.map((value) => (
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

function PaginationButtons({
  currentPage,
  handleCurrentPage,
  totalPages,
  prevPage,
  nextPage,
}) {
  return (
    <>
      <div className="flex space-x-2">
        <button
          onClick={prevPage}
          className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-lg"
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i).map((value) => (
          <button
            key={value + 1}
            onClick={() => handleCurrentPage(value + 1)}
            className={`border border-gray-300 ${
              currentPage === value + 1 &&
              "bg-green-600 text-white font-semibold"
            } hover:bg-green-600 hover:text-white text-gray-700 text-sm px-4 py-2 rounded-lg`}
          >
            {value + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-lg"
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}
