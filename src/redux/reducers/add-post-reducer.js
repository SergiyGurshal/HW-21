import { ADD_POST, FETCH_POSTS } from '../types'

export const addPostReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...action.payload]
    case FETCH_POSTS:
      return [...action.payload]
    default:
      return state
  }
}
