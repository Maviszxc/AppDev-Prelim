import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={` backdrop-blur-lg border border-purple-500/20
      rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;