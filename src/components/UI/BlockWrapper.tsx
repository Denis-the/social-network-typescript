import classNames from "classnames";
import React from "react";

interface BlockWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function BlockWrapper({ children, className }: BlockWrapperProps) {
  return (
    <div
      className={classNames(
        "m-2 h-full flex flex-wrap items-center justify-center bg-primary-400 shadow-lg border dark:border-gray-800",
        className
      )}
    >
      <div className="w-full flex">{children}</div>
    </div>
  );
}

BlockWrapper.defaultProps = {
  className: undefined,
};

export default React.memo(BlockWrapper);
