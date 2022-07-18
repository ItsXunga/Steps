import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalAddRota: false,
  modalInfo: false,
  modalPin: false,
  modalRota: false,
  manageModalPin: false,
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

    openManageModalPin: (state) => {
      state.manageModalPin = true;
    },



    closeModal: (state) => {
      state.modalAddRota = false;
      state.modalInfo = false;
      state.modalPin = false;
      state.modalRota = false;
      state.manageModalPin = false;
    },
  },
});

export const {
  openModalAddRota,
  openModalInfo,
  openModalPin,
  openModalRota,
  openManageModalPin,
  closeModal,
} = modalStateSlice.actions;

export default modalStateSlice.reducer;
