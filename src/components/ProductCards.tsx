
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      name: "Fortnite Private",
      price: "$11.00+",
      image: "/lovable-uploads/5d38dacc-fd94-4532-ba05-b2d595051eb5.png",
      alt: "Fortnite Private Cheat"
    },
    {
      id: 2,
      name: "Temp Spoofer",
      price: "$26.86+",
      image: "/lovable-uploads/b8eae0bb-5ce7-4814-ac52-559e4330f4a6.png",
      alt: "Temp Spoofer Software"
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0B] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <span className="text-[#0036D6] text-sm font-semibold tracking-wider">Browse</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Top Selling Products
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Discover all of our software and find the perfect one for you.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-gray-900/50 border-gray-800/50 hover:border-[#0036D6]/50 transition-all duration-300 overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Product Info */}
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
