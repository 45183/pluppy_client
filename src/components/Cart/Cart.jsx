import React, { useState, useEffect } from "react";

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
            <button onClick={handleCloseCart}>닫기</button>
            {cartItems.length > 0 && (
                <>
                    <label>
                        <input
                            type="checkbox"
                            // checked={cartItems.length > 0 && cartItems.every(item => item.selected)}
                            checked={cartItems.every(item => item.selected)}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                        />
                        전체 선택
                    </label>

                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={() => handleSelectItem(item.id)}
                                />
                                {item.id} - 가격 : {item.price} 원
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                />
                            </li>
                        ))}
                    </ul>

                    <p>선택 상품 가격 : {getSelectedItemsTotal()}원</p>
                    <p>배송비 : {getSelectedItemsTotal() >= shippingCostThreshold ? 0 : shippingCost}원</p>
                    <p>총 가격 : {getTotalPrice()}원</p>

                    <button onClick={handleRemoveSelected}>선택 삭제</button>
                    <button onClick={handleCheckout}>결제하기</button>

                </>
            )}


            {cartItems.length === 0 && <p>장바구니가 비어 있습니다.</p>}

        </div>
    )
}

export default Cart;
