import stc from 'styled-components'
import { Todos } from '../components/Todos'

const Todo_Container = stc.div`
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

export default function Todo () {
    return (
        <Todo_Container>            
            <Todos>
            </Todos>
        </Todo_Container>        
    )
}