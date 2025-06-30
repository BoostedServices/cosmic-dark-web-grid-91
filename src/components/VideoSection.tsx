
import React from 'react';
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <div className="w-full bg-[#0A0A0B] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-[#0036D6] text-sm font-semibold tracking-wider">Watch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Software in Action
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            See the power of our Fortnite Public software live in action.
          </p>
          <Button className="bg-[#0036D6] hover:bg-[#0036D6]/90 text-white px-8 py-3 text-lg font-semibold rounded-lg">
            Get It Now
          </Button>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            {/* YouTube Embed */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/0EDCrFDM4G8?start=56&autoplay=1&mute=1&loop=1&playlist=0EDCrFDM4G8&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Fortnite Software Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            
            {/* Dark Overlay with Blur */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
