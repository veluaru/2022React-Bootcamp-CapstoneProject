import './App.css'
import React from 'react'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/Footer.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout'
import Spinner from './components/Spinner.jsx'
import { Routes, Route } from 'react-router-dom'
import { useFeaturedCategories } from './utils/hooks/useFeaturedCategories'
import { useDispatch } from "react-redux";
import { setCategories } from "./redux/slices/categoriesSlice";

function App() {
  const { dataCategories, isLoadingCategories } = useFeaturedCategories()
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setCategories(dataCategories));
  }, [dataCategories, dispatch]);


  return (
    <>
      {isLoadingCategories && <Spinner />}
      {!isLoadingCategories && <div className="app">
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product-list">
              <Route path="?category" element={<ProductList />} />
              <Route path="" element={<ProductList />} />
            </Route>
            <Route path="/search">
              <Route path="?q" element={<SearchResults />} />
              <Route path="" element={<SearchResults />} />
            </Route>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </div>
      }
    </>

  )
}

export default App
