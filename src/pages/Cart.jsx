import React from 'react'
import styled from 'styled-components'
import CartProduct from '../components/products/CartProduct.jsx'
import { useSelector } from "react-redux"
import { selectProductsCart, selectCartQuantity } from "../redux/slices/productsCartSlice"
import { Link } from 'react-router-dom'

const WrapperCart = styled.div`
  height: 100%;
  padding: 2% 5% 0 5%;
  margin-bottom: 30px;
  @media (max-width:600px) {
    padding: 10px 15px;
  }
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
  width: 100%
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
// const QuantityInput = styled.input`
// border: 1px solid orange;
// border-radius: 5px;
// width: 40px;
// margin-right: 15px;
// `

function Cart() {
  const dataProductsCart = useSelector(selectProductsCart);
  const dataQuantityProductsCart = useSelector(selectCartQuantity);
  const [totalPrice, setTotalPrice] = React.useState(0)
  console.log(dataProductsCart);
  console.log(dataQuantityProductsCart);


  React.useEffect(() => {
    let total = 0;
    for (let i = 0; i < dataProductsCart.length; i++) {
      let itemPrice = dataProductsCart[i].product.data.price * dataProductsCart[i].quantity
      total = total + itemPrice
    }
    setTotalPrice(total)
  }, [dataProductsCart, setTotalPrice])


  return (
    <WrapperCart>
      <h2>Products Cart</h2>
      <Line />
      {dataQuantityProductsCart > 0 &&
        <>
          <List>
            {dataProductsCart.map((item, index) => (
              <CartProduct key={index} product={item}>
                <Line />
              </CartProduct>
            )
            )}
          </List>
        </>
      }
      {dataQuantityProductsCart === 0 && <span>No products</span>}
      <CartTotal>
        <span>Total: ${totalPrice}</span>
        <Link to={`/checkout`}>
          <button>Proceed to checkout</button>
        </Link>
      </CartTotal>
    </WrapperCart>
  )
}

export default Cart