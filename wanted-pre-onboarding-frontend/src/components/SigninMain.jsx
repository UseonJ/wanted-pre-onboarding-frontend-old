import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css';


export function SigninMain ({title,method,fetchurl, isLogin ,setIsLogin}) {
    const [loginInfo, setLoginInfo] = useState({
      email:'',
      password:''
    });
    
    const navigation = useNavigate();

    const [idValid, setidValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const [idMSG, setIdMSG] = useState('');
    const [passwordMSG, setPasswordMSG] = useState('');
    
    const regExid = /@/
    const regExpw = /\w{8,}/

const handleIdValue = (e) =>{

    setLoginInfo({...loginInfo, email:e.target.value})
    
    if(regExid.test(e.target.value)){
       setidValid(true)
       setIdMSG('')
    } else {
       setidValid(false)
       setIdMSG('유효하지 않은 형식입니다')
    }    
}

const handlePasswordValue = (e) =>{
  setLoginInfo({...loginInfo, password:e.target.value})
  if(regExpw.test(e.target.value)){
    setPasswordMSG('')
    setPasswordValid(true)    
  } else {
    setPasswordMSG('비밀번호는 8자리 이상이어야합니다') 
    setPasswordValid(false)
  }   
}

// let token = ''

const fetchhandler = (method,fetchurl,idValue,passwordValue)=>{
  
  return fetch("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(loginInfo)    
      })
      .then(res=>res.json())
      .then((res) => {
        // token = res.access_token
        localStorage.setItem('token', res.access_token);
        alert('로그인에 성공하셨습니다!');
        // 토큰이 '' 초기값이 아니라 저장된 내용이 있고 로컬스토리지와 같은 경우에 isLogin 상태변경 및 리다이렉트
        // if(localStorage.getItem('token') === token){}
        setIsLogin(true)
        // if(isLogin) 
        navigation('/todo')
        }
      )
      .catch((error) => {
        console.log(error);
        alert("로그인에 실패하였습니다.")
      });
}

    return (
    <main className={styles.Main}>
        <div><h1>Sign in!!</h1></div> 
        <fieldset>
            <input data-testid="email-input" 
              type="text" 
              className="username" 
              placeholder="아이디(이메일)" 
              onChange={handleIdValue}/>
        </fieldset>      
        <div>{idMSG}</div>      
        <fieldset>
            <input
              data-testid="password-input" 
              type="password" 
              className="password" 
              placeholder="비밀번호" 
              onChange={handlePasswordValue}/>
        </fieldset>

        <div>{passwordMSG}</div>

      
      <fieldset className={styles.signup}>
        <button 
          data-testid="signin-button"
          disabled={idValid && passwordValid? false:true}
          className={idValid && passwordValid? styles.active:styles.inactive} 
          onClick={fetchhandler}>{title}</button>
      </fieldset>
    </main>
    )
}