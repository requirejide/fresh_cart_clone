import { IoCloseOutline } from "react-icons/io5";
import useToggle from "../stores/useToggle";
import { RiDeleteBin2Line } from "react-icons/ri";
import usePrdouct from "../stores/useProduct";

export default function Cart() {
  const { isCartOpen, setIsCartOpen } = useToggle();
  return (
    <>
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className={`fixed  top-0 bottom-0   w-full z-[100] bg-[#0000006c] flex justify-end`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-[550px] h-full bg-white transition-all duration-[0.2s]  ${
              isCartOpen
                ? "translate-x-0 delay-[0.5s]"
                : "translate-x-[-100%] delay-[0.5s"
            }`}
          >
            <CartInfo />
          </div>
        </div>
      )}
    </>
  );
}

function CartInfo() {
  const { setIsCartOpen } = useToggle();
  return (
    <>
      <div className="flex   justify-between items-center p-4 mb-1 ">
        <div>
          <p className="text-xl font-semibold">Shop Cart</p>
          <p className="text-xs text-gray-500">Location in 382480</p>
        </div>
        <div
          onClick={() => setIsCartOpen(false)}
          className="text-3xl text-gray-500"
        >
          <IoCloseOutline />
        </div>
      </div>
      <hr className="text-gray-300 mb-4" />
      <div className="w-[93%] mx-auto overflow-scroll scrollbar-hide max-h-[73vh]">
        <p className="bg-[#F8D6D6] border border-red-300 p-3 text-sm rounded-lg">
          You’ve got FREE delivery. Start
          <span className="font-semibold"> checkout now!</span>
        </p>
        <CartItems />
      </div>
      <CartButtons />
    </>
  );
}

function CartItems() {
  const { addToCart, cart, decrementQuantity, removeProduct } = usePrdouct();

  return (
    <ul className="mb-5">
      {cart.map((value) => (
        <li key={value.id} className="flex items-center justify-between">
          <div className="h-[100px]  flex items-center gap-x-5 ">
            <img
              src={value.image[0]}
              alt=""
              className="w-[60px] h-[60px] object-contain"
            />
            <div>
              <p className="text-sm mb-2 font-semibold">{value.title}</p>
              <div className="flex items-center gap-x-2 hover:text-red-600">
                <RiDeleteBin2Line
                  onClick={() => removeProduct(value)}
                  className="text-green-500 cursor-pointer hover:text-red-600"
                />
                <p className="text-xs text-gray-500 ">Remove</p>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <button
              onClick={() => decrementQuantity(value)}
              className="border border-gray-300 w-[35px] h-[30px]  flex justify-center items-center"
            >
              -
            </button>
            <p className="border border-gray-300 w-[35px] h-[30px]  text-sm flex justify-center items-center">
              {value.quantity}
            </p>
            <button
              onClick={() => addToCart(value)}
              className="border border-gray-300 w-[35px] h-[30px]  flex justify-center items-center"
            >
              +
            </button>
          </div>
          <p className="font-bold">${value.unit_price * value.quantity}</p>
        </li>
      ))}
    </ul>
  );
}

function CartButtons() {
  return (
    <div className="flex justify-between items-center  gap-4 p-4">
      <button className="bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white text-sm font-medium py-2 px-4 rounded-lg shadow">
        Continue Shopping
      </button>
      <button className="bg-blue-800 hover:bg-blue-900 transition-colors duration-300 text-white text-sm font-medium py-2 px-4 rounded-lg shadow">
        Proceed to Checkout
      </button>
    </div>
  );
}
