import React, { useState } from 'react';

export default function Signin(){
    const [loginInfo, setLoginInfo] = useState({
        userId: '',
        password: '',
      });
      const [checkedKeepLogin, setCheckedKeepLogin] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');
      const handleInputValue = (key) => (e) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value });
      };
      const loginRequestHandler = () => {
        const { userId, password } = loginInfo;
        if (!userId || !password) {
          setErrorMessage('아이디와 비밀번호를 입력하세요');
          return;
        } else {
          setErrorMessage('');
        }
      };

    return(
        <div className='container'>
      <div className='left-box'>
        <span>
          Wanted
          <p>Pre-onboarding</p>
          Internship
        </span>
      </div>
      <div className='right-box'>
        <h1>AUTH STATES</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='input-field'>
            <span>ID</span>
            <input type='text' data-testid='id-input' onChange={handleInputValue('userId')} />
            <span>Password</span>
            <input
              type='password'
              data-testid='password-input'
              onChange={handleInputValue('password')}
            />
            <label className='checkbox-container'>
              <input type='checkbox' onChange={() => setCheckedKeepLogin(!checkedKeepLogin)} />
              {' 로그인 상태 유지하기'}
            </label>
          </div>
          <button type='submit' onClick={loginRequestHandler}>
            LOGIN
          </button>
          {errorMessage ? (
            <div id='alert-message' data-testid='alert-message'>
              {errorMessage}
            </div>
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
    )
}