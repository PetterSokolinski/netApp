import React, { Component } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    )
  }
}

export default App
