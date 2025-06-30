
import React from 'react';

const SupportedGames = () => {
  return (
    <div className="w-full bg-black py-4 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div className="flex items-center justify-start ml-8 mb-4">
        <div className="relative flex items-center mr-3">
          <div className="w-2 h-2 bg-green-500 rounded-full z-10 relative animate-pulse-core"></div>
          <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-pulse-ring-1"></div>
          <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-pulse-ring-2"></div>
          <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-pulse-ring-3"></div>
        </div>
        <span className="text-white text-sm font-semibold tracking-wider">SUPPORTED GAMES</span>
      </div>
      
      <div className="relative">
        <div className="flex animate-infinite-scroll-fast">
          {/* Multiple sets of game icons for seamless loop */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-32 min-w-max px-32 flex-shrink-0">
              <img src="/lovable-uploads/0d40d1cb-bb2f-49a4-9cb8-c99a753282c5.png" alt="Modern Warfare" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/1b6b2d10-24fa-4963-b406-e075b82cd380.png" alt="OBS" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/e44a0ba7-640c-4f51-8222-d4642221779e.png" alt="Rust" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/0513921e-bb52-4ee2-b554-2ab6fe2e78cb.png" alt="Fortnite" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportedGames;
