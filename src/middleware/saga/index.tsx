import { all } from 'redux-saga/effects'
import { loginRequest } from 'middleware/saga/login'

export default function* rootSaga() {
  yield all([loginRequest()])
}
