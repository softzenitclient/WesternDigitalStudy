import React from 'react';

export default function Logo({ className = "h-12", showText = true }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="https://i.postimg.cc/d37ndZRq/Western-Study-Logo.jpg"
        alt="Western Study Logo"
        referrerPolicy="no-referrer"
        className="h-full w-auto object-contain rounded-lg"
      />
    </div>
  );
}

