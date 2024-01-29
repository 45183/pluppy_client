import React, {useState,useEffect} from 'react';
import '../Signup/Signup.css';

function SignUp() {
  
  const User = {
    email : 'test@example.com',
    pw:'test2323@@@'
 }
 
 
 
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState("");
    
    const [pwc, setPwc] = useState("");

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwcValid, setPwcValid] = useState(false);

    const [notAllow, setNotAloow] = useState(true);
 
    const [terms, setTerms] = useState(false);

    

    const handleEmail = (e)=>{
       setEmail(e.target.value);
       const regex =
          /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
       if(regex.test(email)){
          setEmailValid(true);
       }else{
          setEmailValid(false);
       }
 
    }
 
    const handlePassword = (e)=>{
       setPw(e.target.value);
       const regex = 
       /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@#$%^&\\(\\)\-_=+])(?!.*[^a-zA-Z0-9$`~!@#$%^&*#^?&\\(\\)\-_=+]).{8,20}$/;      if(regex.test(pw)){
          setPwValid(true);
       }else{
          setPwValid(false);
       }
    }
    
    const handlePasswordCheck = (e) => {
      setPwc(e.target.value);
      const regex =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@#$%^&\\(\\)\-_=+])(?!.*[^a-zA-Z0-9$`~!@#$%^&*#^?&\\(\\)\-_=+]).{8,20}$/;
      
      const PasswordMatch = e.target.value === pw;
    
        
      const PasswordValid = regex.test(e.target.value);
    
      setPwcValid(PasswordMatch && PasswordValid);
    };
    

    const onClickConfrimButton =()=>{
       if(email===User.email){
          if(pw === User.pw){
             alert('로그인에 성공하였습니다');
          }else{
             alert('패스워드가 틀렸습니다.')
          }
       }else{
          alert('등록되지 않은 회원입니다.')
       }
    }
    
    const onClickTermButton =(e)=>{
      setTerms(!terms)
    }


    useEffect(()=>{
       if(emailValid && pwValid){
          setNotAloow(false);
          return
       }
       setNotAloow(true);
 
    },
    [emailValid,pwValid]);
  let regex =         
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@#$%^&\\(\\)\-_=+])(?!.*[^a-zA-Z0-9$`~!@#$%^&*#^?&\\(\\)\-_=+]).{8,20}$/;

  return (
    
    <div className="SignUp">
      <div>
        <div className='logIn'>
            <h2>로그in</h2>
            <form>
              <div>
                <input 
                type="text" 
                placeholder='google@gmail.com'
                value={email}
                onChange={handleEmail}
                />
                <div>
                  {
                    !emailValid && email.length > 0 && (
                      <div>올바른 이메일을 입력해주세요</div>
                    )
                  }
                </div>
              </div>
              <div>
                <input 
                type='password' 
                placeholder='영문, 숫자, 특수문자 포함 8자 이상 입력'
                value={pw}
                onChange={handlePassword}
                />
                <div>
                  {
                    !pwValid && pw.length > 0 && (
                    <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )  
                  }
                </div>
              </div>
            </form>
        </div>
        <div>
         <button
          onClick={onClickConfrimButton}
          disabled={notAllow}
         >
           로그인
         </button><br/>
        </div>
        <button>카카오 로그인</button><br/>
        <button>구글 로그인</button><br/>
        <p><span className='searchId'>아이디 찾기 </span><span className='searchPw'> 비밀번호 찾기</span></p>
        <div className='signUp'>
          <h2>SIGN UP</h2>
          <form>
              <div>
                <input type="text" 
                placeholder='google@gmail.com'
                value={email}
                onChange={handleEmail}
                />
              </div>
              <div>
                {
                  !emailValid && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요</div>
                  )
                }
              </div>
              <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={pw}
                    onChange={handlePassword}/>
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
                      onChange={handlePasswordCheck}/>
                  <div>
                      {!pwcValid && pwc.length > 0 && (
                      <div>
                          {pwc.length > 0 && !regex.test(pwc) && (
                          <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                          )} {pwc.length > 0 && pwc !== pw && (
                          <div>비밀번호가 같지 않습니다.</div>
                          )}
                      </div>
                      )}
                  </div>
                  </div>
              <input type='text' placeholder='이름'/><br></br>
              <input type="text" placeholder='휴대폰번호'/><br />
              <div>
              </div>
           </form>
           <p>Pluffy 이용약관</p>
           <p>
            <input type="checkbox" ></input>모두 확인하였으며 동의합니다
            <button
              onClick={onClickTermButton}
            >
              V</button>
           </p>

              <p>전체 동의에는 필수 정보에 대한 동의가 포함되어 있습니다.</p>
            {  
               terms === true ?
            (            
            <div value={terms}>
            <div>  
              <input type='checkbox' />[필수] 만 14세 이상입니다.<br/>
              <input type='checkbox' />[필수] 이용약관 동의<br/>
              <input type='checkbox' />[필수] 개인정보 수집 및 이용 동의<br/>
              <input type='checkbox' />[필수] 개인정보 제 3자 제공 동의<br/>
            </div>
            </div>
            )
            :null
          }
            <br/>
            <div><button>회원 가입</button></div>
        </div>
      </div>


    </div>  
  );
}

export default SignUp;
