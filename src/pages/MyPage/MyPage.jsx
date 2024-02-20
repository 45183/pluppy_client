import Header from "../../components/Header/Header";
import "./MyPage.css";

const MyPage = () => {
  return (
    <div>
      <Header />
      <div className="myPage_delivery">
        <div id="myPage">
          <h2>
            어서오세요!<br></br> 플러피님 🐾
          </h2>
          <ul className="delivery_state">
            <li>임금대기</li>
            <p>〉</p>
            <li>결제완료</li>
            <p>〉</p>
            <li>상품준비중</li>
            <p>〉</p>
            <li>배송중</li>
            <p>〉</p>
            <li>배송완료</li>
          </ul>
        </div>
      </div>
      <div>
        <nav>
          <ul className="myPage_container">
            <h3>나의 쇼핑정보</h3>
              <a href="/myPage">주문배송조회</a>
            <br></br>
            <h3>나의 계정</h3>

              <a href="/modify">회원정보</a>

          </ul>
        </nav>
      </div>
      <div className="delivery_info"> 
        <div className="delivery_content">
        <table id="delivery_table">
            <tr>
              <th>주문일</th>
              <th>주문내역</th>
              <th>주문번호</th>
              <th>결제금액</th>
              <th>주문상태</th>
            </tr>
            <tr>
              <td>2024.00.00</td>
              <td>플러피 세트</td>
              <td>xxx-xxx</td>
              <td>38500원</td>
              <td>배송중</td>
            </tr>
        </table>
      </div>
      </div>
    </div>
  );
};
export default MyPage;
