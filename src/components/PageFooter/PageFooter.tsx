import React from "react";
import BlockWrapper from "../UI/BlockWrapper";

function PageFooter() {
  return (
    <BlockWrapper className="m-1">
      <div className="flex p-3 justify-center items-center text-secondary">
        SamuraiJS@2021
      </div>
    </BlockWrapper>
  );
}

export default React.memo(PageFooter);
