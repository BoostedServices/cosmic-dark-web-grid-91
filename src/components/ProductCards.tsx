
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const ProductCards = () => {
  const navigate = useNavigate();
  
  const BrowseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#0036D6" d="M10.023 2a1.75 1.75 0 0 0 0 3.5h4a1.75 1.75 0 1 0 0-3.5zM3.887 16.205C3.029 12.773 2.6 11.058 3.5 9.904S6.17 8.75 9.708 8.75h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91" opacity="0.5"/><path fill="#0036D6" d="M15.604 4.502a1.74 1.74 0 0 0 .002-1.501c.683.005 1.216.036 1.691.222a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.777 1.999l.046.17l.513 2.963c-.409-.282-.936-.45-1.618-.55l-.36-2.087c-.285-1.04-.388-1.367-.562-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.485-.11-1.147-.118M8.441 3.001a1.74 1.74 0 0 0 .002 1.501c-.662.007-.927.032-1.147.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.561-.561 1.6l-.361 2.089c-.682.1-1.209.267-1.618.548l.513-2.962l.046-.17c.237-.872.41-1.505.777-2A3.25 3.25 0 0 1 6.75 3.224c.475-.186 1.008-.217 1.691-.222"/></svg>;

  const products = [
    {
      id: 1,
      name: "Fortnite Private",
      price: "$11.00+",
      image: "/Media/5d38dacc-fd94-4532-ba05-b2d595051eb5.png",
      alt: "Fortnite Private Cheat",
      path: "/product"
    },
    {
      id: 2,
      name: "Temp Spoofer",
      price: "$26.86+",
      image: "/Media/b8eae0bb-5ce7-4814-ac52-559e4330f4a6.png",
      alt: "Temp Spoofer Software",
      path: "/temp-spoofer"
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0B] py-16 px-4 md:px-8" id="products-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center mb-4 gap-2">
            <BrowseIcon />
            <span className="text-[#0036D6] text-sm font-semibold tracking-wider">Browse</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Top Selling Products
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Discover all of our software and find the perfect one for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="bg-gray-800/50 border-gray-700/50 hover:border-[#0036D6]/50 transition-all duration-300 overflow-hidden group cursor-pointer rounded-[30px]"
              onClick={() => navigate(product.path)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-[30px]">
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#0036D6] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#0036D6] text-lg font-bold">
                    {product.price}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
