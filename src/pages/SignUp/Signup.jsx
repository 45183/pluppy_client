import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axios';

function SignUp() {


  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkbox, setCheckbox] = useState('');

  const [pwc, setPwc] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwcValid, setPwcValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [checkValid, setCheckValid] = useState(false);


  const [notAllow, setNotAllow] = useState(true);
  
  const [terms, setTerms] = useState(false);

  const [checked, setChecked] = useState([false, false, false, false]);

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



  const handleName = (e) => {
    setName(e.target.value)
    const regex=
    /^[가-힣]{2,}$/;
    setNameValid(regex.test(e.target.value))
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
    const regex=
    /^(\d{2,3})(\d{3,4})(\d{4})$/;
    setPhoneValid(regex.test(e.target.value));
  }

  const handleCheckbox= (e)=>{
    setCheckbox(e.target.checked)
    setCheckValid(e.target.checked)
  }

  const onClickTermButton = (e) => {
    setTerms(!terms);
  };


  const handleChange = (index, e) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = e.target.checked;
    setChecked(updatedChecked);

    const allChecked = updatedChecked.every((item) => item);
    setNotAllow(!(emailValid && pwValid && pwcValid && nameValid && phoneValid && allChecked));
  };


  const ParentChecked = checked[0] && checked[1] && checked[2] && checked[3];

  const children = (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
      <label>
        <input value={checkbox} type="checkbox" checked={checked[0]} onChange={
          (e) => handleChange(0, e)} />
        [필수] 만 14세 이상입니다.
      </label>
      <label>
        <input value={checkbox}  type="checkbox" checked={checked[1]} onChange={
          (e) => handleChange(1, e)} />
        [필수] 이용약관 동의
      </label>
      <label>
        <input value={checkbox}  type="checkbox" checked={checked[2]} onChange={
          (e) => handleChange(2, e)} />
        [필수] 개인정보 수집 및 이용 동의
      </label>
      <label>
        <input value={checkbox}  type="checkbox" checked={checked[3]} onChange={
          (e) => handleChange(3, e)} />
        [필수] 개인정보 제 3자 제공 동의
      </label>
    </div>
  );

  useEffect(() => {
    if (emailValid && pwValid && pwcValid && nameValid && phoneValid && checkValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid, pwcValid, nameValid, phoneValid, checkValid]);



  
  const navigate = useNavigate();

  const onSubmit = async(e) => {
    e.preventDefault()
    await axiosInstance.post('/user/signUp', {email: email, name: name, password: pw, phone: phone})
    navigate('/')
  }



  let regex =         
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@#$%^&\\(\\)\-_=+])(?!.*[^a-zA-Z0-9$`~!@#$%^&*#^?&\\(\\)\-_=+]).{8,20}$/;

return (
    <div className="SignUp">
      <div className="signUp">
        <h2>SIGN UP</h2>
        <form onSubmit={onSubmit}>
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
          <input 
            type="text" 
            placeholder="이름" 
            value={name} 
            onChange={handleName}
          />
          <br />
          <div>
            {
              !nameValid && name.length > 0 &&(
                <div>
                  {
                    <div>올바른 이름을 입력해주세요</div>
                  }
                </div>
              )
            }
          </div>
          <input 
            type="text" 
            placeholder="휴대폰번호" 
            value={phone} 
            onChange={handlePhone} 
            />
          <br />
            <div>
            {
              !phoneValid && phone.length > 0 && (
                <div> ' - ' 을(를) 빼고 올바른 번호를 입력해주세요</div>
              )
            }
            </div>
          <div>
              <p>
                  <a href='/terms'>Pluffy 이용약관</a>     <button onClick={onClickTermButton}>V</button>
              </p>
              <p>모두 확인하였으며 동의합니다
                  <label>

                      <input
                          type="checkbox"
                          checked={ParentChecked}
                          value={checkbox}
                          onChange={
                          (e) =>  { setChecked(
                            [e.target.checked, e.target.checked, e.target.checked, e.target.checked]
                          );
                          handleCheckbox(e)
                          }
                        }
                          />
                  </label>

             
                  <br></br>
                  전체 동의에는 필수 정보에
                  <br></br>대한 동의가 포함되어 있습니다
              </p>
              {terms && children}
          </div>
      <button><a href='/login'>logIn Page</a></button>
      <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    
   
  );
}




export default SignUp;
