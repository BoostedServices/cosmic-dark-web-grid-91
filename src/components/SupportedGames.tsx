
import React from 'react';

const SupportedGames = () => {
  return (
    <div className="w-full bg-black py-4 relative overflow-hidden">
      {/* Fade gradient overlays */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      
      {/* Supported Games Label - positioned to the left */}
      <div className="flex items-center justify-start ml-8 mb-4">
        <div className="relative">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ripple-pulse mr-2"></div>
          <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ripple-pulse animation-delay-300 mr-2"></div>
          <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ripple-pulse animation-delay-600 mr-2"></div>
        </div>
        <span className="text-white text-sm font-semibold tracking-wider ml-2">SUPPORTED GAMES</span>
      </div>
      
      {/* Scrolling Game Icons Container */}
      <div className="relative">
        <div className="flex animate-seamless-scroll">
          {/* First set of game icons */}
          <div className="flex items-center space-x-24 min-w-max px-24">
            <img src="/lovable-uploads/0d40d1cb-bb2f-49a4-9cb8-c99a753282c5.png" alt="Modern Warfare" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/1b6b2d10-24fa-4963-b406-e075b82cd380.png" alt="OBS" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/e44a0ba7-640c-4f51-8222-d4642221779e.png" alt="Rust" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/0513921e-bb52-4ee2-b554-2ab6fe2e78cb.png" alt="Fortnite" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Duplicate set for seamless continuous loop - no gap */}
          <div className="flex items-center space-x-24 min-w-max px-24">
            <img src="/lovable-uploads/0d40d1cb-bb2f-49a4-9cb8-c99a753282c5.png" alt="Modern Warfare" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/1b6b2d10-24fa-4963-b406-e075b82cd380.png" alt="OBS" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/e44a0ba7-640c-4f51-8222-d4642221779e.png" alt="Rust" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/0513921e-bb52-4ee2-b554-2ab6fe2e78cb.png" alt="Fortnite" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedGames;
