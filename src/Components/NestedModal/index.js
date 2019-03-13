import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

class CustomModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => { 
      this.setState({ open: false })
      this.props.handleClose()
  }

  render() {
    const { open } = this.state
    const content = "Reset " + this.props.text
    console.log(content)
    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size="tiny"
        trigger={
          <Button primary icon>
            Proceed <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header>Write down new {this.props.text}</Modal.Header>
        <Modal.Content>
            <input type="text" />
            <input type="text" />
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content={content} onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const NestedModal = (props) => (
  <Modal size="small" trigger={props.children} open={props.open} onClose={props.handleClose}>
    <Modal.Header>Change your {props.text}</Modal.Header>
    <Modal.Content>
        <input type="text" />
    </Modal.Content>
    <Modal.Actions>
      <CustomModal handleClose={props.handleClose} text={props.text} />
    </Modal.Actions>
  </Modal>
)

export default NestedModal