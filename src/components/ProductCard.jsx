import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
box-shadow: 0px 0px 10px -3px rgba(110,110,110,0.53);
border-radius: 10px;
height: 100%
max-height: 300px;
width: 200px;
margin: 2% 1%;
cursor: pointer;
background-color: white;
:hover {
    box-shadow: 0px 0px 10px 1px rgba(110,110,110,0.53);
}
`
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`
const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  height: 45px;
`
const Category = styled.span`
  text-transform: capitalize;
  margin-bottom: 8px;
  border: 1px solid rgb(90, 222, 231);
  background-color: rgba(144, 238, 245, 0.521);
  border-radius: 5px;
  width: min-content;
  padding: 2px 7px;
  font-size: 14px;
`
const Price = styled.span`
  color: orange;
  font-weight: bold;
`
const Wrapper = styled.div`
  max-height: 30%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 16px;
  padding: 10px;
`

function ProductCard({ product }) {
  return (
    <Card>
      <Image
        src={product.data.mainimage.url}
        alt={product.data.mainimage.alt}
      />
      <Wrapper>
        <Name>{product.data.name}</Name>
        <Category>{product.data.category.slug}</Category>
        <Price>Price: ${product.data.price}</Price>
      </Wrapper>
    </Card>
  )
}

export default ProductCard
