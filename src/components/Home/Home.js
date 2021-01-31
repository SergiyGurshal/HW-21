import React, { Component } from 'react'
import Posts from '../Posts/Posts'
import Users from '../Users/Users'
import getUsersFromServer from '../../redux/actions/get-users-from-server'
import getPostsFromServer from '../../redux/actions/fetch-posts-action'

import './home.sass'

import plusIcon from '../../images/plus.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount() {
    this.props.getUsers()
    this.props.getPosts()
  }

  render() {
    return (
      <div className="home-page">
        <Users />
        <Posts />
        <Link to="add-post">
          <img className="addPostBtn" src={plusIcon} alt="add post button" />
        </Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersFromServer()),
    getPosts: () => dispatch(getPostsFromServer()),
  }
}

export default connect(null, mapDispatchToProps)(Home)
