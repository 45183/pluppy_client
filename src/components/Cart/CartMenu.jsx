import React, { useState, useEffect, useRef } from "react";
import "./CartMenu.css";
import Cart from "./Cart";
import Jjim from "./Jjim";


function CartMenu({ cartOpen, toggleMenu }) {
  const cartMenuRef = useRef(null);
  const [activeTab, setActiveTab] = useState('cart');
  

  // 클릭 이벤트 핸들러 추가
  const handleOutsideClick = (e) => {
    if (cartMenuRef.current && !cartMenuRef.current.contains(e.target)) {
      toggleMenu(); // 클릭한 요소가 cartMenu 바깥이면 메뉴를 닫습니다.
    }
  };

  // 외부 클릭 감지를 위한 이벤트 리스너 등록
  useEffect(() => {
    if (cartOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [cartOpen]);

  const showCart = () => {
    setActiveTab('cart');
  };

  const showJjim = () => {
    setActiveTab('jjim');
  };

  return (
    <>
      <div ref={cartMenuRef} className={`cartMenu ${cartOpen ? "active" : ""}`}>
        <div className="tabButtons">
          <button onClick={showCart} className={activeTab === "cart" ? "activeTab" : ""}>
            <h2>장바구니</h2>
          </button>
          <button onClick={showJjim} className={activeTab === "jjim" ? "activeTab" : ""}>
            <h2>찜</h2>
          </button>
        </div>

        {activeTab === 'cart' && <Cart closeCart={toggleMenu}/>}
        {activeTab === 'jjim' && <Jjim closeJjim={toggleMenu}/>}
      </div>

      {cartOpen && <div className={`overlay ${cartOpen ? 'active' : ""}`}></div>}

      <button onClick={toggleMenu}>장바구니</button>
    </>
  );
}

export default CartMenu;
