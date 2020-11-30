import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import callApi from 'services/api'
import { LoginInterface } from 'actions/login'

const mockAuth = (payload: {
  login: string | undefined
  password: string | undefined
}) => {
  const { login, password } = payload
  if (login === 'test@gmail.com' && password === 'MyPassword_123') {
    return { result: 'ok' }
  }
  return {
    error: 'Wrong login and/or password',
    result: 'error',
  }
}

function* loginSuccess(data: LoginInterface) {
  // Real request to the server
  // const payload = yield call(() => callApi(data.payload))

  // Mock data for login
  const payload = yield mockAuth(data.payload)

  try {
    yield put({ type: types.LOGIN[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.LOGIN[FAILURE], error })
  }
}

export function* loginRequest() {
  yield takeEvery(types.LOGIN[REQUEST], loginSuccess)
}
