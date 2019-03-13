import styled, { createGlobalStyle } from 'styled-components'
import backgroundImage from '../../Assets/bg.png'
export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
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
    text-indent: 30px;
`

export const Label = styled.label`
    position: absolute;
    top: 22px; 
    left: 30px;
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
    width: 150px;
    &:hover {
        transform: scale(1.1);
        filter: brightness(75%);
    }
`
export const Icon = styled.span`
    width: 25px;
    float: left;
    text-align: center;
    color: #03a9f4;
    top: 30px;
    position: relative;
`
export const Avatar = styled.img`
    position: absolute;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    left: calc(50% - 50px);
    top: -50px;
`
export const Link = styled.a`
    float: right;
    text-decoration: none;
    color: white;
    font-size: 12px;
    line-height: 20px;
    transition: 0.5s;
    &:hover {
        color: #03a9f4;
        transform: scale(1.1)
    }
`

export const Wrapper = styled.div`
    & ${Input}:hover + ${Label}, ${Input}:valid + ${Label}  {
        top: -15px;
        left: 0;
        color: #03a9f4;
    }
`