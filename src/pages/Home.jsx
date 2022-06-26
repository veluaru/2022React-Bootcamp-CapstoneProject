import styled from 'styled-components'
import SliderBanners from '../components/SliderBanners.jsx'
import SliderSkeleton from '../components/skeletons/SliderSkeleton'
import FeaturedCategories from '../components/FeaturedCategories.jsx'
import FeaturedProducts from '../components/products/FeaturedProducts'
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners'
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts'
import { Link } from 'react-router-dom'
import { MainButton } from '../components/MainButton'
import { useSelector } from "react-redux";
import { selectCategories } from "../redux/slices/categoriesSlice";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-bottom: 40px;
  padding: 0 40px;
`

function Home() {
  const { data, isLoading } = useFeaturedBanners()
  const { dataFeaturedProducts, isLoadingFeaturedProducts } =
    useFeaturedProducts();
  const dataCategories = useSelector(selectCategories);

  return (
    <Wrapper>
      {isLoading && <SliderSkeleton />}
      {!isLoading && data.results && <SliderBanners banners={data.results} />}
      {dataCategories.results && (
        <FeaturedCategories categories={dataCategories.results} />
      )}
      {!isLoadingFeaturedProducts && dataFeaturedProducts.results && (
        <FeaturedProducts products={dataFeaturedProducts.results} />
      )}
      <Link to="/product-list">
        <MainButton>View all products</MainButton>
      </Link>
    </Wrapper>
  )
}

export default Home
