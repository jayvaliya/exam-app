import React from 'react';

interface FireworkButtonProps {
  onClick: () => void;
  label: string;
}

const FireworkButton: React.FC<FireworkButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center p-3 overflow-hidden text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      <span className="absolute w-56 h-56 bg-yellow-300 rounded-full opacity-50 animate-firework"></span>
      <span className="absolute w-56 h-56 bg-red-300 rounded-full opacity-50 animate-firework delay-200"></span>
      <span className="absolute w-56 h-56 bg-green-300 rounded-full opacity-50 animate-firework delay-400"></span>
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default FireworkButton;
