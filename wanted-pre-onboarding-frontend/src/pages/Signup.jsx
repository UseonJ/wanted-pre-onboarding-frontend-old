import stc from 'styled-components'

import { Fieldset_Input } from "../components/Fieldset_Input";
import { Fieldset_Button } from "../components/Fieldset_Button";
import { Message_div } from "../components/Message_div";
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
  ),
  url('./images/codestates-motif.png');
`

export default function Signup () {
    return(
    

    <Signup_Body>
      <Main>  
      <fieldset>
        <input type="text" className="username" placeholder="아이디" />
      </fieldset>      
      <div class="success-message hide">사용할 수 있는 아이디입니다</div>
      <div class="failure-message hide">아이디는 네 글자 이상이어야 합니다</div>      
      <fieldset>
        <input type="password" className="password" placeholder="비밀번호" />
      </fieldset>

      
      <fieldset>
        <input
          type="password"
          className="password-retype"
          placeholder="비밀번호 확인"
        />
      </fieldset>

      
      <div class="mismatch-message hide">비밀번호가 일치하지 않습니다</div>

      
      <fieldset class="signup">
        <button>회원가입</button>
      </fieldset>
      </Main>
    </Signup_Body>
    
    )
}

{/* <Fieldset_Input></Fieldset_Input>   */}
{/* <Message_div></Message_div>
      <Message_div></Message_div> */}
{/* <Fieldset_Input></Fieldset_Input> */}
{/* <Fieldset_Input></Fieldset_Input> */}
{/* <Message_div></Message_div> */}
{/* <Fieldset_Button></Fieldset_Button> */}