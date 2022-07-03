import React from 'react'
import styled from 'styled-components'
import cartPlusIcon from '../../assetss/images/cart-plus.png'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slices/productsCartSlice'

const AddToCartColumn = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-top: 15px;
  input {
    border: 1px solid orange;
    border-radius: 5px;
    width: 40px;
    margin-right: 15px;
  }
`
const CartIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`

function AddToCartInput({ product }) {
  const [numberAddToCart, setNumberAddToCart] = React.useState(1)
  const dispatch = useDispatch()

  const onChangeAddCartNumber = (event) => {
    if (event.target.value <= product.data.stock) {
      setNumberAddToCart(event.target.value)
    }
  }

  const addToCart = () => {
    if (numberAddToCart > 0 && numberAddToCart <= product.data.stock) {
      for (let i = 0; i < numberAddToCart; i++) {
        const newProduct = {
          quantity: numberAddToCart,
          product: product,
        }
        dispatch(addProduct(newProduct))
      }
    }
  }

  return (
    <AddToCartColumn>
      <input
        type="number"
        value={numberAddToCart}
        min="1"
        onChange={onChangeAddCartNumber}
      />
      <CartIcon onClick={addToCart} src={cartPlusIcon} alt="Cart Plus Icon" />
    </AddToCartColumn>
  )
}

export default AddToCartInput
