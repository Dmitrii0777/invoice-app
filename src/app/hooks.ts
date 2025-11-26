// External libraries
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

// Local types / store
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
