import React from 'react'
import styled from 'styled-components'
import { AddAPhoto } from 'styled-icons/material/AddAPhoto'
import { User } from 'styled-icons/boxicons-solid'
import { Edit } from 'styled-icons/boxicons-solid/Edit'

const Wrapper = styled.div`
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

const Photo = styled.div`
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

const AddAPhotoIcon = styled(AddAPhoto)`
    color: #03a9f4;
    width: 12.5vw;
    ${Photo}:hover & {
        filter: brightness(75%);
      }
`

const UsernameBox = styled.div`
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

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    float: right;
    margin: 5%;
`

const Input = styled.input`
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

const UserIcon = styled(User)`
      color: #03a9f4;
`

const EditIcon = styled(Edit)`
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

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5%;
    border: 1px solid red;
`



class AccountSettings extends React.Component {

    render() {
        return (
            <Wrapper>
                <RightContainer>
                    <Photo>
                        <AddAPhotoIcon />
                    </Photo>
                    <UsernameBox>
                        <UserIcon size="55" />
                        <Input value="Username" disabled/>
                        <EditIcon size="40" />
                    </UsernameBox>
                </RightContainer>
                <LeftContainer>
                    asdas
                </LeftContainer>
            </Wrapper>
        )
    }
}

export default AccountSettings