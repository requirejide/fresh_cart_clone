import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-sm py-10">
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
          <div className="pt-10">
            <div>
              <ul>
                <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-10">
                  <div className="lg:w-[35%] ">
                    <p className="mb-4 font-semibold">Categories</p>
                    <div className="grid grid-cols-2 gap-4 ">
                      <ul className="text-gray-600 font-medium flex flex-col gap-y-2">
                        <li>Vegetables & Fruits</li>
                        <li>Breakfast & Instant Food</li>
                        <li>Bakery & Biscuits</li>
                        <li>Atta, Rice & Dal</li>
                        <li>Sauces & Spreads</li>
                        <li>Organic & Gourmet</li>
                        <li>Baby Care</li>
                        <li>Cleaning Essentials</li>
                      </ul>
                      <ul className="text-gray-600 font-medium flex flex-col gap-y-2">
                        <li>Personal Care</li>
                        <li>Dairy, Bread & Eggs</li>
                        <li>Cold Drinks & Juices</li>
                        <li>Tea, Coffee & Drinks</li>
                        <li>Masala, Oil & More</li>
                        <li>Chicken, Meat & Fish</li>
                        <li>Paan Corner</li>
                        <li>Pharma & Wellness</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 font-semibold">Get to Know Us</p>
                    <ul className="text-gray-600 font-medium flex flex-col gap-y-2">
                      <li>Company</li>
                      <li>About</li>
                      <li>Blog</li>
                      <li>Help Center</li>
                      <li>Our Value</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mb-4 font-semibold">For Consumers</p>
                    <ul className="text-gray-600 font-medium flex flex-col gap-y-2">
                      <li>Payments</li>
                      <li>Shipping</li>
                      <li>Product Returns</li>
                      <li>FAQ</li>
                      <li>Shop Checkout</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mb-4 font-semibold">Become a Shopper</p>
                    <ul className="text-gray-600 font-medium flex flex-col gap-y-2">
                      <li>Shopper Opportunities</li>
                      <li>Become a Shopper</li>
                      <li>Earnings</li>
                      <li>Ideas & Guides</li>
                      <li>New Retailers</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mb-4 font-semibold">Fresh Cart Programs</p>
                    <ul className="text-gray-600 font-medium flex flex-col gap-y-2">
                      <li>Freshcart Programs</li>
                      <li>Gift Cards</li>
                      <li>Promos & Coupons</li>
                      <li>Freshcart Ads</li>
                      <li>Careers</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
