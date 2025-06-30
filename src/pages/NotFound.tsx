
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950 flex items-center justify-center relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating astronaut and content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* 404 numbers with astronaut */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-8 mb-4">
            <span className="text-8xl md:text-9xl font-bold text-white/20 animate-pulse">4</span>
            <div className="relative">
              <img 
                src="/lovable-uploads/f8c5a6c3-9b2e-4b93-b68f-4a245dc83ebb.png" 
                alt="Lost astronaut floating in space" 
                className="w-32 h-32 md:w-40 md:h-40 animate-bounce"
                style={{
                  animation: "float 6s ease-in-out infinite"
                }}
              />
              {/* Floating animation keyframes will be added via inline styles */}
            </div>
            <span className="text-8xl md:text-9xl font-bold text-white/20 animate-pulse">4</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
          Looks like you're lost in space
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-200 mb-8 animate-fade-in-up opacity-80" style={{ animationDelay: "0.2s" }}>
          The page you're looking for has drifted into the void
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link 
            to="/" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Return to Earth (Home)
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="border-2 border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Go Back to Station
          </button>
        </div>

        {/* Additional space elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-50"></div>
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
        `
      }} />
    </div>
  );
};

export default NotFound;
