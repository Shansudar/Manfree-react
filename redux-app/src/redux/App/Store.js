import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/cake/productSlice";
import userReducer from "../Features/user/userSlice";
import mobileReducer from "../Features/mobile/mobileSlice";
import teleReducer from "../Features/tv/tvSlice";
import bikeApi from "../Features/bike/bikeApi";
import contactApi from "../Features/contact/contactApi";
const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    mobile: mobileReducer,
    tele: teleReducer,
    [bikeApi.reducerPath]: bikeApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(bikeApi.middleware).concat(contactApi.middleware),
});

export default store;
