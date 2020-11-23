import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

/* History
----------------------------------------*/
interface HistoryPayload {
  action: string
}

export interface HistoryInterface {
  type: typeof types.HISTORY
  payload: HistoryPayload
}

export const historyAction = (payload: HistoryPayload) => ({
  type: types.HISTORY[REQUEST],
  payload,
})

/* Quote
----------------------------------------*/
interface QuotePayload {
  action: string
}

export interface QuoteInterface {
  type: typeof types.QUOTE
  payload: QuotePayload
}
export const quoteAction = (payload: QuotePayload) => ({
  type: types.QUOTE[REQUEST],
  payload,
})
