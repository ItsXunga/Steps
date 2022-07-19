import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routeID: null,
};

export const routeIDSlice = createSlice({
  name: "routeID",
  initialState,
  reducers: {
    routeID: (state, action) => {
      state.routeID = action.payload;
    },
  },
});

export const { routeID } = routeIDSlice.actions;

export default routeIDSlice.reducer;
