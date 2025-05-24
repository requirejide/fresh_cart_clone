import { Outlet } from "react-router";
import SuperDeal from "../features/SuperDeal";
import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import CartModal from "../components/CartModal";
import ScrollToTop from "../components/ScrollToTop";
import { FaAngleRight } from "react-icons/fa6";
import CategoryAside from "../components/CategoryAside";
import MobileNavlist from "../components/MobileNavlist";

export default function Layout() {
  return (
    <div className="relative">
      <MobileNavlist />
      <CategoryAside />
      <ScrollToTop />
      <SuperDeal
        text="Super Value Deals - Save more with coupons"
        background="#F0F3F2"
        textcolor="#5C6C75"
      />
      <header className="max-w-[93%]  lg:max-w-[85%] mx-auto mb-3">
        <Cart />
        <CartModal />
        <Navbar />
        <Collection />
      </header>
      <hr className="text-gray-300 mb-4" />
      <main className="max-w-[93%]  lg:max-w-[85%] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
