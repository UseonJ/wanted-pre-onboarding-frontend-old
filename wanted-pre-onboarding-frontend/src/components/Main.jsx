
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css';


export function Main ({title,method,fetchurl}) {
    const [loginInfo, setLoginInfo] = useState({
      email:'',
      password:''
    });
    
    const navigation = useNavigate();

    const [idValid, setidValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [emailMSG, setEmailMSG] = useState('');
    const [passwordMSG, setPasswordMSG] = useState('');
    
    const regExid = /@/
    const regExpw = /\w{8,}/

const handleIdValue = async (e) =>{
    setLoginInfo({...loginInfo, email:e.target.value})
    if(regExid.test(e.target.value)){
       setidValid(true)
       setEmailMSG('')
    } else {
       setidValid(false)
       setEmailMSG('유효한 이메일 형식이 아닙니다')
    }    
}

const handlePasswordValue = (e) =>{
  setLoginInfo({...loginInfo, password:e.target.value})
  if(regExpw.test(e.target.value)){
    setPasswordMSG('')
    setPasswordValid(true)
  } else {
    setPasswordMSG('비밀번호는 8자리 이상이어야 합니다') 
    setPasswordValid(false)    
  }   
}

const fetchhandler = (method,fetchurl,idValue,passwordValue)=>{
  
  
  return fetch("https://www.pre-onboarding-selection-task.shop/auth/signup", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(loginInfo)    
      })
      .then((res) => {
        alert(`회원가입에 성공하셨습니다!
        ID:${loginInfo.email}`);
        navigation("/signin")
      })
      .catch((error) => {
        console.log(error);
        alert("회원가입에 실패하였습니다.")
      });
}

    return (
        <main className={styles.Main}>
          <div><h1>Sign up!!</h1></div> 
        <fieldset>
            <input data-testid="email-input" 
              type="text" 
              className="username" 
              placeholder="아이디(이메일)" 
              onChange={handleIdValue}/>
        </fieldset>          
        <div>{emailMSG}</div>      
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
          data-testid="signup-button"
          disabled={(idValid && passwordValid)? false:true}
          className={(idValid && passwordValid)? styles.active:styles.inactive} 
          onClick={fetchhandler}>{title}</button>
      </fieldset>
        </main>
    )
}