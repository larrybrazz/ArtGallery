import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';
import cartReducer, { getTotals } from './Slice/shoppingSlice';



export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})

store.dispatch(getTotals())
