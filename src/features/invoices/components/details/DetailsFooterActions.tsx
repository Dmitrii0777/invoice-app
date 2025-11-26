// External libraries
import { useNavigate, useParams } from "react-router-dom";

// Local components
import { Button } from "@/components/ui";

// Local actions / utils
import { buttons } from "./details.actions";

// Context / Providers
import { useModal, DeleteInvoiceModal } from "@/provider/modal";

const DetailsFooterActions = () => {
  const { id } = useParams<{ id: string }>();
  const { openModal } = useModal();
  const navigate = useNavigate();

  if (!id) return;

  return (
    <div
      className="
          md:hidden fixed w-full right-0 bottom-0 p-5
          flex items-center justify-end bg-bgAlt gap-2 z-50
        "
    >
      {buttons.map(({ text, variant, textClass }) => (
        <Button
          key={text}
          variant={variant}
          className={textClass}
          onClick={() => {
            if (text === "Delete") {
              openModal(
                <DeleteInvoiceModal id={id} onNavigate={navigate} />,
                "center"
              );
            }
          }}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default DetailsFooterActions;
