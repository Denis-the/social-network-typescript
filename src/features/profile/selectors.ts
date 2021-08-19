import { RootState } from "../store";

const getProfileData = (state: RootState) => state.profile.profileData;
const getProfileRequestStatus = (state: RootState) => state.profile.request;

export default {
  getProfileData,
  getProfileRequestStatus,
};
