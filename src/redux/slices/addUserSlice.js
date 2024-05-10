import { createSlice } from "@reduxjs/toolkit";



export const addUserSlice = createSlice({
    name:'addUser',
    initialState:[],

    reducers:{
        signupUser:(state, action)=>{
            // console.log("adduser slice-----", action.payload)
            state.push(action.payload)
            console.log(state,"sssssssssssss")
        },

        signInuser:(state,action)=>{
            // console.log("login slice---------",action.payload)
            const {username, password} = action.payload;
           const user = state.find(user=>user.username===username && user.password===password)
        //    console.log(user, "user")
           return user
        }
    }
})

export const {signupUser,signInuser} = addUserSlice.actions

export default addUserSlice.reducer