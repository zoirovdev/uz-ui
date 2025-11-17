import React from 'react';
import './Checkbox.css';


export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: 'sm'|'md'|'lg';
}



export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  size = 'md'
}) => {
  const handleChange = () => {
    if(!disabled) onChange(!checked);
  }

  return (
    <label className={`uz-checkbox uz-checkbox-${size} ${disabled ? "disabled" : ""}`}>
      <input 
	type="checkbox"
	checked={checked}
	onChange={handleChange}
	disabled={disabled}/>
      <span className="checkmark"/>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
}

