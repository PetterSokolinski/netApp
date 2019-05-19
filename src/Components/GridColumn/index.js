import React from 'react'
import { Button, Grid, Modal, Icon, Dropdown, Button as SemanticButton, Header } from 'semantic-ui-react'
import * as Styled from './styled.js'
import { connect } from 'react-redux'

import { deleteTask, editTask } from '../../Actions/authenticationActions'
const tagsOptions = [
    { key: 'Angular', text: 'Angular', value: 'Angular' },
    { key: 'CSS', text: 'CSS', value: 'CSS' },
    { key: 'Graphic Design', text: 'Graphic Design', value: 'Graphic Design' },
    { key: 'Ember', text: 'Ember', value: 'Ember' },
    { key: 'HTML', text: 'HTML', value: 'HTML' },
    { key: 'Information Architecture', text: 'Information Architecture', value: 'Information Architecture' },
    { key: 'Javascript', text: 'Javascript', value: 'Javascript' },
    { key: 'Mechanical Engineering', text: 'Mechanical Engineering', value: 'Mechanical Engineering' },
    { key: 'Meteor', text: 'Meteor', value: 'Meteor' },
    { key: 'NodeJS', text: 'NodeJS', value: 'NodeJS' },
    { key: 'Plumbing', text: 'Plumbing', value: 'Plumbing' },
    { key: 'Python', text: 'Python', value: 'Python' },
    { key: 'Rails', text: 'Rails', value: 'Rails' },
    { key: 'React', text: 'React', value: 'React' },
    { key: 'Kitchen Repair', text: 'Kitchen Repair', value: 'Kitchen Repair' },
    { key: 'Ruby', text: 'Ruby', value: 'Ruby' },
    { key: 'UI Design', text: 'UI Design', value: 'UI Design' },
    { key: 'User Experience', text: 'User Experience', value: 'User Experience' },
  ]
// TODO: zmienialne pola dodac
class GridColumn extends React.Component {
    constructor(props) {
        super(props)
        let tagsFromApiToString = []
        if(this.props.object !== undefined) {
            for(let index = 0; index < this.props.object.tags.length; index++) {
                tagsFromApiToString.push(this.props.object.tags[index].tagName)
            }
        }
        this.state = {
            modalDeleteOpen: false,
            modalEditOpen: false,
            title: this.props.object !== undefined ? this.props.object.title : "",
            projectName: this.props.object !== undefined ? this.props.object.projectName : "",
            stringTags: this.props.object !== undefined ? tagsFromApiToString : [],
            description: this.props.object !== undefined ? this.props.object.description : "",
            finished: this.props.object !== undefined ? this.props.object.finished : false
        }
    }
    handleToggleDeleteModal = () => {
        this.setState({ modalDeleteOpen: !this.state.modalDeleteOpen })
    }
    handleToggleEditModal = () => {
        this.setState({ modalEditOpen: !this.state.modalEditOpen })
    }

    handleDeleteTask = () => {
        const taskId = this.props.object.taskId
        
        this.props.dispatch(deleteTask(taskId))
        const user = JSON.parse(localStorage.getItem('user'))
        for(let index = 0; index < user.tasks.length; index++) {
            if(user.tasks[index].taskId === taskId) {
                user.tasks.splice(index, 1)
            }
        }
        localStorage.setItem('user', JSON.stringify(user))
        window.location.reload(true)
        this.handleToggleDeleteModal()

    }

    handleTagsChange = (e, { value }) => {
        if (this.state.stringTags.length > value.length) { // an item has been removed
            const difference = this.state.stringTags.filter(
                x => !value.includes(x),
            )
            console.log(difference) // this is the item
            return false
        }
        return this.setState({ stringTags: value })
      }

