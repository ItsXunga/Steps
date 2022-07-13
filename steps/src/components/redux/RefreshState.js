import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refreshConst: 0,
};

export const refreshConstSlice = createSlice({
  name: "refreshConst",
  initialState,
  reducers: {
    incrementRefresh: (state) => {
      state.refreshConst += 1;
    },
  },
});

export const { incrementRefresh } = refreshConstSlice.actions;

export default refreshConstSlice.reducer;
