import React, { Component } from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

class TableEntry extends Component {
  state = {
    open: false,
    inPlaceModel: {
      company: '',
      motto: '',
      description: ''
    },
    newModel: {
      company: '',
      motto: '',
      description: ''
    }
  }

  openDialog = () => {}
  closeDialog = () => {}
  handleUpdate = e => {
    // this.props.update(true)
  }

  handleDelete = e => {
    // this.props.update(true)
  }

  handleTextChange = e => {}

  render = () => {
    const UpdateForm = (
      <Dialog>
        <TextField name={this.props.id} defaultValue={this.props.id} />
        <TextField name={this.props.title} defaultValue={this.props.title} />
        <TextField name={this.props.motto} defaultValue={this.props.motto} />
        <TextField
          name={this.props.description}
          defaultValue={this.props.description}
        />
        <button onClick={handleUpdate} />
      </Dialog>
    )
    return (
      <TableRow>
        <TableRowColumn>{this.props.id}</TableRowColumn>
        <TableRowColumn>{this.props.title}</TableRowColumn>
        <TableRowColumn>{this.props.motto}</TableRowColumn>
        <TableRowColumn>{this.props.description}</TableRowColumn>
        <TableRowColumn>
          <button onClick={this.handleEdit}>Edit</button>
        </TableRowColumn>
        <TableRowColumn>
          <button>Delete</button>
        </TableRowColumn>
        <UpdateForm />
      </TableRow>
    )
  }
}

export default TableEntry
