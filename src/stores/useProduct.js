import { create } from "zustand";
import { product } from "../data/productData";

const usePrdouct = create((set) => ({
  allProduct: product,
  cart: JSON.parse(localStorage.getItem("cartItem")) || [],
  wishList: JSON.parse(localStorage.getItem("wishlist")) || [],
  modalMessage: "",
  searched: null,
  addToCart: (productObj) =>
    set((state) => {
      const validateCart = state.cart.find(
        (value) => value.id === productObj.id
      );
      if (validateCart) {
        console.log(validateCart);
        const update = state.cart.map((value) =>
          value.id === productObj.id
            ? { ...value, quantity: value.quantity + 1 }
            : value
        );
        state.modalMessage = "Product updated in cart";
        localStorage.setItem("cartItem", JSON.stringify(update));
        return { cart: update };
      } else {
        const update = [...state.cart, { ...productObj, quantity: 1 }];
        state.modalMessage = "Product added to cart";
        localStorage.setItem("cartItem", JSON.stringify(update));
        return { cart: update };
      }
    }),

  decrementQuantity: (productObj) =>
    set((state) => {
      const update = state.cart
        .map((value) =>
          value.id === productObj.id
            ? { ...value, quantity: value.quantity - 1 }
            : value
        )
        .filter((value) => value.quantity !== 0);
      return { cart: update };
    }),

  removeProduct: (productObj) =>
    set((state) => {
      const update = state.cart.filter((value) => value.id !== productObj.id);
      localStorage.setItem("cartItem", JSON.stringify(update));

      return { cart: update };
    }),

  addToWishList: (productObj) =>
    set((state) => {
      const checkWishList = state.wishList.find(
        (value) => value.id === productObj.id
      );

      if (checkWishList) {
        const update = state.wishList.map(
          (value) => value.id === productObj.id && value
        );
        localStorage.setItem("wishlist", JSON.stringify(update));
        return { wishList: update };
      } else {
        const update = [...state.wishList, productObj];
        localStorage.setItem("wishlist", JSON.stringify(update));
        return { wishList: update };
      }
    }),

  filterWishList: (productObj) =>
    set((state) => {
      const update = state.wishList.filter(
        (value) => value.id !== productObj.id
      );
      localStorage.setItem("wishlist", JSON.stringify(update));
      return { wishList: update };
    }),

  setSearched: (value) => set(() => ({ searched: value })),
}));

export default usePrdouct;
