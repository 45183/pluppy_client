import './Header.css';
import Login from './Login';
import Logout from './Logout';
import React, { useEffect, useState } from 'react';

function Header(){
   const [isLogin, setIsLogin] = useState(false) 
  useEffect(() => {
    if(sessionStorage.getItem('id') != null){ 
      setIsLogin(true)
    }
  })

   return <div className="header_container">
    <header>
        <nav>
         <ul>
            <li className="navLogo"><a href="/">
               <img src="/logo.png"/></a></li>
            <li><a href="/about_us">About US</a></li>
            <li><a href="/community">커뮤니티</a></li>
            <li><a href="/store">스토어</a></li>
            <li><a href="/faq">FAQ</a></li>
            {isLogin ? <Logout isLogin={isLogin}/>:<Login />}
            <li><button><a href="/cart">장바구니</a></button></li>
         </ul>
        </nav>
      </header>
   </div>
}

export default Header;