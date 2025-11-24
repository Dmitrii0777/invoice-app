export type ModalPosition = "center" | "left" | "right";

export interface ModalContextType {
  isOpen: boolean;
  content: React.ReactNode | null;
  position: ModalPosition;
  openModal: (content: React.ReactNode, position?: ModalPosition) => void;
  closeModal: () => void;
}
