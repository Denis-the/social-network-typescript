import React from "react";
import Profile from "./Profile/Profile";

function ProfilePage() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default React.memo(ProfilePage);
