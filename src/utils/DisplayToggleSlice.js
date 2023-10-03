import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice=createSlice(
    {
        name:"toggle",
        initialState:{
            colToggle:"rows"
        },
        reducers:{
            setcolToggleRow:(state,action)=>{
                state.colToggle="rows";
            },
            setcolToggleCol:(state,action)=>{
                state.colToggle="column";
            },
            
        }

    }
);

export const {setcolToggleRow,setcolToggleCol}=ToggleSlice.actions;
export default ToggleSlice.reducer;


