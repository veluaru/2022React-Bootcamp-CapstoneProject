import styled from 'styled-components'
import dataBanners from '../assetss/mocks/en-us/featured-banners.json'
import dataCategories from '../assetss/mocks/en-us/product-categories.json'
import dataProducts from '../assetss/mocks/en-us/featured-products.json'
import Slider from '../components/Slider.jsx'
import Categories from '../components/Categories.jsx'
import FeaturedProducts from '../components/FeaturedProducts'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 40px;
  padding: 0 3%;
`
const Button = styled.button`
  font-size: 20px;
  font-family: 'Arista-Light';
  color: white;
  border: 1px solid rgb(90, 222, 231);
  border-radius: 10px;
  background-color: rgb(90, 222, 231);
  width: 100%;
  max-width: 200px;
  margin-top: 15px;
  padding: 10px 5px;
  cursor: pointer;
`

function Home({ setView }) {
  return (
    <Wrapper>
      <Slider banners={dataBanners.results} />
      <Categories categories={dataCategories.results} />
      <FeaturedProducts products={dataProducts.results} />
      <Button onClick={() => setView('ProductList')}>View all products</Button>
    </Wrapper>
  )
}

export default Home
