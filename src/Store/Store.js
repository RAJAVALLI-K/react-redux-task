import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";


export const stores = configureStore({
    reducer: {
        data: Slice,
    }
})