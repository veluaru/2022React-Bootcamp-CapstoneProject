import React from 'react'
import styled from 'styled-components'
import CartProduct from '../components/products/CartProduct.jsx'
import { useSelector } from 'react-redux'
import {
  selectProductsCart,
  selectCartQuantity,
} from '../redux/slices/productsCartSlice'
import { Link } from 'react-router-dom'

const WrapperCart = styled.div`
  height: 100%;
  padding: 2% 10% 0 10%;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    padding: 10px 15px;
  }
`
const Title = styled.h2`
  font-size: 26px;
  font-family: 'Arista-Bold';
`
const Line = styled.div`
  display: inline-block;
  width: 100%;
  height: 0;
  border-bottom: 1px solid rgb(181, 181, 181);
  margin-bottom: 10px;
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const CartTotal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: right;
  margin: 20px 0;
  span {
    font-weight: bold;
    font-size: 24px;
    margin-right: 20px;
  }
  button {
    font-weight: bold;
    height: 40px;
    color: white;
    background-color: orange;
    border: none;
    border-radius: 10px;
    padding: 5px 8px;
    cursor: pointer;
  }
`

function Cart() {
  const dataProductsCart = useSelector(selectProductsCart)
  const dataQuantityProductsCart = useSelector(selectCartQuantity)
  const [totalPrice, setTotalPrice] = React.useState(0)

  React.useEffect(() => {
    const total = dataProductsCart.reduce(
      (total, n) => total + n.product.data.price * n.quantity,
      0
    )
    setTotalPrice(total)
  }, [dataProductsCart, setTotalPrice])

  return (
    <WrapperCart>
      <Title>PRODUCTS CART</Title>
      <Line />
      {dataQuantityProductsCart > 0 && (
        <>
          <List>
            {dataProductsCart.map((item, index) => (
              <CartProduct key={index} product={item}>
                <Line />
              </CartProduct>
            ))}
          </List>
          <CartTotal>
            <span>Total: ${totalPrice}</span>
            <Link to={`/checkout`}>
              <button>Proceed to checkout</button>
            </Link>
          </CartTotal>
        </>
      )}
      {dataQuantityProductsCart === 0 && <span>No products</span>}
    </WrapperCart>
  )
}

export default Cart
