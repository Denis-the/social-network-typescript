import React from "react";
import BlockWrapper from "../../../components/UI/BlockWrapper";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

function Profile() {
  return (
    <div>
      <div className="flex flex-wrap items-stretch justify-center text-secondary">
        <BlockWrapper className="md:w-1/3  max-w-xl bg-unset">
          <ProfileAvatar />
        </BlockWrapper>

        <BlockWrapper className="flex-grow max-w-xl p-2">
          <ProfileInfo />
        </BlockWrapper>
      </div>
    </div>
  );
}

export default React.memo(Profile);
