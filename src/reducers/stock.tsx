import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'
import { StockDetails } from 'types'

const initialState = {
  history: null,
}

interface StockAction {
  type: typeof types.HISTORY
  payload: {
    result: string
    details: StockDetails[]
  }
}

const stock = (state: typeof initialState, action: StockAction) => {
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
