import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contaState: false,
};

export const contaStateSlice = createSlice({
  name: "contaState",
  initialState,
  reducers: {
    noLogin: (state) => {
      state.contaState = true;
    }
  },
});

export const { noLogin } = contaStateSlice.actions;

export default contaStateSlice.reducer;
