import { configureStore } from "@reduxjs/toolkit";
import photographersReducer from "./photographerSlice";
import profileReducer from "./profileSlice";
import filtersReducer from "./filterSlice";
export const store = configureStore({
  reducer: {
    photographers: photographersReducer,
    profile: profileReducer,
    filters: filtersReducer,
  },
});
