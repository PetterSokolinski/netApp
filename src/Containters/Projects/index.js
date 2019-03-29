import React from 'react'
import { Modal, Button as SemanticButton } from 'semantic-ui-react'
import ProjectView from '../../Components/ProjectView'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'


export const Button = styled.button`
    top: 25px;
    background: #03a9f4;
    border: none;
    outline: none;
    height: 50px;
    width: 40%;
    border-radius: 25px;
    font-size: 26px;
    cursor: pointer;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
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

const GridWrapper = styled.div`
    position: relative;
    top: 75px;
`



const objects = [
    { projectName: 'angular1', companyName: 'Angular' },
    { projectName: 'angular2', companyName: 'Angular' },
    { projectName: 'angular3', companyName: 'Angular' },
    { projectName: 'angular3', companyName: 'Angular' }
]

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
    }
    handleToggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }


    render() {
        const { modalOpen } = this.state
        let projects = []
        for(let index = 0; index < objects.length; index++) {
            projects.push(<ProjectView object={objects[index]} />)
        }
        const button = <Button onClick={this.handleToggleModal}>Add new project</Button>
        projects.push(button)
        return (
            <React.Fragment>
                <GridWrapper>
                    <Grid>
                        {projects}
                    </Grid>
                </GridWrapper>
                <Modal open={modalOpen} onClose={this.handleToggleModal} centered={false} size="small"> 
                <Modal.Header style={HeaderModalStyles}>
                    Add new project
                </Modal.Header>
                <Modal.Content>
                    <InputComponent text="Name" type="project" />
                    <InputComponent text="Company name" type="employer" />
                </Modal.Content>
                <Modal.Actions>
                    <SemanticButton positive onClick={this.handleToggleModal}>Submit</SemanticButton>
                </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}


const InputComponent = (props) => (
    <Container>
        <Label for={props.text}>{props.text}</Label>
        <Input type="text" name={props.text} />
        <Span>{"Enter the name of the " + props.type}</Span>
    </Container>
)

export default Projects