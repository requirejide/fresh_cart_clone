import product_1 from "../assets/product_images/bhujia-sev.jpg";
import product_1_1 from "../assets/product_images/bhujia-sev_1.jpg";
import product_2 from "../assets/product_images/nutriChoice_digestive.jpg";
import product_2_1 from "../assets/product_images/nutriChoice_digestive_2.jpg";
import product_3 from "../assets/product_images/cadbury_choco.jpg";
import product_3_1 from "../assets/product_images/cadbury_choco_1.jpg";
import product_3_2 from "../assets/product_images/cadbury_choco_2.jpg";
import product_4 from "../assets/product_images/peanut-butter.jpg";
import product_4_1 from "../assets/product_images/peanut-butter_1.jpg";
import product_4_2 from "../assets/product_images/peanut-butter_2.jpg";
import product_5 from "../assets/product_images/product-img-5.jpg";
import product_6 from "../assets/product_images/epigamia-blue-berry.jpg";
import product_6_1 from "../assets/product_images/epigamia-blue-berry-2.jpg";
import product_7 from "../assets/product_images/bombay-cashew.jpg";
import product_7_1 from "../assets/product_images/bombay-cashew_1.jpg";
import product_7_2 from "../assets/product_images/bombay-cashew_2.jpg";
import product_8 from "../assets/product_images/kelloggs.jpg";
import product_8_1 from "../assets/product_images/kelloggs_1.jpg";
import product_8_2 from "../assets/product_images/kelloggs_2.jpg";
import product_9 from "../assets/product_images/slurrp.webp";
import product_9_1 from "../assets/product_images/slurrp2.webp";
import product_9_2 from "../assets/product_images/slurrp3MillePancake_Chocolate_4_1500x.jpg";
import product_10 from "../assets/product_images/product-img-11.jpg";
import product_11 from "../assets/product_images/product-img-12.jpg";
import product_12 from "../assets/product_images/product-img-13.jpg";
import product_13 from "../assets/product_images/cookie.jpg";
import product_14 from "../assets/product_images/cookie-2.jpg";
import product_15 from "../assets/product_images/cookie-3.jpg";

export const product = [
  {
    id: 1,
    title: "Lasta Čokoladni Kolutići",
    unit_price: 24,
    discount: true,
    in_stock: true,
    discount_price: 50.6,
    isSale: true,
    percent: 10,

    category: "Snack & Munchies",
    rating: "4.3 (4)",
    image: [product_13, product_14, product_15, product_13],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 2,
    title: "NutriChoice Digestive",
    unit_price: 14,
    in_stock: true,
    discount: true,
    discount_price: 24,
    isSale: false,
    percent: 10,
    category: "Bakery & Biscuits",
    rating: "4.3 (4)",
    image: [product_2, product_2_1, product_2_1, product_2_1],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 3,
    title: "Cadbury 5 Star Chocolate",
    unit_price: 35,
    in_stock: true,
    discount: true,
    discount_price: 35,
    isSale: false,
    percent: 10,
    category: "Bakery & Biscuits",
    rating: "4.3 (4)",
    image: [product_3, product_3_1, product_3_2, product_3_2],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 4,
    title: "Little Joys Peanut Butter",
    unit_price: 5,
    in_stock: false,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Snack & Munchies",
    rating: "4.3 (4)",
    image: [product_4, product_4_1, product_4_2, product_4_2],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 5,
    title: "Salted Instant Popcorn",
    unit_price: 5,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Instant Food",
    rating: "4.3 (4)",
    image: [product_5, product_9, product_9],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 6,
    title: "Blueberry Greek Yogurt",
    unit_price: 5,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Dairy, Bread & Eggs",
    rating: "4.3 (4)",
    image: [product_6, product_6_1, product_6_1, product_6_1],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 7,
    title: "Slurrp Millet Chocolate",
    unit_price: 5,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Snack & Munchies",
    rating: "4.3 (4)",
    image: [product_9, product_9_1, product_9_2, product_9_2],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 8,
    title: "Onion Flavour Potato",
    unit_price: 5,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Snack & Munchies",
    rating: "4.3 (4)",
    image: [product_5, product_9, product_9],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 9,
    title: "Blueberry Greek Yogurt",
    unit_price: 5,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Snack & Munchies",
    rating: "4.3 (4)",
    image: [product_6, product_6_1, product_6_1, product_6_1],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 10,
    title: "BOOMBAY Cashew",
    unit_price: 5,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Dairy, Bread & Eggs",
    rating: "4.3 (4)",
    image: [product_7, product_7_1, product_7_2, product_7_2],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 11,
    title: "Kellogg's Original Cereals",
    unit_price: 5,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Instant Food",
    rating: "4.3 (4)",
    image: [product_8, product_8_1, product_8_2, product_8_2],
    sizes: [250, 500, 1],
    bestSales: false,
  },
  {
    id: 12,
    title: "Roast Ground Coffee",
    unit_price: 13,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Tea, Coffe & drinks",
    rating: "4.3 (4)",
    image: [product_10],
    sizes: [250, 500, 1],
    bestSales: true,
  },
  {
    id: 13,
    title: "Crushed Tomatoes",
    unit_price: 13,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Fruits & Vegetables",
    rating: "4.3 (4)",
    image: [product_11],
    sizes: [250, 500, 1],
    bestSales: true,
  },
  {
    id: 14,
    title: "Golden Pineapple",
    unit_price: 13,
    in_stock: true,
    discount: true,
    discount_price: 3,
    isSale: false,
    percent: 10,
    category: "Fruits & Vegetables",
    rating: "4.3 (4)",
    image: [product_12],
    sizes: [250, 500, 1],
    bestSales: true,
  },
  {
    id: 15,
    title: "Haldiram's Sev Bhujia",
    unit_price: 24,
    in_stock: true,
    discount: true,
    discount_price: 21.6,
    isSale: true,
    percent: 10,
    category: "Snack & Munchies",
    rating: "4.3 (4)",
    image: [product_1, product_1_1, product_1, product_1_1],
    sizes: [250, 500, 1],
    bestSales: false,
  },
];
