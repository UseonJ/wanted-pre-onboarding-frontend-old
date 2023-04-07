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
  )
`

export default function Signup () {
    return(
    

    <Signup_Body>
      <Main>      
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