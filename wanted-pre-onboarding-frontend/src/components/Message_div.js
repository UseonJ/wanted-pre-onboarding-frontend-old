import stc from 'styled-components'

const Message_divison = stc.div`
    color: var(--peach-600);
    font-size: 12px;
    padding-left: 20px;
`

export function Message_div () {
    return (
        <Message_divison></Message_divison>
    )
}