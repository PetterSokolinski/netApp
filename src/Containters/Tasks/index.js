import React from 'react'
import * as Styled from './styled.js'
import { Modal, Dropdown, Button as SemanticButton } from 'semantic-ui-react'
import TaskView from '../../Components/TaskView'
import { withRouter } from "react-router-dom"


const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]

const stateOptions = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]

const tagsTab = [
    "tag1", "tag1tag1", "tag3", "tag1tag1tag1", "tag2", "tag3", "tag1", "tag2", "tag3"
]

/*const objects = [
    { taskName: 'angular1', projectName: 'Angular', tags: tagsTab },
    { taskName: 'angular2', projectName: 'Angular', tags: tagsTab },
    { taskName: 'angular3', projectName: 'Angular', tags: tagsTab },
    { taskName: 'angular4', projectName: 'Angular', tags: tagsTab },
    { taskName: 'angular5', projectName: 'Angular', tags: tagsTab },
    { taskName: 'angular6', projectName: 'Angular', tags: tagsTab },
    { taskName: 'angular7', projectName: 'Angular', tags: tagsTab },
]*/



class Tasks extends React.Component {
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
        const objects = JSON.parse(localStorage.getItem('user')).tasks
        let tasks = []
        for(let index = 0; index < objects.length; index = index + 2) {
            tasks.push(<TaskView object1={objects[index]} object2={objects[index + 1]} />)
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
                        <InputComponent text="Name" type="task" />
                        <Styled.DropdownContainer>
                            <Dropdown placeholder='Project' search selection options={stateOptions} />
                        </Styled.DropdownContainer>
                    </Styled.Wrapper>
                    <Dropdown placeholder='Tags' fluid multiple selection options={options} />
                    <br />
                    <Styled.AreaLabel for="description"> Description: </Styled.AreaLabel>
                    <Styled.AreaText name="description" cols="90" rows="5" placeholder="Short description of the task..."></Styled.AreaText>
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
    <Styled.Container>
        <Styled.Label for={props.text}>{props.text}</Styled.Label>
        <Styled.Input type="text" name={props.text} />
        <Styled.Span>{"Enter the name of the " + props.type}</Styled.Span>
    </Styled.Container>
)

export default withRouter(Tasks)