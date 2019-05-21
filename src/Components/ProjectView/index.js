import React from 'react'
import { Button, Grid, Modal, Icon, Button as SemanticButton, Header } from 'semantic-ui-react'
import * as Styled from './styled.js'
import { connect } from 'react-redux'

import { deleteProjectAction, editProjectAction, assignProjectAction } from '../../Actions/index'


class GridRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalDeleteOpen: false,
            modalEditOpen: false,
            title: this.props.object.title,
            company: this.props.object.company,
            running: this.props.object.running
        }
    }
    handleToggleDeleteModal = () => {
        this.setState({ modalDeleteOpen: !this.state.modalDeleteOpen })
    }
    handleToggleEditModal = () => {
        this.setState({ modalEditOpen: !this.state.modalEditOpen })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleDeleteProject = () => {
        const projectId = this.props.object.projectId
        this.props.dispatch(deleteProjectAction(projectId))
        const projects = JSON.parse(localStorage.getItem('projects'))
        const user = JSON.parse(localStorage.getItem('user'))
        for(let index = 0; index < projects.length; index++) {
            if(projects[index].projectId === projectId) {
                projects.splice(index, 1)
            }
        }
        for(let index = 0; index < user.projects.length; index++) {
            if(user.projects[index].projectId === projectId) {
                projects.splice(index, 1)
            }
        }
        localStorage.setItem('projects', JSON.stringify(projects))
        localStorage.setItem('user', JSON.stringify(user))
        window.location.reload(true)
        this.handleToggleDeleteModal()
    }

    handleEditProject = () => {
        const projectId = this.props.object.projectId
        const { title, company, running } = this.state
        const data = {
            projectId, title, company, running
        }
        this.props.dispatch(editProjectAction(data))
        const projects = JSON.parse(localStorage.getItem('projects'))
        for(let index = 0; index < projects.length; index++) {
            if(projects[index].projectId === projectId) {
                let projectData = projects[index]
                projectData = {
                    ...projectData,
                    title,
                    company
                }
                projects[index] = projectData
            }
        }
        localStorage.setItem('projects', JSON.stringify(projects))
        this.handleToggleEditModal()
        window.location.reload(true)
    }
    handleChangeRunning = () => {
        const projectId = this.props.object.projectId
        const title = this.props.object.title
        const running = !this.state.running
        const data = {
            title, projectId, running    
        }
        this.props.dispatch(editProjectAction(data))
        const projects = JSON.parse(localStorage.getItem('projects'))
        for(let index = 0; index < projects.length; index++) {
            if(projects[index].projectId === projectId) {
                let projectData = projects[index]
                projectData = {
                    ...projectData,
                    running
                }
                projects[index] = projectData
            }
        }
        localStorage.setItem('projects', JSON.stringify(projects))
        //window.location.reload(true)
        this.setState({running: !this.state.running})
    }

    handleAssign = () => {
        const projectId = this.props.object.projectId
        this.props.dispatch(assignProjectAction(projectId))
        const user = JSON.parse(localStorage.getItem('user'))
        const userId = user.userId
        const projects = JSON.parse(localStorage.getItem('projects'))
        user.projects.push({ projectId, userId })
        for(let index = 0; index < projects.length; index++) {
            if(projects[index].projectId === projectId) {
                projects[index].users.push({ projectId, userId })

            }
        }
        localStorage.setItem('projects', JSON.stringify(projects))
        localStorage.setItem('user', JSON.stringify(user))
        //window.location.reload(true)
    }
    


    render() {
        const { object } = this.props
        const { modalDeleteOpen, modalEditOpen, title, company } = this.state
        const user = JSON.parse(localStorage.getItem('user'))
        const role = user.role
        const userId = user.userId
        const isRunning = object.running ? "Set suspended" : "Set running"
        const positive = object.running ?  false : true
        const negative = object.running ? true : false
        let disabled = false
        for(let index = 0; index < object.users.length; index++) {
            if(userId === object.users[index].userId) {
                disabled = true
            }
        }
        //console.log(object)
        return (
            <React.Fragment>
                <Grid.Row>
                    <Grid.Column>
                        <Styled.Container running={object.running}>
                        {role === "Admin" && <Button onClick={this.handleChangeRunning} size="mini" positive={positive} negative={negative}>{isRunning}</Button>}
                            <Styled.ProjectName>
                                <Styled.Label>Name: </Styled.Label> 
                                {object.title}
                            </Styled.ProjectName>
                            { role === "Admin" ? <React.Fragment><Styled.EditIcon size="30" onClick={this.handleToggleEditModal} />
                            <Styled.DeleteForeverIcon onClick={this.handleToggleDeleteModal} size="30" /></React.Fragment> : null }
                            <Styled.CompanyName>
                                <Styled.Label>Company: </Styled.Label>
                                {object.company}
                            </Styled.CompanyName>
                            <Button onClick={this.handleAssign} color='teal' size="mini" disabled={disabled}><Icon name='heart' />Assign</Button>
                        </Styled.Container>
                    </Grid.Column>
                </Grid.Row>
                <Modal open={modalDeleteOpen} onClose={this.handleToggleDeleteModal} basic size='tiny'>
                    <Header icon='archive' content={object.title} />
                    <Modal.Content>
                    <p>
                        {"Do you want delete the " + object.title + "?"}
                    </p>
                    </Modal.Content>
                    <Modal.Actions>
                    <SemanticButton color='red' inverted onClick={this.handleToggleDeleteModal}>
                        <Icon name='remove' /> No
                    </SemanticButton>
                    <SemanticButton color='green' inverted onClick={this.handleDeleteProject}>
                        <Icon name='checkmark' /> Yes
                    </SemanticButton>
                    </Modal.Actions>
                </Modal>
                <Modal open={modalEditOpen} onClose={this.handleToggleEditModal} centered={false} size="small"> 
                <Modal.Header style={Styled.HeaderModalStyles}>
                    {"Edit " + object.title}
                </Modal.Header>
                <Modal.Content>
                    <InputComponent text="Name" type="projectName" name="title" value={title} handleChange={this.handleChange} />
                    <InputComponent text="Company name" type="companyName" name="company" value={company} handleChange={this.handleChange} />
                </Modal.Content>
                <Modal.Actions>
                    <SemanticButton positive onClick={this.handleEditProject}>Submit</SemanticButton>
                </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}
const InputComponent = (props) => (
    <Styled.InputContainer>
        <Styled.InputLabel for={props.text}>{props.text}</Styled.InputLabel>
        <Styled.Input type="text" name={props.name} value={props.value} onChange={props.handleChange} required />
        <Styled.Span>{"Enter the name of the " + props.type}</Styled.Span>
    </Styled.InputContainer>
)



const mapStateToProps = (response) => ({response})
export default connect(mapStateToProps)(GridRow)
