import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'

function* loginSuccess(data: any) {
  const payload = yield call(() => services.login(data.payload))

  try {
    yield put({ type: types.LOGIN[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.LOGIN[FAILURE], error })
  }
}

export function* loginRequest() {
  yield takeEvery(types.LOGIN[REQUEST], loginSuccess)
}
