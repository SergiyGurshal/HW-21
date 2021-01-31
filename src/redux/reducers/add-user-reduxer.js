import { ADD_USER, FETCH_USERS } from '../types'

export const addUserReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...action.payload]
    case FETCH_USERS:
      return [...action.payload]
    default:
      return state
  }
}
