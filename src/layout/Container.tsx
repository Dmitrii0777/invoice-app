import type { ReactNode } from "react";

const sizes = {
  small: "max-w-[504px]",
  narrow: "max-w-2xl",
  default: "max-w-[730px]",
  wide: "max-w-6xl",
  full: "max-w-7xl",
};

type ContainerSize = keyof typeof sizes;

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

export default function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  const combined = `w-full ${sizes[size]} ${className} mx-auto px-4`;
  return <div className={combined}>{children}</div>;
}
