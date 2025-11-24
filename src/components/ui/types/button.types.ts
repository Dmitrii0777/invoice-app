import type { ReactNode } from "react";

export type Variant = "bg-primary" | "bg-danger" | "bg-accent";

export type ButtonProps = {
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};
