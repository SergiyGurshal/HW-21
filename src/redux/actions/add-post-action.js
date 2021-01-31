import { ADD_POST } from '../types'

const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  }
}

export default function getPostsFromServer(post) {
  return async (dispatch) => {
    await fetch('http://domer.tech:9999/tweets/', {
      method: 'POST',
      body: JSON.stringify({
        userId: post.userId,
        content: post.content,
        image: post.image,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await fetch('http://domer.tech:9999/tweets/')
    const json = await response.json()
    dispatch(addPost(json.data))
  }
}
