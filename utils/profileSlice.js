import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    photographer: null,    
  },
  reducers: {
    setPhotographer: (state, action) => {
      state.photographer = action.payload;
    },
    clearPhotographer: (state) => {
      state.photographer = null;
    },
  },
});

export const { setPhotographer, clearPhotographer } = profileSlice.actions;
export default profileSlice.reducer;
