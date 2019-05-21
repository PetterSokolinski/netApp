import React from 'react'
import * as Styled from './styled.js'
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { registerUserAction } from '../../Actions/index'
import { withRouter } from "react-router-dom"

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
            confirmPassword: '',
            username: '',
            modalOpen: false
        }
        this.errorMessage = { 
            status: false,
            content: "" 
        }
    }

    handleToggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
        if (this.errorMessage.status === true) {
            this.errorMessage.status = false
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password, confirmPassword, username } = this.state 
        if (username === '') {
            this.errorMessage.content = "Username field must be filled!"
            this.errorMessage.status = true
        }
        else if (!email.includes('@')) {
            this.errorMessage.content = "Invalid adress E-mail!"
            this.errorMessage.status = true
        }
        else if (password !== confirmPassword) {
            this.errorMessage.content = "Passwords must be the same!"
            this.errorMessage.status = true
        }
        else if (password.length < 8) {
            this.errorMessage.content = "Password must contains at lest 8 letters!"
            this.errorMessage.status = true
        }
        
        if (this.errorMessage.status === true) {
            this.handleToggleModal()
            this.errorMessage.status = false 
        }
        else {
            const data = {
                username, email, password
              }
            await this.props.dispatch(registerUserAction(data))
            this.props.history.push("/")
        }
    }

    render() {
        const { email, password, confirmPassword, username, modalOpen } = this.state 
        return (
            <React.Fragment>
            <Styled.GlobalStyles />
            <Styled.Box>
               <Styled.Header>Sign Up</Styled.Header>
               <form autoComplete="off">
               <Styled.InputBox>
                        <Styled.Wrapper>
                            <Styled.Input type="text" name="username" value={username} onChange={this.handleChange} required />   
                            <Styled.Label>Username</Styled.Label>
                        </Styled.Wrapper>
                    </Styled.InputBox>
                <Styled.InputBox>
                    <Styled.Wrapper>
                        <Styled.Input type="text" name="email" value={email} onChange={this.handleChange} required />   
                        <Styled.Label>Adress e-mail</Styled.Label>
                    </Styled.Wrapper>
                    </Styled.InputBox>
                    <Styled.InputBox>
                        <Styled.Wrapper>
                            <Styled.Input type="password" name="password" value={password} onChange={this.handleChange} required />   
                            <Styled.Label>Password</Styled.Label>
                        </Styled.Wrapper>
                    </Styled.InputBox>
                    <Styled.InputBox>
                        <Styled.Wrapper>
                            <Styled.Input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} required />   
                            <Styled.Label>Confirm password</Styled.Label>
                        </Styled.Wrapper>
                    </Styled.InputBox>
                    <Styled.Button type="submit" name="" value="Register my account" onClick={this.handleSubmit} />
                </form>
            </Styled.Box>
            
            <Modal style={Styled.ModalStyles} basic size='mini' open={modalOpen} onClose={this.handleToggleModal}>
                <Styled.ModalContent>{this.errorMessage.content}</Styled.ModalContent>
                <Styled.ModalButton onClick={this.handleToggleModal}>OK</Styled.ModalButton>
            </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (response) => ({
    response
  })

export default withRouter(connect(mapStateToProps)(Register))