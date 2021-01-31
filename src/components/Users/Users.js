import React, { Component } from 'react'

import UserIcon from '../UserIcon/UserIcon'

import anonymIcon from '../../images/anonym.png'

import './users.sass'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    return (
      <div className="users-panel">
        <ul>
          <li>
            <Link to="/add-user">
              <UserIcon {...{ avatar: anonymIcon, username: 'Add User' }} />
            </Link>
          </li>
          {this.props.users.map((user) => (
            <li key={user.id}>
              <UserIcon {...{ avatar: user.avatar, username: user.username }} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const getStateToProps = (state) => {
  return {
    users: state.addUserReducer,
  }
}

export default connect(getStateToProps, null)(Users)
