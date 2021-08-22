import { takeEvery, call, put, spawn } from "redux-saga/effects";
import api from "../../api/api";
import { GetProfileResponse, GetStatusResponse } from "../../api/interface";
import {
  fetchProfileStart,
  fetchProfileSucceeded,
  fetchProfileRejected,
  fetchStatusRejected,
  fetchStatusSucceeded,
} from "./slice";

export default function* profileSaga() {
  yield takeEvery(fetchProfileStart.type, fetchProfileSaga);
}

export function* fetchProfileSaga(
  action: ReturnType<typeof fetchProfileStart>
) {
  try {
    yield spawn(fetchProfileStatusSaga, action);
    const profileResponce: GetProfileResponse = yield call(
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

export function* fetchProfileStatusSaga(
  action: ReturnType<typeof fetchProfileStart>
) {
  try {
    const statusResponce: GetStatusResponse = yield call(
      api.profileAPI.getStatus,
      action.payload
    );
    yield put(fetchStatusSucceeded(statusResponce.data));
  } catch (e) {
    yield put(
      fetchStatusRejected({
        message: e.response.message,
        status: e.response.status,
      })
    );
  }
}
