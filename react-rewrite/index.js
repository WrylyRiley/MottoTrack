// Split out some App.js functionality to make room for Router, per the react-translator assignment. Used that index.js as the template here
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App.js'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
