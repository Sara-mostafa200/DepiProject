import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JSON_HEADERS } from "../constants/headers.constant";

let initialState = { allMovies: [],  isLoading : false ,isError: null };
const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

export let getMovies = createAsyncThunk("moviesSlice/getMovies", async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      ...JSON_HEADERS,
    },
  });

  const payload = await response.json() ;
  return payload;
  
});

let moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  extraReducers:( builder) => {
   builder.addCase(getMovies.fulfilled , (state , action ) => {
     state.allMovies = action.payload.results ; 
     state.isLoading = false
   }), 
   builder.addCase(getMovies.pending , (state , action) => {
     state.isLoading = true
   }),
   builder.addCase(getMovies.rejected , (state , action) => {
    state.isError = action.payload ; 
    state.isLoading = false
   })

  },
});

export let moviesReducer = moviesSlice.reducer;

