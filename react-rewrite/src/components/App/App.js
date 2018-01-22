import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Route, Link, Redirect, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route>
            <MuiThemeProvider>
              {/* Insert material component here */}
            </MuiThemeProvider>
          </Route>
        </Switch>
      </main>
    )
  }
}

export default App
