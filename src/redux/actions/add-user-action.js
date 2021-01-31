import { ADD_USER } from '../types'

const addUser = (users) => {
  return {
    type: ADD_USER,
    payload: users,
  }
}

export default function addUserToServer(user) {
  return async (dispatch) => {
    await fetch('https://cors.io/?http://domer.tech:9999/users/', {
      method: 'POST',
      body: JSON.stringify({
        name: user.name,
        username: user.username,
        avatar: user.avatar,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await fetch('https://cors.io/?http://domer.tech:9999/users/')
    const json = await response.json()
    dispatch(addUser(json.data))
  }
}
