
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState('day');
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    "/lovable-uploads/5d38dacc-fd94-4532-ba05-b2d595051eb5.png",
    "/lovable-uploads/8c4b2d31-6035-4048-bbba-fd7a139c55aa.png"
  ];

  const variants = {
    day: { name: 'Day Key', duration: '24 Hour Key', price: 7.99 },
    week: { name: 'Week Key', duration: '168 Hour Key', price: 14.99 },
    month: { name: 'Month Key', duration: '720 Hour Key', price: 24.99 }
  };

  const relatedProducts = [
    {
      name: 'Temp Spoofer',
      price: 26.86,
      image: '/lovable-uploads/b8eae0bb-5ce7-4814-ac52-559e4330f4a6.png'
    }
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Breadcrumb Navigation */}
      <div className="px-4 md:px-8 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <button 
              onClick={() => navigate('/')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button 
              onClick={() => navigate('/#products-section')}
              className="hover:text-white transition-colors"
            >
              Product
            </button>
            <span>/</span>
            <span className="text-white">Fortnite Private</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Images */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div className="relative group">
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
                <CardContent className="p-0 relative">
                  <img 
                    src={productImages[currentImageIndex]} 
                    alt="Fortnite Private Cheat"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  
                  {/* Image Navigation */}
                  {productImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-black/80 rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-black/80 rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Thumbnail Images */}
            {productImages.length > 1 && (
              <div className="flex gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      currentImageIndex === index ? 'border-[#0036D6]' : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Product view ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Related Products */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-300">People have also bought:</h3>
              {relatedProducts.map((product, index) => (
                <Card key={index} className="bg-gray-900/30 border-gray-800 hover:border-[#0036D6]/30 transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{product.name}</h4>
                        <p className="text-gray-400 text-sm">Starting at <span className="text-[#0036D6] font-bold">${product.price}</span></p>
                      </div>
                      <Button size="sm" className="bg-[#0036D6] hover:bg-[#0036D6]/90">
                        View More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="flex gap-4">
              <Card className="bg-gray-900/30 border-gray-800 flex-1">
                <CardContent className="p-4 text-center">
                  <div className="text-sm text-gray-400 mb-1">Private Driver</div>
                  <div className="text-[#0036D6] font-bold">${variants[selectedVariant].price.toFixed(2)}</div>
                  <Button size="sm" className="mt-2 bg-[#0036D6] hover:bg-[#0036D6]/90 w-full">
                    + Add
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/30 border-gray-800 flex-1">
                <CardContent className="p-4 text-center">
                  <div className="text-sm text-gray-400 mb-1">Anydesk Support</div>
                  <div className="text-[#0036D6] font-bold">$2.50</div>
                  <Button size="sm" className="mt-2 bg-[#0036D6] hover:bg-[#0036D6]/90 w-full">
                    + Add
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Product Title and Price */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Fortnite Private
              </h1>
              <div className="text-4xl font-bold text-[#0036D6]">
                ${variants[selectedVariant].price.toFixed(2)}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Quantity:</span>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 border-gray-700 hover:border-[#0036D6] hover:bg-[#0036D6]/10"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 border-gray-700 hover:border-[#0036D6] hover:bg-[#0036D6]/10"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Variants Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Variants:</h3>
              <div className="space-y-3">
                {Object.entries(variants).map(([key, variant]) => (
                  <Card 
                    key={key}
                    className={`cursor-pointer transition-all border-2 ${
                      selectedVariant === key 
                        ? 'bg-[#0036D6]/10 border-[#0036D6]' 
                        : 'bg-gray-900/30 border-gray-800 hover:border-gray-700'
                    }`}
                    onClick={() => setSelectedVariant(key)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">{variant.name}</div>
                          <div className="text-sm text-gray-400">{variant.duration}</div>
                        </div>
                        <div className="text-[#0036D6] font-bold text-lg">
                          ${variant.price.toFixed(2)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Coupon Code */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-300">Coupon:</h3>
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0036D6] transition-colors"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-[#0036D6] hover:bg-[#0036D6]/90 text-white py-4 text-lg font-semibold rounded-lg transition-all hover:scale-[1.02]">
                ⚡ Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-700 hover:border-[#0036D6] hover:bg-[#0036D6]/10 py-4 text-lg transition-all"
              >
                🛒 Add To Cart
              </Button>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center">
              <div className="bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 text-green-400 text-sm font-semibold">
                ✓ Undetected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
