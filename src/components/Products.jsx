import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaPlus, FaRegHeart, FaStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import usePrdouct from "../stores/useProduct";

import { Link } from "react-router";
import Card from "./Card";

export default function Products() {
  return (
    <div className="relative  mt-20 mb-15">
      <h3 className="text-2xl font-semibold mb-7">Popular Products</h3>
      <div>
        <Product />
      </div>
    </div>
  );
}

function Product() {
  const { allProduct } = usePrdouct();
  return (
    <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {allProduct
        .map((value) => value)
        .filter((value) => !value.bestSales)
        .map((value) => (
          <Card key={value.id} value={value} />
        ))}
    </ul>
  );
}
