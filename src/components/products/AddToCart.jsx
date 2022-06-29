import styled from 'styled-components'
import cartPlusIcon from '../../assetss/images/cart-plus.png'

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
`

function AddToCart({ numberAddToCart, onChangeAddCartNumber }) {
  return (
    <AddToCartColumn>
      <input
        type="number"
        value={numberAddToCart}
        min="1"
        onChange={onChangeAddCartNumber} />
      <CartIcon src={cartPlusIcon} alt="Cart Plus Icon" />
    </AddToCartColumn>
  )
}

export default AddToCart