import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth/authSlice'

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store