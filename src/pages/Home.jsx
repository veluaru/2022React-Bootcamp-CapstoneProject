import styled from 'styled-components'
// import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
// import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories';
// import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import dataBanners from '../mocks/en-us/featured-banners.json'
import dataCategories from '../mocks/en-us/product-categories.json'
import dataProducts from '../mocks/en-us/featured-products.json'
// import Spinner from '../components/Spinner.jsx';
import Slider from '../components/Slider.jsx'
import Categories from '../components/Categories.jsx'
import FeaturedProducts from '../components/FeaturedProducts'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 40px;
  padding: 0 3%;
`

function Home() {
  // const { data, isLoading } = useFeaturedBanners('banner');
  // const { dataCategories, isLoadingCategories } = useFeaturedCategories();
  // const { dataProducts, isLoadingProducts } = useFeaturedProducts();
  return (
    <Wrapper>
      <Slider banners={dataBanners.results} />
      <Categories categories={dataCategories.results} />
      <FeaturedProducts products={dataProducts.results} />
    </Wrapper>
  )
}

export default Home
