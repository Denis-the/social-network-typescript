import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { profileSelectors } from "../../features/profile";
import { fetchProfileStart } from "../../features/profile/slice";
import useTDispatch from "../../hooks/redux";
import ProfilePage from "./ProfilePage";

function ProfilePageCointainer() {
  const dispatch = useTDispatch();
  const { userId } = useParams<{ userId: string }>();
  const profile = useSelector(profileSelectors.getProfileData);

  useEffect(() => {
    dispatch(fetchProfileStart(userId));
  }, [userId]);

  return <ProfilePage profile={profile} />;
}

export default React.memo(ProfilePageCointainer);
