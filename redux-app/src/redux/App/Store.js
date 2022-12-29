import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/cake/productSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
