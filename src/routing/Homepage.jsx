import BackwardLink from "../components/BackwardLink";
import Carousel from "../components/Carousel";
import Cart from "../components/Cart";
import Collection from "../components/Collection";
import Cta from "../components/Cta";
import DailyBestSells from "../components/DailyBestSells";
import FeaturedCategories from "../components/FeaturedCategories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import SuperDeal from "../features/SuperDeal";

function Homepage() {
  return (
    <>
      <div className="relative">
        <Carousel />
        <FeaturedCategories />
        <Cta />
        <Products />
        <DailyBestSells />
      </div>
    </>
  );
}
export default Homepage;
