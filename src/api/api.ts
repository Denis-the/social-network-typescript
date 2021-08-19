import instance from "./config";
import getQueryString from "./utils";

// types
import { GetQueryStringParams } from "./interface/utils";
import {
  GetProfileResponce,
  GetUsersParams,
  GetUsersResponce,
} from "./interface";

const profileAPI = {
  getProfile(userId: string): Promise<GetProfileResponce> {
    return instance.get(`profile/${userId}`);
  },
};

const usersAPI = {
  getUsers(params: GetUsersParams): Promise<GetUsersResponce> {
    const qs = getQueryString(params as GetQueryStringParams);
    return instance.get(`users/?${qs}`);
  },
};

export default {
  profileAPI,
  usersAPI,
};
