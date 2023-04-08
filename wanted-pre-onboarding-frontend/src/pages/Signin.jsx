import { SigninMain } from '../components/SigninMain';
import stc from 'styled-components'

const Signin_Body = stc.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-image: linear-gradient(
    to bottom,
    rgba(69, 44, 221, 0.3),
    rgba(255, 255, 255, 0)
  )
`

export default function Signin({isLogin, setIsLogin}){

  console.log(isLogin)
  
  const title = "로그인"
  const method = "POST"
  const signinURL = "https://www.pre-onboarding-selection-task.shop/auth/signin"
  
  return(
    
    <Signin_Body>
      <SigninMain title = {title}
            method = {method}
            fetchurl = {signinURL}
            isLogin = {isLogin}
            setIsLogin = {setIsLogin}>      
      </SigninMain>
    </Signin_Body>
    
    )
}