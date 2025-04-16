import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JSON_HEADERS } from "../constants/headers.constant";

let initialState = { allData: [],  isLoading : false ,isError: null };
const url =
  "https://movies-qqg3.onrender.com/api/movies/";

export let getAllData = createAsyncThunk("DataSlice/getAllData", async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      ...JSON_HEADERS,
    },
  });

  const payload = await response.json() ;
  return payload;
  
});

let allDataSlice = createSlice({
  name: "allDataSlice",
  initialState,
  extraReducers:( builder) => {
   builder.addCase(getAllData.fulfilled , (state , action ) => {
     state.allData = action.payload.data.tours ; 
     state.isLoading = false
   }), 
   builder.addCase(getAllData.pending , (state , action) => {
     state.isLoading = true
   }),
   builder.addCase(getAllData.rejected , (state , action) => {
    state.isError = action.payload ; 
    state.isLoading = false
   })

  },
});

export let allDataReducer = allDataSlice.reducer;

