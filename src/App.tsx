import React from "react";
import BlockWrapper from "./components/UI/BlockWrapper";
import Layout from "./pages/Layout";

function App() {
  return (
    <Layout>
      <div className="flex">
        <BlockWrapper>
          <div className="m-3">A children</div>
        </BlockWrapper>
      </div>
    </Layout>
  );
}

const ConnectedApp = () => (
  <div>
    <App />
  </div>
);

export default ConnectedApp;
