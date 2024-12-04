import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cart.some(
        (item) => item.key === action.payload.key
      );
      if (!itemExists) {
        // Add item to the cart
        state.cart.push(action.payload);
        // Update localStorage
        localStorage.setItem("cart", JSON.stringify(state.cart));
        setTimeout(() => {
          toast.success("Item added to your cart successfully", {
            duration: 3000,
            position: "top-center",
          });
        }, 1000);
      } else {
        setTimeout(() => {
          toast.error("This item is already in your cart.", {
            duration: 3000,
            position: "top-center",
          });
        }, 1000);
      }
    },
    removeToCart: (state, action) => {
      // Remove item from the cart
      state.cart = state.cart.filter((item) => item.key !== action.payload.key);
      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
