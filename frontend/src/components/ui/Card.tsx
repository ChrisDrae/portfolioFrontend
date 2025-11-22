import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: 'default' | 'subtle' | 'glass';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  variant = 'default',
}) => {
  const baseStyles = 'rounded-sm transition-all duration-300';

  const variantStyles = {
    default:
      'bg-white dark:bg-dark-surface border border-neutral-100 dark:border-neutral-800 p-6 shadow-luxury dark:shadow-luxury-dark',
    subtle:
      'bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-6',
    glass:
      'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-white/50 dark:border-neutral-800/50 p-6 shadow-luxury',
  };

  const hoverStyles = hoverable
    ? 'hover:shadow-lg dark:hover:shadow-xl hover:border-neutral-200 dark:hover:border-neutral-700'
    : '';

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
