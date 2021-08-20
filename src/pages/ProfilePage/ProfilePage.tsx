import React from "react";
import Profile from "./Profile/Profile";

import { ProfilePageProps } from "./interface";

function ProfilePage({ profile, status }: ProfilePageProps) {
  return (
    <div>{profile ? <Profile profile={profile} status={status} /> : null}</div>
  );
}

export default React.memo(ProfilePage);
