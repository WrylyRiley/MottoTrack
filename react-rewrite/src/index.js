// Split out some App.js functionality to make room for Router, per the react-translator assignment. Used that index.js as the template here
import React from 'react'
import ReactDOM from 'react-dom'
//  Most-parent component
import App from './components/App/App.js' // Most-parent app, handles routing
import { BrowserRouter as Router } from 'react-router-dom'
// Important because reasons
import registerServiceWorker from './registerServiceWorker'
import './index.css'
// Material-UI Wrapper
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Dark theme
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
// Theme gettersetter
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Hoping this works!
// Wrapping the most-parent component in the MUI wrapper for DRYer code

const WrappedApp = () => {
  return (
    // MUI Wrapper
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <App />
    </MuiThemeProvider>
  )
}

ReactDOM.render(
  // Router component
  <Router>
    <WrappedApp />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
