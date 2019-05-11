import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import * as Styled from './styled.js'



class CustomModal extends Component {
  handleResetEmail = () => {

  }
  
  render() {
    const content = "Reset " + this.props.text
    return (
      <Modal
        open={this.props.open}
        onOpen={this.props.handleClose}
        onClose={this.close}
        size="tiny"
        trigger={
          <Button primary icon>
            Proceed <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header style={Styled.HeaderModalStyles}>Write down new {this.props.text}</Modal.Header>
        <Modal.Content>
          <Styled.Input type="text" name={this.props.text} placeholder={"Your new " + this.props.text} autoComplete="off" />
          <br /><br />
          <Styled.Input type="text" name={this.props.text} placeholder={"Repeat your new " + this.props.text} autoComplete="off" />
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content={content} onClick={this.handleReset} />
        </Modal.Actions>
      </Modal>
    )
  }
}

class NestedModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
        modalOpen: false,
        password: ""
    }
  }

  handleToggleModal = () => {
    if (this.state.password === JSON.parse(localStorage.getItem('user')).password) {
      this.setState({ modalOpen: !this.state.modalOpen })
    }
}

handleChange = (event) => {
  const { value } = event.target
  this.setState({ password: value })
}
  render() {
    return (
      <Modal size="small" trigger={this.props.children} open={this.props.open} onClose={this.props.handleClose}>
        <Modal.Header style={Styled.HeaderModalStyles} >Change your {this.props.text}</Modal.Header>
        <Modal.Content>
          <Styled.Input type="password" name={this.props.text} value={this.state.password} onChange={this.handleChange} placeholder="Your password" autoComplete="off" />
        </Modal.Content>
        <Modal.Actions>
          <CustomModal handleClose={this.handleToggleModal} open={this.state.modalOpen} text={this.props.text} />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default NestedModal