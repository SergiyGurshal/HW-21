import { FETCH_POSTS } from '../types'

const fetchPosts = (post) => {
  return {
    type: FETCH_POSTS,
    payload: post,
  }
}

export default function getPostsFromServer() {
  return async (dispatch) => {
    const response = await fetch('http://domer.tech:9999/tweets/')
    const json = await response.json()
    dispatch(fetchPosts(json.data))
  }
}
