import React from "react";
import { ProfileInfoProps } from "../interface";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo({ profile, status }: ProfileInfoProps) {
  const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription } =
    profile;
  return (
    <div className="">
      <div className="m-2 my-3 text-secondary font-bold text-xl uppercase">
        {fullName}
      </div>
      <ProfileStatus status={status} />
      {aboutMe ? <div>{aboutMe}</div> : null}
      {lookingForAJob ? <div>{lookingForAJobDescription}</div> : null}
    </div>
  );
}

export default React.memo(ProfileInfo);
