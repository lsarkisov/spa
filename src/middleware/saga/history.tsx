import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import callApi from 'services/api'
import { HistoryInterface } from 'actions/stock'

function* historySuccess(data: HistoryInterface) {
  const payload = yield call(() => callApi(data.payload))

  try {
    yield put({ type: types.HISTORY[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.HISTORY[FAILURE], error })
  }
}

export function* historyRequest() {
  yield takeEvery(types.HISTORY[REQUEST], historySuccess)
}
