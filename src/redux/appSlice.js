import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: true,
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        switch_theme: (state) => {
            state.darkMode = !state.darkMode
        },
    },
})

export const { switch_theme } = appSlice.actions

export default appSlice.reducer