import React from 'react'
import styled from 'styled-components'
import { useProduct } from '../utils/hooks/useProduct'
import { useParams } from 'react-router-dom'
import SliderProduct from '../components/SliderProduct'
import cartPlusIcon from '../assetss/images/cart-plus.png'
import Spinner from '../components/Spinner.jsx'

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
const ColumnSpecs = styled.div`
  padding: 0 7%;
  display: flex;
  flex-direction: column !important;
  margin-bottom: 20px;
  border-top: 1px solid rgb(201, 200, 199);
  @media (max-width: 750px) {
    padding: 0 3%;
    align-items: flex-start !important;
  }
`
const SpecInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start !important;
  span {
    color: orange;
    font-weight: bold;
    margin-right: 10px;
  }
  p {
    margin: 5px 0;
  }
  @media (max-width: 750px) {
    padding: 0px;
    display: flex;
    flex-direction: row !important;
    align-items: flex-start !important;
  }
`
const AddToCart = styled.span`
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
const Name = styled.label`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
`
const Price = styled.label`
  font-size: 24px;
  margin-bottom: 15px;
`
const Category = styled.label`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: orange;
`
const Tags = styled.label`
  margin-right: 8px;
  border: 1px solid rgb(90, 222, 231);
  background-color: rgba(144, 238, 245, 0.521);
  border-radius: 5px;
  padding: 2px 7px;
  font-size: 14px;
  width: max-content;
`
const TagsWrapper = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 15px;
`
const Sku = styled.label`
  font-size: 16px;
  margin-bottom: 15px;
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
      {!isLoadingProduct&& dataProduct.results &&
        <Wrapper>
          <div>
            <ColumnImages>
              <SliderProduct images={dataProduct.results[0].data.images} />
            </ColumnImages>
            <ColumnText>
              <div>
                <Name>{dataProduct.results[0].data.name}</Name>
                <Price>{dataProduct.results[0].data.price} $USD</Price>
                <Sku>SKU: {dataProduct.results[0].data.sku}</Sku>
                <Category>Category: {dataProduct.results[0].data.category.slug}</Category>
                <TagsWrapper>
                  {dataProduct.results[0].tags.map((tag, index) =>
                    <Tags key={index}>{tag}</Tags>
                  )}
                </TagsWrapper>
                <p>{dataProduct.results[0].data.short_description}</p>
                <AddToCart>
                  <input
                    type="number"
                    value={numberAddToCart}
                    min="1"
                    onChange={onChangeAddCartNumber} />
                  <CartIcon src={cartPlusIcon} alt="Cart Plus Icon" />
                </AddToCart>
              </div>
            </ColumnText>
          </div>
          <ColumnSpecs>
            <h1>Specifications</h1>
            {dataProduct.results[0].data.specs.map((spec, index) => 
              <SpecInfo key={index}>
                <span>{spec.spec_name}:</span>
                <p>{spec.spec_value}</p>
              </SpecInfo>
            )}
          </ColumnSpecs>
        </Wrapper>
      }

    </>

  )
}

export default ProductDetails
