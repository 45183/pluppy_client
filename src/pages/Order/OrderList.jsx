import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import "./OrderList.css";
import {Address_info} from '../MyPage/User_Modify';

const OrderList = (props) => {
  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [provideCheck, setProvideCheck] = useState(false);
  const [serviceCheck, setServiceCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setProvideCheck(true);
      setUseCheck(true);
      setServiceCheck(true);
    } else {
      setAllCheck(false);
      setProvideCheck(false);
      setUseCheck(false);
      setServiceCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const provideBtnEvent = () => {
    if (provideCheck === false) {
      setProvideCheck(true);
    } else {
      setProvideCheck(false);
    }
  };

  const serviceBtnEvent = () => {
    if (serviceCheck === false) {
      setServiceCheck(true);
    } else {
      setServiceCheck(false);
    }
  };

  useEffect(() => {
    if (provideCheck === true && useCheck === true && serviceCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [provideCheck, useCheck, serviceCheck]);

  return (
    <div>
      <Header />
      <h2>order</h2>
      <div className="orderList">
        <div className="order_info">
          <div className="delivery">
            <h2>배송정보</h2>
            <h4>기존 배송지</h4>
            <p>
              배송명 <input type="text" />
            </p>
            <p>
              수령인 <input type="text" />
            </p>
               <Address_info />
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
          <p id='discount'>할인금액</p>
          <p>배송비</p>
          <p id='all_price'>총 결제 금액</p>
          <form method="post" action="">
            <div className="agree">
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="all-check"
                    checked={allCheck}
                    onChange={allBtnEvent}
                  />
                  <label id="all-check" for="all-check">
                    주문 내용을 확인했으며, 아래 내용에 모두 동의합니다.
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="check1"
                    checked={useCheck}
                    onChange={useBtnEvent}
                  />
                  <label for="check1">
                    <span>(필수)</span> 개인정보 수집 / 이용 동의
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="check2"
                    checked={provideCheck}
                    onChange={provideBtnEvent}
                  />
                  <label for="check2">
                    <span>(필수)</span> 개인정보 제3자 제공 동의
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="check3"
                    checked={serviceCheck}
                    onChange={serviceBtnEvent}
                  />
                  <label for="check3">
                    <span>(필수) </span>결제대행 서비스 이용약관 (주)KG이니시스
                  </label>
                </div>
                <p id='payment_p'>
                  결제 및 계좌 안내 시 상호명은 (주)플러피로 표기되니
                  참고 부탁드립니다.
                </p>
              </div>
            </div>
          </form>
          <div className="payment_button">
            <a href="/payment_loading">
              <button>결제하기</button>
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};
export default OrderList;
