import "./Header.css";

function Header(){
   return <div className="header_container">
    <header>
        <nav>
         <ul>
            <li className="navLogo"><a href="/">
               <img src="./logo.png"/></a></li>
            <li><a href="/about_us">About US</a></li>
            <li><a href="/community">커뮤니티</a></li>
            <li><a href="/store">스토어</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><button><a href="/login">로그인</a></button></li>
            <li><button><a href="/cart">장바구니</a></button></li>
         </ul>
        </nav>
      </header>
   </div>
}

export default Header;