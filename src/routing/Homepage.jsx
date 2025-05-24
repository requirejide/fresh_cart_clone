import Carousel from "../components/Carousel";
import Cta from "../components/Cta";
import DailyBestSells from "../components/DailyBestSells";
import FeaturedCategories from "../components/FeaturedCategories";
import Products from "../components/Products";

import { motion } from "motion/react";
motion;

function Homepage() {
  return (
    <>
      <motion.div
        initial={{ x: `-100%` }}
        animate={{ x: `0%` }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="relative"
      >
        <Carousel />
        <FeaturedCategories />
        <Cta />
        <Products />
        <DailyBestSells />
      </motion.div>
    </>
  );
}
export default Homepage;
