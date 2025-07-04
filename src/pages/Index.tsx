
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import SupportedGames from '@/components/SupportedGames';
import ProductCards from '@/components/ProductCards';
import ReviewsSection from '@/components/ReviewsSection';
import VideoSection from '@/components/VideoSection';
import MetricsSection from '@/components/MetricsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (itemName: string, href: string) => {
    setActiveTab(itemName);
    
    if (itemName === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (itemName === 'PRODUCTS') {
      scrollToSection('products-section');
    } else if (itemName === 'REVIEWS') {
      scrollToSection('reviews-section');
    }
  };

  const navItems = [{
    name: 'HOME',
    href: '#'
  }, {
    name: 'PRODUCTS',
    href: '#products'
  }, {
    name: 'REVIEWS',
    href: '#reviews'
  }];

  // Custom SVG Icons
  const PurchaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#fff" d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114s.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076z" opacity="0.5" /><path fill="#fff" d="M8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" /><path fill="#fff" fill-rule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l3 6a.75.75 0 1 1-1.342.67l-3-6a.75.75 0 0 1 .336-1.006m-5.33.001a.75.75 0 0 0-1.006.335l-3 6a.75.75 0 1 0 1.342.67l3-6a.75.75 0 0 0-.336-1.006" clip-rule="evenodd" /></svg>;
  const BanProtectionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path fill="#0036D6" d="M7.604 4.604C9.34 2.868 10.208 2 11.286 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419c1.735 1.735 2.603 2.603 2.603 3.682s-.868 1.946-2.604 3.682s-2.604 2.604-3.682 2.604c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.869 10.233 5 9.365 5 8.286s.868-1.946 2.604-3.682" />
      <path fill="#0036D6" d="m8.345 12.71l-5.52 5.518c-.342.343-.513.514-.616.692a1.56 1.56 0 0 0 0 1.562c.103.178.274.35.617.692s.513.514.692.617a1.56 1.56 0 0 0 1.562 0c.178-.103.35-.275.692-.617l5.518-5.519zm10.31-4.42l.373-.372c.342-.343.514-.514.617-.692a1.56 1.56 0 0 0 0-1.562c-.103-.179-.275-.35-.617-.692c-.342-.343-.514-.514-.692-.617a1.56 1.56 0 0 0-1.562 0c-.178.103-.35.274-.692.617l-.373.373z" opacity="0.5" />
    </svg>;
  const AlwaysUndetectedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path fill="#002db3" d="M3 11.991c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473V8l-9 3z" />
      <path fill="#002db3" d="M14.101 21.527C16.761 20.365 21 17.63 21 11.991V11l-9-3v14c1.02 0 1.38-.158 2.101-.473M8.838 2.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11l9-3V2c-.811 0-1.595.268-3.162.805" opacity="0.5" />
      <path fill="#002db3" d="m15.735 3l-.573-.195C13.595 2.268 12.812 2 12 2v6l9 3v-.583c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081" />
    </svg>;
  const SupportIcon = () => <svg width="20" height="15" viewBox="0 0 438 334" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M370.459 28.0404C342.751 15.1237 312.751 5.7487 281.501 0.332031C280.951 0.339858 280.427 0.564506 280.042 0.957036C276.292 7.83204 271.917 16.7904 269.001 23.6654C235.855 18.6685 202.147 18.6685 169.001 23.6654C166.084 16.582 161.709 7.83204 157.751 0.957036C157.542 0.540369 156.917 0.332031 156.292 0.332031C125.042 5.7487 95.2508 15.1237 67.3341 28.0404C67.1258 28.0404 66.9175 28.2487 66.7092 28.457C10.0425 113.249 -5.58252 195.749 2.12581 277.415C2.12581 277.832 2.33415 278.249 2.75081 278.457C40.2508 305.957 76.2925 322.624 111.917 333.665C112.542 333.874 113.167 333.665 113.376 333.249C121.709 321.79 129.209 309.707 135.667 296.999C136.084 296.165 135.667 295.332 134.834 295.124C122.959 290.54 111.709 285.124 100.667 278.874C99.8342 278.457 99.8342 277.207 100.459 276.582C102.751 274.915 105.042 273.04 107.334 271.374C107.751 270.957 108.376 270.957 108.792 271.165C180.459 303.874 257.751 303.874 328.584 271.165C329.001 270.957 329.626 270.957 330.042 271.374C332.334 273.249 334.626 274.915 336.917 276.79C337.751 277.415 337.751 278.665 336.709 279.082C325.876 285.54 314.417 290.749 302.542 295.332C301.709 295.54 301.501 296.582 301.709 297.207C308.376 309.915 315.876 321.999 324.001 333.457C324.626 333.665 325.251 333.874 325.876 333.665C361.709 322.624 397.751 305.957 435.251 278.457C435.667 278.249 435.876 277.832 435.876 277.415C445.042 183.04 420.667 101.165 371.292 28.457C371.084 28.2487 370.876 28.0404 370.459 28.0404ZM146.501 227.624C125.042 227.624 107.126 207.832 107.126 183.457C107.126 159.082 124.626 139.29 146.501 139.29C168.584 139.29 186.084 159.29 185.876 183.457C185.876 207.832 168.376 227.624 146.501 227.624ZM291.709 227.624C270.251 227.624 252.334 207.832 252.334 183.457C252.334 159.082 269.834 139.29 291.709 139.29C313.792 139.29 331.292 159.29 331.084 183.457C331.084 207.832 313.792 227.624 291.709 227.624Z" fill="#10b981" />
      <ellipse cx="146" cy="183.5" rx="40" ry="46.5" fill="#10b981" fillOpacity="0.3" />
      <ellipse cx="291" cy="183.5" rx="40" ry="46.5" fill="#10b981" fillOpacity="0.3" />
    </svg>;
  
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      {/* Hero Section with Grid Background */}
      <div className="relative overflow-hidden">
        {/* Grid Background - only for hero section */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `
            linear-gradient(#333333 1px, transparent 1px),
            linear-gradient(90deg, #333333 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
        
        {/* Header */}
        <header className={`relative z-10 flex items-center justify-between px-4 md:px-8 py-6 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          {/* Logo - moved a bit more to the right */}
          <div className="flex items-center order-1 ml-8 md:ml-12">
            <img src="/Media/10510cce-014f-4ca1-9e2a-fcf5b2264345.png" alt="Logo" className="h-8 md:h-12 w-auto hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Navigation - moved a bit more to the left */}
          <nav className="order-2 mr-8 md:mr-12">
            <ul className="flex items-center space-x-4 md:space-x-12">
              {navItems.map((item, index) => <li key={item.name} className={`transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                  <a href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.name, item.href);
              }} className={`
                      text-[#BEB9B9] font-semibold text-xs md:text-sm tracking-wide
                      hover:text-white transition-colors duration-200 hover:scale-105 cursor-pointer
                      ${activeTab === item.name ? 'text-white' : ''}
                    `}>
                    {item.name}
                  </a>
                </li>)}
            </ul>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex items-center min-h-[80vh] px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 lg:gap-0">
            {/* Left Content */}
            <div className={`flex-1 max-w-2xl text-center lg:text-left transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`} style={{ transitionDelay: '400ms' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-400 leading-tight mb-6">
                Welcome to <span className="text-[#0036D6] hover:text-[#0028A3] transition-colors duration-300">Starz</span>
              </h1>
              
              <p className={`text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '600ms' }}>
                Starz, a longstanding cheat provider which is 
                reputable and can promise you a fun cheating 
                adventure.
              </p>

              <div className={`transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '800ms' }}>
                <Button className="bg-[#0036D6] hover:bg-[#0036D6]/90 text-white px-6 md:px-10 text-lg md:text-xl font-semibold rounded-lg flex items-center gap-3 transition-all duration-300 py-[20px] md:py-[28px] mx-auto lg:mx-0 hover:scale-105 hover:shadow-lg hover:shadow-[#0036D6]/25">
                  <PurchaseIcon />
                  Purchase now
                </Button>
              </div>
            </div>

            {/* Right Content - Motherboard - moved further right */}
            <div className={`flex-1 relative flex justify-center lg:justify-end items-center lg:pl-16 transition-all duration-1200 ease-out ${
              isLoaded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
            }`} style={{ transitionDelay: '500ms' }}>
              {/* Blue Radial Blur Background */}
              <div className="absolute inset-0 rounded-full opacity-30 animate-pulse" style={{
              background: `radial-gradient(circle, #0036D6 0%, transparent 70%)`,
              filter: 'blur(100px)',
              transform: 'scale(1.5)'
            }} />
              
              {/* Motherboard Image with Feature Labels */}
              <div className="relative z-10 lg:translate-x-8 hover:scale-105 transition-transform duration-500">
                <img src="/Media/8c4b2d31-6035-4048-bbba-fd7a139c55aa.png" alt="Gaming Motherboard" className="w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain" />
                
                {/* Ban Protection Label */}
                <div className={`absolute top-20 md:top-32 left-8 md:left-16 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 md:py-2 border border-[#0036D6]/30 transform rotate-[-15deg] transition-all duration-1000 ease-out hover:scale-110 hover:rotate-[-10deg] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`} style={{ transitionDelay: '1000ms' }}>
                  <BanProtectionIcon />
                  <span className="text-[#0036D6] text-xs md:text-sm font-semibold whitespace-nowrap">Ban Protection</span>
                </div>

                {/* Always Undetected Label */}
                <div className={`absolute top-36 md:top-56 right-4 md:right-8 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 md:py-2 border border-[#002db3]/30 transform rotate-[15deg] transition-all duration-1000 ease-out hover:scale-110 hover:rotate-[10deg] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`} style={{ transitionDelay: '1200ms' }}>
                  <AlwaysUndetectedIcon />
                  <span className="text-[#002db3] text-xs md:text-sm font-semibold whitespace-nowrap">Always Undetected</span>
                </div>

                {/* 24/7 Support Label */}
                <div className={`absolute bottom-12 md:bottom-20 left-6 md:left-12 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 md:py-2 border border-green-500/30 transform rotate-[-15deg] transition-all duration-1000 ease-out hover:scale-110 hover:rotate-[-10deg] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '1400ms' }}>
                  <SupportIcon />
                  <span className="text-green-500 text-xs md:text-sm font-semibold whitespace-nowrap">24/7 Support</span>
                </div>
              </div>

              {/* Additional Blue Glow Effects */}
              <div className="absolute top-1/4 right-1/4 w-16 md:w-32 h-16 md:h-32 bg-[#0036D6] rounded-full opacity-20 animate-pulse" style={{
              filter: 'blur(40px)'
            }} />
              <div className="absolute bottom-1/3 left-1/4 w-12 md:w-24 h-12 md:h-24 bg-[#0036D6] rounded-full opacity-15 animate-pulse" style={{
              filter: 'blur(30px)',
              animationDelay: '1s'
            }} />
            </div>
          </div>
        </main>
      </div>

      {/* Animated Section Wrapper */}
      <div className={`transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`} style={{ transitionDelay: '1600ms' }}>
        {/* Supported Games Section */}
        <SupportedGames />

        {/* Product Cards Section */}
        <div id="products-section">
          <ProductCards />
        </div>

        {/* Video Section - moved back underneath products */}
        <VideoSection />

        {/* Metrics Section */}
        <MetricsSection />

        {/* Reviews Section */}
        <div id="reviews-section">
          <ReviewsSection />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
