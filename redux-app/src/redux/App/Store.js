import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/cake/productSlice";
import userReducer from "../Features/user/userSlice";
import mobileReducer from "../Features/mobile/mobileSlice";
import teleReducer from "../Features/tv/tvSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    mobile: mobileReducer,
    tele: teleReducer,
  },
});

export default store;
