import React,{useState, useEffect} from 'react';
import './Login.css'; // 스타일 파일 import
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axios';
import Cookies from 'js-cookie';


const Login = () => {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState("");
  
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const [notAllow, setNotAloow] = useState(true);


  

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


  useEffect(()=>{
     if(emailValid && pwValid){
        setNotAloow(false);
        return
     }
     setNotAloow(true);

  },
  [emailValid,pwValid]);

  
  const navigate = useNavigate()


  const onSubmit = async(e) => {
   e.preventDefault();
   try{

     const res = await axiosInstance.post(`/auth/login`, {email:email, password: pw})
      
     //  로그인 성공 시 사용자 정보를 쿠키에 저장
     Cookies.set('userId', res.data.data.userInfo.userId);
      console.log(res.data.data.userInfo.userId)
      navigate('/')
     } catch(error){
        console.error(error)
     }
 }


  return (
<div className='login'>
    <div className='logIn'>
        <h2>로그in</h2>
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    placeholder='google@gmail.com'
                    value={email}
                    onChange={handleEmail}/>
                <div>
                    { !emailValid && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요</div>
                    ) }
                </div>
            </div>
            <div>
                <input
                    type='password'
                    placeholder='영문, 숫자, 특수문자 포함 8자 이상 입력'
                    value={pw}
                    onChange={handlePassword}/>
                <div>
                    { !pwValid && pw.length > 0 && (
                    <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    ) }
                </div>
            </div>
            <div>
               <button type="submit">
                  로그인
               </button><br/>
            </div>
        </form>
    </div>
    <button>카카오 로그인</button><br/>
    <button>구글 로그인</button><br/>
    <p>
        <span className='searchId'>아이디 찾기</span>
        <span className='searchPw'> 비밀번호 찾기</span>
    </p>
      <div className="signUp-section">
        <a href='/signUp'>signUp</a>
      </div>
    </div>
  );
};

export default Login;
