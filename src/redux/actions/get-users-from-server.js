import { FETCH_USERS } from '../types'

const getUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  }
}

export default function getUsersFromServer() {
  return async (dispatch) => {
    const response = await fetch('https://cors.io/?http://domer.tech:9999/users/')
    const json = await response.json()
    dispatch(getUsers(json.data))
  }
}
