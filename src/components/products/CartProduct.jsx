import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {
  removeProduct,
  changeProductQuantity,
} from '../../redux/slices/productsCartSlice'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    width: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
  }
`
const Name = styled.label`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`
const Price = styled.label`
  font-size: 16px;
  font-weight: bold;
`
const Subtotal = styled.label`
  font-size: 20px;
  color: orange;
  font-weight: bold;
  margin-top: 10px;
`
const WrapperImage = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  img {
    width: auto;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
  }
`
const WrapperText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
  }
`
const RemoveProduct = styled.div`
  width: 40%;
  display: flex;
  justify-content: right;
  button {
    height: 40px;
    color: white;
    background-color: red;
    border: none;
    border-radius: 10px;
    padding: 5px 8px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 100%;
    justify-content: left;
  }
`
const Quantity = styled.div`
  font-weight: bold;
  button {
    font-size: 14px;
    font-weight: bold;
    border: 1px solid rgb(227, 230, 230);
    background-color: orange;
    border-radius: 5px;
    color: black;
    margin: 5px 5px;
    padding: 2px 6px;
    cursor: pointer;
  }
`

function CartProduct(props) {
  const dispatch = useDispatch()

  const removeAProduct = () => {
    const deleteProduct = {
      quantity: props.product.quantity,
      product: props.product.product,
    }
    dispatch(removeProduct(deleteProduct))
  }

  const clickQuantity = (buttonType) => {
    const newProduct = {
      type: buttonType,
      productId: props.product.product.id,
    }
    dispatch(changeProductQuantity(newProduct))
  }

  return (
    <>
      <Wrapper>
        <WrapperImage>
          <img src={props.product.product.data.mainimage.url} alt="Product" />
        </WrapperImage>
        <WrapperText>
          <Name>{props.product.product.data.name}</Name>
          <Price>Unit price: ${props.product.product.data.price}</Price>
          <Quantity>
            <button
              onClick={() => clickQuantity('less')}
              style={props.product.quantity <= 1 ? { cursor: 'unset' } : {}}
              disabled={props.product.quantity <= 1}
            >
              -
            </button>
            <span>{props.product.quantity}</span>
            <button
              onClick={() => clickQuantity('more')}
              style={
                props.product.quantity === props.product.product.data.stock
                  ? { cursor: 'unset' }
                  : {}
              }
              disabled={
                props.product.quantity === props.product.product.data.stock
              }
            >
              +
            </button>
          </Quantity>
          <Subtotal>
            Subtotal:{' '}
            {props.product.product.data.price * props.product.quantity}
          </Subtotal>
        </WrapperText>
        <RemoveProduct>
          <button onClick={removeAProduct}>Remove Product</button>
        </RemoveProduct>
      </Wrapper>
      {props.children}
    </>
  )
}

export default CartProduct
