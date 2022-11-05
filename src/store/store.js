import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authSlice/authSlice"
import currUserReducer from "./currUserSlice/currUserSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    currUser: currUserReducer,
  },
})