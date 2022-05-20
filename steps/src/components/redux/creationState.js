import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mapState: false,
}

export const mapStateSlice = createSlice({
    name: 'mapState',
    initialState,
    reducers: {
        enterCreation: (state) => {
            state.mapState = true
        },

        exitCreation: (state) => {
            state.mapState = false
        }
    }
})

export const { enterCreation, exitCreation } = mapStateSlice.actions

export default mapStateSlice.reducer