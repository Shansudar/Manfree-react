import { createSlice } from "@reduxjs/toolkit";
import { orderMobile } from "../mobile/mobileSlice";
const initialState = {
  count: 10,
};
const teleSlice = createSlice({
  name: "television",
  initialState,
  reducers: {
    orderTv: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderMobile, (state, action) => {
      if (action.payload >= 5) {
        const result = parseInt(action.payload / 5);
        state.count -= result;
      }
    });
  },
});

export default teleSlice.reducer;

export const { orderTv } = teleSlice.actions;
