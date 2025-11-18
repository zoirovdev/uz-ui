import React from "react";
import "./Radio.css";



export interface RadioProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}



export const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  onChange
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(true); // radio should always become true
    }
  };

  return (
    <div className="uz-radio-card">
      <input 
        type="radio" 
        checked={checked}
        onChange={handleChange}
      />
      {label && <label>{label}</label>}
    </div>
  );
};
