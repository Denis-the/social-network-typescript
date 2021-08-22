import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

const getAuthState = (state: RootState) => state.auth;
const getAuthData = createSelector(
  getAuthState,
  ({ isAuth, id, login, email }) => ({ isAuth, id, login, email })
);

export default {
  getAuthState,
  getAuthData,
};
