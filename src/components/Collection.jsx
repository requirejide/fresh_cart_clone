import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import menu_banner from "../assets/category_images/menu-banner.jpg";

const navLists = [
  "Dairy, Bread & Eggs",
  "Snacks & Munchies,",
  "Fruits & Vegetables",
  "Cold Drinks & Juices",
  "Breakfast & Instant Food",
  "Bakery & Biscuits",
  "Chicken, Meat & Fish",
];

const allCategoryList = [
  {
    id: 0,
    title: "Home",
    sublink: [
      "Home Default",
      "Home Modern",
      "Home Creative",
      "Home Local Store",
      "Home Minimalist",
    ],
  },
  {
    id: 1,
    title: "Shop",
    sublink: [
      "Home Default",
      "Home Modern",
      "Home Creative",
      "Home Local Store",
      "Home Minimalist",
    ],
  },
  {
    id: 2,
    title: "Stores",
    sublink: [
      "Home Default",
      "Home Modern",
      "Home Creative",
      "Home Local Store",
      "Home Minimalist",
    ],
  },
  {
    id: 3,
    title: "Mega menu",
    sublink: [
      {
        title: "Dairy, Bread & Eggs",
        other: [
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
        title: "Snacks & Munchies",
        other: [
          "Breakfast Cereal",
          "Noodles Pasta & Soup",
          "Frozen Veg Snacks",
          "Frozen Non-Veg Snacks",
          "Frozen Non-Veg Snacks",
          "Instant Mixes",
          "Batter",
          "Fruit and Juices",
        ],
      },
      {
        title: "Fruits & Vegetables",
        other: [
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
    id: 4,
    title: "Pages",
    sublink: [
      "Home Default",
      "Home Modern",
      "Home Creative",
      "Home Local Store",
      "Home Minimalist",
    ],
  },
  {
    id: 5,
    title: "Account",
    sublink: [
      "Home Default",
      "Home Modern",
      "Home Creative",
      "Home Local Store",
      "Home Minimalist",
    ],
  },
  {
    id: 6,
    title: "Dashboard",
    sublink: [
      "Home Default",
      "Home Modern",
      "Home Creative",
      "Home Local Store",
      "Home Minimalist",
    ],
  },
  {
    id: 7,
    title: "Docs",
    sublink: [
      "Home Default",
      "Home Modern",
      "Home Creative",
      "Home Local Store",
      "Home Minimalist",
    ],
  },
];

export default function Collection() {
  return (
    <nav className="">
      <div className="hidden lg:flex items-center gap-x-6">
        <AllCategoryBtn />
        <AllCategories />
      </div>
    </nav>
  );
}

function AllCategoryBtn() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
        className={`relative py-2  rounded-lg flex items-center justify-center gap-x-2 bg-[#23b123] hover:bg-[#099309] w-48  h-11 `}
      >
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
        <div className="text-white  ">
          <p className="font-semibold">All Categories</p>
        </div>
        {/* {category && <AllCategoryList />} */}
        {visible && (
          <DropDown links={navLists} position="top-full" width="w-60" />
        )}
      </button>
    </>
  );
}

function AllCategories() {
  const [selectedId, setSelectedId] = useState(null);
  function handleLinks(id) {
    setSelectedId(id);
  }
  return (
    <>
      <ul className="flex lg:text-md lg:gap-x-5">
        {allCategoryList.map((value) => (
          <li
            onMouseOver={() => handleLinks(value.id)}
            onMouseOut={() => handleLinks(null)}
            key={value.id}
            className="flex  gap-x-1 items-center relative cursor-pointer  h-[57px]"
          >
            <p>{value.title}</p>
            {value.id <= 5 && <FaAngleDown className="text-[11px]" />}

            {selectedId === value.id && value.id <= 5 && (
              <DropDown
                id={value.id}
                links={value.sublink}
                width={
                  value.id === 3
                    ? "w-screen max-w-[90vw] lg:w-[90vw] lg:left-[-500%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    : "w-40"
                }
                position={value.id === 3 ? "top-full   p-4" : "top-full "}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

function DropDown({ id, links, position, width }) {
  return (
    <>
      <ul
        className={`absolute bg-white border z-50 border-gray-200  p-2 px-3 rounded-lg shadow-2xl shadow-gray-200 ${position} ${width}`}
      >
        {links.map((value) => (
          <li
            key={crypto.randomUUID()}
            className={`text-sm mb-2  ${
              id === 3 ? "text-green-400 " : `text-gray-800`
            }`}
          >
            {id === 3 ? value.title : value}
            {id === 3 && (
              <ul className={`text-gray-800 mt-2`}>
                {value.other.map((value) => (
                  <li key={crypto.randomUUID()} className="mb-2">
                    {value}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {id === 3 && (
          <div className=" bg-red-400">
            <img src={menu_banner} alt="menu-banner" />
          </div>
        )}
      </ul>
    </>
  );
}
