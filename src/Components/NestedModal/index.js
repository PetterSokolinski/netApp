import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import * as Styled from './styled.js'
import CustomModal from './CustomModal'

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
          <CustomModal handleClose={this.handleToggleModal} handleCloseAbove={this.props.handleClose} open={this.state.modalOpen} text={this.props.text} />
        </Modal.Actions>
      </Modal>
    )
  }
}



export default NestedModal