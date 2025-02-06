import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-950 dark:text-white mb-4 
        bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white-500 dark:text-gray-100/80 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;