import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/cake/productSlice";
import userReducer from "../Features/user/userSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});

export default store;
