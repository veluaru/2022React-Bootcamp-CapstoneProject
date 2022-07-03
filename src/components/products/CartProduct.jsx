import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/slices/productsCartSlice";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width:600px) {
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
  @media (max-width:600px) {
    width: 100%;
    justify-content: flex-start;
  }
`
const WrapperText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width:600px) {
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
  @media (max-width:600px) {
    width: 100%;
    justify-content: left;
  }
`
function CartProduct(props) {
  const dispatch = useDispatch();

  const removeAProduct = () => {
    const deleteProduct = {
      quantity: props.product.quantity,
      product: props.product.product,
    }
    dispatch(removeProduct(deleteProduct));
  }
  console.log(props)

  return (
    <>
      <Wrapper>
        <WrapperImage>
          <img src={props.product.product.data.mainimage.url} alt="Product" />
        </WrapperImage>
        <WrapperText>
          <Name>{props.product.product.data.name}</Name>
          <Price>Unit price: ${props.product.product.data.price}</Price>
          <span>Quantity: {props.product.quantity}</span>
          <Subtotal>Subtotal: {props.product.product.data.price*props.product.quantity}</Subtotal>
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