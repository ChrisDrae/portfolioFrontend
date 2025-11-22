import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  ...props
}) => {
  const baseStyles = 'font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 focus:ring-offset-2 dark:focus:ring-offset-neutral-950 rounded-sm';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5',
    lg: 'px-8 py-3.5 text-lg gap-3',
  };

  const variantStyles = {
    primary: 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-luxury dark:shadow-luxury-dark',
    secondary: 'border-2 border-neutral-950 text-neutral-950 dark:border-white dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-colors',
    outline: 'border border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-neutral-50 hover:border-neutral-950 dark:hover:border-white hover:shadow-luxury transition-all',
    text: 'text-neutral-950 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 underline underline-offset-4 hover:underline-offset-2 transition-all',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} flex items-center justify-center`;

  return (
    <button className={combinedClass} {...props}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
