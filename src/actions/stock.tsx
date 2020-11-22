import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

type t = {
  action: string | undefined
}

export const historyAction = (payload: t) => ({
  type: types.HISTORY[REQUEST],
  payload,
})