      handleProjectChange =  (e, { value }) => {
        this.setState({ projectName: value })
      }
      handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
      }
      handleEditTask = () => {
        const projects = JSON.parse(localStorage.getItem('projects'))
        const { title, stringTags, projectName, description, finished } = this.state
        let projectID
        for(let index = 0; index < projects.length; index++) {
            if(this.props.object.projectName === projects[index].title) {
                projectID = projects[index].projectId
            }
        }
        let tags = []
        for(let index = 0; index < stringTags.length; index++) {
            const tagName = stringTags[index]
            tags.push({ tagName })
        }
        const taskId = this.props.object.taskId
        const data = {
            projectID, title, tags, description, taskId, finished
        }
        this.props.dispatch(editTask(data))
        const user = JSON.parse(localStorage.getItem('user'))
        const dataToDisplay = {
            projectName, title, tags, description
        }
        for(let index = 0; index < user.tasks.length; index++) {
            if(user.tasks[index].taskId === taskId) {
                user.tasks[index] = dataToDisplay
            }
        }
        localStorage.setItem('user', JSON.stringify(user))
        this.handleToggleEditModal()
        window.location.reload(true)
      }

      handleFinishing = () => {
        const taskId = this.props.object.taskId
        const title = this.props.object.title
        const finished = !this.state.finished
        const data = {
            title, taskId, finished    
        }
        this.props.dispatch(editTask(data))
        const user = JSON.parse(localStorage.getItem('user'))
        for(let index = 0; index < user.tasks.length; index++) {
            if(user.tasks[index].taskId === taskId) {
                let taskData = user.tasks[index]
                taskData = {
                    ...taskData,
                    finished
                }
                user.tasks[index] = taskData
            }
        }
        localStorage.setItem('user', JSON.stringify(user))
        window.location.reload(true)
        this.setState({finished: !this.state.finished})
      }


    render() {
        const { object, projectOptions } = this.props
        const { modalDeleteOpen, modalEditOpen } = this.state
        const tasks = JSON.parse(localStorage.getItem('user')).tasks
        const isFinished = object === undefined ? "" : object.finished ? "Set unfinished" : "Set finished"
        const positive = object === undefined ? false : object.finished ?  false : true
        const negative = object === undefined ? false : object.finished ? true : false
        return (
            <React.Fragment>
                {(object !== undefined) && 
                    <React.Fragment>
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
                            <SemanticButton color='green' inverted onClick={this.handleDeleteTask}>
                                <Icon name='checkmark' /> Yes
                            </SemanticButton>
                            </Modal.Actions>
                        </Modal>
                        <Modal open={modalEditOpen} onClose={this.handleToggleEditModal} centered={false} size="small"> 
                            <Modal.Header style={Styled.HeaderModalStyles}>
                                {"Edit " + object.title}
                            </Modal.Header>
                            <Modal.Content>
                                <Styled.Wrapper>
                                <InputComponent text="Name" type="task" value={this.state.title} onChange={this.handleChange} />
                                    <Styled.DropdownContainer>
                                    <Dropdown placeholder='Project' search selection options={projectOptions} onChange={this.handleProjectChange} defaultValue={this.state.projectName} />
                                    </Styled.DropdownContainer>
                                </Styled.Wrapper>
                                <Dropdown placeholder='Tags' fluid multiple selection options={tagsOptions} onChange={this.handleTagsChange} defaultValue={this.state.stringTags} />
                                <br />
                                <Styled.AreaLabel for="description"> Description: </Styled.AreaLabel>
                                <Styled.AreaText value={this.state.description} onChange={this.handleChange} name="description" rows="5" placeholder="Short description of the task..."></Styled.AreaText>
                            </Modal.Content>
                            <Modal.Actions>
                                <SemanticButton positive onClick={this.handleEditTask}>Submit</SemanticButton>
                            </Modal.Actions>
                        </Modal>
                        <Grid.Column width={8}>
                            <Styled.ContentWrapper>
                                    <Styled.TaskName finished={object.finished}>{object.title}</Styled.TaskName>
                                <Styled.ProjectName>{object.projectName}</Styled.ProjectName>
                                <Styled.TagsWrapper>
                                {object.tags.map(tag => (
                                    <Styled.TagContainer>{tag.tagName}</Styled.TagContainer>
                                ))}
                                </Styled.TagsWrapper>
                                <Styled.DescriptionWrapper>
                                {object.description}
                                </Styled.DescriptionWrapper>
                                <Styled.IconsWrapper>
                                    <Button positive={positive} size="tiny" negative={negative} onClick={this.handleFinishing}>{isFinished}</Button>
                                    <Styled.EditIcon size="40" onClick={this.handleToggleEditModal} />
                                    <Styled.DeleteIcon size="40" onClick={this.handleToggleDeleteModal} />
                                </Styled.IconsWrapper>
                            </Styled.ContentWrapper>
                        </Grid.Column>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }

}

const InputComponent = (props) => (
    <Styled.Container>
        <Styled.Label for={props.text}>{props.text}</Styled.Label>
        <Styled.Input type="text" name="title" value={props.value} onChange={props.onChange} />
        <Styled.Span>{"Enter the name of the " + props.type}</Styled.Span>
    </Styled.Container>
)

const mapStateToProps = (response) => ({response})
export default connect(mapStateToProps)(GridColumn)