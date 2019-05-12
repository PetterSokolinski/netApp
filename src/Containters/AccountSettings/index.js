import React from 'react'
import * as Styled from './styled.js'
import NestedModal from '../../Components/NestedModal'
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { resetUsername } from '../../Actions/authenticationActions'

class AccountSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen1: false,
            modalOpen2: false,
            modalOpen3: false,
            username: ""
        }
    }


    handleToggleModal1 = () => {
        this.setState({ modalOpen1: !this.state.modalOpen1 })
    }
    handleToggleModal2 = () => {
        this.setState({ modalOpen2: !this.state.modalOpen2 })
    }
    handleToggleModal3 = () => {
        this.setState({ modalOpen3: !this.state.modalOpen3 })
    }

    handleChange = (event) => {
        const { value } = event.target
        this.setState({ username: value })
      }

      

      handleReset = () => {
        const { username } = this.state
        const data = {  
            username
         }
         this.props.dispatch(resetUsername(data))
         const user = JSON.parse(localStorage.getItem('user'))
         user.username = username
         localStorage.setItem('user', JSON.stringify(user));
         window.location.reload(true)
         this.handleToggleModal3()
      }

    render() {
        const { modalOpen1, modalOpen2, modalOpen3 } = this.state
        const username = JSON.parse(localStorage.getItem('user')).username
        return (
            <React.Fragment>
                <Styled.Wrapper>
                    <Styled.RightContainer>
                        <Styled.Photo>
                            <Styled.AddAPhotoIcon />
                        </Styled.Photo>
                        <Styled.UsernameBox>
                            <Styled.UserIcon size="55" />
                            <Styled.Input value={username} disabled />
                            <Styled.EditIcon size="40" onClick={this.handleToggleModal3} />
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
                <Modal size="small" open={modalOpen3} onClose={this.handleToggleModal3}>
                    <Modal.Header style={Styled.HeaderModalStyles} >Change your userename</Modal.Header>
                    <Modal.Content>
                    <Styled.InputModal type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Your username" autoComplete="off" />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button icon='check' content="Reset username" onClick={this.handleReset} />
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}




const mapStateToProps = (response) => ({
    response
  })
  export default connect(mapStateToProps)(AccountSettings)