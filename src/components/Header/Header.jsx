import './Header.css';
import React, { useState } from 'react';
import CartMenu from "../Cart/CartMenu"
import AuthComponent from './auth';

function Header({ userType }) {
   const [isCartOpen, setCartOpen] = useState(false);
 
   const toggleMenu = () => {
     setCartOpen((prevIsOpen) => !prevIsOpen);
   };
 
   const isAdmin = userType === "1"; // 이 부분을 추가
 
   return (
     <div className="header_container">
       <header>
         <nav>
           <ul>
             <li className="navLogo">
               <a href="/">
                 <img src="/logo.png" alt="Logo" />
               </a>
             </li>
             <li><a href="/store">스토어</a></li>
             <li><a href="/faq">FAQ</a></li>
             {isAdmin && (
               <li><a href="/admin">관리자</a></li>
             )}
             <li><a href="/mypage">마이페이지</a></li>
             <AuthComponent />
             <li><CartMenu cartOpen={isCartOpen} toggleMenu={toggleMenu} /></li>
           </ul>
         </nav>
       </header>
     </div>
   );
 }
 
 export default Header;