import React from 'react'
import * as Styled from './styled.js'
import { Modal } from 'semantic-ui-react'
import { withRouter } from "react-router-dom"

class PasswordRemind extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            modalOpen: false
        }
        this.message = { 
            status: false,
            content: "" 
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleToggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    handleHistoryPushOrModalClose = () => {
        if (this.message.status) {
            this.props.history.push("/");
        }
        else {
            this.handleToggleModal()
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email } = this.state 
        if (email === '') {
            this.message.status = false
            this.message.content = "E-mail field must be filled!"
        }
        else if (!email.includes('@')) {
            this.message.status = false
            this.message.content = "Invalid adress E-mail!"
        }
        else {
            this.message.status = true
            this.message.content = "New password has been sent!"
        }
        this.handleToggleModal()
    }

    render() {
        const { email, modalOpen } = this.state
        const dimmerClose = this.message.status ? false : true
        return (
            <React.Fragment>
            <Styled.GlobalStyles />
            <Styled.Box>
                <Styled.Header>Change your password</Styled.Header>
                <form autoComplete="off">
                    <Styled.InputBox>
                        <Styled.Wrapper>
                            <Styled.Input type="text" name="email" value={email} onChange={this.handleChange} required />   
                            <Styled.Label>Type your e-mail</Styled.Label>
                        </Styled.Wrapper> 
                    </Styled.InputBox>
                    <Styled.Button type="submit" name="" value="Send me a new password" onClick={this.handleSubmit} />
                </form>
            </Styled.Box>
            <Modal style={Styled.ModalStyles} closeOnDimmerClick={dimmerClose} basic size='mini' open={modalOpen} onClose={this.handleToggleModal}>
                <Styled.ModalContent>{this.message.content}</Styled.ModalContent>
                <Styled.ModalButton onClick={this.handleHistoryPushOrModalClose}>OK</Styled.ModalButton>
            </Modal>
            </React.Fragment>
        )
    }
}

export default withRouter(PasswordRemind)