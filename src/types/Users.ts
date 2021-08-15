import { Photoes } from "./Profile";

export interface User {
  id: number;
  name: string;
  status: string;
  photos: Photoes;
  followed: boolean;
  uniqueUrlName: string | null;
}
