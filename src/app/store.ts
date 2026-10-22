import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cartReducer from '../features/cart/cartSlice'
import checkoutReducer from "../features/checkout/checkoutSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
        product: productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
