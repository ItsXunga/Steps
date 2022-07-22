import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editRouteID: null,
};

export const editRouteIDSlice = createSlice({
  name: "editRouteID",
  initialState,
  reducers: {
    addRouteID: (state, action) => {
      state.editRouteID = action.payload;
    },
  },
});

export const { addRouteID } = editRouteIDSlice.actions;

export default editRouteIDSlice.reducer;
