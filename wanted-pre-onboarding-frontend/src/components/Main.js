import stc from 'styled-components'

const Main_C = stc.main`
    border: none;
    width: 12rem;
    font-size: 14px;
`

export function Main () {
    return (
        <Main_C>test</Main_C>
    )
}