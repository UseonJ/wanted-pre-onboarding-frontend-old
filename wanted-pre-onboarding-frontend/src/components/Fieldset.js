import stc from 'styled-components'

const Fieldset_C = stc.fieldset`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border-color: var(--gray-10);
    justify-content: center;
    margin: 4px;
    padding: 8px 12px;
`

export function Fieldset () {
    return (
        <Fieldset_C></Fieldset_C>
    )
}