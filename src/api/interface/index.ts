import { AxiosResponse } from "axios";

// types
import { ProfileDetailed } from "../../types/Profile";
import { User } from "../../types/Users";

export interface GetProfileResponceData extends ProfileDetailed {}
export type GetProfileResponce = AxiosResponse<GetProfileResponceData>;

export interface GetUsersParams {
  count?: number;
  page?: number;
  term?: string;
  friend?: boolean;
}
export interface GetUsersResponceData {
  items: User[];
  totalCount: number;
  error: string | null;
}
export interface GetStatusResponceData {
  status: string;
}
export type GetUsersResponce = AxiosResponse<GetUsersResponceData>;
export type GetStatusResponce = AxiosResponse<GetStatusResponceData>;
