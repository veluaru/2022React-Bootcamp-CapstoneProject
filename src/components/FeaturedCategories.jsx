import styled from 'styled-components'
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px -2px rgba(110, 110, 110, 0.53);
  border-radius: 10px;
  height: 40px;
  max-width: 180px;
  margin: 5px 10px;
  padding: 5px 20px 5px 0;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 5px 1px rgba(110, 110, 110, 0.53);
    transform: scale(1.01);
  }
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
`
const Image = styled.img`
  width: 60px;
  height: 50px;
  object-fit: cover;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-right: 15px;
`
const Name = styled.p`
  font-size: 14px;
  color: black;
`

function FeaturedCategories({ categories: results }) {
  return (
    <Wrapper>
      <Title>Categories</Title>
      <CardList>
        {results.map(({ id, data: { main_image, name } }) => (
          <Link 
            style={{ textDecoration: 'none' }} 
            to={`/product-list?category=${name}`} 
            key={id.toString()}>
            <Card>
              <Image src={main_image.url} alt={main_image.alt} />
              <Name>{name}</Name>
            </Card>
          </Link>
        ))}
      </CardList>
    </Wrapper>
  )
}

export default FeaturedCategories
