import React from "react";
import { ProfileInfoProps } from "../interface";

function ProfileInfo({ profile }: ProfileInfoProps) {
  const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription } =
    profile;
  return (
    <div className="">
      <div className="m-2 my-3 text-secondary font-bold text-xl uppercase">
        {fullName}
      </div>
      <div>
        Status... Wake the f*** up Samurai, we have a city to burn asd asd asd
        asd as dasd asda sdasd a
      </div>
      {aboutMe ? <div>{aboutMe}</div> : null}
      {lookingForAJob ? <div>{lookingForAJobDescription}</div> : null}
    </div>
  );
}

export default React.memo(ProfileInfo);
