import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import PostService from '../../services/PostService'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'
import TableEntry from '../Misc/TableEntry/TableEntry'
import Toolbar from '../Misc/Toolbar/Toolbar'

class Posts extends Component {
  state = {
    appTitle: 'MottoTrack',
    items: [],
    dataPresent: false
  }

  getPosts() {
    PostService.fetchPosts().then(response => {
      let items = response.data
      this.setState({
        items: items
      })
    })
  }

  update(object, deleteFlag = false) {
    PostService.changePost(JSON.Parse(JSON.stringify(object)), deleteFlag).then(
      res => {
        console.log(res)
        this.getPosts()
      }
    )
  }

  newPost(object) {
    PostService.addPost(JSON.Parse(JSON.stringify(object))).then(res => {
      console.log(res)
      this.getPosts()
    })
  }

  genIPModel(model) {
    // This, instead of deep cloning. Reference objects are linked!  Remember Intro Java!
    this.inPlaceModel = JSON.parse(JSON.stringify(model))
  }

  genModel(model) {
    this.newModel = JSON.parse(JSON.stringify(model))
  }

  componentWillMount = () => {
    // query api
    this.getPosts()
    // set state of api query to true
    // then update table programmatically
  }

  render = () => {
    // Render an empty table. KISS
    return (
      <div>
        <Toolbar appTitle={this.state.appTitle} />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Company Name</TableHeaderColumn>
              <TableHeaderColumn>Motto</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Edit</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.items.map((item, index) => {
              return (
                <TableEntry
                  key={index}
                  id={item._id}
                  title={item.title}
                  motto={item.motto}
                  description={item.description}
                  update={this.update}
                />
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default Posts
