import React, { useState } from "react";
import category from "../data/categoryData";
import { FaAngleRight } from "react-icons/fa6";
import Card from "../components/Card";
import usePrdouct from "../stores/useProduct";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoFunnelOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import useToggle from "../stores/useToggle";
motion;

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
      <motion.section
        initial={{ x: `100%` }}
        animate={{ x: `0%` }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="flex gap-x-10"
      >
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
      </motion.section>
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
            className="flex items-center catgoriesPsuedo relative hover:text-green-600 cursor-pointer justify-between  text-sm font-semibold text-gray-700 py-3"
          >
            {value.title} <FaAngleRight className="ml-2 text-xs" />
          </li>
          <AnimatePresence>
            {selectedCategory === value.id &&
              value.sub_category.map((value) => (
                <motion.p
                  initial={{ opacity: 0, y: "-50%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0, y: "-50%" }}
                  key={value}
                  className="text-sm mt-3 hover:text-green-600 mb-4 cursor-pointer transition-all duration-[0.5s] ml-4"
                >
                  {value}
                </motion.p>
              ))}
          </AnimatePresence>
        </ul>
      ))}
    </>
  );
}

function ShopProducts({ currentProduct }) {
  const [selectedOption, setSelectedOption] = useState("");
  const { setOpenCategory } = useToggle();
  const { allProduct } = usePrdouct();

  const sortedProducts = [...currentProduct].sort((a, b) => {
    if (selectedOption === "ascending") {
      return a.unit_price - b.unit_price;
    } else if (selectedOption === "descending") {
      return b.unit_price - a.unit_price;
    } else if (selectedOption === "title") {
      return a.title.localeCompare(b.title);
    } else {
      return 0;
    }
  });
  return (
    <>
      <div className="my-7 lg:flex justify-between items-center">
        <p className="font-semibold text-base mb-5 lg:mb-0">
          {allProduct.length}{" "}
          <span className="font-medium text-gray-700">Products found</span>
        </p>
        <div className="flex items-center justify-between">
          <select
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border border-gray-400  pl-2   cursor-pointer py-3 rounded-lg text-sm outline-0"
          >
            <option value="">Sort by: Featured</option>
            <option value="ascending">Price: Low to high</option>
            <option value="descending">Price: High to low</option>
            <option value="title">Sort by: A to Z</option>
            <option value="">Release Date</option>
            <option value="">Avg. Rating</option>
          </select>
          <button
            onClick={setOpenCategory}
            className="lg:hidden  flex gap-x-2 border border-gray-700 text-gray-900 rounded-lg px-4 py-2 items-center"
          >
            <IoFunnelOutline className="text-xl" />
            <span className="text-base">Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {sortedProducts.map((value) => (
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
