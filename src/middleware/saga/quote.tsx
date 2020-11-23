import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import callApi from 'services/api'
import { QuoteInterface } from 'actions/stock'

function* quoteSuccess(data: QuoteInterface) {
  const payload = yield call(() => callApi(data.payload))

  try {
    yield put({ type: types.QUOTE[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.QUOTE[FAILURE], error })
  }
}

export function* quoteRequest() {
  yield takeEvery(types.QUOTE[REQUEST], quoteSuccess)
}
