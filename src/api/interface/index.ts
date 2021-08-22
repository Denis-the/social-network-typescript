import { AxiosResponse } from "axios";

// types
import { ProfileDetailed } from "../../types/Profile";
import { User } from "../../types/Users";

export interface GetUsersParams {
  count?: number;
  page?: number;
  term?: string;
  friend?: boolean;
}
export interface LoginParams {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
}
export interface GetUsersResponseData {
  items: User[];
  totalCount: number;
  error: string | null;
}

export interface GetProfileResponseData extends ProfileDetailed {}
export type GetStatusResponseData = string | null;
interface GenericAuthResponseData {
  resultCode: number;
  messages: string[];
}
export interface LoginResponseData extends GenericAuthResponseData {
  data: {
    id: number;
  };
}
export interface AuthMeResponseData extends GenericAuthResponseData {
  data: {
    id: number;
    email: string;
    login: string;
  };
}
export interface LogoutResponseData extends GenericAuthResponseData {}

export type GetProfileResponse = AxiosResponse<GetProfileResponseData>;
export type GetStatusResponse = AxiosResponse<GetStatusResponseData>;
export type GetUsersResponse = AxiosResponse<GetUsersResponseData>;
export type LoginResponse = AxiosResponse<LoginResponseData>;
export type LogoutResponse = AxiosResponse<LogoutResponseData>;
export type AuthMeResponse = AxiosResponse<AuthMeResponseData>;
