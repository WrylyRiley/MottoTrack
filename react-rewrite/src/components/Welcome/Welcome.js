import React, { Component } from 'react'
import Toolbar from '../Misc/Toolbar/Toolbar'
import WelcomeModal from '../Misc/WelcomeModal/WelcomeModal'

class Results extends Component {
  state = {
    appTitle: 'MottoTracker',
    welcomeMessage:
      "This app lets you CRUD company names, their mottos, and a short description into a remote database. The app is built in React.js and Material-UI, hosted nowhere because I'm not replacing my Vue.js project, and the API is deployed to Heroku. Enjoy! Click my heart to begin!"
  }

  render() {
    return (
      <div>
        <Toolbar appTitle={this.state.appTitle} />
        <WelcomeModal
          welcomeMessage={this.state.welcomeMessage}
          appTitle={this.state.appTitle}
        />
      </div>
    )
  }
}

export default Results
