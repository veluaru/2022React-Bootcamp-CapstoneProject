import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 15px;
background-color: rgba(255, 233, 219, 0.637);
border-radius: 10px;
`;
const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 10px -3px rgba(110,110,110,0.53);
border-radius: 10px;
height: 100%
max-height: 300px;
width: 200px;
margin: 1%;
padding: 2%;
cursor: pointer;
background-color: white;
img {
    max-width: 100px;
}
h1 {
    font-size: 16px;
}
:hover {
    box-shadow: 0px 0px 10px 1px rgba(110,110,110,0.53);
}
`;
const CardList = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
flex-wrap: wrap;
width: 100%;
`;
const Title = styled.h1`
font-family: 'Arista-Light';
color: Orange;
`;

function FeaturedProducts({ products }) {
    console.log(products);
    return (
        <Wrapper>
            <Title>Our Featured Products</Title>
            <CardList>
                {products.results.map((product) =>
                    <Card key={product.id.toString()}>
                        <img src={product.data.mainimage.url}
                            alt={product.data.mainimage.alt} />
                        <h1>{product.data.name}</h1>
                    </Card>
                )}
            </CardList>
        </Wrapper>
    );
}

export default FeaturedProducts;
