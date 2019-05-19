import React from 'react'
import * as Styled from './styled.js'
import { Modal, Dropdown, Button as SemanticButton } from 'semantic-ui-react'
import TaskView from '../../Components/TaskView'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { addTask, getProjects } from '../../Actions/authenticationActions'

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

class Tasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            title: "",
            projectName: "",
            stringTags: [],
            description: ""
        }
    }
    handleToggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
      }

      componentWillMount() {
        this.props.dispatch(getProjects())
      }

      handleAddTask = () => {
        const projects = JSON.parse(localStorage.getItem('projects'))
        const { title, stringTags, projectName, description } = this.state
        let projectID
        for(let index = 0; index < projects.length; index++) {
            if(projectName === projects[index].title) {
                projectID = projects[index].projectId
            }
        }
        let tags = []
        for(let index = 0; index < stringTags.length; index++) {
            const tagName = stringTags[index]
            tags.push({ tagName })
        }
        const data = {
            projectID, title, tags, description
        }
        this.props.dispatch(addTask(data))
        const user = JSON.parse(localStorage.getItem('user'))
        const finished = false
        const dataToDisplay = {
            projectID, projectName, title, tags, description, finished
        }
        user.tasks.push(dataToDisplay)
        localStorage.setItem('user', JSON.stringify(user));
        this.handleToggleModal()
        this.setState({title: "", description: ""})
        window.location.reload(true)
      }
      handleTagsChange = (e, { value }) => {
        if (this.state.stringTags.length > value.length) { // an item has been removed
            const difference = this.state.stringTags.filter(
                x => !value.includes(x),
            );
            console.log(difference); // this is the item
            return false;
        }
        return this.setState({ stringTags: value });
      }

      handleProjectChange =  (e, { value }) => {
        this.setState({ projectName: value });
      }


    render() {
        const { modalOpen } = this.state
        const projects = JSON.parse(localStorage.getItem('projects'))
        let projectOptions = []
        for(let index = 0; index < projects.length; index++) {
            const key = projects[index].title.toLowerCase()
            const text = projects[index].title
            const value = projects[index].title
            projectOptions[index] = {
                key,
                text,
                value
            }
        }
        const objects = JSON.parse(localStorage.getItem('user')).tasks
        for(let index = 0; index < objects.length; index++) {
            for(let index2 = 0; index2 < projects.length; index2++) {
                if(objects[index].projectID === projects[index2].projectId) {
                    const projectName = projects[index2].title
                    objects[index] = {
                        projectName, 
                        ...objects[index]
                    }
                    break
                }
            }
        }
        let tasks = []
        for(let index = 0; index < objects.length; index = index + 2) {
            tasks.push(<TaskView projectOptions={projectOptions} object1={objects[index]} object2={objects[index + 1]} />)
        }
        return (
            <React.Fragment>
                {tasks}
                <Modal open={modalOpen} onClose={this.handleToggleModal} centered={false} trigger={<Styled.Button onClick={this.handleToggleModal}>+</Styled.Button>} size="small"> 
                <Modal.Header style={Styled.HeaderModalStyles}>
                    Add new task
                </Modal.Header>
                <Modal.Content>
                    <Styled.Wrapper>
                        <InputComponent text="Name" type="task" value={this.state.title} onChange={this.handleChange} />
                        <Styled.DropdownContainer>
                            <Dropdown placeholder='Project' search selection options={projectOptions} onChange={this.handleProjectChange} />
                        </Styled.DropdownContainer>
                    </Styled.Wrapper>
                    <Dropdown placeholder='Tags' fluid multiple selection options={tagsOptions} onChange={this.handleTagsChange} />
                    <br />
                    <Styled.AreaLabel for="description"> Description: </Styled.AreaLabel>
                    <Styled.AreaText value={this.state.description} onChange={this.handleChange} name="description" rows="5" placeholder="Short description of the task..."></Styled.AreaText>
                </Modal.Content>
                <Modal.Actions>
                    <SemanticButton positive onClick={this.handleAddTask}>Submit</SemanticButton>
                </Modal.Actions>
                </Modal>
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

const mapStateToProps = (response) => ({
    response
  })

export default withRouter(connect(mapStateToProps)(Tasks))