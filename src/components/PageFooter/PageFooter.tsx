import React from "react";
import BlockWrapper from "../UI/BlockWrapper";

function PageFooter() {
  return <BlockWrapper>
    <div className="flex p-3 justify-center items-center">SamuraiJS@2021</div>
  </BlockWrapper>;
}

export default React.memo(PageFooter);
