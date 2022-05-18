import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    singleRouteState: false,
}

export const singleRouteSlice = createSlice({
    name: 'singleRoute',
    initialState,
    reducers: {
        enterSingleRoute: (state) => {
            state.singleRouteState = true
        },

        exitSingleRoute: (state) => {
            state.singleRouteState = false
        }
    }
})

export const { enterSingleRoute, exitSingleRoute } = singleRouteSlice.actions

export default singleRouteSlice.reducer