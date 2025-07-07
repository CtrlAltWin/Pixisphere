import { configureStore } from "@reduxjs/toolkit";
import photographersReducer from "./photographerSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    photographers: photographersReducer,
    profile: profileReducer,
  },
});
