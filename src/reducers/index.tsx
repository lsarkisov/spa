import { combineReducers } from 'redux'
import login from './login'
import stock from './stock'

const reducers = combineReducers({
  login,
  stock,
})

export default reducers
