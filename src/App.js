import React, { Component } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PasswordRemind from './Components/PasswordRemind'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/password-remind" component={PasswordRemind} />
        </Switch>
      </Router>
    )
  }
}

export default App
