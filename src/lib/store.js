import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./moviesSlice";
import { TvshowsReducer } from "./tvShowsSlice";
import { allDataReducer } from "./allData";


// all my shared data
export let store = configureStore({
 reducer:{
     movies : moviesReducer,
     tvShows: TvshowsReducer,
     allData: allDataReducer, 
 }
})