import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'
import { LoginStatus } from 'types'

const initialState = {
  status: null,
}

interface Action {
  type: typeof types.LOGIN
  payload: LoginStatus
}

const login = (state: typeof initialState, action: Action) => {
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
