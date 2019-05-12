import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import * as Styled from './styled.js'
import { connect } from 'react-redux'
import { resetEmailPasswordAction } from '../../Actions/authenticationActions'


class CustomModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
        input: "",
        input2: ""
    }
  }

  handleReset = () => {
    let data = {}
    if (this.props.text === "E-mail") {
        const email = this.state.input
        data = {  
            email
         }
    }
    else {
        const password = this.state.input
        data = {  
            password
         }
    }
    if ((this.state.input === this.state.input2) && this.state.input !== "" && this.state.input2 !== "")
    {
      this.props.dispatch(resetEmailPasswordAction(data))
      this.handleCloseBoth()
    }
    
}
handleChange = (event) => {
  const { name, value } = event.target
  this.setState({ [name]: value })
}

handleCloseBoth = () => {
    this.props.handleClose()
    this.props.handleCloseAbove()
}

  
  render() {
    const content = "Reset " + this.props.text
    const type = this.props.text === "E-mail" ? "text" : "password"
    return (
      <Modal
        open={this.props.open}
        onOpen={this.props.handleClose}
        onClose={this.handleCloseBoth}
        size="tiny"
        trigger={
          <Button primary icon>
            Proceed <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header style={Styled.HeaderModalStyles}>Write down new {this.props.text}</Modal.Header>
        <Modal.Content>
          <Styled.Input type={type} name="input" value={this.state.input} onChange={this.handleChange} placeholder={"Your new " + this.props.text} autoComplete="off" />
          <br /><br />
          <Styled.Input type={type} name="input2" value={this.state.input2} onChange={this.handleChange} placeholder={"Repeat your new " + this.props.text} autoComplete="off" />
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content={content} onClick={this.handleReset} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (response) => ({
  response
})
export default connect(mapStateToProps)(CustomModal)