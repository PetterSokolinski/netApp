import styled from 'styled-components'
import { Edit } from 'styled-icons/boxicons-solid/Edit'
import { DeleteForever } from 'styled-icons/material/DeleteForever'


export const Container = styled.div`
    cursor: pointer;
    width: 60%;
    height: 50px;
    border: ${props => props.running ? "3px solid green" : "3px solid red"};
    border-radius: 15px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    @media (max-width: 800px) { 
        padding: 10px;
    }
    &:hover {
        box-shadow: 1px -1px 10px 0px rgba(0, 0, 0, 0.75);
    }
`
export const ProjectName = styled.div`
    font-size: 1.5vw;
    @media (max-width: 800px) { 
        font-size: 2vw;
    }
`
export const CompanyName = styled.div`
    font-size: 1.5vw;
    @media (max-width: 800px) { 
        font-size: 2vw;
    }
`
export const Label = styled.span`
    font-size: 2vw;
    font-style: italic;
    @media (max-width: 800px) { 
        font-size: 2.5vw;
    }
`

export const EditIcon = styled(Edit)`
    cursor: pointer;
    opacity: 0;
    transition: 0.3s;
    ${Container}:hover & {
        opacity: 1;
    }
    &:hover {
        box-shadow: 1px -1px 10px 0px rgba(0, 0, 0, 0.75);
        border-radius: 25%;
    }
`

export const DeleteForeverIcon = styled(DeleteForever)`
    cursor: pointer;
    opacity: 0;
    transition: 0.3s;
    color: red;
    ${Container}:hover & {
        opacity: 1;
    }
    &:hover {
        box-shadow: 1px -1px 10px 0px rgba(0, 0, 0, 0.75);
        border-radius: 25%;
    }

`


export const HeaderModalStyles = {
    textAlign: 'center',
    fontSize: '22px'
}



export const Input = styled.input`
    box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 100%;
	display: block;
	outline: none;
	border: none;
	height: 25px;
	line-height: 25px;
	font-size: 20px;
	padding: 0;
	font-family: serif;

`
export const InputContainer = styled.div`
    display: block;
    padding: 9px;
    border: 1px solid #DDDDDD;
    margin-bottom: 30px;
    border-radius: 3px;
    width: 100%;
`

export const InputLabel = styled.label`
    display: block;
	float: left;
	margin-top: -20px;
	background: #FFFFFF;
	height: 14px;
	padding: 2px 5px 2px 5px;
	color: #03a9f4;
	font-size: 14px;
    font-family: sans-serif;

`

export const Span = styled.span`
    border: 1px solid #03a9f4;
    border-radius: 2px;
	display: block;
	padding: 3px;
	margin: 0 -9px -9px -9px;
	text-align: center;
	color: black;
	font-family: sans-serif;
	font-size: 12px;
`