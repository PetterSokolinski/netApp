import React from 'react'
import * as Styled from './styled.js'
import NestedModal from '../../Components/NestedModal'

class AccountSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen1: false,
            modalOpen2: false
        }
    }


    handleToggleModal1 = () => {
        this.setState({ modalOpen1: !this.state.modalOpen1 })
    }
    handleToggleModal2 = () => {
        this.setState({ modalOpen2: !this.state.modalOpen2 })
    }


    render() {
        const { modalOpen1, modalOpen2 } = this.state
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
                            <NestedModal open={modalOpen1} handleClose={this.handleToggleModal1} text="E-mail">
                                <Styled.Button onClick={this.handleToggleModal1}>Change your adress E-mail</Styled.Button>
                            </NestedModal>
                            <NestedModal open={modalOpen2} handleClose={this.handleToggleModal2} text="password">
                                <Styled.Button onClick={this.handleToggleModal2}>Change your password</Styled.Button>
                            </NestedModal>
                    </Styled.LeftContainer>
                </Styled.Wrapper>
            </React.Fragment>
        )
    }
}

export default AccountSettings