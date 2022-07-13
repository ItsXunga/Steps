import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalAddRota: false,
  modalInfo: false,
  modalPin: false,
  modalRota: false,
};

export const modalStateSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    openModalAddRota: (state) => {
      state.modalAddRota = true;
    },

    openModalInfo: (state) => {
      state.modalInfo = true;
    },

    openModalPin: (state) => {
      state.modalPin = true;
    },

    openModalRota: (state) => {
      state.modalRota = true;
    },

    closeModal: (state) => {
      state.modalAddRota = false;
      state.modalInfo = false;
      state.modalPin = false;
      state.modalRota = false;
    },
  },
});

export const {
  openModalAddRota,
  openModalInfo,
  openModalPin,
  openModalRota,
  closeModal,
} = modalStateSlice.actions;

export default modalStateSlice.reducer;
