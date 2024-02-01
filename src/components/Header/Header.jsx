import './Header.css';
// import Login from './Login';
// import Logout from './Logout';
import React, { useEffect, useState } from 'react';

function Header(){
   const [isLogin, setIsLogin] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
 
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
            { isAdmin ? <li><a href="/admin">관리자</a></li> : <></> } 
            {isLogin ? <li><button  onClick={onClickLogout}><a href="/" >로그아웃</a></button></li> :<li><button><a href="/login">로그인</a></button></li>}
            <li><button><a href="/cart">장바구니</a></button></li>
         </ul>
        </nav>
      </header>
   </div>
}

export default Header;