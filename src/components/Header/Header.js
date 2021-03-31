import React from 'react';
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';
import user from '../../images/user.svg';
import menuMobile from '../../images/menu-mobile.svg';
import SearchBarMobile from './SearchBarMobile';
import SearchBar from './SearchBar';
import '../../scss/common.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <ul className="header__components">
          <li className="menu"> <img src={menuMobile} alt="Menu Mobile" /></li>
          <li className="logo"><img src={logo} className="header__logo" alt="logo" /></li>
          <li className="search"><SearchBar /></li>
          <ul className="header__group">
            <li className="account"><img src={user} alt="Minha conta" /> <span>Minha conta</span></li>
            <li className="cart"><img src={cart} alt="carrinho de compras" /><span>1</span></li>
          </ul>
        </ul>
        <SearchBarMobile />
      </header>
    </>
  )
}

export default Header;