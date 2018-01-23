import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import { Link } from 'react-router-dom'
// I'll forget I put this explanation here, but according to the docs, NOT using curly braces when importing MUI components is faster, so I decided to try it.

class WelcomeModal extends Component {
  render = () => {
    // separate out heart button link to posts page
    // const RouteComponent = (

    // )
    const heartButton = (
      <FloatingActionButton containerElement={<Link to="/posts" />}>
        <ActionFavorite />
      </FloatingActionButton>
    )

    return (
      // heavily modified version of a dialog from the material-ui docs
      // designed to always be open
      <div>
        <Dialog
          title={`Welcome to ${this.props.appTitle}!`}
          actions={heartButton}
          modal={true}
          open={true}
        >
          {this.props.welcomeMessage}
        </Dialog>
      </div>
    )

    // Original version with Materialize only
    // Wont work, because modals are initialized and opened with jQuery

    // <div id="welcomeModal" className="modal bottom-sheet">
    //   <div className="modal-content">
    //     <h4>Welcome to {this.props.appTitle}!</h4>
    //     <p>{this.props.welcomeMessage}</p>
    //   </div>
    //   <div className="modal-footer">
    //     <a className="btn-floating btn-large waves-effect waves-light deep-orange darken-1">
    //       <i className="material-icons">favorite</i>
    //     </a>
    //   </div>
    // </div>
  }
}

export default WelcomeModal
