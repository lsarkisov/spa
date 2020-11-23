import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'
import { HistoryStockDetails } from 'types'

const initialState = {
  history: null,
}

interface HistoryAction {
  type: typeof types.HISTORY
  payload: {
    result: string
    details: HistoryStockDetails[]
  }
}

const stockHistory = (state: typeof initialState, action: HistoryAction) => {
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

export default stockHistory
