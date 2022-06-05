import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
height: 100%;
`;
const Card = styled.div `
box-shadow: 0px 0px 10px -2px rgba(110,110,110,0.53);
border-radius: 10px;
height: 100%;
max-height: 100px;
margin: 5px;
padding: 3%;
`;

function Categories({ categories }) {
    console.log(categories);
    return (
        <Wrapper>
            {categories.results.map((category) =>
                <Card key={category.id.toString()}>{category.data.name}</Card>
            )}
        </Wrapper>
    );
}

export default Categories;
