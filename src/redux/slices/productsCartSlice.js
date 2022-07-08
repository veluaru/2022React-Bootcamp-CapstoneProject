import { createSlice } from '@reduxjs/toolkit'

//Slice
export const productsCartSlice = createSlice({
  name: 'productsCartList',
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
      state.productsCart.push(newProduct)
    },
    removeProduct: (state, action) => {
      state.productsCart = state.productsCart.filter(
        (item) => item.product.id !== action.payload.product.id
      )
      state.cartQuantity = state.cartQuantity - action.payload.quantity
    },
    changeProductQuantity: (state, action) => {
      for (let i = 0; i < state.productsCart.length; i++) {
        if (state.productsCart[i].product.id === action.payload.productId) {
          state.productsCart[i].quantity =
            action.payload.type === 'more'
              ? state.productsCart[i].quantity + 1
              : state.productsCart[i].quantity - 1
          state.cartQuantity =
            action.payload.type === 'more'
              ? state.cartQuantity + 1
              : state.cartQuantity - 1
          return
        }
      }
    },
  },
})

// Actions
export const { addProduct, removeProduct, changeProductQuantity } =
  productsCartSlice.actions

// Selectors
export const selectProductsCart = (state) => state.productsCartList.productsCart
export const selectCartQuantity = (state) => state.productsCartList.cartQuantity

//Export reducer
export default productsCartSlice.reducer
