import AdminHeader from "./Admin_Header"
import "./Order.css";
import Order_Button from "./Order_Button";
const Order = () => {
    return(
        <div>
            <AdminHeader/>
            <div className="order">
      <div className="orderManagement">
        <h3>주문내역</h3>
        <div className="order_container">
        <table className="order_table">
      <thead>
        <tr>
          <th>주문번호</th>
          <th>고객명</th>
          <th>주문일자</th>
          <th>상품명</th>
          <th>주문상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>xxxxx</td>
          <td>플러피</td>
          <td>2024.00.00</td>
          <td>플러피 세트</td>
          <td><Order_Button /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
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
        </div>
    )
}
export default Order;