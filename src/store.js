import { configureStore } from "@reduxjs/toolkit";
import myCount from "./AllState/Counter"


export const store = configureStore({
    reducer: {
        myCount
    }
})