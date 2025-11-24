import { Button } from "../../../components/ui";

const DeleteInvoiceModal = () => {
  return (
    <div
      className="
        flex flex-col gap-5 max-w-[330px]
        md:max-w-[480px] md:p-12 p-8 rounded-lg bg-bgAlt"
    >
      <div className="flex flex-col gap-2 md:gap-3">
        <h3 className="text-textBasic font-bold text-2xl">Confirm Deletion</h3>
        <p className="text-slate-500 font-medium text-sm">
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button variant="bg-accent" className="text-text-gray">
          Cancel
        </Button>
        <Button variant="bg-danger" className="text-white">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteInvoiceModal;
