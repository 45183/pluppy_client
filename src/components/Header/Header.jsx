import './Header.css';
import React, { useEffect, useState } from 'react';
import CartMenu from "../Cart/CartMenu"

function Header(){
   const [isLogin, setIsLogin] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);

   const [isCartOpen, setCartOpen] = useState(false); // 장바구니 오픈
 
   useEffect(() => {
      if(sessionStorage.getItem('email') != null){ 
         setIsLogin(true);
      };
   });
  
   useEffect(() => {
      if(sessionStorage.getItem('email') == 'admin@pluppy.com'){
         setIsAdmin(true);
      };
   });

   const onClickLogout = () => {
      sessionStorage.removeItem('email');
      document.location.href = '/';
   };

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
            { isAdmin ? <li><a href="/admin">관리자</a></li> : <></> } 
            {isLogin ? <li id='green'><button  onClick={onClickLogout}><a href="/" >로그아웃</a></button></li> :<li><button id='green'><a href="/login">로그인</a></button></li>}
            <li><CartMenu cartOpen={isCartOpen} toggleMenu={toggleMenu} /></li>
         </ul>
        </nav>
      </header>
   </div>
}

export default Header;