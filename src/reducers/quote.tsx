import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'
import { QuoteStockAssets } from 'types'

const initialState = {
  quote: null,
}

interface QuoteAction {
  type: typeof types.QUOTE
  payload: {
    result: string
    assets: QuoteStockAssets[]
  }
}

const stockQuote = (state: typeof initialState, action: QuoteAction) => {
  switch (action.type) {
    case types.QUOTE[SUCCESS]:
      return Object.assign({}, state, {
        quote: action.payload,
      })

    case types.QUOTE[FAILURE]:
      return Object.assign({}, state, {
        quote: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default stockQuote
