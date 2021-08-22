import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { RequestState, RequestStatus } from "../../types/API-types";
import { AuthMeResponseData } from "../../api/interface/index";
import { $FixTypeLater } from "../../types/utils";

export const initialState = {
  isAuth: false,
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  request: {
    status: RequestStatus.idle,
    error: undefined,
  } as RequestState,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchIsAuthStart(state) {
      state.request.status = RequestStatus.loading;
      state.request.error = undefined;
    },
    fetchIsAuthSucceeded(state, action: PayloadAction<AuthMeResponseData>) {
      state.id = action.payload.data.id;
      state.login = action.payload.data.login;
      state.email = action.payload.data.email;
      state.isAuth = true;
      state.request.status = RequestStatus.succeeded;
      state.request.error = undefined;
    },
    fetchAuthRejected(state, action: PayloadAction<$FixTypeLater>) {
      state.id = null;
      state.login = null;
      state.email = null;
      state.request.status = RequestStatus.error;
      state.request.error = {
        code: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const { fetchIsAuthStart, fetchIsAuthSucceeded, fetchAuthRejected } =
  authSlice.actions;
export default authSlice.reducer;
