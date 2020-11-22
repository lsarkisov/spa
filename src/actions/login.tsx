import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

type t = {
  action: string | undefined
  login: string | undefined
  password: string | undefined
}

export const loginAction = (payload: t) => ({
  type: types.LOGIN[REQUEST],
  payload,
})
