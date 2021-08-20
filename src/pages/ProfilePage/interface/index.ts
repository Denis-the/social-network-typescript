import { ProfileDetailed } from "../../../types/Profile";

export interface ProfilePageProps {
  profile: ProfileDetailed | null;
  status: string | null;
}

export interface ProfileProps {
  profile: ProfileDetailed;
  status: string | null;
}

export interface ProfileInfoProps {
  profile: ProfileDetailed;
  status: string | null;
}

export interface ProfileAvatarProps {
  url?: ProfileDetailed["photos"]["large"];
}
export interface ProfileStatusProps {
  status: string | null;
}
