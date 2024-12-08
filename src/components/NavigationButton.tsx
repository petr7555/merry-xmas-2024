import React from 'react';
import { Navigation2 } from 'lucide-react';

const NavigationButton = () => {
  const handleNavigation = () => {
    const origin = encodeURIComponent("23 Sunnybank Rd, Aberdeen AB24 3NG, UK");
    const destination = encodeURIComponent("AM Traditional Thai Massage, 637 George St, Aberdeen AB25 3XQ, United Kingdom");
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=walking`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleNavigation}
      className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg transition-all duration-200 animate-fade-in-delayed"
    >
      <Navigation2 className="w-5 h-5" />
      How to get there?
    </button>
  );
};

export default NavigationButton;