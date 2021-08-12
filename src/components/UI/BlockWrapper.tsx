import React from "react";

interface BlockWrapperProps {
  children: React.ReactNode;
}

function BlockWrapper({ children }: BlockWrapperProps) {
  return (
    <div className="m-2 h-full flex flex-wrap items-center justify-center">
      <div className="w-full border dark:border-gray-800 flex items-center justify-center shadow-lg bg-blue-100">
        {children}
      </div>
    </div>
  );
}

export default React.memo(BlockWrapper);
