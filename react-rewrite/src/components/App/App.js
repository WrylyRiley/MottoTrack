import React, { Component } from 'react'
import './App.css'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route>{/* Insert component here */}</Route>
        </Switch>
      </main>
    )
  }
}

export default App
