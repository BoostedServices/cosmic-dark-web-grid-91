
import React from 'react';
const Footer = () => {
  return <footer className="bg-[#0A0A0B] border-t border-[#333333] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/Media/39eadef3-54aa-4e29-9732-facbf754ab58.png" alt="Starz Logo" className="h-8 w-8" />
              <span className="text-white font-semibold">Starz Cheats</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Starz Cheats. All rights reserved. <span className="text-gray-600 opacity-50">| Made by #boostreturns</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="text-white font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Socials</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="text-right">
            <div className="text-gray-400 text-sm">
              
              
            </div>
          </div>
        </div>

        <div className="mt-8">
          
        </div>
      </div>
    </footer>;
};
export default Footer;
