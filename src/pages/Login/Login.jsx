import React from 'react';
import './Login.css'; // 스타일 파일 import

const Login = () => {

  return (
    <div className='login'>
    <div className="login_container">

      <div className="login-section">
        <header>로그인</header>

        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn">로그인</button>
          <div className="social-buttons">
          <button><i className="bx bxl-google"></i> Google로 로그인</button>
          <button><i className="bx bxl-apple"></i> Apple로 로그인</button>
          </div>

          <a href="#">비밀번호를 잊으셨나요?</a>
        </form>
      </div>


      <div className="signUp-section">
        <a href='/signUp'>signUp</a>
      </div>
    </div>
    </div>
  );
};

export default Login;
