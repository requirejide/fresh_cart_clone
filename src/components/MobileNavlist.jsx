import logoIcon from "../assets/svg/freshcart-logo.svg";
import { IoCloseOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import { useState } from "react";
import useToggle from "../stores/useToggle";
import { AnimatePresence, motion } from "motion/react";
motion;
const categories = [
  {
    id: 1,
    title: "Home",
    subLinks: [
      { id: 1, title: "Home Default" },
      { id: 2, title: "Home Modern" },
      { id: 3, title: "Home Creative" },
      { id: 4, title: "Home Local Store" },
      { id: 5, title: "Home Minimalist" },
    ],
  },
  {
    id: 2,
    title: "Shop",
    subLinks: [
      { id: 1, title: "Shop Grid - Filter" },
      { id: 2, title: "Shop Grid - 3 column" },
      { id: 3, title: "Shop List - Filter" },
      { id: 4, title: "Shop - Filter" },
      { id: 5, title: "Shop Wide" },
      { id: 6, title: "Shop Single" },
      { id: 7, title: "Shop Single v2" },
      { id: 8, title: "Shop Wishlist" },
      { id: 9, title: "Shop Cart" },
      { id: 10, title: "Shop Checkout" },
    ],
  },
  {
    id: 3,
    title: "Stores",
    subLinks: [
      { id: 1, title: "Store List" },
      { id: 2, title: "Store Grid" },
      { id: 3, title: "Store Single" },
    ],
  },
  {
    id: 4,
    title: "Mega menu",
    subLinks: [
      {
        id: 1,
        title: "Dairy, Bread & Eggs",
        subLinks: [
          "Butter",
          "Milk Drinks",
          "Curd & Yogurt",
          "Eggs",
          "Buns & Bakery",
          "Cheese",
          "Condensed Milk",
          "Dairy Products",
        ],
      },
      {
        id: 2,
        title: "Breakfast & Instant Food",
        subLinks: [
          "Breakfast Cereal",
          "Noodles, Pasta & Soup",
          "Frozen Veg Snacks",
          "Frozen Non-Veg Snacks",
          "Frozen Non-Veg Snacks",
          "Instant Mixes",
          "Batter",
          "Fruit and Juices",
        ],
      },
      {
        id: 3,
        title: "Cold Drinks & Juices",
        subLinks: [
          "Soft Drinks",
          "Fruit Juices",
          "Coldpress",
          "Water & Ice Cubes",
          "Soda & Mixers",
          "Health Drinks",
          "Herbal Drinks",
          "Milk Drinks",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Pages",
    subLinks: [
      { id: 1, title: "Blog" },
      { id: 2, title: "Blog Single" },
      { id: 3, title: "Blog Category" },
      { id: 4, title: "About us" },
      { id: 5, title: "404 Error" },
      { id: 6, title: "Contact" },
    ],
  },
  {
    id: 6,
    title: "Account",
    subLinks: [
      { id: 1, title: "Sign in" },
      { id: 2, title: "Signup" },
      { id: 3, title: "Forgot Password" },
      { id: 4, title: "My Account" },
    ],
  },
  { id: 7, title: "Dashboard", subLinks: [] },
  { id: 8, title: "Docs", subLinks: [] },
];

function MobileNavlist() {
  const { openMobileNav } = useToggle();
  return (
    <>
      <AnimatePresence>
        {openMobileNav && (
          <motion.nav
            initial={{ opacity: 0, translateX: "100%", scale: 0.5 }}
            animate={{ opacity: 1, translateX: "0%", scale: 1 }}
            transition={{
              duration: 0.3,
              scale: { type: "spring", bounce: 0.4 },
            }}
            exit={{ opacity: 0, translateX: "100%", scale: 0 }}
            className="md:hidden fixed overflow-scroll top-0 z-[300] p-4 bottom-0 left-0 right-0 bg-white"
          >
            <Logo />
            <SearchBar />
            <Button />
            <MobileCategory categories={categories} />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
export default MobileNavlist;

function Logo() {
  const { setOpenMobileNav } = useToggle();
  return (
    <div className="flex justify-between mb-5">
      <img src={logoIcon} alt="" />
      <IoCloseOutline
        onClick={setOpenMobileNav}
        className="text-3xl text-gray-700 cursor-pointer"
      />
    </div>
  );
}

function Button() {
  return (
    <button className="bg-green-600 mb-7 flex items-center justify-center font-medium text-white mt-4 w-full py-3 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="me-1 text-white"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
      <p>All Departments</p>
    </button>
  );
}

function MobileCategory({ categories }) {
  const [selectedDrop, setSelectedDrop] = useState(null);

  return (
    <>
      <ul className="  ">
        {categories.map((value) => (
          <li
            key={value.id}
            className="mb-5 cursor-pointer"
            onClick={() =>
              setSelectedDrop((curr) => (curr === value.id ? null : value.id))
            }
          >
            <div className="flex justify-between">
              <p className="text-gray-700 text-sm font-medium">{value.title}</p>
              {value.id <= 6 && (
                <FaAngleDown className="text-sm text-gray-700" />
              )}
            </div>
            {selectedDrop === value.id && <Sublinks value={value} />}
          </li>
        ))}
      </ul>
    </>
  );
}

function Sublinks({ value }) {
  return (
    <>
      {value.subLinks.length > 0 && (
        <ul className="w-full border rounded-lg border-gray-300 text-gray-700 p-3 text-sm mt-4">
          {value.subLinks?.map((value) => (
            <li className="font-base mb-1 p-2 rounded cursor-pointer hover:bg-gray-100">
              {value.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
