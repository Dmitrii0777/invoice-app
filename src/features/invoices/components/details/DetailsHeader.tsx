import { useParams, useNavigate } from "react-router-dom";
import { StatusBadge } from "@/components/common";
import { Button } from "@/components/ui";
import { buttons } from "./details.actions";
import { useModal } from "@/provider/modal";
import { DeleteInvoiceModal } from "@/provider/modal";
import { useAppDispatch } from "@/app/hooks";
import { updateInvoiceStatus } from "@/features/store/invoice.slice";
import type { InvoiceStatus } from "@/features/invoices/types/invoice.types";

interface DetailProps {
  status: InvoiceStatus;
}

const DetailsHeader = ({ status }: DetailProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { openModal } = useModal();
  const navigate = useNavigate();

  if (!id) return;

  const handleMarkAsPaid = () => {
    if (status !== "paid") {
      dispatch(updateInvoiceStatus({ id: id, status: "paid" }));
    }
  };

  return (
    <div
      className="
            flex items-center p-6 bg-bgAlt mb-4
            md:justify-between md:px-8 md:py-5 md:mb-6 rounded-lg
          "
    >
      <div className="flex items-center w-full md:w-auto justify-between md:gap-3">
        <span className="text-textGrayBlue text-bodyVar mr-2">Status</span>
        <StatusBadge status={status} />
      </div>
      <div className="hidden md:flex items-center gap-2">
        {buttons.map(({ text, variant, textClass }) => (
          <Button
            onClick={() => {
              if (text === "Delete") {
                openModal(
                  <DeleteInvoiceModal id={id} onNavigate={navigate} />,
                  "center"
                );
              } else if (text === "Mark as Paid") {
                handleMarkAsPaid();
              }
            }}
            key={text}
            variant={variant}
            className={textClass}
            disabled={status === "paid"}
          >
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DetailsHeader;
