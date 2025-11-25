type Direction = "down" | "up" | "right" | "left";

interface ArrowProps {
  direction?: Direction;
  open?: boolean;
  className?: string;
}

export function Arrow({
  direction = "down",
  open = false,
  className = "",
}: ArrowProps) {
  let rotateClass = "";
  switch (direction) {
    case "down":
      rotateClass = open ? "rotate-180" : "rotate-0";
      break;
    case "up":
      rotateClass = open ? "rotate-0" : "rotate-180";
      break;
    case "right":
      rotateClass = "rotate-90";
      break;
    case "left":
      rotateClass = "rotate-[-90deg]";
      break;
  }

  return (
    <svg
      className={`transition-transform duration-200 ${rotateClass} ${className}`}
      width="11"
      height="7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1l4.228 4L9.456 1"
        stroke="#7C5DFA"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}
