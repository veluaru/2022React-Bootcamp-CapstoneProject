import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    categoriesList: categoriesReducer,
  },
});
