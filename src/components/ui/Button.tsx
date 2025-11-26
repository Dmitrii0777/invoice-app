// React types
import type { ReactNode, ButtonHTMLAttributes } from "react";

export type Variant = "bg-bgPrimary" | "bg-btnDanger" | "bg-btnAccentBg";

export type BaseProp = {
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

type ButtonProps = BaseProp & ButtonHTMLAttributes<HTMLButtonElement>;

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
