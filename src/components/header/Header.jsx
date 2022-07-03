import './Header.scss'
import React from 'react'
import logo from '../../assetss/images/logo1.png'
import AddToCart from './AddToCart.jsx'
import SearchBar from './SearchBar.jsx'
import { Link } from 'react-router-dom'


function Header() {

  return (
    <div className="header">
      <Link className="header__left-side" to="/home">
        <img src={logo} className="header__logo" alt="logo" />
        <span>LA MUEBLERIA</span>
      </Link>
      <div className="header__right-side">
        <SearchBar />
        <AddToCart />
      </div>
    </div>
  )
}

export default Header
