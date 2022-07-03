import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import productsCartReducer from "./slices/productsCartSlice";

export const store = configureStore({
  reducer: {
    categoriesList: categoriesReducer,
    productsCartList: productsCartReducer,
  },
});
