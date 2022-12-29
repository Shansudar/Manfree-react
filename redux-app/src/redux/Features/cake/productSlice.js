import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cake: 10,
  ice: 30,
};
const productSlice = createSlice({
  name: "cakeSlice",
  initialState,
  reducers: {
    orderCake: (state, action) => {
      state.cake -= 1;
    },
    orderIce: (state, action) => {
      state.ice -= 1;
    },
  },
});

export default productSlice.reducer;

export const { orderCake, orderIce } = productSlice.actions;
