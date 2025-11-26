// React types
import type { ReactNode, SelectHTMLAttributes } from "react";

interface BaseProp {
  label?: string;
  error?: string;
  className?: string;
  children?: ReactNode;
}

type SelectProps = BaseProp & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  label,
  error,
  className = "",
  children,
  ...props
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <select
        {...props}
        className={`border rounded-md px-3 py-2 text-sm ${className}`}
      >
        {children}
      </select>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Select;
