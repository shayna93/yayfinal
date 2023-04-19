import { createSlice } from '@reduxjs/toolkit';

export const accordionSlice = createSlice({
  name: 'accordion',
  initialState: {
    item: null,
    openIndex: null,
    items: [
      { id: 1, title: 'Item 1', description: 'Description for Item 1' },
      { id: 2, title: 'Item 2', description: 'Description for Item 2' },
      { id: 3, title: 'Item 3', description: 'Description for Item 3' },
    ],
  },
  reducers: {
    setOpenIndex: (state, action) => {
      state.openIndex = action.payload;
    },
    setItem: (state, action) => {
      console.log( `payload`,action.payload);
      state.item = action.payload;
    }
  },
});

export const { setOpenIndex, setItem } = accordionSlice.actions;

export default accordionSlice.reducer;