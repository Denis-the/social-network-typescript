import instance from "./config";
import getQueryString from "./utils";

// types
import { GetQueryStringParams } from "./interface/utils";
import {
  AuthMeResponse,
  GetProfileResponse,
  GetStatusResponse,
  GetUsersParams,
  GetUsersResponse,
  LoginParams,
  LoginResponse,
  LogoutResponseData,
} from "./interface";

const profileAPI = {
  getProfile(userId: string): Promise<GetProfileResponse> {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: string): Promise<GetStatusResponse> {
    return instance.get(`profile/status/${userId}`);
  },
};

const usersAPI = {
  getUsers(params: GetUsersParams): Promise<GetUsersResponse> {
    const qs = getQueryString(params as GetQueryStringParams);
    return instance.get(`users/?${qs}`);
  },
};

const authAPI = {
  authData(): Promise<AuthMeResponse> {
    return instance.get("auth/me");
  },
  login(params: LoginParams): Promise<LoginResponse> {
    return instance.post("auth/login", params);
  },
  logout(): Promise<LogoutResponseData> {
    return instance.delete("auth/login");
  },
};

export default {
  profileAPI,
  usersAPI,
  authAPI,
};
