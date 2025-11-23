import type { ReactNode } from "react";

type Variant = "bg-primary" | "bg-danger";

type ButtonProps = {
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

function Button({
  variant,
  disabled,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const combined = `${variant} ${className} px-5 py-4 rounded-3xl font-bold `;

  return (
    <button className={combined} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
