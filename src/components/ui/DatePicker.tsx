// React types
import type { InputHTMLAttributes } from "react";

interface BaseProp {
  label?: string;
  error?: string;
  className?: string;
}

type DatePickerProps = BaseProp & InputHTMLAttributes<HTMLInputElement>;

const DatePicker = ({
  label,
  error,
  className = "",
  ...props
}: DatePickerProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <input
        className={`
          bg-bgAlt text-textPrimary border border-border rounded-lg
          px-4 py-3 cursor-pointer outline-none
          focus:border-accent transition
          ${error ? "border-btnDanger" : ""} 
          ${className}`}
        {...props}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default DatePicker;
