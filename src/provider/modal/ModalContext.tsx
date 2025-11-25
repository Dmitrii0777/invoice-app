import { createContext, useContext } from "react";
import type { ModalContextType } from "./modal.types";

export const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const modal = useContext(ModalContext);

  if (!modal) {
    throw new Error("useModal must be used inside ModalProvider");
  }

  return modal;
}
