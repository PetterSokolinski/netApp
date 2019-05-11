import React, { Component } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PasswordRemind from './Components/PasswordRemind'
import Linker from './Containters/Linker'
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'

const store = configureStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/password-remind" component={PasswordRemind} />
            <Route path="/overview" render={(props) => <Linker {...props} to="overview" />} />
            <Route path="/projects" render={(props) => <Linker {...props} to="projects" />} />
            <Route path="/tasks" render={(props) => <Linker {...props} to="tasks" />} />
            <Route path="/account-settings" render={(props) => <Linker {...props} to="account-settings" />} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
