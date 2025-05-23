import React, { useState } from "react";
import freshcart from "../assets/svg/freshcart-logo.svg";
import { SlLocationPin } from "react-icons/sl";
import useToggle from "../stores/useToggle";
import usePrdouct from "../stores/useProduct";
import { Link, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className=" pt-5 pb-5 lg:pb-4 bg-white  ">
        <div className="flex items-center justify-between">
          <Link>
            <img
              src={freshcart}
              alt="company logo"
              className="object-cover cursor-pointer"
            />
          </Link>
          <form
            onSubmit={() => navigate("/products")}
            className="hidden relative w-[55%]  md:flex md:items-center md:gap-x-2 "
          >
            <SearchBar />

            <LocationBtn />
          </form>

          <div className="flex  items-center gap-x-4">
            <WishlistSvg />

            <AuthSvg />

            <CartSvg />

            <Hambuger />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

function WishlistSvg() {
  return (
    <>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span className="bg-green-700 text-xs font-semibold text-white absolute -top-3 -right-2 w-[20px] h-[20px] rounded-full flex items-center justify-center">
          12
        </span>
      </div>
    </>
  );
}

function AuthSvg() {
  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
    </>
  );
}
function CartSvg() {
  const { setIsCartOpen } = useToggle();
  const { cart } = usePrdouct();
  return (
    <>
      <div onClick={setIsCartOpen} className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span className="bg-green-700 text-xs font-semibold text-white absolute -top-3 -right-2 w-[20px] h-[20px] rounded-full flex items-center justify-center">
          {cart.length}
        </span>
      </div>
    </>
  );
}

function Hambuger() {
  return (
    <>
      <div>
        <svg
          // onClick={() => toggleMobileNav()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-text-indent-left text-primary md:hidden"
        >
          <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
        </svg>
      </div>
    </>
  );
}

function SearchBar() {
  const [outline, setOutline] = useState(false);
  const [inputEl, setInputEl] = useState("");
  // const { allProduct } = usePrdouct();

  window.addEventListener("click", function () {
    setOutline(false);
  });

  function handleChange(e) {
    setInputEl(e);
  }

  return (
    <>
      {inputEl.length > 1 && (
        <div className="absolute  w-full h-20   border border-gray-200 shadow-2xl z-50   p-3 bg-white top-full  rounded-lg">
          {inputEl}
        </div>
      )}
      <div
        onClick={(e) => {
          setOutline(true);
          e.stopPropagation();
        }}
        className={`border relative border-gray-300 h-11 w-full ${
          outline
            ? "outline-4 outline-green-200 transition-all duration-[0.2s]"
            : "outline-0 outline-green-200 transition-all duration-[0.2s]"
        }   rounded-lg overflow-hidden transition-all duration-75 `}
      >
        <input
          value={inputEl}
          onChange={(e) => handleChange(e.target.value)}
          className="h-full px-3 outline-none w-full placeholder:text-slate-400 placeholder:font-medium placeholder:text-base "
          type="text"
          placeholder="Search for products"
        />
      </div>
    </>
  );
}

function LocationBtn() {
  return (
    <>
      <div className="border border-gray-300  h-11 w-32  hover:bg-gray-200 transition-all duration-200   rounded-lg flex items-center justify-center gap-x-2 ">
        <SlLocationPin className="text-gray-500" />
        <button className="h-full text-sm font-semibold text-gray-500">
          Location
        </button>
      </div>
    </>
  );
}
