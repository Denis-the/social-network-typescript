import React from "react";
import placeholder from "../../../assets/images/user_avatar_placeholder.jpg";

function ProfileAvatar() {
  return (
    <div className="flex flex-wrap justify-center">
      <img src={placeholder} className="max-w-xs" alt="avatar" />
    </div>
  );
}

export default React.memo(ProfileAvatar);
