import { all } from 'redux-saga/effects'
import { loginRequest } from 'middleware/saga/login'
import { historyRequest } from 'middleware/saga/history'

export default function* rootSaga() {
  yield all([loginRequest(), historyRequest()])
}
