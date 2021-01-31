import React from 'react'
import { connect } from 'react-redux'
import Post from '../Post/Post'

const Posts = (props) => {
  const getUser = (userId) => {
    for (let user of props.users) {
      if (user['id'] === userId) return user
    }
  }

  return (
    <div className="posts">
      {props.posts.map((post) => (
        <Post {...getUser(post.userId)} {...post} key={post.id} />
      ))}
    </div>
  )
}

const getStateToProps = (state) => {
  return {
    posts: state.addPostReducer,
    users: state.addUserReducer,
  }
}

export default connect(getStateToProps, null)(Posts)
