import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  err: false,
};

export const fetchUsers = createAsyncThunk("fetch-users", async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   return await response.json();
  const data = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => data);
  return data;
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.err = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.data = [];
        state.err = true;
        state.loading = false;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.data = [];
        state.loading = true;
        state.err = false;
      });
  },
});

export default userSlice.reducer;

export const { deleteUser } = userSlice.actions;
