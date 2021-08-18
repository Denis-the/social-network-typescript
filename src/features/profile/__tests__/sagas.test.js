import { call, put } from "redux-saga/effects";
import { fetchProfileSaga } from "../sagas";
import {
  fetchProfileRejected,
  fetchProfileStart,
  fetchProfileSucceeded,
} from "../slice";
import api from "../../../api/api";

describe("fetchProfileSaga", () => {
  test("saga triggers success action", () => {
    const saga = fetchProfileSaga(fetchProfileStart(2));
    // saga calls api method
    expect(saga.next().value).toEqual(call(api.profileAPI.getProfile, 2));
    // saga puts fetchProfileSucceeded action with responce to store
    expect(
      saga.next({
        data: { userId: 2 },
      }).value
    ).toEqual(put(fetchProfileSucceeded({ userId: 2 })));
    // saga finishes work
    expect(saga.next().done).toBe(true);
  });

  test("saga triggers  action", () => {
    const saga = fetchProfileSaga(fetchProfileStart(2));
    const err = {
      response: { data: { error: "some error" } },
    };
    // saga calls api method
    expect(saga.next().value).toEqual(call(api.profileAPI.getProfile, 2));
    // saga gets an error and puts fetchProfileRejected with error in payload to store
    expect(saga.throw(err).value).toEqual(
      put(fetchProfileRejected({ error: err.response.data.error }))
    );
    // saga finishes work
    expect(saga.next().done).toBe(true);
  });
});
