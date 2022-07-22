import { configureStore } from "@reduxjs/toolkit";
import mapStateReducer from "./creationState";
import routeIDReducer from "./routeID";
import singleRouteReducer from "./singleRouteState";
import pinSliceReducer from "./pinStorage";
import modalStateReducer from "./modalState";
import refreshReducer from "./refreshState";
import editRouteIDReducer from "./editRouteID";
import contaStateReducer from "./contaState";

export const store = configureStore({
  reducer: {
    mapState: mapStateReducer,
    singleRouteState: singleRouteReducer,
    routeID: routeIDReducer,
    editRouteID: editRouteIDReducer,
    pinStorage: pinSliceReducer,
    modalState: modalStateReducer,
    refresh: refreshReducer,
    contaState: contaStateReducer
  },
});
