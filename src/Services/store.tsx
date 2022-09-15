import { configureStore } from "@reduxjs/toolkit";
import reducer from "./index";
import productsReducer from "./Reducers/productsReducer";
import userReducer from "./Reducers/userReducer";

export const store = configureStore({
    reducer: {
        userList: userReducer,
        productList: productsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch