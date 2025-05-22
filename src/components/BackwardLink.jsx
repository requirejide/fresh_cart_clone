import React from "react";
import { Link } from "react-router";

function BackwardLink({ details }) {
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
        <span className="text-slate-400">/</span>

        <li className="text-gray-400 font-medium">{details.title}</li>
      </ul>
    </>
  );
}

export default BackwardLink;
