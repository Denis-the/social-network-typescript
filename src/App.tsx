import React from "react";
import Layout from "./pages/Layout";

function App() {
  return (
    <Layout>
      A children
    </Layout>
  );
}

const ConnectedApp = () => (
  <div>
      <App />
  </div>
);

export default ConnectedApp;
