import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px -2px rgba(110, 110, 110, 0.53);
  border-radius: 10px;
  height: 40px;
  margin: 1%;
  padding: 5px 20px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px 1px rgba(110, 110, 110, 0.53);
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

function Categories({ categories }) {
  return (
    <Wrapper>
      <Title>Categories</Title>
      <CardList>
        {categories.results.map((category) => (
          <Card key={category.id.toString()}>{category.data.name}</Card>
        ))}
      </CardList>
    </Wrapper>
  )
}

export default Categories
