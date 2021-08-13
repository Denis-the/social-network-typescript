import React from "react";
import placeholder from "../../../assets/images/user_avatar_placeholder.jpg";

function ProfileAvatar() {
  return (
    <div className="">
      <img src={placeholder} className="" alt="avatar" />
    </div>
  );
}

export default React.memo(ProfileAvatar);
