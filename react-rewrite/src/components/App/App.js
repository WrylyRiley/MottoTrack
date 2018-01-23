import React, { Component } from 'react'
import './App.css'
import Welcome from '../Welcome/Welcome'
import Posts from '../Posts/Posts'
import { Route, Redirect, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <main>
        <Switch>
          {/* Welcome page */}
          <Route path='/' render={props => <Posts />} />
          {/* Posts Table */}
          <Route path='/posts' render={props => <Posts />} />
          {/* Catch-all redirect */}
          <Route path='/*' render={_ => <Redirect to='/' />} />
        </Switch>
      </main>
    )
  }
}

export default App
