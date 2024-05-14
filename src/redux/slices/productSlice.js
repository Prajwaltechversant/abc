import { createSlice } from "@reduxjs/toolkit";




export const productSlice = createSlice({

    name: 'products',
    initialState: [],

    reducers:{
        addProduct:(state, action)=>{
            state.push(action.payload)
            console.log(state)
        },

        deleteProduct:(state, action)=>{

            // const {title} = action.payload;
            return state.filter(item=>item.title !==action.payload)
            
        },

        searchProduct:(state, action)=>{
            return state.filter(item=>item.title ===action.payload)
        }
    }
})

export const {addProduct, deleteProduct, searchProduct} = productSlice.actions
export default productSlice.reducer