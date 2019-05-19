import styled from 'styled-components'
import { Edit } from 'styled-icons/boxicons-solid/Edit'
import { DeleteForever } from 'styled-icons/material/DeleteForever'

export const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 300px;
    height: auto;
`

export const TaskName = styled.h1`
    text-align: center;
    font-style: italic;
    border-bottom: ${props => props.finished ? "1px solid green" : "1px solid red"};
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
`
export const ProjectName = styled.h2`
    position: relative;
    width: 50%;
    float: right;
    text-align: center;
    padding-top: 2vw;
`

export const TagContainer = styled.span`
    margin: 6px
    padding: 6px;
    font-size: 2.5vh;
    border: 1px solid #03a9f4;
    border-radius: 5px;
    cursor: pointer;
    &: hover {
        border: 2px solid #03a9f4;
        margin: 5px;
        box-shadow: 1px -1px 10px 0px rgba(0, 0, 0, 0.75);
    }
`

export const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const IconsWrapper = styled.div`
    top: 10px;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
`

export const EditIcon = styled(Edit)`
    right: -12vw;
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0;
    ${ContentWrapper}:hover & {
        opacity: 1;
    }
    &:hover {
        box-shadow: 1px -1px 10px 0px rgba(0, 0, 0, 0.75);
        border-radius: 25%;
    }
`

export const DeleteIcon = styled(DeleteForever)`
    right: -15vw;
    position: relative;
    color: red;
    cursor: pointer;
    opacity: 0;
    transition: 0.3s;
    ${ContentWrapper}:hover & {
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
export const Container = styled.div`
    display: block;
    padding: 9px;
    border: 1px solid #DDDDDD;
    margin-bottom: 30px;
    border-radius: 3px;
    width: 50%;
`

export const Label = styled.label`
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
    background: #03a9f4;
	display: block;
	padding: 3px;
	margin: 0 -9px -9px -9px;
	text-align: center;
	color: black;
	font-family: sans-serif;
	font-size: 12px;
`
export const Wrapper = styled.div`
    display: flex;
`

export const DropdownContainer = styled.div`
    position: relative;
    left: 8vw;
    top: 1vw;
`

export const DescriptionWrapper = styled.div`
    position: relative;
    top: 10px;
    font-size: 18px;
    width: 100%;
    height: auto;
    text-align: center;

`

export const AreaText = styled.textarea`
    position: relative;
    width: 100%;
    border: 1px solid #DDDDDD;
    border-radius: 3px;
    top: 10px;
`

export const AreaLabel = styled.label`
    padding-top: 20px;
    color: #03a9f4;
    font-size: 18px;
    font-family: sans-serif;
`