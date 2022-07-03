import React from 'react'
import styled from 'styled-components'
import cartIcon from '../../assetss/images/cart.png'
import { useSelector } from 'react-redux'
import { selectCartQuantity } from '../../redux/slices/productsCartSlice'
import { Link } from 'react-router-dom'

const WrapperCart = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  margin-left: 25px;
`
const Icon = styled.img`
  width: 40px;
  height: 40px;
`
const CartNumber = styled.span`
  background-color: orange;
  border-radius: 50%;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 6px;
  height: min-content;
`

function AddToCart() {
  const dataQuantityProductsCart = useSelector(selectCartQuantity)
  const onClickCart = () => {
    console.log('Cart clicked!')
  }

  return (
    <WrapperCart>
      <Link to={`/cart`}>
        <Icon onClick={onClickCart} src={cartIcon} alt="Cart Icon" />
      </Link>
      <CartNumber>{dataQuantityProductsCart}</CartNumber>
    </WrapperCart>
  )
}

export default AddToCart
