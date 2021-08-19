import React from "react";
import placeholder from "../../../assets/images/user_avatar_placeholder.jpg";

import { ProfileAvatarProps } from "../interface";

function ProfileAvatar({ url }: ProfileAvatarProps) {
  return (
    <div className="flex flex-wrap justify-center">
      <img src={url || placeholder} className="max-w-xs" alt="avatar" />
    </div>
  );
}

export default React.memo(ProfileAvatar);
