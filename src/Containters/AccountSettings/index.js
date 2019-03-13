import React from 'react'
import * as Styled from './styled.js'
import ModalExampleMultiple from '../../Components/NestedModal'

class AccountSettings extends React.Component {
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
        return (
            <React.Fragment>
                <Styled.Wrapper>
                    <Styled.RightContainer>
                        <Styled.Photo>
                            <Styled.AddAPhotoIcon />
                        </Styled.Photo>
                        <Styled.UsernameBox>
                            <Styled.UserIcon size="55" />
                            <Styled.Input value="Username" disabled/>
                            <Styled.EditIcon size="40" />
                        </Styled.UsernameBox>
                    </Styled.RightContainer>
                    <Styled.LeftContainer>
                            <ModalExampleMultiple open={modalOpen} handleClose={this.handleToggleModal}>
                                <Styled.Button onClick={this.handleToggleModal}>Change your adress E-mail</Styled.Button>
                            </ModalExampleMultiple>
                            <ModalExampleMultiple open={modalOpen} handleClose={this.handleToggleModal}>
                                <Styled.Button onClick={this.handleToggleModal}>Change your password</Styled.Button>
                            </ModalExampleMultiple>
                    </Styled.LeftContainer>
                </Styled.Wrapper>
            </React.Fragment>
        )
    }
}

export default AccountSettings