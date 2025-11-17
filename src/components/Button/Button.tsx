import React from "react"
import './Button.css';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'default' | 'green' | 'red' | 'yellow' | 'gray';
  loading?: boolean; 
}


export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  color = 'default',
  loading = false,
  children,
  ...props
}) => {
  return (
    <button 
      className={`btn ${variant} ${size} ${color}`} 
      disabled={loading || props.disabled}
      { ...props }
    >
      {loading ? "Loading..." : children}	
    </button>
  );
};



