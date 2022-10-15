import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    username: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            let newUsername = action.payload;
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isLoggedIn = true;
            state.username = newUsername
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = ''
        },
        toggle: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, toggle } = authSlice.actions

export default authSlice.reducer