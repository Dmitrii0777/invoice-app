import type { ReactNode } from "react";

export type Variant = "bg-btnPrimary" | "bg-btnDanger" | "bg-btnAccentBg";

export type ButtonProps = {
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};
