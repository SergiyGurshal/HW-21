import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getPostsFromServer from '../../redux/actions/add-post-action'
import getUsersFromServer from '../../redux/actions/get-users-from-server'

import './add-post.sass'

class AddPost extends Component {
  state = {
    content: '',
    photo: '',
    userId: '',
  }

  componentDidMount() {
    this.props.getUsers()
  }

  submitHendler = (e) => {
    e.preventDefault()

    if (!this.state.content || !this.state.photo) return

    const post = {
      userId: +this.state.userId,
      content: this.state.content,
      image: this.state.photo,
    }

    this.props.addPost(post)

    this.setState({ content: '' })
    this.setState({ photo: '' })

    const currentURL = window.location.href

    window.location.href = currentURL.substring(0, currentURL.length - 8)
  }

  render() {
    return (
      <div className="add-post-panel">
        <form className="add-post-form" onSubmit={this.submitHendler}>
          <label className="label item-1">Content:</label>
          <input
            type="text"
            className="input item-2"
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
          />
          <label className="label item-3">Photo:</label>
          <input
            type="text"
            className="input item-4"
            value={this.state.photo}
            onChange={(e) => this.setState({ photo: e.target.value })}
          />
          <label className="label item-5">Nickname:</label>
          <select
            className="input item-6"
            onChange={(e) => {
              const id = e.target.options[e.target.selectedIndex].getAttribute('userId')
              this.setState({ userId: id })
            }}
          >
            <option value="none" className="option-add-post"></option>
            {this.props.users.map((user) => (
              <option value={user.name} className="option-add-post" userid={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button className="form-btn item-12">Add</button>
          <Link to="/" className="item-11">
            <button className="form-btn ">Back</button>
          </Link>
        </form>
      </div>
    )
  }
}

const getStateToProps = (state) => {
  return {
    users: state.addUserReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersFromServer()),
    addPost: (post) => dispatch(getPostsFromServer(post)),
  }
}

export default connect(getStateToProps, mapDispatchToProps)(AddPost)
