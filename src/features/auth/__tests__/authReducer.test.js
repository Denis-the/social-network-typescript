import authReducer, { authActions } from "..";
import { RequestStatus } from "../../../types/API-types";
import { initialState } from "../slice";

describe("authReducer tests", () => {
  test("fetchAuthStart must set request status to loading and set error to undefined", () => {
    const newState = authReducer(initialState, authActions.fetchIsAuthStart());
    expect(newState.request.status).toBe(RequestStatus.loading);
    expect(newState.request.error).toBe(undefined);
  });
  test("fetchAuthStart must set request status to erroe and set error", () => {
    const responseErrorData = { status: 404, message: "not found test" };
    const newState = authReducer(
      initialState,
      authActions.fetchAuthRejected(responseErrorData)
    );
    expect(newState.request.status).toBe(RequestStatus.error);
    expect(newState.request.error.code).toBe(responseErrorData.status);
    expect(newState.request.error.message).toBe(responseErrorData.message);
  });
  test("fetchAuthStart must set fetched data to new state request status to succedded and set error to undefined", () => {
    const responseData = {
      data: {
        id: 123,
        email: "test@test.com",
        login: "testLogin",
      },
    };
    const newState = authReducer(
      initialState,
      authActions.fetchIsAuthSucceeded(responseData)
    );
    expect(newState.isAuth).toBe(true);
    expect(newState.id).toBe(responseData.data.id);
    expect(newState.login).toBe(responseData.data.login);
    expect(newState.email).toBe(responseData.data.email);
    expect(newState.request.status).toBe(RequestStatus.succeeded);
    expect(newState.request.error).toBe(undefined);
  });
});
