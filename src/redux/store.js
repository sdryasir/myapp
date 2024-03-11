import { configureStore } from '@reduxjs/toolkit'
import { depositSlice } from './depositReducer';

export const store  = configureStore({
    reducer: depositSlice.reducer
});