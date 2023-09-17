import { postProduct } from "@/services/apis";
import { BASE_URL } from "@/services/helper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//create Product
export const createProduct = createAsyncThunk(
  "createProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await postProduct(data);
      return response;

      //     const res = await fetch(`${BASE_URL}/postProduct`, {
      //       method: "POST",
      //       headers: {
      //         "Access-Control-Allow-Credentials": true,
      //         "Content-Type": "application/json",
      //       },
      //       withCredentials: true,

      //       credentials: "include",
      //       body: JSON.stringify(data),
      //     });
      //     const result = await res.json();
      //     return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//get all products
export const getProduct = createAsyncThunk(
  "getProduct",
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/getAllProduct`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
        },
        withCredentials: true,

        credentials: "include",
        // body: JSON.stringify(data),
      });
      const result = await res.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    product: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [createProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = false; // Reset error to false when making a new request
    },

    [createProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = true; // Set error to true on rejection
    },

    [createProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false; // Set error to false on successful response
      state.product.push(action.payload);
    },
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.product=action.payload
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default productSlice.reducer;
