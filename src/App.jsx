import Carousel from "./components/Carousel";
import Cart from "./components/Cart";
import Collection from "./components/Collection";
import Cta from "./components/Cta";
import FeaturedCategories from "./components/FeaturedCategories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SuperDeal from "./features/SuperDeal";
import { IoIosCheckmarkCircle } from "react-icons/io";
import useToggle from "./stores/useToggle";
import usePrdouct from "./stores/useProduct";
import DailyBestSells from "./components/DailyBestSells";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Homepage />
    </>
  );
}
export default App;

function Homepage() {
  return (
    <>
      <div className="relative">
        <Cart />
        <CartModal />
        <SuperDeal
          text="Super Value Deals - Save more with coupons"
          background="#F0F3F2"
          textcolor="#5C6C75"
        />
        <Navbar />
        <Collection />
        <Carousel />
        <FeaturedCategories />
        <Cta />
        <Products />
        <DailyBestSells />
        <Footer />
      </div>
    </>
  );
}

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

// web3 - dar;
// Onlineagentalmashell@gmail.com
// git config --global user.requirejide
// git config --global user.requirejide@gmail.com
