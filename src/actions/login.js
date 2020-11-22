import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

export const loginAction = (payload) => ({
  type: types.LOGIN[REQUEST],
  payload,
})
