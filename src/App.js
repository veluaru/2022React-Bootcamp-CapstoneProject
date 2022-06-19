import './App.css'
import React from 'react'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from "react-router-dom";

function App() {
  // const [viewEngine, setViewEngine] = React.useState('Home')

  // const switchEngine = (engine) => {
  //   setViewEngine(engine)
  // }

  // const renderMap = {
  //   Home: <Home setView={switchEngine} />,
  //   ProductList: <ProductList setView={switchEngine} />,
  // }

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/product-list"
            element={<ProductList />}
          />
          {/* <Route
          path="/product-details/:id"
          element={<ProductDetails text="Don't feel loney my header" />}
        /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
