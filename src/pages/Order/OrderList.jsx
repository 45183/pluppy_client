import Header from "../../components/Header/Header";
import "./OrderList.css";
const OrderList = () => {
  return (
    <div>
      <Header />
      <h2>order</h2>
        <div className="orderList">
          <div className="order_info">
          <div className="delivery">
            <h2>배송정보</h2>
            <h4>기본 배송지</h4>
            <p>
              배송명 <input type="text" />
            </p>
            <p>
              수령인 <input type="text" />
            </p>
            <p>
              배송지 <input type="text" />
            </p>
            <p>
              연락처 <input type="text" />
            </p>
            <select>
              <option>배송시 요청사항을 선택해 주세요.</option>
              <option>문 앞에 놓아주시면 되요.</option>
              <option>안전 배송 부탁드립니다.</option>
              <option>벨 누르지 말아주세요.</option>
            </select>
            </div>
            <div className="product_info">
              <h2>상품정보</h2>
            </div>
            <div className="payment">
              <h2>결제방법</h2>
              <button>신용/체크카드</button>
              <button>토스페이</button>
              <button>카카오페이</button>
              <button>네이버페이</button>
              <button>무통장입금</button>
            </div>
          </div>
          <div className="payment_price">
            <h2>결제금액</h2>
            <p>총 상품 금액</p>
            <p>할인금액</p>
            <p>배송비</p>
            <p>총 결제 금액</p>
              <p><input type="checkbox" /> 주문 내용을 확인했으며, 아래 내용에 모두 동의합니다.</p>
              <p><input type="checkbox" /> (필수) 개인정보 수집/ 이용 동의 보기</p>
              <p><input type="checkbox" /> (필수) 개인정보 제3자 제공 동의 보기</p>
              <p><input type="checkbox" /> (필수) 결제대행 서비스 이용약관 (주)KG이니시스</p>
              <p>결제 및 계좌 안내 시 상호명은 (주)플러피로 표기되니 참고 부탁드립니다.</p>
              <a href="/payment_loading"><button>결제하기</button></a>
          </div>
        </div>
      </div>
  );
};
export default OrderList;
