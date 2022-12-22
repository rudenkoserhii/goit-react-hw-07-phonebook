import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {filter: ""},
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload.toLowerCase()
    },
  },
});

export const { addFilter } = filterSlice.actions;


// Selectors



