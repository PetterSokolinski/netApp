import React, { Component } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PasswordRemind from './Components/PasswordRemind'
import SidebarMenu from './Components/SidebarMenu'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/password-remind" component={PasswordRemind} />
          <Route path="/home" component={SidebarMenu} />
        </Switch>
      </Router>
    )
  }
}

export default App
