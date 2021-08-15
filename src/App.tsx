import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./features/store";
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
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default ConnectedApp;
