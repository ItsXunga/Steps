import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pinStorage: {},
};

export const pinSlice = createSlice({
  name: "pinStorage",
  initialState,
  reducers: {
    addPin: (state, action) => {
      const Storage = action.payload;
      state.pinStorage[Storage.id] = Storage;
    },

    delPin: (state, action) => {
      delete state.pinStorage[action.payload];
      // este action.payload tem que ser o dispatch do id do pin em questao :)
    },

    clearStorage: (state) => {
      state.pinStorage = {}
    }

  },
});

export const { addPin, delPin, clearStorage} = pinSlice.actions;

export default pinSlice.reducer;
