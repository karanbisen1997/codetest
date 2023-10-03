import React from "react";
import SideBar from "./SideBar";
import Blog from "./Blog";
import FormModal from "./FormModal";
import { useSelector } from "react-redux";

const Body = () => {
  const {openModal} = useSelector((state) => state.formData);
  return (
    <div className="bg-white">
      <div className="grid grid-cols-3 gap-4 gap-x-6 gap-y-10">
          <SideBar />
        <div className="col-span-2">
          <Blog />
        </div>
      </div>
     {openModal &&  <FormModal/>}
    </div>
  );
};

export default Body;
