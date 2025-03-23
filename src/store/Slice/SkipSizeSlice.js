import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isDataFetched: false,
    selectedSkip: null,
};

const skipSlice = createSlice({
    name: "skip",
    initialState,
    reducers: {
      setData: (state, action) => {
        state.data = action.payload;
        state.isDataFetched = true;
      },
      setSelectedSize: (state, action) => {
        state.selectedSkip = action.payload;
      },
    },
  });
  
  export const skipSliceReducer = skipSlice.reducer;
  export const skipSliceActions = skipSlice.actions;
   