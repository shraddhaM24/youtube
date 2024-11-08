import {createSlice} from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"video",
    initialState: {
        allSearchVideoResult:null,
    },
    reducers:{
        addAllSearchVideoResult: (state,action) => {
            state.allSearchVideoResult = action.payload;
        },
    },
})

export const {addAllSearchVideoResult} = videoSlice.actions;

export default videoSlice.reducer;