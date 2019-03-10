import styled, { createGlobalStyle } from 'styled-components'
import backgroundImage from '../../Assets/bg.png'
export const GlobalStyles = createGlobalStyle`
    body {
        margin: 100px;
        padding: 0;
        font-family: sans-serif;
        background: url(${backgroundImage});
        background-size: cover;
    }
`
export const Box = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 40px;
    background: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`

export const Header = styled.h1`
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
`
export const InputBox = styled.div`
    position: relative;
`
export const Input = styled.input`
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    letter-spacing: 1px;
    margin-bottom: 30px;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #fff;
`

export const Label = styled.label`
    position: absolute;
    top: 0; 
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: white;
    pointer-events: none;
    transition: 0.5s;
`

export const Button = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    background: #03a9f4;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.5s;
    width: 100%;
    &:hover {
        transform: scale(1.1);
        filter: brightness(75%);
    }
`

export const Wrapper = styled.div`
    & ${Input}:hover + ${Label}, ${Input}:valid + ${Label}  {
        top: -25px;
        left: 0;
        color: #03a9f4;
    }
`

export const ModalButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    background: transparent;
    border: 2px solid #03a9f4;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    width: 80%;
    margin: 5% 10%;
    transition: 0.3s;
    &:hover {
        background: #03a9f4;
    }
`

export const ModalHeader = styled.h2`
    text-align: center;
    color: white;
    font-family: sans-serif;
    padding: 20px;
`
export const ModalContent = styled.p`
    text-align: center;
    font-family: sans-serif;
    padding: 20px;
    font-size: 22px;
    font-weight: 600;
    color: red;
`