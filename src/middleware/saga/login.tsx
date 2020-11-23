import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import callApi from 'services/api'
import { LoginInterface } from 'actions/login'

function* loginSuccess(data: LoginInterface) {
  const payload = yield call(() => callApi(data.payload))

  try {
    yield put({ type: types.LOGIN[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.LOGIN[FAILURE], error })
  }
}

export function* loginRequest() {
  yield takeEvery(types.LOGIN[REQUEST], loginSuccess)
}
