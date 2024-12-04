import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/addToCart/addToCartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
