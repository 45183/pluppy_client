import "./Header.css";

function Header(){
   return <div>
    <header>
        <nav>
         <ul>
            <li className="navLogo"><a href="/">img</a></li>
            <li><a href="/">About US</a></li>
            <li><a href="/">Community</a></li>
            <li><a href="/store">STORE</a></li>
            <li><button><a href="/">sign in</a></button></li>
            <li><button><a href="/">cart</a></button></li>
         </ul>
        </nav>
      </header>
   </div>
}

export default Header;