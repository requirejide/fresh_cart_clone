import { Link } from "react-router";
import { RiDeleteBin2Line } from "react-icons/ri";
import usePrdouct from "../stores/useProduct";

function WishList() {
  const { wishList, filterWishList } = usePrdouct();

  return (
    <>
      <BackwardLinks />
      <p className="text-3xl mb-2">My WishList</p>

      <div className="  overflow-x-scroll scrollbar-hide mb-10">
        <p className="text-sm font-medium text-gray-600">
          {wishList.length <= 0
            ? "There are no product in your WishList"
            : `There are ${wishList.length} products in your WishList`}
        </p>
        <table className="min-w-[800px] md:min-w-[1100px] lg:w-full   bg-white mt-10  rounded-lg ">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Product</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
              <th className="p-3">Remove</th>
            </tr>
          </thead>

          <tbody>
            {wishList.map((value) => (
              <tr key={value.id} className="border-b border-gray-200 ">
                <td className="h-[100px] flex items-center gap-x-5">
                  <input type="checkbox" />

                  <div className=" relative p-3 w-[100px] h-[60px]  flex items-center space-x-3 text-4xl">
                    <Link to={`/shop/${value.title.replaceAll(" ", "-")}`}>
                      <img
                        src={value.image[0]}
                        alt={value.title}
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </td>
                <td className="p-3 font-medium">
                  <div>
                    <Link to={`/shop/${value.title.replaceAll(" ", "-")}`}>
                      <p className="font-semibold">{value.title}</p>
                    </Link>
                    <p className="text-sm text-gray-500">2pc</p>
                  </div>
                </td>
                <td className="p-3">
                  <span className={` text-sm px-2 py-1 rounded `}>
                    ${value.unit_price}
                  </span>
                </td>
                <td className="p-2">
                  <span
                    className={` text-xs px-2 py-1 text-white ${
                      value.in_stock ? "bg-green-600" : "bg-red-600"
                    } rounded `}
                  >
                    {value.in_stock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    className={`text-white bg-green-600 text-sm px-4 py-2 rounded`}
                  >
                    Add to Cart
                  </button>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => filterWishList(value)}
                    className="text-gray-500 hover:text-red-600"
                  >
                    <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WishList;

function BackwardLinks() {
  return (
    <>
      <ul className="flex gap-x-5 text-[.9rem] my-5 ">
        <Link to="/">
          <li className="text-[#0AAD0A] font-medium">Home</li>
        </Link>
        <span className="text-slate-400">/</span>
        <Link to="/shop">
          <li className="text-[#0AAD0A] font-medium">Shop Wishlist</li>
        </Link>
      </ul>
    </>
  );
}
