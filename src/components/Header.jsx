import './Header.scss'
import React from 'react'
import logo from '../images/logo1.png'
import { BiCart } from 'react-icons/bi'
import SearchBar from './SearchBar'

function Header() {
  const onClickCart = () => {
    console.log('Cart clicked!')
  }

  return (
    <div className="header">
      <div className="header__left-side">
        <img src={logo} className="header__logo" alt="logo" />
        <span>LA MUEBLERIA</span>
      </div>
      <div className="header__right-side">
        <SearchBar />
        <BiCart className="header__cart-icon" onClick={onClickCart} />
      </div>
    </div>
  )
}

export default Header
