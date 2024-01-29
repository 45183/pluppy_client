import './Admin_Header.css';
const AdminHeader = () => {
  return (
    <div className="admin_header">
      <header>
        <nav>
          <ul>
            <li className="navLogo"><a href="/admin">
            <img src="/logo2.png"/></a></li>
            <li><a href="/user">회원관리</a></li>
            <li><a href="/order">주문관리</a></li>
            <li><a href="/productList">상품관리</a></li>
            <li><a href="/">홈페이지</a></li>
            <li><a href="/login">로그아웃</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default AdminHeader;
