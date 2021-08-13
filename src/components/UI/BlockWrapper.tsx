import classNames from "classnames";
import React from "react";
import { BlockWrapperProps } from "./interface/BlockWrapper";

function BlockWrapper({ children, className }: BlockWrapperProps) {
  return (
    <div
      className={classNames(
        "m-2 bg-primary-400 shadow-lg text-secondary",
        className
      )}
    >
      {children}
    </div>
  );
}

BlockWrapper.defaultProps = {
  className: undefined,
};

export default React.memo(BlockWrapper);
