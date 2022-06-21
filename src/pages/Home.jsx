import styled from 'styled-components'
import SliderBanners from '../components/SliderBanners.jsx'
import SliderSkeleton from '../components/skeletons/SliderSkeleton'
import FeaturedCategories from '../components/FeaturedCategories.jsx'
import FeaturedProducts from '../components/products/FeaturedProducts'
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners'
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories'
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts'
import { Link } from 'react-router-dom'
import { MainButton } from '../components/MainButton'

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
  const { dataCategories, isLoadingCategories } = useFeaturedCategories()
  const { dataFeaturedProducts, isLoadingFeaturedProducts } =
    useFeaturedProducts()

  return (
    <Wrapper>
      {isLoading && <SliderSkeleton /> }
      {!isLoading && data.results &&  <SliderBanners banners={data.results} />}
      {!isLoadingCategories && dataCategories.results && (
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
