import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-black via-purple-900/20 to-black' 
        : 'bg-gradient-to-b from-violet-200 via-purple-50 to-violet-200'
      } pt-32 pb-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className=" max-w-7xl mx-auto ">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;