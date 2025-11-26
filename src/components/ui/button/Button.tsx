import type { ButtonProps } from "../types/button.types";

function Button({
  variant,
  disabled,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const combined = `${variant} ${className} 
    p-4 md:px-5 md:py-4 rounded-3xl text-headingS font-bold`;

  return (
    <button className={combined} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
