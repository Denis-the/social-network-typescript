import { call, put } from "redux-saga/effects";
import { fetchProfileSaga, fetchProfileStatusSaga } from "../sagas";
import {
  fetchProfileRejected,
  fetchProfileStart,
  fetchProfileSucceeded,
  fetchStatusRejected,
  fetchStatusSucceeded,
} from "../slice";
import api from "../../../api/api";

describe("fetchProfileSaga", () => {
  test("saga triggers success action", () => {
    const saga = fetchProfileSaga(fetchProfileStart(2));

    // saga spawns fetchProfileStatusSaga
    expect(saga.next().value.payload.fn.name).toBe(fetchProfileStatusSaga.name);
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

  test("saga triggers fetch reject action", () => {
    const saga = fetchProfileSaga(fetchProfileStart(2));
    const err = {
      response: { message: "some error", status: 404 },
    };
    // saga spawns fetchProfileStatusSaga
    saga.next();
    // saga calls api method
    expect(saga.next().value).toEqual(call(api.profileAPI.getProfile, 2));
    // saga gets an error and puts fetchProfileRejected with error in payload to store
    expect(saga.throw(err).value).toEqual(
      put(fetchProfileRejected({ message: "some error", status: 404 }))
    );
    // saga finishes work
    expect(saga.next().done).toBe(true);
  });
});

describe("fetchProfileStatusSaga", () => {
  test("saga triggers fetch status success action", () => {
    const saga = fetchProfileStatusSaga(fetchProfileStart(2));

    // saga calls api method
    expect(saga.next().value).toEqual(call(api.profileAPI.getStatus, 2));
    // saga puts fetchProfileSucceeded action with responce to store
    expect(
      saga.next({
        data: "hello world",
      }).value
    ).toEqual(put(fetchStatusSucceeded("hello world")));
    // saga finishes work
    expect(saga.next().done).toBe(true);
  });

  test("saga triggers fetch status reject action", () => {
    const saga = fetchProfileStatusSaga(fetchProfileStart(2));
    const err = {
      response: { message: "some error", status: 404 },
    };
    // saga calls api method
    expect(saga.next().value).toEqual(call(api.profileAPI.getStatus, 2));
    // saga gets an error and puts fetchProfileRejected with error in payload to store
    expect(saga.throw(err).value).toEqual(
      put(fetchStatusRejected({ message: "some error", status: 404 }))
    );
    // saga finishes work
    expect(saga.next().done).toBe(true);
  });
});
