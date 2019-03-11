import React from 'react'
import SidebarMenu from '../../Components/SidebarMenu'
import Projects from '../Projects'
import Overview from '../Overview'
import Tasks from '../Tasks'
import AccountSettings from '../AccountSettings'
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
        }
    }

    render() {
        return (
            <SidebarMenu>
                {this.handleComponentRender()}
            </SidebarMenu>
        )
    }
 }

 export default Linker