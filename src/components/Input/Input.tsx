import React from "react";
import "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className={`uz-input-wrapper`}>
      {label && <label className="uz-input-label">{label}</label>}

      <input
        className={`uz-input ${error ? "error" : ""} ${className || ""}`}
        {...props}
      />

      {error && <p className="uz-input-error">{error}</p>}
    </div>
  );
};

export default Input;
