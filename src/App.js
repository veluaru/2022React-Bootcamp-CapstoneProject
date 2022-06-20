import './App.css'
import React from 'react'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Routes >
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route
            path="/product-list"
            element={<ProductList />}
          /> */}
          <Route path="/product-list">
            <Route path=":category" element={<ProductList />} />
            <Route path="" element={<ProductList />} />
          </Route>
          <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
