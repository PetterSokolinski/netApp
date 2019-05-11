import React from 'react'
import SidebarMenu from '../../Components/SidebarMenu'
import Projects from '../Projects'
import Overview from '../Overview'
import Tasks from '../Tasks'
import AccountSettings from '../AccountSettings'
import { withRouter } from "react-router-dom"

class Linker extends React.Component {

    handleComponentRender = () => {
        const { to } = this.props
        switch (to) {
            case 'overview':
                return <Overview />
            case 'projects':
                return <Projects />
            case 'tasks':
                return <Tasks />                
            case 'account-settings':
                return <AccountSettings />
            default:
                return <div />             
        }
    }

    render() {
        if(!localStorage.getItem('user')) {
            this.props.history.push("/")
          }
        return (
            <SidebarMenu>
                {this.handleComponentRender()}
            </SidebarMenu>
        )
    }
 }

 export default withRouter(Linker)