import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

interface Payload {
  action: string | undefined
  login: string | undefined
  password: string | undefined
}

export interface LoginInterface {
  type: typeof types.LOGIN
  payload: Payload
}

export const loginAction = (payload: Payload) => ({
  type: types.LOGIN[REQUEST],
  payload,
})
