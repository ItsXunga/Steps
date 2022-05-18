import { configureStore } from '@reduxjs/toolkit'
import mapStateReducer from './creationState'
import singleRouteReducer from './singleRouteState'


export const store = configureStore({
  reducer: {
    mapState: mapStateReducer,
    singleRouteState: singleRouteReducer
  },
})