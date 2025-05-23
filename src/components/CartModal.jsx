import { IoIosCheckmarkCircle } from "react-icons/io";
import usePrdouct from "../stores/useProduct";
import useToggle from "../stores/useToggle";

function CartModal() {
  const { openModal } = useToggle();
  const { modalMessage } = usePrdouct();

  return (
    <>
      {openModal && (
        <div className="fixed bottom-6 right-6 z-50 w-[240px] px-4 py-3 flex items-center justify-center shadow-xl border border-gray-100  bg-white text-green-600 rounded-sm font-medium text-sm">
          <IoIosCheckmarkCircle className="text-green-500 mr-2 text-lg" />
          {modalMessage}
        </div>
      )}
    </>
  );
}

export default CartModal;
