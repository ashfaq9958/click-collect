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
        state.cart.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.success("Item added to your cart successfully", {
          duration: 2000,
          position: "top-center",
        });
      } else {
        setTimeout(() => {
          toast.error("This item is already in your cart.", {
            duration: 2000,
            position: "top-center",
          });
        }, 0);
      }
    },
    removeToCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.key !== action.payload.key);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
