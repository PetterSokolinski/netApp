import React from 'react'
import { slide as Sidebar } from 'react-burger-menu'
import * as Styled from './styled.js'
import { Link } from 'react-router-dom'

class SidebarMenu extends React.Component {
  
  render() {
    return (
      <div id="outer-container">
      <Sidebar styles={Styled.styles} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Styled.MenuItem>
          <Styled.RemoveRedEyeIcon />
          <span>Overview</span>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <Styled.ProjectIcon />
          <span>Projects</span>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <Styled.TaskIcon />
          <span>Tasks</span>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <Styled.SettingsIcon />
          <span>Account Settings</span>
        </Styled.MenuItem>
        <Styled.LogoutItem>
          <Link to="/">
            <Styled.LogOutIcon />
            <span>Logout</span>
          </Link>
        </Styled.LogoutItem>
      </Sidebar>
      <main id="page-wrap"> <Styled.Dupa>asdasdas</Styled.Dupa></main>
      
      </div>
    )
  }
}

export default SidebarMenu
