import React from 'react'
import { Grid, Modal, Icon, Button, Header } from 'semantic-ui-react'
import * as Styled from './styled.js'


class GridColumn extends React.Component {
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
        const { object } = this.props
        const { modalOpen } = this.state
        return (
            <React.Fragment>
                {(object !== undefined) && 
                    <React.Fragment>
                        <Modal open={modalOpen} onClose={this.handleToggleModal} basic size='tiny'>
                            <Header icon='archive' content={object.taskName} />
                            <Modal.Content>
                            <p>
                                {"Do you want delete the " + object.taskName + "?"}
                            </p>
                            </Modal.Content>
                            <Modal.Actions>
                            <Button color='red' inverted onClick={this.handleToggleModal}>
                                <Icon name='remove' /> No
                            </Button>
                            <Button color='green' inverted onClick={this.handleToggleModal}>
                                <Icon name='checkmark' /> Yes
                            </Button>
                            </Modal.Actions>
                        </Modal>
                        <Grid.Column width={8}>
                            <Styled.ContentWrapper>
                                    <Styled.TaskName>{object.taskName}</Styled.TaskName>
                                <Styled.ProjectName>{object.projectName}</Styled.ProjectName>
                                <Styled.TagsWrapper>
                                {object.tags.map(tag => (
                                    <Styled.TagContainer>{tag}</Styled.TagContainer>
                                ))}
                                </Styled.TagsWrapper>
                                <Styled.IconsWrapper>
                                    <Styled.EditIcon size="40" />
                                    <Styled.DeleteIcon size="40" onClick={this.handleToggleModal} />
                                </Styled.IconsWrapper>
                            </Styled.ContentWrapper>
                        </Grid.Column>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }

}

export default GridColumn