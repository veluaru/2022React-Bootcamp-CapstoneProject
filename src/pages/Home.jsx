import styled from 'styled-components';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories';
import Spinner from '../components/Spinner.jsx';
import Slider from '../components/Slider.jsx';
import Categories from '../components/Categories.jsx';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`;

function Home() {
  const { data, isLoading } = useFeaturedBanners('banner');
  const { dataCategories, isLoadingCategories } = useFeaturedCategories();

  return (
    <Wrapper>
      {isLoading ? <Spinner /> : <Slider banners={data} />}
      {isLoadingCategories ? <Spinner /> : <Categories categories={dataCategories} />}
    </Wrapper>
  );
}

export default Home;
