import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    setPhotographer: (state, action) => {
      return action.payload;
    },
    clearPhotographer: (state) => {
      return null;
    },
  },
});

export const { setPhotographer, clearPhotographer } = profileSlice.actions;
export default profileSlice.reducer;
