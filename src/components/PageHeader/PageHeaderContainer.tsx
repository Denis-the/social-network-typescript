import React from "react";
import { useLocation } from "react-router";
import Header from "./Header";

function PageHeaderCointainer() {
  const location = useLocation();

  return <Header currentPath={location.pathname} />;
}

export default React.memo(PageHeaderCointainer);
