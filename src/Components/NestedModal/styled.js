import styled from 'styled-components'

export const Input = styled.input`
    transition: all 0.30s ease-in-out;
    outline: none;
    box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 3%;
    color: #03a9f4;
    font: sans-serif;
    font-size: 18px;
    &:focus {
        box-shadow: 0 0 5px #03a9f4;
        padding: 3%;
        border: 1px solid #03a9f4;
}
`
export const HeaderModalStyles = {
    textAlign: 'center',
    fontSize: '22px'
}