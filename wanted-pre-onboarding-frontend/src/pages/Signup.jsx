import stc from 'styled-components'
import { Main } from "../components/Main";

const Signup_Body = stc.div`
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

export default function Signup () {
  
  const title = '회원가입'

  return(
    
    

    <Signup_Body>
      <Main title = {title}>      
      </Main>
    </Signup_Body>
    
    )
}