import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./moviesSlice";


// all my shared data
export let store = configureStore({
 reducer:{
     movies : moviesReducer,
 }
})