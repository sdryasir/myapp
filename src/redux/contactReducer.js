import { createSlice } from '@reduxjs/toolkit';


export const contactSlice = createSlice({
    name:'contactBook',
    initialState:{
        contacts:[]
    },
    reducers:{
        addToContacts:(state, action)=>{
            state.contacts.push(action.payload);
        },
        deleteContact:(state, action)=>{
            const filteredArr = state.contacts.filter((c)=>c.id != action.payload);
            state.contacts = filteredArr;
        }
    }
});

export const {addToContacts, deleteContact} = contactSlice.actions;