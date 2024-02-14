import AdminHeader from "../../Admin/Admin_Header";
import Order_Button from "./Order_Button";
const OrderDetail = () => {
  return (
    <div>
      <AdminHeader />
      <div className="orderDetail_container">
        <div>
          <h3>주문상세</h3>
          <div>
            <table className="orderDetail">
              <tr>
                <th id="order_gray">상품명</th>
                <td>플러피 세트</td>
                <th id="order_gray">주문상태</th>
                <td>
                  <Order_Button />
                </td>
              </tr>
              <tr>
                <th id="order_gray">아이디</th>
                <td>pluppy@naver.com</td>
                <th id="order_gray">주문일자</th>
                <td>2024.xx.xx</td>
              </tr>
              <tr>
                <th id="order_gray">주문번호</th>
                <td>xxxx-xxxx</td>
                <th id="order_gray">연락처</th>
                <td>010-xxxx-xxxx</td>
              </tr>
              <tr>
                <th id="order_gray">배송지</th>
                <td colSpan={3}>인천광역시 xx구 xx동</td>
              </tr>
            </table>
            <a href="/order">
              <button id="pink_button">정보수정</button>
            </a>
            <a href="/order">
              <button id="blue_button">목록으로</button>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetail;
