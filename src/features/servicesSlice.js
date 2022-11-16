import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    error: null,
};


export const servicesFetch = createAsyncThunk(
    "services/servicesFetch",
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:5000/services")
            return response?.data
        }
        catch (error) {
            return rejectWithValue('an error occurred fetching services');
        }
    }
);

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: {
        //immer updates the state in unmutable way
        [servicesFetch.pending]: (state, action) => {
        state.status = 'pending';
        },
        [servicesFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload;
        },
        [servicesFetch.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export default servicesSlice.reducer;