import React from 'react'
import styled from 'styled-components'
import { useProduct } from '../utils/hooks/useProduct'
import { useParams } from 'react-router-dom'
import SliderProduct from '../components/SliderProduct'
import cartPlusIcon from '../assetss/images/cart-plus.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  background-color: rgb(255, 233, 219, 0.637);
  border-radius: 10px;
  width: 100%;
  padding: 20px 0;
`
const ColumnImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  width: 50%;
`
const ColumnDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  word-break: break-all;
  padding-right: 10%;
`
const CartIcon = styled.img`
  width: 25px;
  height: 25px;
`

function ProductList() {
  const { id } = useParams()
  const { dataProduct, isLoadingProduct } = useProduct(id)

  return (
    <Wrapper>
      <ColumnImages>
        {isLoadingProduct && <span>Loading...</span>}
        {!isLoadingProduct && (
          <SliderProduct images={dataProduct.results[0].data.images} />
        )}
      </ColumnImages>
      <ColumnDescription>
        {!isLoadingProduct && <h1>{dataProduct.results[0].data.name}</h1>}
        {!isLoadingProduct && <span>Price: {dataProduct.results[0].data.price}</span>}
        {!isLoadingProduct && <span>SKU: {dataProduct.results[0].data.sku}</span>}
        {!isLoadingProduct && <span>Category: {dataProduct.results[0].data.category.slug}</span>}
        {!isLoadingProduct && <span>{dataProduct.results[0].tags}</span>}
        {!isLoadingProduct && <span>{dataProduct.results[0].data.short_description}</span>}
        {!isLoadingProduct && <span>{dataProduct.results[0].data.name}</span>}
        {!isLoadingProduct && 
        <span>Add to cart <CartIcon src={cartPlusIcon} alt="Cart Plus Icon" /></span>}
      </ColumnDescription>
    </Wrapper>
  )
}

export default ProductList
