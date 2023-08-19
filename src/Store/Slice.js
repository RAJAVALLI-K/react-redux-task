import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "sampleSlice",
    initialState: {
        arr: [],
    },
    reducers: {
        updateArray: (state, action) => {
            state.arr = action.payload;
        },
    },
});


export const { updateArray } = Slice.actions;
export default Slice.reducer;