import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Routes from "./routes/Routes";

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

const ConnectedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default ConnectedApp;
