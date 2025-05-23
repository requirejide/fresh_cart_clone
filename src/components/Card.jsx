import { useEffect } from "react";
import usePrdouct from "../stores/useProduct";
import useToggle from "../stores/useToggle";
import { IoEyeOutline } from "react-icons/io5";
import { FaPlus, FaRegHeart, FaStar } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

function Card({ value }) {
  const { addToCart } = usePrdouct();
  const { setModalOpen, setModalClose, openModal } = useToggle();

  function handleCartOp(i) {
    addToCart(i);
    setModalOpen();
  }

  useEffect(() => {
    if (openModal) {
      const removeTimer = setTimeout(() => {
        setModalClose();
      }, 4000);

      return () => clearTimeout(removeTimer);
    }
  }, [setModalClose, openModal]);

  return (
    <li
      key={value.id}
      className="relative  overflow-hidden border  hover:border-green-600 border-gray-200 w-full rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Sale & Discount Badges */}
      <span className="absolute top-3 left-3 text-xs font-semibold bg-red-600 text-white px-2 py-1 rounded-md">
        Sale
      </span>
      <span className="absolute  top-3 right-3 text-xs font-semibold bg-green-600 text-white px-2 py-1 rounded-md">
        10%
      </span>

      {/* Product Image */}
      {/* .replaceAll(" ", "-") */}
      <Link
        to={`/shop/${value.title.replaceAll(" ", "-")}`}
        onClick={() => console.log(value.id)}
        className="block w-full h-[180px] mb-4 "
      >
        <img
          src={value.image[0]}
          alt="product"
          className="w-full h-full object-contain rounded-md"
        />
      </Link>

      {/* Product Info */}
      <p className="text-sm text-gray-500 mb-1">{value.category}</p>
      <h3 className="text-base font-semibold text-gray-800 mb-1">
        {value.title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-x-1 mb-4">
        <FaStar className="text-yellow-400 text-sm" />
        <FaStar className="text-yellow-400 text-sm" />
        <FaStar className="text-yellow-400 text-sm" />
        <FaStar className="text-yellow-400 text-sm" />
        <FaStarHalfAlt className="text-yellow-400 text-sm" />
        <span className="ml-2 text-xs text-gray-500 font-medium">4.3 (4)</span>
      </div>

      {/* Price & Add to Cart */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-800 flex gap-x-2">
          <span>$18</span>
          <span className="line-through text-gray-400">$24</span>
        </div>
        <button
          onClick={() => handleCartOp(value)}
          className="bg-green-700 z-50 hover:bg-green-800 text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-x-1"
        >
          <FaPlus className="text-xs" />
          <span>Add</span>
        </button>
      </div>

      {/* Action Icons on Hover */}
      <div className="absolute flex justify-center items-center gap-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition">
          <IoEyeOutline className="text-black text-sm" />
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition">
          <FaRegHeart className="text-black text-sm" />
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition">
          <MdOutlineCompareArrows className="text-black text-sm" />
        </div>
      </div>
    </li>
  );
}
export default Card;
