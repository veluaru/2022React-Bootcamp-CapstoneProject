import './Home.scss';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import Spinner from '../components/Spinner.jsx';
import Slider from '../components/Slider.jsx';

function Home() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className='home'>
      welcome
      {!isLoading ? <Slider /> : <Spinner />}
    </div>
  );
}

export default Home;
