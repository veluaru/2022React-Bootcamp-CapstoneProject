import './Header.scss'
import React from 'react'
import styled from 'styled-components'
import logo from '../assetss/images/logo1.png'
import cartIcon from '../assetss/images/cart.png'
import SearchBar from './SearchBar'

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 20px;
`

function Header({ setView }) {
  const onClickCart = () => {
    console.log('Cart clicked!')
  }

  return (
    <div className="header">
      <div className="header__left-side" onClick={() => setView('Home')}>
        <img src={logo} className="header__logo" alt="logo" />
        <span>LA MUEBLERIA</span>
      </div>
      <div className="header__right-side">
        <SearchBar />
        <Icon onClick={onClickCart} src={cartIcon} alt="Cart Icon" />
      </div>
    </div>
  )
}

export default Header
