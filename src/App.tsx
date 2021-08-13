import React from "react";
import Layout from "./pages/Layout";
import ProfilePageContainer from "./pages/ProfilePage/ProfilePageContainer";

function App() {
  return (
    <Layout>
      <ProfilePageContainer />
    </Layout>
  );
}

const ConnectedApp = () => (
  <div>
    <App />
  </div>
);

export default ConnectedApp;
