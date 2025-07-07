import { createSlice } from "@reduxjs/toolkit";

const photographersSlice = createSlice({
  name: "photographers",
  initialState: null,
  reducers: {
    setPhotographers: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPhotographers } = photographersSlice.actions;
export default photographersSlice.reducer;
