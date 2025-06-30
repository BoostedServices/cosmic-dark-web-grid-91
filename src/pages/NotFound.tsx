
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center relative overflow-hidden">
      {/* Grid Background - same as home page */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          linear-gradient(#333333 1px, transparent 1px),
          linear-gradient(90deg, #333333 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />

      {/* Blue glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0036D6] rounded-full opacity-10 animate-pulse" style={{
        filter: 'blur(120px)'
      }} />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#0028A3] rounded-full opacity-15 animate-pulse" style={{
        filter: 'blur(100px)',
        animationDelay: '2s'
      }} />

      {/* Floating astronaut and content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* 404 numbers with astronaut */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-8 mb-4">
            <span className="text-8xl md:text-9xl font-bold text-gray-400/30 animate-pulse">4</span>
            <div className="relative">
              <img 
                src="/lovable-uploads/f8c5a6c3-9b2e-4b93-b68f-4a245dc83ebb.png" 
                alt="Lost astronaut floating in space" 
                className="w-32 h-32 md:w-40 md:h-40"
                style={{
                  animation: "float 6s ease-in-out infinite"
                }}
              />
              {/* Blue glow around astronaut */}
              <div className="absolute inset-0 bg-[#0036D6] rounded-full opacity-20 animate-pulse" style={{
                filter: 'blur(40px)',
                transform: 'scale(1.5)'
              }} />
            </div>
            <span className="text-8xl md:text-9xl font-bold text-gray-400/30 animate-pulse">4</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-400 mb-4 animate-fade-in">
          Looks like you're lost in space
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-500 mb-8 animate-fade-in opacity-80" style={{ animationDelay: "0.2s" }}>
          The page you're looking for has drifted into the void
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link 
            to="/" 
            className="bg-[#0036D6] hover:bg-[#0036D6]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#0036D6]/25"
          >
            Return to Earth (Home)
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="border-2 border-[#0036D6] text-[#0036D6] hover:bg-[#0036D6] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Go Back to Station
          </button>
        </div>

        {/* Floating decorative elements with blue theme */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#0036D6] rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#0028A3] rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-[#002db3] rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#0036D6] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#0028A3] rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Custom floating animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(5deg); }
            50% { transform: translateY(-10px) rotate(-3deg); }
            75% { transform: translateY(-15px) rotate(3deg); }
          }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `
      }} />
    </div>
  );
};

export default NotFound;
