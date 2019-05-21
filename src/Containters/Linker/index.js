import React from 'react'
import SidebarMenu from '../../Components/SidebarMenu'
import Projects from '../Projects'
import Overview from '../Overview'
import Tasks from '../Tasks'
import AccountSettings from '../AccountSettings'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { getMeAction, getProjectsAction } from '../../Actions/index'
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
        this.props.dispatch(getProjectsAction())
        this.props.dispatch(getMeAction())
        return (
            <SidebarMenu>
                {this.handleComponentRender()}
            </SidebarMenu>
        )
    }
 }

 export default withRouter(connect(null, null)(Linker))