import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 40,
};

const mobileSlice = createSlice({
  name: "mobileSlice",
  initialState,
  reducers: {
    orderMobile: (state, action) => {
      state.count -= action.payload;
    },
  },
});
export default mobileSlice.reducer;

export const { orderMobile } = mobileSlice.actions;
