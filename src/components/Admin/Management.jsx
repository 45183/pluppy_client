import "./Management.css";
const Management = () => {
  return (
    <div className="management">
      <div className="userList">
        <div className="list">
          <h3>회원 관리</h3>
          <a href="user">회원 리스트</a>
        </div>
      </div>
      <div className="orderList">
        <div className="list">
          <h3>주문 관리</h3>
          <a href="">주문 목록</a>
          <a href="">취소 목록</a>
        </div>
      </div>
      <div className="productList">
        <div className="list">
          <h3>상품 관리</h3>
          <a href="">상품 등록</a>
        </div>
      </div>
    </div>
  );
};
export default Management;
