import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ModalId: '',
};

export const ModalInfoSlice = createSlice({
  name: "ModalId",
  initialState,
  reducers: {
    sendId: (state, action) => {
      state.ModalId = action.payload;
    },
  },
});

export const { sendId } = ModalInfoSlice.actions;

export default ModalInfoSlice.reducer;
