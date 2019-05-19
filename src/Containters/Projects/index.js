import React from 'react'
import { Modal, Button as SemanticButton } from 'semantic-ui-react'
import ProjectView from '../../Components/ProjectView'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { addProject, getProjects } from '../../Actions/authenticationActions'


export const GroupButton = styled.div`
    left: 50%;
    transform: translateX(-50%);
    position: relative;
`

export const Button = styled.button`
    top: 25px;
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
            modalOpen: false,
            title: "",
            company: "",
            viewAll: JSON.parse(localStorage.getItem('view')) !== null ? JSON.parse(localStorage.getItem('view')) : true
        }
    }
    handleToggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleAddProject = () => {
        const { title, company } = this.state
        const running = true
        const data = {
            title,
            company,
            running
        }
        this.props.dispatch(addProject(data))
        const projects = JSON.parse(localStorage.getItem('projects'))
        const users = []
        const dataToDisplay = {
            title, company, running, users
        }
        projects.push(dataToDisplay)
        localStorage.setItem('projects', JSON.stringify(projects));
        this.handleToggleModal()
        this.setState({title: "", company: ""})
        window.location.reload(true)
    }

    componentWillMount() {
        this.props.dispatch(getProjects())
    }

    handleChangeViewToAll = () => {
        localStorage.setItem("view", JSON.stringify(true))
        this.setState({ viewAll: true })
    }

    handleChangeViewToMine = () => {
        localStorage.setItem("view", JSON.stringify(false))
        this.setState({ viewAll: false })
    }

    render() {
        const { modalOpen } = this.state
        const role = JSON.parse(localStorage.getItem('user')).role
        const projectsFromApi = JSON.parse(localStorage.getItem('projects'))
        const userId = JSON.parse(localStorage.getItem('user')).userId
        let projects = []
        projects.push(<ChangeViewButton handleChangeViewToAll={this.handleChangeViewToAll} handleChangeViewToMine={this.handleChangeViewToMine} />)
        if(this.state.viewAll) {
            for(let index = 0; index < projectsFromApi.length; index++) {
                    projects.push(<ProjectView object={projectsFromApi[index]} />)
            }
        }
        else {
            for(let index = 0; index < projectsFromApi.length; index++) {
                for(let index2 = 0; index2 < projectsFromApi[index].users.length; index2++) {
                    if(projectsFromApi[index].users[index2].userId === userId) {
                        projects.push(<ProjectView object={projectsFromApi[index]} />)
                    }
                }
                
            }
        }
        if(role === "Admin") {
            const button = <Button onClick={this.handleToggleModal}>+</Button>
            projects.push(button)
        }
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
                    <InputComponent text="Name" type="project" name="title" value={this.state.title} onChange={this.handleChange} />
                    <InputComponent text="Company name" type="employer" name="company" value={this.state.company} onChange={this.handleChange} />
                </Modal.Content>
                <Modal.Actions>
                    <SemanticButton positive onClick={this.handleAddProject}>Submit</SemanticButton>
                </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}


const InputComponent = (props) => (
    <Container>
        <Label for={props.text}>{props.text}</Label>
        <Input type="text" name={props.name} value={props.value} onChange={props.onChange} />
        <Span>{"Enter the name of the " + props.type}</Span>
    </Container>
)

const ChangeViewButton = (props) => (
    <GroupButton>
        <SemanticButton.Group>
            <SemanticButton onClick={props.handleChangeViewToAll}>View all projects</SemanticButton>
            <SemanticButton.Or />
            <SemanticButton onClick={props.handleChangeViewToMine} color="blue">View my projects</SemanticButton>
        </SemanticButton.Group>
    </GroupButton>
)



const mapStateToProps = (response) => ({response})
export default connect(mapStateToProps)(Projects)