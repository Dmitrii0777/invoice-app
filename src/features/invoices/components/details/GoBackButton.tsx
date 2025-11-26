import { useNavigate } from "react-router-dom";
import { Arrow } from "../../../../components/ui/Arrow";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <button
        className="
          flex items-center gap-6 
          text-headingSVar font-bold text-textPrimary"
        onClick={() => navigate(-1)}
      >
        <Arrow direction="right" />
        <span>Go back</span>
      </button>
    </div>
  );
};

export default GoBackButton;
