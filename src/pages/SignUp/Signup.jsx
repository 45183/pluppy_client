import React, { useState, useEffect } from 'react';

function SignUp() {
  const User = {
    email: 'test@example.com',
    pw: 'test2323@@@',
  };

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [pwc, setPwc] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwcValid, setPwcValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);
  const [terms, setTerms] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    setEmailValid(regex.test(e.target.value));
  };

  const handlePassword = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@#$%^&\\(\\)\-_=+])(?!.*[^a-zA-Z0-9$`~!@#$%^&*#^?&\\(\\)\-_=+]).{8,20}$/;
    setPwValid(regex.test(e.target.value));
  };

  const handlePasswordCheck = (e) => {
    setPwc(e.target.value);
    const regex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@#$%^&\\(\\)\-_=+])(?!.*[^a-zA-Z0-9$`~!@#$%^&*#^?&\\(\\)\-_=+]).{8,20}$/;

    const passwordMatch = e.target.value === pw;
    const passwordValid = regex.test(e.target.value);

    setPwcValid(passwordMatch && passwordValid);
  };


  const onClickTermButton = (e) => {
    setTerms(!terms);
  };


  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid]);

  const [checked, setChecked] = useState([false, false]);

  const handleChange1 = (e) => {
    setChecked([e.target.checked, e.target.checked]);
  };

  const handleChange2 = (e) => {
    setChecked([e.target.checked, checked[1]]);
  };

  const handleChange3 = (e) => {
    setChecked([checked[0], e.target.checked]);
  };




  let regex =         
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@#$%^&\\(\\)\-_=+])(?!.*[^a-zA-Z0-9$`~!@#$%^&*#^?&\\(\\)\-_=+]).{8,20}$/;

  return (
    <div className="SignUp">
      <div className="signUp">
        <h2>SIGN UP</h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="google@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요</div>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={pw}
              onChange={handlePassword}
            />
            <div>
              {!pwValid && pw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )}
            </div>
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={pwc}
              onChange={handlePasswordCheck}
            />
            <div>
              {!pwcValid && pwc.length > 0 && (
                <div>
                  {pwc.length > 0 && !regex.test(pwc) && (
                    <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                  )}
                  {pwc.length > 0 && pwc !== pw && (
                    <div>비밀번호가 같지 않습니다.</div>
                  )}
                </div>
              )}
            </div>
          </div>
          <input type="text" placeholder="이름" />
          <br />
          <input type="text" placeholder="휴대폰번호" />
          <br />
          <button type="submit" disabled={notAllow}>
            Sign Up
          </button>
        </form>

        <div>
          <p><a href='/terms'>Pluffy 이용약관</a></p>
          <p>전체 동의에는 필수 정보에 <br></br>대한 동의가 포함되어 있습니다 
          <button onClick={onClickTermButton}>V</button></p>

          
          {
            terms === true ? 
            (
             <TerminateCheckbox />
            ) 
            : null
          }
        </div>
      </div>
    </div>
  );
}


function TerminateCheckbox() {
  const [checked, setChecked] = useState([false, false, false, false]);

  const handleChange = (index, e) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = e.target.checked;
    setChecked(updatedChecked);
  };

  const ParentChecked = checked[0] && checked[1] && checked[2] && checked[3];

  const children = (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
      <label>
        <input type="checkbox" checked={checked[0]} onChange={(e) => handleChange(0, e)} />
        Child 1
      </label>
      <label>
        <input type="checkbox" checked={checked[1]} onChange={(e) => handleChange(1, e)} />
        Child 2
      </label>
      <label>
        <input type="checkbox" checked={checked[2]} onChange={(e) => handleChange(2, e)} />
        Child 3
      </label>
      <label>
        <input type="checkbox" checked={checked[3]} onChange={(e) => handleChange(3, e)} />
        Child 4
      </label>
    </div>
  );

  return (
    <div>
      <label>
      <p> 모두 확인하였으며 동의합니다</p>
        <input
          type="checkbox"
          checked={ParentChecked}
          onChange={(e) => setChecked([e.target.checked, e.target.checked, e.target.checked, e.target.checked])}
        />
        Parent
      </label>
      {children}
    </div>
  );
}


export default SignUp;
