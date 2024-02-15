import React, { useState, useEffect } from "react";
import "./Cart.css"
import clearCart from "./images/clearCart.png";

const Cart = ({ closeCart }) => {
    const shippingCostThreshold = 50000;
    const shippingCost = 3000;

    const [cartItems, setCartItems] = useState([
        { id: 1, name: '상품1', price: 1000, quantity: 1, selected: true },
        { id: 2, name: '상품2', price: 2000, quantity: 1, selected: true },
    ]);

    useEffect(() => {
        handleSelectAll(true);
    }, []);

    const handleSelectAll = (isChecked) => {
        const updatedCart = cartItems.map(item => ({ ...item, selected: isChecked }));
        setCartItems(updatedCart);
    };

    const handleSelectItem = (itemId) => {
        const updatedCart = cartItems.map(item =>
            item.id === itemId ? { ...item, selected: !item.selected } : item);
        setCartItems(updatedCart);
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        const updatedCart = cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: Math.max(newQuantity, 1) } : item);
        setCartItems(updatedCart);
    };

    const handleRemoveSelected = () => {
        const updatedCart = cartItems.filter(item => !item.selected);
        setCartItems(updatedCart);
    };

    const getSelectedItemsTotal = () => {
        return cartItems.reduce((total, item) => {
            if (item.selected) {
                total += item.price * item.quantity;
            }
            return total;
        }, 0);
    };

    const getTotalPrice = () => {
        const selectedItemsTotal = getSelectedItemsTotal();
        const shippingCosts = selectedItemsTotal >= shippingCostThreshold ? 0 : shippingCost;
        return selectedItemsTotal + shippingCosts;
    };

    const handleCheckout = () => {
        // 결제 로직 추가하기
        alert(`총 결제 금액: ${getTotalPrice()}원`);
    };

    const handleCloseCart = () => {
        closeCart();
    };

    return (
        <div>
            <button className="closeBtn" onClick={handleCloseCart}>X</button>
            {cartItems.length > 0 && (
                <>
                    <label>
                        <input
                            type="checkbox"
                            // checked={cartItems.length > 0 && cartItems.every(item => item.selected)}
                            checked={cartItems.every(item => item.selected)}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                        />
                        &nbsp;&nbsp;전체 선택

                    </label>
                    <button onClick={handleRemoveSelected}
                        className="allDelete"><span className="x">X</span>   선택 삭제</button>

                    <hr />

                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={() => handleSelectItem(item.id)}
                                />
                                {item.id} - 가격 : {item.price} 원
                                <div className="quantity-control">
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <span className="quantity-display">{item.quantity}</span> {/* 수량 표시 */}
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <div className="price">
                        <div className="selectShip">
                            <div className="selectPrice">
                                <p>선택 상품</p>
                                <p className="pricecss">{getSelectedItemsTotal()} 원</p>
                            </div>
                            <div className="plus">+</div>
                            <div className="shipPrice">
                                <p>배송비</p>
                                <p className="pricecss">{getSelectedItemsTotal() >= shippingCostThreshold ? 0 : shippingCost} 원</p>
                            </div>
                        </div>
                        <div className="allPrice">
                            <p>주문 금액</p>
                            <p className="finalPrice">{getTotalPrice()} 원</p>
                        </div>
                    </div>
                    <hr />
                    <button onClick={handleCheckout}
                        className="pay">결제하기</button>

                </>
            )}


            {cartItems.length === 0 && <p className="clearCart"><img src={clearCart}/></p>}

        </div>
    )
}

export default Cart;
