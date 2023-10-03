import { createSlice } from "@reduxjs/toolkit";

const blogSlice=createSlice(
    {
        name:"blogData",
        initialState:{
            items:[],
            currentPage:1,
            itemPerPage:6,
        },
        reducers:{
            setData:(state,action)=>{
                state.items=action.payload;
            },
            setCurrentPage:(state,action)=>{
                state.currentPage=action.payload;
            },
        }

    }
);

export const {setData,setCurrentPage}=blogSlice.actions;
export default blogSlice.reducer;


