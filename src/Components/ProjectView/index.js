import React from 'react'
import { Grid, Modal, Icon, Button as SemanticButton, Header } from 'semantic-ui-react'
import * as Styled from './styled.js'



class GridRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalDeleteOpen: false,
            modalEditOpen: false,
            projectName:'',
            companyName:''
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

    render() {
        const { object } = this.props
        const { modalDeleteOpen, modalEditOpen, projectName, companyName } = this.state
        return (
            <React.Fragment>
                <Grid.Row>
                    <Grid.Column>
                        <Styled.Container>
                            <Styled.ProjectName>
                                <Styled.Label>Name: </Styled.Label> 
                                {object.projectName}
                            </Styled.ProjectName>
                            <Styled.EditIcon size="30" onClick={this.handleToggleEditModal} />
                            <Styled.DeleteForeverIcon onClick={this.handleToggleDeleteModal} size="30" />
                            <Styled.CompanyName>
                                <Styled.Label>Employer: </Styled.Label>
                                {object.companyName}
                            </Styled.CompanyName>
                        </Styled.Container>
                    </Grid.Column>
                </Grid.Row>
                <Modal open={modalDeleteOpen} onClose={this.handleToggleDeleteModal} basic size='tiny'>
                    <Header icon='archive' content={object.projectName} />
                    <Modal.Content>
                    <p>
                        {"Do you want delete the " + object.projectName + "?"}
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
                    {"Edit " + object.projectName}
                </Modal.Header>
                <Modal.Content>
                    <InputComponent text="Name" type="projectName" value={projectName} handleChange={this.handleChange} />
                    <InputComponent text="Company name" type="companyName" value={companyName} handleChange={this.handleChange} />
                </Modal.Content>
                <Modal.Actions>
                    <SemanticButton positive onClick={this.handleToggleEditModal}>Submit</SemanticButton>
                </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}
const InputComponent = (props) => (
    <Styled.InputContainer>
        <Styled.InputLabel for={props.text}>{props.text}</Styled.InputLabel>
        <Styled.Input type="text" name={props.type} value={props.value} onChange={props.handleChange} required />
        <Styled.Span>{"Enter the name of the " + props.type}</Styled.Span>
    </Styled.InputContainer>
)


export default GridRow