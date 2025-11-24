import { StatusBadge } from "../../../../components/common";
import { Button } from "../../../../components/ui";
import { buttons } from "./details.actions";
import { useModal } from "../../../../provider/modal";

const View = () => {
  return (
    <div
      className="
        flex flex-col items-center justify-center 
        w-[300px] h-[300px] bg-white"
    >
      <h2>Hello My Freand</h2>
      <p>this is testing Modal</p>
    </div>
  );
};

const DetailsHeader = () => {
  const { openModal } = useModal();

  return (
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
          <Button
            onClick={() => text === "Delete" && openModal(<View />, "center")}
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
