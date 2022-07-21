import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalAddRota: false,
  modalInfo: false,
  modalPin: false,
  modalRota: false,
  manageModalPin: false,
  modalCancelar: false,
  modalEliminar: false,
  modalConfirmarRota: false,
  modalSairNavegar: false,
  modalPontoInfo: false,
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

    openModalCancelar: (state) => {
      state.modalCancelar = true;
    },

    openModalEliminar: (state) => {
      state.modalEliminar = true;
    },

    openModalConfirmarRota: (state) => {
      state.modalConfirmarRota = true;
    },

    openModalSairNavegar: (state) => {
      state.modalSairNavegar = true;
    },

    openModalPontoInfo: (state) => {
      state.modalPontoInfo = true;
    },



    closeModal: (state) => {
      state.modalAddRota = false;
      state.modalInfo = false;
      state.modalPin = false;
      state.modalRota = false;
      state.manageModalPin = false;
      state.modalCancelar = false;
      state.modalEliminar = false;
      state.modalConfirmarRota = false;
      state.modalSairNavegar = false;
      state.modalPontoInfo = false;
    },
  },
});

export const {
  openModalAddRota,
  openModalInfo,
  openModalPin,
  openModalRota,
  openManageModalPin,
  openModalCancelar,
  openModalEliminar,
  openModalConfirmarRota,
  openModalSairNavegar,
  openModalPontoInfo,
  closeModal,
} = modalStateSlice.actions;

export default modalStateSlice.reducer;
