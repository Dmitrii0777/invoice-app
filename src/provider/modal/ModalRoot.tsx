import { createPortal } from "react-dom";
import { useModal } from "./ModalContext";

const ModalRoot = () => {
  const { isOpen, content, position, closeModal } = useModal();

  if (!isOpen) return null;

  let positionClasses = "";
  switch (position) {
    case "center":
      positionClasses = "justify-center items-center";
      break;
    case "left":
      positionClasses = "justy=ify-start items-start";
      break;
    case "right":
      positionClasses = "justify-end items-start";
      break;
  }

  return createPortal(
    <div
      className={`fixed inset-0 bg-black/50 flex ${positionClasses} z-50`}
      onClick={closeModal}
    >
      <div className="" onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>,
    document.body
  );
};

export default ModalRoot;
