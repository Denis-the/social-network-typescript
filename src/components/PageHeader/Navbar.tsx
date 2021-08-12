import React from "react";
import BlockWrapper from "../UI/BlockWrapper";

function Navbar() {
  return (
    <BlockWrapper>
      <div className="flex justify-between items-center w-full">
        <div className="p-4">
          <a href="/" className="text-xl font-bold">
            SamuraiJS
          </a>
        </div>
        <div className="flex p-2 text-sm font-semibold">
          <a href="/" className="p-2">
            Profile
          </a>
          <a href="/" className="p-2">
            Users
          </a>
          <a href="/" className="p-2">
            Settings
          </a>
        </div>
      </div>
    </BlockWrapper>
  );
}

export default React.memo(Navbar);
