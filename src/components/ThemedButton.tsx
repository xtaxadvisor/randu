// src/components/ThemedButton.tsx
import React from 'react';

interface ThemedButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({ children, variant, onClick }: ThemedButtonProps) => {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default ThemedButton;