import styled from 'styled-components'
import { AddAPhoto } from 'styled-icons/material/AddAPhoto'
import { User } from 'styled-icons/boxicons-solid'
import { Edit } from 'styled-icons/boxicons-solid/Edit'

export const Wrapper = styled.div`
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    position: absolute;
    height: auto;
    width: 90%;
    margin: 5%;
    @media (max-width: 800px) { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
    
`

export const Photo = styled.div`
    margin: 0 auto;
    width: 25vw;
    height: 25vw;
    border: 2px solid #03a9f4;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    &:hover {
        filter: brightness(75%);
    }
    @media (max-width: 800px) { 
        width: 40vw;
        height: 40vw;
    }
`

export const AddAPhotoIcon = styled(AddAPhoto)`
    color: #03a9f4;
    width: 12.5vw;
    ${Photo}:hover & {
        filter: brightness(75%);
      }
`

export const UsernameBox = styled.div`
    position: relative;
    margin-top: 50px;
    width: 320px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    &:hover {
        transition: 0.3s;
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.7);
        border-radius: 5px;
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    float: right;
    margin: 5%;
`

export const Input = styled.input`
    border: none;
    outline: none;
    font-size: 26px;
    color: black;
    letter-spacing: 5px;
    background: transparent;
    width: 200px; 
    text-indent: 25px;
    font-weight: 600;
    font-family: sans-serif;
`

export const UserIcon = styled(User)`
      color: #03a9f4;
`

export const EditIcon = styled(Edit)`
    display: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
    ${UsernameBox}:hover & {
        display: block;
    }
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
`

export const Button = styled.button`
    background: none;
    color: #ccc;
    width: 25vw;
    height: 10vw;
    border: 1px solid #03a9f4;
    font-size: 18px;
    border-radius: 4px;
    transition: 0.6s;
    overflow: hidden;
    position: relative;
    margin: 50px;
    color: black;
    @media (max-width: 800px) { 
        margin: 25px;
        width: 50vw;
        height: 10vw;
    }
    &:focus {
        outline: none;
    }
    &:before {
        content: "";
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.9);
        width: 60px;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0.5;
        filter: blur(30px);
        transform: translate(-130px) skewX(-15deg);
    }
    &:after {
        content: "";
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.9);
        width: 30px;
        height: 100%;
        left: 30px;
        top: 0;
        opacity: 0;
        filter: blur(30px);
        transform: translate(-100px) scaleX(-15deg);
    }
    &:hover {
        background: #03a9f4;
        cursor: pointer;
        &:before {
            transform: translate(300px) skewX(-15deg);
            opacity: 0.6;
            transition: 0.7s;
        }
        &:after {
            transform: translate(300px) skewX(-15deg);
            opacity: 1;
            transition: 0.7s;
        }
    }
`