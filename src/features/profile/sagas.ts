import { takeEvery, call, put } from "redux-saga/effects";
import api from "../../api/api";
import { GetProfileResponce } from "../../api/interface";
import {
  fetchProfileStart,
  fetchProfileSucceeded,
  fetchProfileRejected,
} from "./slice";

export default function* profileSaga() {
  yield takeEvery(fetchProfileStart.type, fetchProfileSaga);
}

export function* fetchProfileSaga(
  action: ReturnType<typeof fetchProfileStart>
) {
  try {
    const profileResponce: GetProfileResponce = yield call(
      api.profileAPI.getProfile,
      action.payload
    );
    yield put(fetchProfileSucceeded(profileResponce.data));
  } catch (e) {
    yield put(
      fetchProfileRejected({
        message: e.response.message,
        status: e.response.status,
      })
    );
  }
}
