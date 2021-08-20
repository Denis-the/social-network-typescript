import { RootState } from "../store";

const getProfileData = (state: RootState) => state.profile.profileData;
const getProfileRequestStatus = (state: RootState) => state.profile.request;
const getProfileStatus = (state: RootState) => state.profile.profileStatus;

export default {
  getProfileData,
  getProfileRequestStatus,
  getProfileStatus,
};
