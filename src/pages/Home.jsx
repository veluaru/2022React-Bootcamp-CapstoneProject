import styled from 'styled-components'
// import dataCategories from '../assetss/mocks/en-us/product-categories.json'
// import dataProducts from '../assetss/mocks/en-us/featured-products.json'
import Slider from '../components/Slider.jsx'
import SliderSkeleton from '../components/skeletons/SliderSkeleton'
import FeaturedCategories from '../components/FeaturedCategories.jsx'
import FeaturedProducts from '../components/products/FeaturedProducts'
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 40px;
  padding: 0 40px;
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

function Home() {
  const { data, isLoading }  = useFeaturedBanners();
  const { dataCategories, isLoadingCategories }  = useFeaturedCategories();
  const { dataFeaturedProducts, isLoadingFeaturedProducts }  = useFeaturedProducts();
  
  return (
    <Wrapper>
      {isLoading ? <SliderSkeleton /> : <Slider banners={data.results}/>}
      {!isLoadingCategories &&  <FeaturedCategories categories={dataCategories.results} />}
      {!isLoadingFeaturedProducts && <FeaturedProducts products={dataFeaturedProducts.results} />}
      <Link to="/product-list"><Button>View all products</Button></Link>
    </Wrapper>
  )
}

export default Home
