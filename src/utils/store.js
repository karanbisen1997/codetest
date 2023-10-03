import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./BlogSlice";
import DisplayToggleSlice from "./DisplayToggleSlice";
import FormSlice from "./FormSlice";

export const store=configureStore({
    reducer:{
        blogData:blogSlice,
        toggle:DisplayToggleSlice,
        formData:FormSlice,
    }
});