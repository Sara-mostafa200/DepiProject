import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JSON_HEADERS } from "../constants/headers.constant";

let initialState = { allTvshows: [],  isLoading : false ,isError: null };
const url =
  "https://movies-qqg3.onrender.com/api/movies/?Type=series";

export let getTvshows = createAsyncThunk("TvshowsSlice/getTvshows", async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      ...JSON_HEADERS,
    },
  });

  const payload = await response.json() ;
  return payload;
  
});

let TvshowsSlice = createSlice({
  name: "TvshowsSlice",
  initialState,
  extraReducers:( builder) => {
   builder.addCase(getTvshows.fulfilled , (state , action ) => {
     state.allTvshows = action.payload.data.tours ; 
     state.isLoading = false
   }), 
   builder.addCase(getTvshows.pending , (state , action) => {
     state.isLoading = true
   }),
   builder.addCase(getTvshows.rejected , (state , action) => {
    state.isError = action.payload ; 
    state.isLoading = false
   })

  },
});

export let TvshowsReducer = TvshowsSlice.reducer;

