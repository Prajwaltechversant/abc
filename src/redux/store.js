import { configureStore } from "@reduxjs/toolkit";
import addUserSlice from "./slices/addUserSlice";


const store = configureStore({
    reducer:{
        addUser:addUserSlice
    }
})

export default store