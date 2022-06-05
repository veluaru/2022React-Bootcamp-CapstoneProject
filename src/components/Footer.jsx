import styled from 'styled-components';

const Wrapper = styled.div`
height: 50px;
width: 100%;
background-color: rgb(65, 65, 65);
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`;
const Title = styled.h1`
font-size: 14px;
color: white;
padding: 5px 0;
`;

const Footer = () => {
    return (
        <Wrapper>
            <Title>
                Ecommerce created during Wizeline’s Academy React Bootcamp
            </Title>
        </Wrapper>

    );
}

export default Footer;
