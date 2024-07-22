import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './ReduxCart'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        
    }
})