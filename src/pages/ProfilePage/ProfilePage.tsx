import React from "react";
import Profile from "./Profile/Profile";

import { ProfilePageProps } from "./interface";

function ProfilePage({ profile }: ProfilePageProps) {
  return <div>{profile ? <Profile profile={profile} /> : null}</div>;
}

export default React.memo(ProfilePage);
