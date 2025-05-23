import { IoIosCheckmarkCircle } from "react-icons/io";
import usePrdouct from "../stores/useProduct";
import useToggle from "../stores/useToggle";
import { motion, AnimatePresence } from "motion/react";
motion;
function CartModal() {
  const { openModal } = useToggle();
  const { modalMessage } = usePrdouct();

  return (
    <>
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", bounce: 0.5 },
            }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-[100] w-[240px] px-4 py-3 flex items-center justify-center shadow-xl border border-gray-100  bg-white text-green-600 rounded-sm font-medium text-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IoIosCheckmarkCircle className="text-green-500 mr-2 text-lg" />
            </motion.div>
            {modalMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CartModal;
