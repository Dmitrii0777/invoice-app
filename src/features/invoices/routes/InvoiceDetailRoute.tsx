import { StatusBadge } from "../../../components/common";
import { Button } from "../../../components/ui";
import { Container } from "../../../layout";

type Variant = "bg-primary" | "bg-danger" | "bg-accent";

interface IButton {
  text: string;
  variant: Variant;
  textClass: string;
}

const buttons: IButton[] = [
  { text: "Edit", variant: "bg-accent", textClass: "text-text-accent" },
  { text: "Delete", variant: "bg-danger", textClass: "text-white" },
  { text: "Mark as Paid", variant: "bg-primary", textClass: "text-white" },
];

const InvoiceDetailRoute = () => {
  return (
    <>
      <Container>
        <div
          className="
            flex items-center p-6 bg-bgAlt 
            md:justify-between md:px-8 md:py-5 rounded-lg
          "
        >
          <div className="flex items-center w-full md:w-auto justify-between md:gap-3">
            <span className="text-text-gray font-medium mr-2">Status</span>
            <StatusBadge />
          </div>
          <div className="hidden md:flex items-center gap-2">
            {buttons.map(({ text, variant, textClass }) => (
              <Button variant={variant} className={textClass}>
                {text}
              </Button>
            ))}
          </div>
        </div>
      </Container>

      <div
        className="
          md:hidden fixed w-full right-0 bottom-0 p-5
          flex items-center justify-end bg-bgAlt gap-2 z-50
        "
      >
        {buttons.map(({ text, variant, textClass }) => (
          <Button variant={variant} className={textClass}>
            {text}
          </Button>
        ))}
      </div>
    </>
  );
};

export default InvoiceDetailRoute;
