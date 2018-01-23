// This was my first module in this rewrite. inspiration taken from the react-reusable-form-components in-class assignment
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
// import FlatButton from 'material-ui/FlatButton'

class Toolbar extends Component {
  render = () => {
    return (
      <AppBar
        title={`Welcome to ${this.props.appTitle}!`}
        iconElementLeft={
          <IconButton containerElement={<Link to="/" />}>
            <ActionHome />
          </IconButton>
        }
      />
    )

    // Original version with Materialize only

    // <nav>
    //   <div className="nav-wrapper deep-orange darken-1">
    //     <a
    //       href="/"
    //       className="btn-floating btn-small waves-effect waves-light"
    //     >
    //       <i className="material-icons">Home</i>Logo
    //     </a>
    //     <span className="nav-title">{this.props.appTitle}</span>
    //   </div>
    // </nav>
  }
}

export default Toolbar
