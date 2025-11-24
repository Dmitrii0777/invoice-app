import { Button } from "../../../../components/ui";
import { buttons } from "./details.actions";

const DetailsFooterActions = () => {
  return (
    <div
      className="
          md:hidden fixed w-full right-0 bottom-0 p-5
          flex items-center justify-end bg-bgAlt gap-2 z-50
        "
    >
      {buttons.map(({ text, variant, textClass }) => (
        <Button key={text} variant={variant} className={textClass}>
          {text}
        </Button>
      ))}
    </div>
  );
};

export default DetailsFooterActions;
