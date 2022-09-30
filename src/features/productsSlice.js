import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    status: null
}
//a slice is logic containing reducers and actions..
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productsSlice.reducer