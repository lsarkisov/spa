import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

interface Payload {
  action: string
}

export interface HistoryInterface {
  type: typeof types.HISTORY
  payload: Payload
}

export const historyAction = (payload: Payload) => ({
  type: types.HISTORY[REQUEST],
  payload,
})
