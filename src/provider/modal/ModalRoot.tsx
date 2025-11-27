import { createPortal } from "react-dom";
import { useModal } from "./ModalContext";

import type { ModalPosition } from "./modal.types";

const ModalRoot = () => {
  const { isOpen, content, position, closeModal } = useModal();

  if (!isOpen) return null;

  const positionClassesMap = {
    center: "justify-center items-center",
    left: "justify-start items-center",
    right: "justify-end items-start",
  };

  const settingsFormMap: Partial<Record<ModalPosition, string>> = {
    left: "flex flex-col w-full h-full lg:flex-row sm:max-w-[640px] lg:max-w-[720px] bg-white",
  };

  return createPortal(
    <div
      className={`fixed inset-0 bg-black/50 ${positionClassesMap[position]} flex z-40`}
      onClick={closeModal}
    >
      <div
        className={`${settingsFormMap[position]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>,
    document.body
  );
};

export default ModalRoot;
