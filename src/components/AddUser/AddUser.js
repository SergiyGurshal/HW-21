import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import addUserToServer from '../../redux/actions/add-user-action'

import './add-user.sass'

class AddUser extends Component {
  state = {
    name: '',
    surname: '',
    username: '',
    avatar: '',
    info: '',
  }

  submitHendler = (e) => {
    e.preventDefault()

    if (!this.state.name || !this.state.surname || !this.state.username || !this.state.avatar || !this.state.info) return

    const user = {
      name: this.state.name + ' ' + this.state.surname,
      avatar: this.state.avatar,
      username: this.state.username,
    }

    this.setState({ name: '' })
    this.setState({ surname: '' })
    this.setState({ username: '' })
    this.setState({ avatar: '' })
    this.setState({ info: '' })

    this.props.addUser(user)

    const currentURL = window.location.href

    window.location.href = currentURL.substring(0, currentURL.length - 8)
  }

  render() {
    return (
      <div className="add-post-panel">
        <form className="add-post-form" onSubmit={this.submitHendler}>
          <label className="label item-1">Name:</label>
          <input
            type="text"
            className="input item-2"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <label className="label item-3">Surname:</label>
          <input
            type="text"
            className="input item-4"
            value={this.state.surname}
            onChange={(e) => this.setState({ surname: e.target.value })}
          />
          <label className="label item-5">Nickname:</label>
          <input
            type="text"
            className="input item-6"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <label className="label item-7">Avatar:</label>
          <input
            type="text"
            className="input item-8"
            value={this.state.avatar}
            onChange={(e) => this.setState({ avatar: e.target.value })}
          />
          <label className="label item-9">Info:</label>
          <input
            type="text"
            className="input item-10"
            value={this.state.info}
            onChange={(e) => this.setState({ info: e.target.value })}
          />
          <button className="form-btn item-12-add-user">Add</button>
          <Link to="/" className="item-11-add-user">
            <button className="form-btn ">Back</button>
          </Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUserToServer(user)),
  }
}

export default connect(null, mapDispatchToProps)(AddUser)
