import styled from 'styled-components'
import Products from './Products.jsx'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
  background-color: rgba(255, 233, 219, 0.637);
  border-radius: 10px;
  padding: 10px;
`
const Title = styled.h1`
  font-family: 'Arista-Light';
  color: Orange;
  text-align: center;
`

function FeaturedProducts({ products: results }) {
  const slicedProducts = results.slice(0, 12)
  return (
    <Wrapper>
      <Title>Our Featured Products</Title>
      <Products products={slicedProducts} />
    </Wrapper>
  )
}

export default FeaturedProducts
