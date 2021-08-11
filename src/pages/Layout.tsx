import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";

function Layout({ children }: LayoutProps) {
  return (
    <div className="container flex flex-col p-5 min-h-screen bg-blue-100  ">
      <PageHeader />
      {children}
    </div>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
