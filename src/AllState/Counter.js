import { createSlice } from "@reduxjs/toolkit";

const myCount = createSlice({
    name: "Count",
    initialState: {
        myNum: 0
    },
    reducers: {
        increaseNum: (state)=>{
            state.myNum += 1
        },
        decreaseNum: (state)=>{
            state.myNum --;
        }
    }
})

export const {increaseNum, decreaseNum}= myCount.actions

export default myCount.reducer