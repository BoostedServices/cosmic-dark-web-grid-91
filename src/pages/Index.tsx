import { useState } from 'react';
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
  return <div className="min-h-screen bg-[#0A0A0B] relative">
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
            {navItems.map(item => <li key={item.name}>
                <a href={item.href} onClick={e => {
              e.preventDefault();
              setActiveTab(item.name);
            }} className={`
                    text-[#BEB9B9] font-semibold text-sm tracking-wide
                    hover:text-white transition-colors duration-200
                    ${activeTab === item.name ? 'text-white' : ''}
                  `}>
                  {item.name}
                </a>
              </li>)}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          
          
        </div>
      </main>
    </div>;
};
export default Index;