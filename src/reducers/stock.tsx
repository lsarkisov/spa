import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'

const initialState = {}

const stock = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case types.HISTORY[SUCCESS]:
      return Object.assign({}, state, {
        history: action.payload,
      })

    case types.HISTORY[FAILURE]:
      return Object.assign({}, state, {
        history: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default stock
