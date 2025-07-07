import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  priceRange: 20000,
  minRating: 0,
  selectedStyles: [],
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
    addSelectedStyle: (state, action) => {
      state.selectedStyles = [...state.selectedStyles, action.payload];
    },
    removeUnselectedStyle: (state, action) => {
      state.selectedStyles = state.selectedStyles.filter(
        (style) => style != action.payload
      );
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
  addSelectedStyle,
  removeUnselectedStyle,
  setSelectedCity,
  setSortBy,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
