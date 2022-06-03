import './Header.scss';
import React from "react";
import logo from '../images/logo1.png';
import { BiCart, BiSearch } from 'react-icons/bi';

function Header() {
  const [searchText, setSearchText] = React.useState("");
  const onSearchValueChange = (event) => {
    setSearchText(event.target.value);
  };
  const onClickCart = () => {
    console.log("Cart clicked!");
  }


  return (
    <div className="header">
      <div className='header__left-side'>
        <img src={logo} className="header__logo" alt="logo" />
        <span>La Muebleria</span>
      </div>
      <div className='header__right-side'>
        <div className='header__search-bar'>
          <BiSearch style={{ color: 'rgb(185, 185, 185)', fontSize: '20px' }} />
          <input
            className='header__input'
            placeholder="Search here..."
            value={searchText}
            onChange={onSearchValueChange} />
        </div>

        <BiCart className='header__cart-icon'onClick={onClickCart}/>
      </div>
    </div>
  );
}

export default Header;
