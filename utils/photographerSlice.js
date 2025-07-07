import { createSlice } from '@reduxjs/toolkit';

const photographersSlice = createSlice({
  name: 'photographers',
  initialState: {
    photographers: [],      
  },
  reducers: {
    setPhotographers: (state, action) => {
      state.photographers = action.payload;
    },
  },
});

export const { setPhotographers } = photographersSlice.actions;
export default photographersSlice.reducer;
