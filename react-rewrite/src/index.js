// Split out some App.js functionality to make room for Router, per the react-translator assignment. Used that index.js as the template here
import React from 'react'
import ReactDOM from 'react-dom'
//  Most-parent component
import App from './components/App/App.js' // Most-parent app, handles routing
import { BrowserRouter as Router } from 'react-router-dom'
// Important because reasons
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
  // Router component
  <Router>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
