import type { ButtonProps } from "../types/button.types";

function Button({
  variant,
  disabled,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const combined = `${variant} ${className} px-5 py-4 rounded-3xl text-[15px] font-bold tracking-[0.25px]`;

  return (
    <button className={combined} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
