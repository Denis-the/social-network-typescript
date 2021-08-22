import authReducer, {
  fetchAuthRejected,
  fetchIsAuthStart,
  fetchIsAuthSucceeded,
} from "./slice";

export { default as authSelectors } from "./selectors";
export const authActions = {
  fetchAuthRejected,
  fetchIsAuthStart,
  fetchIsAuthSucceeded,
};

export default authReducer;
