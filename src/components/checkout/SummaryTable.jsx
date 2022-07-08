import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectProductsCart } from '../../redux/slices/productsCartSlice'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid grey;
  width: 70%;
  margin-left: 20px;
  margin-top: 20px;
  padding: 15px;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 20px;
  }
`
const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  border-bottom: 1px solid grey;
`

const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
  :last-child {
    border-bottom: none;
  }
  @media (max-width: 600px) {
    width: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
  }
`
const Name = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`
const Quantity = styled.label`
  font-size: 14px;
  font-weight: bold;
`
const Subtotal = styled.label`
  font-size: 15px;
  color: orange;
  font-weight: bold;
  margin-top: 10px;
`
const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: auto;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 15px;
    @media (max-width: 600px) {
      margin-right: 0;
    }
  }
  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`
const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
`
const CartTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: 10px 0;
  span {
    font-weight: bold;
    font-size: 24px;
  }
`

function SummaryTable() {
  const dataProductsCart = useSelector(selectProductsCart)
  const [totalPrice, setTotalPrice] = React.useState(0)

  React.useEffect(() => {
    const total = dataProductsCart.reduce(
      (total, n) => total + n.product.data.price * n.quantity,
      0
    )
    setTotalPrice(total)
  }, [dataProductsCart, setTotalPrice])

  return (
    <Wrapper>
      <Title>Products</Title>
      {dataProductsCart.map((product) => (
        <ProductRow key={product.product.id}>
          <WrapperImage>
            <img src={product.product.data.mainimage.url} alt="Product" />
          </WrapperImage>
          <WrapperText>
            <Name>{product.product.data.name}</Name>
            <Quantity>Quantity: {product.quantity}</Quantity>
            <Subtotal>
              Subtotal: ${product.product.data.price * product.quantity}
            </Subtotal>
          </WrapperText>
        </ProductRow>
      ))}
      <CartTotal>
        <span>Total: ${totalPrice}</span>
      </CartTotal>
    </Wrapper>
  )
}

export default SummaryTable
