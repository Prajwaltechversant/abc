import {  configureStore } from "@reduxjs/toolkit";
import addUserSlice from "./slices/addUserSlice";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";




// const persistConfig = {
//     key: 'root',
//     storage
// }


// const reducers = combineReducers({
//     addUser: addUserSlice

// })

// const persistReducers = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: {
        addUser: addUserSlice
    }
    // reducer: persistReducers
})

export default store

// export const persistor = persistStore(store)
