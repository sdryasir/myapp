import { createSlice } from '@reduxjs/toolkit';


export const depositSlice = createSlice({
    name:'bank',
    initialState:{
        value:0
    },
    reducers:{
        deposit:()=>{

        },
        withdraw:()=>{

        }
    }
});

export const {deposit, withdraw} = depositSlice.actions;