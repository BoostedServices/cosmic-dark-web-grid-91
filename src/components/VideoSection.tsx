
import React from 'react';
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#fff" fillRule="evenodd" d="M1.289 2.763a.75.75 0 0 1 .948-.475l.265.089l.04.013c.626.209 1.155.385 1.572.579c.442.206.826.46 1.117.865c.291.403.412.848.467 1.333c.052.456.052 1.014.052 1.674V9.5c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h7a.75.75 0 0 1 0 1.5h-7.055c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V6.883c0-.713 0-1.185-.042-1.546c-.04-.342-.107-.506-.194-.626c-.086-.12-.221-.237-.533-.382c-.33-.153-.777-.304-1.453-.53l-.265-.087a.75.75 0 0 1-.474-.95" clipRule="evenodd"/>
      <path fill="#fff" d="M5.745 6q.006.39.005.841V9.5c0 1.435.002 2.437.103 3.192q.023.165.05.308h10.12c.959 0 1.438 0 1.814-.248s.565-.688.942-1.57l.43-1c.809-1.89 1.213-2.834.769-3.508S18.506 6 16.45 6z" opacity="0.5"/>
      <path fill="#fff" d="M7.25 9A.75.75 0 0 1 8 8.25h3a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m.25 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M18 19.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"/>
    </svg>
  );

  return (
    <div className="w-full bg-[#0A0A0B]">
      {/* Video Container - Full Width Edge to Edge */}
      <div className="relative w-full">
        <div className="relative h-[50vh] w-full overflow-hidden">
          {/* YouTube Embed with blur - Full Width */}
          <iframe 
            className="absolute inset-0 w-full h-full object-cover filter blur-md"
            src="https://www.youtube.com/embed/0EDCrFDM4G8?start=56&autoplay=1&mute=1&loop=1&playlist=0EDCrFDM4G8&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="Fortnite Software Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          
          {/* Dark Overlay with Blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
          
          {/* Centered Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="flex items-center justify-center mb-4">
                <span className="text-[#0036D6] text-sm font-semibold tracking-wider">Watch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Software in Action
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                See the power of our Fortnite Public software live in action.
              </p>
              <Button className="bg-gradient-to-r from-[#0036D6] to-[#0028A3] hover:from-[#0036D6]/90 hover:to-[#0028A3]/90 text-white px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-3 mx-auto">
                <ShoppingCartIcon />
                Get It Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
