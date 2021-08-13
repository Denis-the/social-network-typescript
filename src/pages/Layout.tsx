import React from "react";
import PageFooterContainer from "../components/PageFooter/PageFooterContainer";
import PageHeaderContainer from "../components/PageHeader/PageHeaderContainer";

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-secondary h-full">
      <div className="container flex flex-col h-full flex-wrap sm:p-3 pt-0 pb-0 min-h-screen">
        <PageHeaderContainer />
        <div className="flex-grow">{children}</div>
        <PageFooterContainer />
      </div>
    </div>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
