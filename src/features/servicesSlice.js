import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const initialState = {
    selectedAddons: [],
    serviceid: null,
    addons: [],
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

// export const addonsFetch = createAsyncThunk(
//     "services/addonsFetch",
//     async (id = null, {rejectWithValue}) => {
//         try {
//             const response = await axios.get("http://localhost:5000/services/")
//         }
//     }
// )

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        configureAddons(state, action) {
            console.log(`payload2`,action.payload);
            const itemAddons = action.payload.addons;
            console.log(`itemAddons`, itemAddons);
            const itemIndex = state.addons.findIndex(addon => addon.id === action.payload.id)
            //const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            
            if (typeof action.payload !== "undefined" && action.payload !== null) {
                //state.cartItems[itemIndex].cartQuantity += 1
                //const tempProduct = itemAddons
                //console.log(`temp`,tempProduct)
                state.addons.push(...itemAddons);
                toast.info(`this product has addons ${itemAddons}`, {
                    position: "bottom-left"
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.items.push(tempProduct);
                toast.success(`${action.payload} blah`, {
                    position: "bottom-center",
                });

            }

           // localStorage.setItem("addons", JSON.stringify(itemAddons));

        },
        

        
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
}})
export const { configureAddons, getServiceId } = servicesSlice.actions;

export default servicesSlice.reducer;