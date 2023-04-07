
import { useState, useEffect } from 'react';
import styles from './Main.module.css';

export function Main () {
    const [idValue, setIdValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordCheckValue, setPasswordCheckValue] = useState("");
    const [idValid, setidValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordCheckValid, setPasswordCheckValid] = useState(false);
    const [allValid, setAllValid] = useState(false);
    const regExid = /@/
    const regExpw = /\w{8,}/

const handleIdValue = (e) =>{
    setIdValue(e.target.value)
    if(regExid.test(idValue)){
       setidValid(true)
    } else if(!regExpw.test(idValue)) {
       setidValid(false)
    }    
}

const handlePasswordValue = (e) =>{
  setPasswordValue(e.target.value)
  if(regExpw.test(passwordValue)){
    setPasswordValid(true)
  } else if (!regExpw.test(passwordValue)){
    setPasswordValid(false) 
  }   
}

const handlePasswordCheckValue = (e) =>{
  setPasswordCheckValue(e.target.value)
  if(passwordValue === passwordCheckValue){
    setPasswordCheckValid(true)
  } else if (passwordValue === passwordCheckValue){
    setPasswordCheckValid(false) 
  }   
}

useEffect (() => {
  if(idValid && passwordCheckValid && passwordValid){
    setAllValid(true)
  } else {
    setAllValid(false)
  }
},[idValid,passwordValid,passwordCheckValid])

    return (
        <main className={styles.Main}> 
        <fieldset>
            <input data-testid="email-input" 
              type="text" 
              className="username" 
              placeholder="아이디(이메일)" 
              onChange={handleIdValue}/>
        </fieldset>      
        <div className={idValid? "":styles.hide}>사용할 수 있는 아이디입니다</div>
        <div className={idValid? styles.hide: idValue? "" : styles.hide}>유효한 이메일 형식이 아닙니다</div>      
        <fieldset>
            <input
              data-testid="password-input" 
              type="password" 
              className="password" 
              placeholder="비밀번호" 
              onChange={handlePasswordValue}/>
        </fieldset>

        <div className={passwordValid? styles.hide: passwordValue? "":styles.hide}>비밀번호는 8자리 이상이어야 합니다</div>

      <fieldset>
        <input
          type="password"
          className="password-retype"
          placeholder="비밀번호 확인"
          onChange={handlePasswordCheckValue}
        />
      </fieldset>

      
      <div className={passwordCheckValid? "":styles.hide}>비밀번호가 일치하지 않습니다</div>

      
      <fieldset className={styles.signup}>
        <button 
          data-testid="signup-button"
          disabled={allValid? false:true} 
          onClick={'fetch method'}>회원가입</button>
      </fieldset>
        </main>
    )
}