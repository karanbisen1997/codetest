import React from "react";
import { useDispatch } from "react-redux";
import {setcolToggleRow,setcolToggleCol} from '../utils/DisplayToggleSlice'
import { openModal } from "../utils/FormSlice";

const SideBar = () => {
  const dispatch=useDispatch();
  return (
    <div className="">
      <div className="bg-gray-200 p-3 m-4">
        {/* <img src="" />  */}
        <h2 className="text-lg"> Hi reader</h2>
        <h4 className="text-sm"> Here is your news </h4>
      </div>
      <div className="bg-gray-200 p-3 m-4">
        {/* <img src="" />  */}
        <h2 className="text-lg"> toggle</h2>
        <div>  <button  className="border border-white-600 p-2 bg-red-400 rounded-md text-white font-bold" onClick={()=>{dispatch(setcolToggleRow())}}> list </button>
        <button  className="border border-white-600 p-2 bg-green-400 rounded-md text-white font-bold" onClick={()=>{dispatch(setcolToggleCol())}}> block </button></div>
      
      </div>
      <div className="bg-gray-200 p-3 m-4">
        {/* <img src="" />  */}
        <h2 className="text-lg"> Have a Feedback</h2>
        <button  className="border border-white-600 p-2 bg-green-400 rounded-md text-white font-bold" onClick={()=>dispatch(openModal())}> We're Listening! </button>
      </div>
    </div>
  );
};

export default SideBar;
