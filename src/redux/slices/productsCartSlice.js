import { createSlice } from "@reduxjs/toolkit";

//Slice
export const productsCartSlice = createSlice({
  name: "productsCartList",
  initialState: {
    productsCart: [],
    cartQuantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      for (let i = 0; i < state.productsCart.length; i++) {
        if (state.productsCart[i].product.id === action.payload.product.id) {
          state.productsCart[i].quantity += 1
          state.cartQuantity += 1
          return
        }
      }
      const newProduct = {
        quantity: action.payload.quantity,
        product: action.payload.product,
      }
      state.cartQuantity += 1
      state.productsCart.push(newProduct);
    },
    removeProduct: (state, action) => {
      state.productsCart = state.productsCart.filter(
        (item) => item.product.id !== action.payload.product.id
      );
      state.cartQuantity = state.cartQuantity - action.payload.quantity
    },
    resetProductsCart: (state) => {
      state.productsCart = [];
      state.cartQuantity = 0;
    },
  },
});

// Actions
export const {
  addProduct,
  removeProduct,
  resetProductsCart,
} = productsCartSlice.actions;

// Selectors
export const selectProductsCart = (state) => state.productsCartList.productsCart;
export const selectCartQuantity = (state) => state.productsCartList.cartQuantity;

//Export reducer
export default productsCartSlice.reducer;
