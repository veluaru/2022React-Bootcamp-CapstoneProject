import styled from 'styled-components'
import ProductCard from './ProductCard.jsx'

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`


function Products({ products: results }) {
  return (
      <CardList>
        {results.map((product) => (
          <ProductCard key={product.id.toString()} product={product} />
        ))}
      </CardList>
  )
}

export default Products
