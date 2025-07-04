import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const TempSpoofer = () => {
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState('3day');
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = ["/Media/b8eae0bb-5ce7-4814-ac52-559e4330f4a6.png"];

  const variants = {
    '3day': {
      name: '3 Day Key',
      duration: '72 Hour Key',
      price: 6.99
    },
    week: {
      name: 'Week Key',
      duration: '168 Hour Key',
      price: 14.99
    },
    month: {
      name: 'Month Key',
      duration: '720 Hour Key',
      price: 34.99
    },
    lifetime: {
      name: 'Lifetime Key',
      duration: 'Permanent Access',
      price: 49.99
    }
  };

  const relatedProducts = [{
    name: 'Fortnite Private',
    price: 7.99,
    image: '/Media/5d38dacc-fd94-4532-ba05-b2d595051eb5.png'
  }];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + productImages.length) % productImages.length);
  };

  const handleCheckout = () => {
    navigate('/#products-section');
  };

  const handleAddToCart = () => {
    navigate('/#products-section');
  };

  const handleViewFortnitePrivate = () => {
    navigate('/product');
  };

  // SVG Icons
  const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#10b981" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity="0.5" />
      <path fill="#10b981" d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" />
    </svg>;
  const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#000" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" />
      <path fill="#000" d="M2.084 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362q.035.333.044.738H17.13c1.685 0 3.202 0 3.646.577s.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.472 2.293-1.024 2.742c-.552.45-1.332.45-2.893.45h-5.303c-2.79 0-4.184 0-5.05-.914s-.93-1.884-.93-4.826V7.038c0-.74 0-1.235-.042-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957" opacity="0.5" />
      <path fill="#000" d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25z" />
    </svg>;
  const MinusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path fill="#6b7280" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity="0.3" />
      <path fill="#9ca3af" d="M15.75 12a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75" />
    </svg>;
  const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <g fill="none">
        <circle cx="12" cy="12" r="9" fill="#6b7280" fillOpacity="0.3" />
        <path stroke="#9ca3af" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" d="M12 8v8m4-4H8" />
      </g>
    </svg>;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Breadcrumb Navigation */}
      <div className="px-4 md:px-8 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">
              Home
            </button>
            <span>/</span>
            <button onClick={() => navigate('/#products-section')} className="hover:text-white transition-colors">
              Product
            </button>
            <span>/</span>
            <span className="text-white">Temp Spoofer</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Images */}
          <div className="space-y-6">
            <div className="relative group">
              <Card className="bg-gray-900/50 border-gray-800/50 overflow-hidden rounded-[30px]">
                <CardContent className="p-0 relative">
                  <img 
                    src={productImages[currentImageIndex]} 
                    alt="Temp Spoofer Software" 
                    className="w-full h-[400px] md:h-[500px] object-cover" 
                  />
                  
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

            {/* Related Products */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-300">People have also bought:</h3>
              {relatedProducts.map((product, index) => (
                <Card key={index} className="bg-gray-900/30 border-gray-800/50 hover:border-[#0036D6]/30 transition-all cursor-pointer rounded-[20px]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{product.name}</h4>
                        <p className="text-gray-400 text-sm">
                          Starting at <span className="text-[#0036D6] font-bold">${product.price}</span>
                        </p>
                      </div>
                      <Button size="sm" className="bg-[#0036D6] hover:bg-[#0036D6]/90" onClick={handleViewFortnitePrivate}>
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
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-gray-900/30 border-gray-800/50 rounded-[20px]">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">Anydesk Support</h4>
                      <p className="text-[#0036D6] font-bold">$2.50</p>
                    </div>
                    <Button size="sm" className="bg-[#0036D6] hover:bg-[#0036D6]/90 text-white">
                      + Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Title and Price */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Temp Spoofer
              </h1>
              <div className="text-4xl font-bold text-[#0036D6]">
                ${variants[selectedVariant].price.toFixed(2)}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Quantity:</span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleQuantityChange(-1)} 
                  className="w-10 h-10 border border-gray-800 hover:border-[#0036D6] rounded-lg transition-all flex items-center justify-center bg-gray-900/50"
                >
                  <MinusIcon />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)} 
                  className="w-10 h-10 border border-gray-800 hover:border-[#0036D6] rounded-lg transition-all flex items-center justify-center bg-gray-900/50"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>

            {/* Variants Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Variants:</h3>
              <div className="space-y-3">
                {Object.entries(variants).map(([key, variant]) => (
                  <Card 
                    key={key} 
                    className={`cursor-pointer transition-all border-2 rounded-[20px] ${
                      selectedVariant === key 
                        ? 'bg-[#0036D6]/10 border-[#0036D6]' 
                        : 'bg-gray-900/30 border-gray-800/50 hover:border-gray-700'
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
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0036D6] transition-colors"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                onClick={handleCheckout} 
                className="w-full bg-[#0036D6] hover:bg-[#0036D6]/90 text-white py-4 text-lg font-semibold rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Checkout
              </Button>
              <Button 
                onClick={handleAddToCart} 
                variant="outline" 
                className="w-full py-4 text-lg transition-all flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 font-semibold border-2 border-gray-800"
              >
                <CartIcon />
                Add To Cart
              </Button>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center">
              <div className="bg-green-500/20 border border-gray-800 rounded-full px-4 py-2 text-green-400 text-sm font-semibold flex items-center gap-2">
                <CheckIcon />
                Undetected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempSpoofer;
