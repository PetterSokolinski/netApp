import React, { Component } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import PasswordRemind from './Components/PasswordRemind'
import Linker from './Containters/Linker'
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'

const store = configureStore()

function isLoggedIn() {
  if (!localStorage.getItem('user')) {
    return false
  }
  else {
    return true
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/password-remind" component={PasswordRemind} />
            <Route path="/overview" render={(props) => (
              isLoggedIn() ? 
              <Linker {...props} to="overview" /> :
              <Redirect to="/"/>
            )} />
            <Route path="/projects" render={(props) => (
              isLoggedIn() ? 
              <Linker {...props} to="projects" /> :
              <Redirect to="/"/>
            )} />
            <Route path="/tasks" render={(props) => (
              isLoggedIn() ? 
              <Linker {...props} to="tasks" /> :
              <Redirect to="/"/>
            )} />
            <Route path="/account-settings" render={(props) => (
              isLoggedIn() ? 
              <Linker {...props} to="account-settings" /> :
              <Redirect to="/"/>
            )} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
