import React from 'react';
import './Login.css'; // 스타일 파일 import

const Login = () => {
  const handleLoginToggle = (isSignUp) => {
    const container = document.querySelector(".login_container");
    container.classList.toggle("active", !isSignUp);
  };

  return (
    <div className='login'>
    <div className="login_container">

      <div className="login-section">
        <header onClick={() => handleLoginToggle(true)}>로그인</header>

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
        <header onClick={() => handleLoginToggle(false)}>signUp</header>

        <div className="social-buttons">
          <button><i className="bx bxl-google"></i> Google로 가입</button>
          <button><i className="bx bxl-apple"></i> Apple로 가입</button>
        </div>

        <div className="separator">
          <div className="line"></div>
          <p>또는</p>
          <div className="line"></div>
        </div>

        <form>
          <input type="text" placeholder="이름" required />
          <input type="email" placeholder="이메일 주소" required />
          <input type="password" placeholder="비밀번호" required />
          <a href="#">비밀번호를 잊으셨나요?</a>
          <button type="submit" className="btn">회원가입</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
