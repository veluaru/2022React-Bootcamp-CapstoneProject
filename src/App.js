import './App.css';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
