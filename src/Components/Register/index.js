import React from 'react'
import * as Styled from './styled.js'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
            confirmPassword: '',
            username: ''
        }
        this.errorMessage = ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password, confirmPassword } = this.state 
        if (!email.includes('@')) {
            this.errorMessage = "Invalid adress E-mail!"
        }
        else if (password !== confirmPassword) {
            this.errorMessage = "Passwords are not the same!"
        }
        else if (password.length < 8) {
            this.errorMessage = "Password must contains at lest 8 letters!"
        }
        console.log(this.errorMessage)
    }

    render() {
        const { email, password, confirmPassword, username } = this.state 
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
            </React.Fragment>
        )
    }
}

export default Register