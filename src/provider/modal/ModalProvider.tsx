import { useState, type ReactNode } from "react";
import { ModalContext } from "./ModalContext";
import type { ModalContextType, ModalPosition } from "./modal.types";

interface ModalProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const [position, setPosition] = useState<ModalPosition>("center");

  const openModal: ModalContextType["openModal"] = (node, pos = "center") => {
    setContent(node);
    setPosition(pos);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal: ModalContextType["closeModal"] = () => {
    setIsOpen(false);
    setContent(null);
    document.body.style.overflow = "";
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, content, position, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
