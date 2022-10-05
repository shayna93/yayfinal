import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:5000/products")
            return response?.data
        }
        catch (error) {
            return rejectWithValue('an error occurred');
        }
    }
);
//a slice is logic containing reducers and actions..
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            //immer updates the state in unmutable way
            state.status = 'pending';
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export default productsSlice.reducer