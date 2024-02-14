import './Header.css';
import React, { useState } from 'react';
import CartMenu from "../Cart/CartMenu"
import AuthComponent from './auth';

function Header(){

   const [isCartOpen, setCartOpen] = useState(false); // 장바구니 오픈
 

   const toggleMenu = () => {
      setCartOpen((prevIsOpen) => !prevIsOpen);
    }; // 장바구니 코드

   return <div className="header_container">
    <header>
        <nav>
         <ul>
            <li className="navLogo"><a href="/">
            <img src="/logo.png"/></a></li>
            <li><a href="/about_us">About US</a></li>
            <li><a href="/store">스토어</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/mypage">마이페이지</a></li>
            <AuthComponent />
            <li><CartMenu cartOpen={isCartOpen} toggleMenu={toggleMenu} /></li>
         </ul>
        </nav>
      </header>
   </div>
}

export default Header;