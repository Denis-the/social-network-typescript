import { all } from "redux-saga/effects";
import profileSaga from "./profile/sagas";

function* rootSaga() {
  yield all([profileSaga()]);
}

export default rootSaga;
