import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { depositSlice } from './depositReducer';
import { contactSlice } from './contactReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    depositReducer:depositSlice.reducer,
    contactReducer:contactSlice.reducer
  })

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store  = configureStore({
    reducer:persistedReducer
});
export const persistedStore = persistStore(store);