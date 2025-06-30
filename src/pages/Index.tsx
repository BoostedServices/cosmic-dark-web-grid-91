
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  const navItems = [{
    name: 'HOME',
    href: '#'
  }, {
    name: 'PRODUCTS',
    href: '#'
  }, {
    name: 'REVIEWS',
    href: '#'
  }, {
    name: 'STATUS',
    href: '#'
  }];

  return (
    <div className="min-h-screen bg-[#0A0A0B] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `
          linear-gradient(#111111 1px, transparent 1px),
          linear-gradient(90deg, #111111 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/lovable-uploads/10510cce-014f-4ca1-9e2a-fcf5b2264345.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-12">
            {navItems.map(item => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  onClick={e => {
                    e.preventDefault();
                    setActiveTab(item.name);
                  }} 
                  className={`
                    text-[#BEB9B9] font-semibold text-sm tracking-wide
                    hover:text-white transition-colors duration-200
                    ${activeTab === item.name ? 'text-white' : ''}
                  `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex items-center min-h-[80vh] px-8">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-7xl font-bold text-gray-400 leading-tight mb-6 whitespace-nowrap">
              Welcome to <span className="text-[#0036D6]">Starz</span>
            </h1>
            
            <p className="text-gray-400 text-xl mb-10 max-w-lg">
              Starz, a longstanding cheat provider which is 
              reputable and can promise you a fun cheating 
              adventure.
            </p>

            <Button 
              className="bg-[#0036D6] hover:bg-[#0036D6]/90 text-white px-10 py-4 text-xl font-semibold rounded-lg flex items-center gap-3 transition-all duration-200"
            >
              <ShoppingCart size={24} />
              Purchase now
            </Button>

            <div className="flex items-center gap-2 mt-8">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-500 text-base font-medium">24/7 SUPPORT</span>
            </div>
          </div>

          {/* Right Content - Motherboard */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Blue Radial Blur Background */}
            <div 
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                background: `radial-gradient(circle, #0036D6 0%, transparent 70%)`,
                filter: 'blur(100px)',
                transform: 'scale(1.5)'
              }}
            />
            
            {/* Motherboard Image */}
            <div className="relative z-10 transform rotate-12">
              <img 
                src="/lovable-uploads/8c4b2d31-6035-4048-bbba-fd7a139c55aa.png" 
                alt="Gaming Motherboard" 
                className="w-[500px] h-auto object-contain"
              />
            </div>

            {/* Additional Blue Glow Effects */}
            <div 
              className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#0036D6] rounded-full opacity-20"
              style={{ filter: 'blur(40px)' }}
            />
            <div 
              className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-[#0036D6] rounded-full opacity-15"
              style={{ filter: 'blur(30px)' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
