function WishList() {
  return (
    <>
      <p className="text-3xl mb-2">My WishList</p>

      <div className="mt-2  overflow-x-scroll">
        <p className="text-sm font-medium text-gray-600">
          There are 3 product in your WishList
        </p>
        <table className="min-w-[1100px]  bg-white mt-10  rounded-lg ">
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
            <tr className="border-b ">
              <td className="h-[100px] flex items-center gap-x-5">
                <input type="checkbox" />

                <div className=" relative p-3 w-[100px] h-[60px]  flex items-center space-x-3 text-4xl">
                  <img fill src="" alt="" className="object-contain" />
                </div>
              </td>
              <td className="p-3 font-medium">
                <div>
                  <p className="font-semibold">title</p>
                  <p className="text-sm text-gray-500">2pc</p>
                </div>
              </td>
              <td className="p-3">
                <span className={` text-sm px-2 py-1 rounded `}>price</span>
              </td>
              <td className="p-3">
                <span className={` text-sm px-2 py-1 rounded `}>status</span>
              </td>
              <td className="p-3">
                <button
                  className={`text-white bg-green-600 text-sm px-4 py-2 rounded`}
                >
                  Add to Cart
                </button>
              </td>
              <td className="p-3">
                <button className="text-gray-500 hover:text-red-600">🗑</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WishList;
