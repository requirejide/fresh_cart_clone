import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import english from "../assets/svg/english.svg";
import deutsch from "../assets/svg/deutsch.svg";
import { useState } from "react";

export default function SuperDeal({ background, textcolor, text }) {
  return (
    <div style={{ background: background }} className={` py-1`}>
      <div
        style={{ background: background }}
        className={`text-center md:text-start md:flex md:items-center md:justify-between  max-w-[90%] lg:max-w-[80%] mx-auto`}
      >
        <p style={{ color: textcolor }} className=" font-medium text-sm">
          {text}
        </p>
        <Language />
      </div>
    </div>
  );
}
function Language() {
  const [lan, setLan] = useState("English");
  const [flag, setFlag] = useState(english);
  const [show, setShow] = useState(false);

  function handleLanChange(text) {
    setLan(text.lang);
    setFlag(text.icon);
  }
  window.addEventListener("click", function () {
    setShow(show ? false : false);
  });
  return (
    <>
      <div
        onClick={(e) => {
          setShow(!show);
          e.stopPropagation();
        }}
        className="hidden md:flex gap-x-1 text-gray-500 font-medium -center relative cursor-pointer"
      >
        <img src={flag} alt="" />
        <div className="flex items-center hover:text-green-600 items">
          <p>{lan}</p>
          <span className="">
            <IoMdArrowDropdown />
          </span>
        </div>
        {show && <LanguageDrop handleLanChange={handleLanChange} />}
      </div>
    </>
  );
}

function LanguageDrop({ handleLanChange }) {
  return (
    <>
      <ul className="absolute  top-full z-50 rounded-xl w-[150%] h-auto p-2 bg-white border border-gray-200">
        {[
          { id: 1, lang: "English", icon: english },
          { id: 2, lang: "Deutsch", icon: deutsch },
        ].map((value) => (
          <li
            key={value.id}
            onClick={() => handleLanChange(value)}
            className="flex gap-x-1 items-center hover:bg-gray-100 hover:cursor-pointer px-2 rounded relative mb-1 "
          >
            <img src={value.icon} alt="" />
            <p>{value.lang}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
