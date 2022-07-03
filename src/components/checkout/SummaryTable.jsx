import styled from 'styled-components'

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
  font-size: 24px;
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
    height: 150px;
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

function SummaryTable() {

  return (
    <Wrapper>
      <WrapperImage>
        <img src={props.product.product.data.mainimage.url} alt="Product" />
      </WrapperImage>
      <WrapperText>
        <Name>{props.product.product.data.name}</Name>
        <Price>Quantity: {props.product.quantity}</Price>
        <Subtotal>
          Subtotal: $
          {props.product.product.data.price * props.product.quantity}
        </Subtotal>
      </WrapperText>
    </Wrapper>
  )
}

export default SummaryTable