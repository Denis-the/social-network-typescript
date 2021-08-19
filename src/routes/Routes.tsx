import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./config";
import ProfilePageContainer from "../pages/ProfilePage/ProfilePageContainer";

function Routes() {
  return (
    <Switch>
      <Route path={`${routes.profile}/:userId`}>
        <ProfilePageContainer />
      </Route>
      <Route path={routes.profile}>
        <ProfilePageContainer />
      </Route>
      <Route path={routes.users} />
      <Route path={routes.settings} />
    </Switch>
  );
}

export default React.memo(Routes);
