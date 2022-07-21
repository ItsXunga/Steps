import { configureStore } from "@reduxjs/toolkit";
import mapStateReducer from "./creationState";
import routeIDReducer from "./routeID";
import singleRouteReducer from "./singleRouteState";
import pinSliceReducer from "./pinStorage";
import modalStateReducer from "./modalState";
import refreshReducer from "./refreshState";

export const store = configureStore({
  reducer: {
    mapState: mapStateReducer,
    singleRouteState: singleRouteReducer,
    routeID: routeIDReducer,
    pinStorage: pinSliceReducer,
    modalState: modalStateReducer,
    refresh: refreshReducer
  },
});
