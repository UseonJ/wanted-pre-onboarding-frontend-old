import {stc} from 'styled-components'

const Button = stc.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 12rem;
  height: 2.25rem;
  color: var(--white);
  background-color: var(--coz-purple-600);
  font-size: 14px;
  transition: all 0.3s;
`

export function Button () {
    return (
        <Button></Button>
    )
}