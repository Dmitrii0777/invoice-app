import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui";
import { Arrow } from "../../../../components/ui/Arrow";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        className="flex items-center gap-6 pl-0"
        onClick={() => navigate(-1)}
      >
        <Arrow direction="right" />
        <span>Go back</span>
      </Button>
    </div>
  );
};

export default GoBackButton;
