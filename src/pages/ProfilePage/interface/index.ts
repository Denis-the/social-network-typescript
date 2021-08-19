import { ProfileDetailed } from "../../../types/Profile";

export interface ProfilePageProps {
  profile?: ProfileDetailed;
}

export interface ProfileProps {
  profile: ProfileDetailed;
}

export interface ProfileInfoProps {
  profile: ProfileDetailed;
}

export interface ProfileAvatarProps {
  url?: ProfileDetailed["photos"]["large"];
}
