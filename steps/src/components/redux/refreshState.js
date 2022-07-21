import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refresh: 0,
};

export const refreshSlice = createSlice({
  name: "refresh",
  initialState,
  reducers: {
    addRefresh: (state) => {
      state.refresh += 1;
    },
  },
});

export const { addRefresh } = refreshSlice.actions;

export default refreshSlice.reducer;