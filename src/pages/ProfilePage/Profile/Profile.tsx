import React from "react";
import BlockWrapper from "../../../components/UI/BlockWrapper";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

import { ProfileProps } from "../interface";

function Profile({ profile, status }: ProfileProps) {
  return (
    <div>
      <div className="flex flex-wrap items-stretch justify-center sm:justify-evenly text-secondary">
        <BlockWrapper className="bg-unset flex-grow-0 flex-shrink">
          <ProfileAvatar url={profile?.photos.large} />
        </BlockWrapper>

        <BlockWrapper className="flex-grow flex-shrink p-2 sm:max-w-lg">
          <ProfileInfo profile={profile} status={status} />
        </BlockWrapper>
      </div>
    </div>
  );
}

export default React.memo(Profile);
