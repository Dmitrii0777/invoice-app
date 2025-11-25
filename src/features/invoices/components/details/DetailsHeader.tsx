import { StatusBadge } from "../../../../components/common";
import { Button } from "../../../../components/ui";
import { buttons } from "./details.actions";
import { useModal } from "../../../../provider/modal";
import { DeleteInvoiceModal } from "../../../../provider/modal";
import type { InvoiceStatus } from "../../types/invoice.types";

interface DetailProps {
  status: InvoiceStatus;
}

const DetailsHeader = ({ status }: DetailProps) => {
  const { openModal } = useModal();

  return (
    <div
      className="
            flex items-center p-6 bg-bgAlt 
            md:justify-between md:px-8 md:py-5 rounded-lg
          "
    >
      <div className="flex items-center w-full md:w-auto justify-between md:gap-3">
        <span className="text-textGrayBlue font-medium mr-2">Status</span>
        <StatusBadge status={status} />
      </div>
      <div className="hidden md:flex items-center gap-2">
        {buttons.map(({ text, variant, textClass }) => (
          <Button
            onClick={() =>
              text === "Delete" && openModal(<DeleteInvoiceModal />, "center")
            }
            key={text}
            variant={variant}
            className={textClass}
          >
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DetailsHeader;
