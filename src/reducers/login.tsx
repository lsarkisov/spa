import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'

const initialState = {}

const login = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case types.LOGIN[SUCCESS]:
      return Object.assign({}, state, {
        status: action.payload,
      })

    case types.LOGIN[FAILURE]:
      return Object.assign({}, state, {
        status: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default login
