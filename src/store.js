import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/reducers/auth/authSlice";
import cartReducer from "./redux/reducers/cart/cartSlice";
import notificationReducer from "./redux/reducers/notification/notificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    notification: notificationReducer,
  },
});

export default store;
