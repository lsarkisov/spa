import * as types from 'const/requests'
import { FAILURE, REQUEST } from 'const/actions'

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

export const logoutAction = () => ({
  type: types.LOGIN[FAILURE],
  payload: null,
})
