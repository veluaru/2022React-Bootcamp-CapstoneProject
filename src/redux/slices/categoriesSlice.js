import { createSlice } from '@reduxjs/toolkit'

//Slice
export const categoriesSlice = createSlice({
  name: 'categoriesList',
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
  },
})

// Actions
export const { setCategories } = categoriesSlice.actions

// Selectors
export const selectCategories = (state) => state.categoriesList.categories

//Export reducer
export default categoriesSlice.reducer
