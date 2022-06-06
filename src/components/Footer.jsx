import styled from 'styled-components';

const Wrapper = styled.div`
height: 50px;
width: 100%;
background-color: rgb(65, 65, 65);
display: flex;
justify-content: center;
align-items: center;
`;
const Title = styled.h1`
font-size: 14px;
color: white;
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
