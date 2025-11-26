// Absolute / global imports (aliases)
import { useAppDispatch } from "@/app/hooks";

// Redux actions / state
import { deleteInvoice } from "@/features/store/invoice.slice";

// Local components
import { Button } from "@/components/ui";

// Context / Providers
import { useModal } from "../ModalContext";
interface IdProps {
  id: string;
  onNavigate: (path: string) => void;
}

const DeleteInvoiceModal = ({ id, onNavigate }: IdProps) => {
  const dispatch = useAppDispatch();

  const { closeModal } = useModal();

  const handleDelete = () => {
    if (!id) return;
    console.log(`Delete ${id}`);
    dispatch(deleteInvoice(id));
    onNavigate("/");
    closeModal();
  };

  return (
    <div
      className="
        flex flex-col gap-5 max-w-[330px]
        md:max-w-[480px] md:p-12 p-8 rounded-lg bg-bgAlt"
    >
      <div className="flex flex-col gap-2 md:gap-3">
        <h3 className="text-headingMVar text-textPrimary font-bold">
          Confirm Deletion
        </h3>
        <p className="text-textGrayBlue  font-medium text-sm">
          Are you sure you want to delete invoice #{id}? This action cannot be
          undone.
        </p>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button
          variant="bg-btnAccentBg"
          className="text-textSecondary"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          variant="bg-btnDanger"
          className="text-white"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteInvoiceModal;
