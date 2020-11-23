import { combineReducers } from 'redux'
import login from './login'
import stockHistory from './history'
import stockQuote from './quote'

const reducers = combineReducers({
  login,
  stockHistory,
  stockQuote,
})

export default reducers
