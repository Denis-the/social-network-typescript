import React, { useCallback, useState } from "react";
import usePointerHoldHelper from "../../../hooks/pointerHelper/usePointerHoldHelper";

import { ProfileStatusProps } from "../interface";

function ProfileStatus({ status }: ProfileStatusProps) {
  const [tempStatus, setTempStatus] = useState(status);
  const [editModeOpen, setEditModeOpen] = useState(false);

  const changeTempStatus = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setTempStatus(e.target.value),
    []
  );

  const toggleEditMode = useCallback(
    () => setEditModeOpen((prev) => !prev),
    [setEditModeOpen]
  );

  const pointerHelper = usePointerHoldHelper(toggleEditMode, 1000);

  return (
    <div
      role="button"
      tabIndex={-1}
      onPointerDown={pointerHelper.onPointerDown}
      onPointerUp={pointerHelper.onPointerUp}
    >
      {!editModeOpen ? (
        <div>{status}</div>
      ) : (
        <input
          className="text-primary-600 p-1 w-full"
          value={tempStatus || ""}
          onChange={changeTempStatus}
        />
      )}
    </div>
  );
}

export default React.memo(ProfileStatus);
