import React from 'react'
import { Grid, Modal, Icon, Dropdown, Button as SemanticButton, Header } from 'semantic-ui-react'
import * as Styled from './styled.js'

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

// TODO: zmienialne pola dodac
class GridColumn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalDeleteOpen: false,
            modalEditOpen: false,
            taskName:'',
            projectName:'',
            tags: []
        }
    }
    handleToggleDeleteModal = () => {
        this.setState({ modalDeleteOpen: !this.state.modalDeleteOpen })
    }
    handleToggleEditModal = () => {
        this.setState({ modalEditOpen: !this.state.modalEditOpen })
    }

    render() {
        const { object } = this.props
        console.log(object, "object")
        const { modalDeleteOpen, modalEditOpen } = this.state
        /**/
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
                            <SemanticButton color='green' inverted onClick={this.handleToggleDeleteModal}>
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
                                <SemanticButton positive onClick={this.handleToggleEditModal}>Submit</SemanticButton>
                            </Modal.Actions>
                        </Modal>
                        <Grid.Column width={8}>
                            <Styled.ContentWrapper>
                                    <Styled.TaskName>{object.title}</Styled.TaskName>
                                <Styled.ProjectName>{object.projectID}</Styled.ProjectName>
                                <Styled.TagsWrapper>
                                {object.tags.map(tag => (
                                    <Styled.TagContainer>{tag.tagName}</Styled.TagContainer>
                                ))}
                                </Styled.TagsWrapper>
                                <Styled.DescriptionWrapper>
                                {object.description}
                                </Styled.DescriptionWrapper>
                                <Styled.IconsWrapper>
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
        <Styled.Input type="text" name={props.text} />
        <Styled.Span>{"Enter the name of the " + props.type}</Styled.Span>
    </Styled.Container>
)

export default GridColumn