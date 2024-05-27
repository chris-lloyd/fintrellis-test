import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  className ? : string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className
}) => {
  let baseStyles = 'px-4 py-2 font-semibold rounded-md focus:outline-none ';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-blue-500 text-white hover:bg-blue-700';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-500 text-white hover:bg-gray-700';
      break;
    case 'danger':
      variantStyles = 'bg-red-500 text-white hover:bg-red-700';
      break;
    default:
      variantStyles = 'bg-blue-500 text-white hover:bg-blue-700';
  }

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${disabled ? disabledStyles : ''} ${className}`}
      disabled={disabled}

    >
      {children}
    </button>
  );
};

export default Button;