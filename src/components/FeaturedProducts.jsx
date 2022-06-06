import styled from 'styled-components'
import ProductCard from './ProductCard.jsx'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
  background-color: rgba(255, 233, 219, 0.637);
  border-radius: 10px;
  padding-bottom: 10px;
`
const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`
const Title = styled.h1`
  font-family: 'Arista-Light';
  color: Orange;
  text-align: center;
`

function FeaturedProducts({ products }) {
  return (
    <Wrapper>
      <Title>Our Featured Products</Title>
      <CardList>
        {products.results.map((product) => (
          <ProductCard key={product.id.toString()} product={product} />
        ))}
      </CardList>
    </Wrapper>
  )
}

export default FeaturedProducts
