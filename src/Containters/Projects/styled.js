import styled from 'styled-components'
export const GroupButton = styled.div`
    left: 50%;
    transform: translateX(-50%);
    position: relative;
`

export const Button = styled.button`
    top: ${props => props.zero ? "50px" : "25px"};
    background: #03a9f4;
    border: none;
    outline: none;
    height: 50px;
    width: 40%;
    border-radius: 25px;
    font-size: 42px;
    cursor: pointer;
    left: 50%;
    transform: translateX(-50%);
    position: ${props => props.zero ? "absolute" : "relative"};
    transition: 0.3s;
    &:hover {
        filter: brightness(75%);
        box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
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
    width: 100%;
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
export const Wrapper = styled.div`
    display: flex;
`

export const DropdownContainer = styled.div`
    position: relative;
    left: 8vw;
    top: 1vw;
`

export const GridWrapper = styled.div`
    position: relative;
    top: 75px;
`