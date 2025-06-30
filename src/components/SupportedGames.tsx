
import React from 'react';

const SupportedGames = () => {
  return (
    <div className="w-full bg-black py-4 relative overflow-hidden">
      {/* Fade gradient overlays */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      
      {/* Supported Games Label */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
        <span className="text-white text-sm font-semibold tracking-wider">SUPPORTED GAMES</span>
      </div>
      
      {/* Scrolling Game Icons Container */}
      <div className="relative">
        <div className="flex animate-scroll-left">
          {/* First set of game icons */}
          <div className="flex items-center space-x-16 min-w-max px-8">
            {/* Valorant */}
            <img 
              src="/lovable-uploads/6bf9609e-ee2c-4b55-a7c5-d5a6d10a8c35.png" 
              alt="Valorant" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            {/* Modern Warfare */}
            <img 
              src="/lovable-uploads/0d40d1cb-bb2f-49a4-9cb8-c99a753282c5.png" 
              alt="Modern Warfare" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            {/* OBS */}
            <img 
              src="/lovable-uploads/1b6b2d10-24fa-4963-b406-e075b82cd380.png" 
              alt="OBS" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            {/* Rust */}
            <img 
              src="/lovable-uploads/e44a0ba7-640c-4f51-8222-d4642221779e.png" 
              alt="Rust" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            {/* Fortnite */}
            <img 
              src="/lovable-uploads/0513921e-bb52-4ee2-b554-2ab6fe2e78cb.png" 
              alt="Fortnite" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 min-w-max px-8">
            {/* Valorant */}
            <img 
              src="/lovable-uploads/6bf9609e-ee2c-4b55-a7c5-d5a6d10a8c35.png" 
              alt="Valorant" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            {/* Modern Warfare */}
            <img 
              src="/lovable-uploads/0d40d1cb-bb2f-49a4-9cb8-c99a753282c5.png" 
              alt="Modern Warfare" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            {/* OBS */}
            <img 
              src="/lovable-uploads/1b6b2d10-24fa-4963-b406-e075b82cd380.png" 
              alt="OBS" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            {/* Rust */}
            <img 
              src="/lovable-uploads/e44a0ba7-640c-4f51-8222-d4642221779e.png" 
              alt="Rust" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            {/* Fortnite */}
            <img 
              src="/lovable-uploads/0513921e-bb52-4ee2-b554-2ab6fe2e78cb.png" 
              alt="Fortnite" 
              className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedGames;
