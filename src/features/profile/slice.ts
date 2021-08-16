import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestState, RequestStatus } from "../../types/API-types";
import { ProfileDetailed } from "../../types/Profile";
import { $FixTypeLater } from "../../types/utils";

// state
const initialState = {
  profileData: undefined as ProfileDetailed | undefined,
  request: {
    status: RequestStatus.idle,
    error: undefined,
  } as RequestState,
};

// custom actions
export const fetchProfileStart = createAction<ProfileDetailed["userId"]>(
  "postOrder/postOrderStart"
);

// slice
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchProfileSucceeded(state, action: PayloadAction<ProfileDetailed>) {
      state.profileData = action.payload;
      state.request.status = RequestStatus.succeeded;
    },
    fetchProfileRejected(state, action: PayloadAction<$FixTypeLater>) {
      state.profileData = undefined;
      state.request.status = RequestStatus.error;
      state.request.error = {
        code: action.payload.status,
        message: action.payload.message,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProfileStart.type, (state) => {
      state.request.status = RequestStatus.loading;
    });
  },
});

export const { fetchProfileSucceeded, fetchProfileRejected } =
  profileSlice.actions;
export default profileSlice.reducer;
