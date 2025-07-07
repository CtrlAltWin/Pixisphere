import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  priceRange: [0, 20000],
  minRating: 0,
  selectedStyles: [],
  selectedTags: [],
  selectedCity: "",
  sortBy: "rating-desc",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setMinRating: (state, action) => {
      state.minRating = action.payload;
    },
    setSelectedStyles: (state, action) => {
      state.selectedStyles = action.payload;
    },
    setSelectedTags: (state, action) => {
      state.selectedTags = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setSearchTerm,
  setPriceRange,
  setMinRating,
  setSelectedStyles,
  setSelectedTags,
  setSelectedCity,
  setSortBy,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
