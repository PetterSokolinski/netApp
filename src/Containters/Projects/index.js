import React from 'react'
import { Modal, Button as SemanticButton } from 'semantic-ui-react'
import ProjectView from '../../Components/ProjectView'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as Styled from './styled'
import { addProjectAction, getProjectsAction } from '../../Actions/index'





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
        this.props.dispatch(addProjectAction(data))
        const projects = JSON.parse(localStorage.getItem('projects'))
        const users = []
        const dataToDisplay = {
            title, company, running, users
        }
        projects.push(dataToDisplay)
        localStorage.setItem('projects', JSON.stringify(projects))
        this.handleToggleModal()
        this.setState({title: "", company: ""})
        window.location.reload(true)
    }

    componentWillMount() {
        this.props.dispatch(getProjectsAction())
        console.log("mounted")
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
        if(JSON.parse(localStorage.getItem('view'))) {
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
        const zero = projects.length === 1
        if(role === "Admin") {
            const button = <Styled.Button zero={zero} onClick={this.handleToggleModal}>+</Styled.Button>
            projects.push(button)
        }
        return (
            <React.Fragment>
                <Styled.GridWrapper>
                    <Grid>
                        {projects}
                    </Grid>
                </Styled.GridWrapper>
                <Modal open={modalOpen} onClose={this.handleToggleModal} centered={false} size="small"> 
                <Modal.Header style={Styled.HeaderModalStyles}>
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
    <Styled.Container>
        <Styled.Label for={props.text}>{props.text}</Styled.Label>
        <Styled.Input type="text" name={props.name} value={props.value} onChange={props.onChange} />
        <Styled.Span>{"Enter the name of the " + props.type}</Styled.Span>
    </Styled.Container>
)

const ChangeViewButton = (props) => (
    <Styled.GroupButton>
        <SemanticButton.Group>
            <SemanticButton onClick={props.handleChangeViewToAll}>View all projects</SemanticButton>
            <SemanticButton.Or />
            <SemanticButton onClick={props.handleChangeViewToMine} color="blue">View my projects</SemanticButton>
        </SemanticButton.Group>
    </Styled.GroupButton>
)



const mapStateToProps = (response) => ({response})
export default connect(mapStateToProps)(Projects)