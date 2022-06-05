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
        <span>LA MUEBLERIA</span>
      </div>
      <div className='header__right-side'>
          <BiSearch className='header__search-icon' />
          <input
            disabled
            className='header__input'
            placeholder="Search here..."
            value={searchText}
            type='text'
            onChange={onSearchValueChange} />

        <BiCart className='header__cart-icon' onClick={onClickCart}/>
      </div>
    </div>
  );
}

export default Header;
