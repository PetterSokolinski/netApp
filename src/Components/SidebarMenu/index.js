import React from 'react'
import { slide as Sidebar } from 'react-burger-menu'
import * as Styled from './styled.js'
import { Link } from 'react-router-dom'


class SidebarMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false
    }
  }

  handleToggleSidebar() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }
  
  render() {
    const { sidebarOpen } = this.state
    const { children } = this.props
    return (
      <div id="outer-container">
      <Sidebar isOpen={sidebarOpen} styles={Styled.styles} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Styled.MenuItem>
          <Link to="/overview" onClick={this.handleToggleSidebar}>
            <Styled.RemoveRedEyeIcon />
            <span>Overview</span>
          </Link>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <Link to="/projects" onClick={this.handleToggleSidebar}>
            <Styled.ProjectIcon />
            <span>Projects</span>
          </Link>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <Link to="/tasks" onClick={this.handleToggleSidebar}>
            <Styled.TaskIcon />
            <span>Tasks</span>
          </Link>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <Link to="/account-settings" onClick={this.handleToggleSidebar}>
            <Styled.SettingsIcon />
            <span>Account Settings</span>
          </Link>
        </Styled.MenuItem>
        <Styled.LogoutItem>
          <Link to="/">
            <Styled.LogOutIcon />
            <span>Logout</span>
          </Link>
        </Styled.LogoutItem>
      </Sidebar>
      <main id="page-wrap">
        {children}
      </main>
      </div>
    )
  }
}

export default SidebarMenu
