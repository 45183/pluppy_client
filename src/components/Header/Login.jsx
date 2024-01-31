import React, { useState, useEffect } from 'react';

function Login() {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
 
  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const InputId = (e) => {
      setInputId(e.target.value)
  }
  const InputPw = (e) => {
      setInputPw(e.target.value)
  }

  const onClickLogin = () => {
      console.log('======================','로그인 성공')
      sessionStorage.setItem('id', inputId)

      // 작업 완료 되면 페이지 이동(새로고침)
      document.location.href = '/'
  }

  return (
    <div className="wrap">
      <div className="login">
        <div className="submit">
        <a href='/login'><input type="button" value="로그인" onClick={onClickLogin}></input></a>
        </div>
      </div>
    </div>
  );
}

export default Login;