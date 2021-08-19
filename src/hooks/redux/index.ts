import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features/store";

function useTDispatch() {
  return useDispatch<AppDispatch>();
}

export default useTDispatch;
