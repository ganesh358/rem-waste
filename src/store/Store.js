import { configureStore } from "@reduxjs/toolkit";
import { skipSliceReducer } from "./Slice/SkipSizeSlice";

export const Store = configureStore({
    reducer: {
        skipSize: skipSliceReducer,
    }
})