function Logout(props) {
    const isLogin = props.isLogin;
  
    const onClickLogout = () => {
        sessionStorage.removeItem('id')
        document.location.href = '/'
    }
  
    return (
       <div className="top_navbar">
          <div className="menu">
            <input type="button" value="로그아웃" onClick={onClickLogout}></input>
          </div>
       </div>
    );
  }
  
  export default Logout;