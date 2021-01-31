import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addUserReducer } from './redux/reducers/add-user-reduxer'
import { addPostReducer } from './redux/reducers/add-post-reducer'

const reduser = combineReducers({ addUserReducer, addPostReducer })

const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)))

export default store
