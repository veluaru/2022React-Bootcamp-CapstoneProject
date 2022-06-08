import './Header.scss'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo1.png'
import cartIcon from '../images/cart.png'
import SearchBar from './SearchBar'

const Icon = styled.img`
width: 40px;
height: 40px;
margin-left: 20px;
`

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
        <Icon
          onClick={onClickCart}
          src={cartIcon}
          alt='Cart Icon'
        />
      </div>
    </div>
  )
}

export default Header
