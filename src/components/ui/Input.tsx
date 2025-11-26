// React types
import type { InputHTMLAttributes } from "react";

interface BaseProp {
  label?: string;
  error?: string;
  className?: string;
}

type InputProp = BaseProp & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, error, className = "", ...props }: InputProp) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <input
        className={`
          px-4 py-3 rounded border border-gray-200
          focus:border-purple-500 focus:outline-none
          ${error ? "border-red-500" : ""}
          ${className}
          
        `}
        {...props}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
