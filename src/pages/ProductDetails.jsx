import React from 'react'
import styled from 'styled-components'
import { useProduct } from '../utils/hooks/useProduct'
import { useParams } from 'react-router-dom'
import SliderProduct from '../components/SliderProduct'
import Spinner from '../components/Spinner.jsx'
import ProductSpecs from '../components/products/ProductSpecs.jsx'
import ProductText from '../components/products/ProductText.jsx'
import AddToCart from '../components/products/AddToCart.jsx'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  border-radius: 10px;
  width: 100%;
  padding: 20px 0;
  div {
    display: flex;
    flex-direction: row;
    justify-content:center;
    margin-bottom: 15px;
    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 750px) {
    width: unset;
    padding: 20px 30px;
  }

`
const ColumnImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  width: 50%;
  padding-left: 5%;
  @media (max-width: 750px) {
    width: 100%;
    padding: 0;
    margin-bottom: 30px;
  }
`
const ColumnText = styled.div`
  width: 50%;
  padding-right: 5%;
  padding-left: 3%;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    word-break: break-word;
    width: 100%;
  }
  @media (max-width: 750px) {
    width: 90%;
    padding: 0px;
  }
`



function ProductDetails() {
  const { id } = useParams()
  const { dataProduct, isLoadingProduct } = useProduct(id)
  const [numberAddToCart, setNumberAddToCart] = React.useState(1)
  const onChangeAddCartNumber = (event) => {
    setNumberAddToCart(event.target.value)
  }

  return (
    <>
      {isLoadingProduct &&
        <Wrapper style={{ backgroundColor: 'transparent', alignItems: 'center' }}>
          <Spinner />
        </Wrapper>}
      {!isLoadingProduct && dataProduct.results &&
        <Wrapper>
          <div>
            <ColumnImages>
              <SliderProduct images={dataProduct.results[0].data.images} />
            </ColumnImages>
            <ColumnText>
              <div>
                <ProductText dataProduct={dataProduct.results[0]} />
                <AddToCart
                  numberAddToCart={numberAddToCart}
                  onChangeAddCartNumber={onChangeAddCartNumber} />
              </div>
            </ColumnText>
          </div>
          <ProductSpecs dataProduct={dataProduct.results[0].data.specs} />
        </Wrapper>
      }

    </>

  )
}

export default ProductDetails
