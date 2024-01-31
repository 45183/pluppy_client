import "./Order.css";
import OrderTable from "./OrderTable";
const OrderList = () => {
  return (
    <div className="order">
      <div className="orderManagement">
        <h3>주문내역</h3>
        <div className="order_container">
          <OrderTable />
        </div>
      </div>
      <div className="order_nav">
          <option>입금대기</option>
          <option>입금완료</option>
          <option>상품준비중</option>
          <option>배송중</option>
          <option>배송완료</option>
          <option>주문확정</option>
          <option>취소중</option>
          <option>취소완료</option>
        </div>
    </div>
  );
};
export default OrderList;
