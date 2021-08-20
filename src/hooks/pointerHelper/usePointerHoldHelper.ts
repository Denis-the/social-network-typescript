import { PointerEvent, useCallback, useState } from "react";
import { $FixTypeLater } from "../../types/utils";

export default function usePointerHoldHelper(
  callback: Function,
  delay: number
) {
  const [timeoutId, setTimeoutId] = useState<$FixTypeLater>(null);

  const onPointerDown = useCallback(
    (e: PointerEvent) => {
      const timer = setTimeout(() => callback(e), delay);
      setTimeoutId(timer);
    },
    [timeoutId, setTimeoutId, callback, delay]
  );

  const onPointerUp = useCallback(() => {
    clearTimeout(timeoutId);
    setTimeoutId(null);
  }, [onPointerDown, timeoutId, callback, delay]);

  return { onPointerDown, onPointerUp };
}
