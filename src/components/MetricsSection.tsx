
import React, { useState, useEffect, useRef } from 'react';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

const MetricsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ProductsSoldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#fff" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity="0.5" />
      <path fill="#fff" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-7.5 5.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013z" />
    </svg>;
  const CustomersServedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#fff" d="M22 12v7.206a1.727 1.727 0 0 1-2.5 1.544a2.89 2.89 0 0 0-2.896.18a2.89 2.89 0 0 1-3.208 0l-.353-.234a1.88 1.88 0 0 0-2.086 0l-.353.235a2.89 2.89 0 0 1-3.208 0a2.89 2.89 0 0 0-2.897-.18A1.727 1.727 0 0 1 2 19.205V12C2 6.477 6.477 2 12 2s10 4.477 10 10" opacity="0.5" />
      <path fill="#fff" d="M9.447 14.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 16.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 15.25a4.27 4.27 0 0 1-2.553-.852M16 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 11c.552 0 1-.672 1-1.5S9.552 8 9 8s-1 .672-1 1.5s.448 1.5 1 1.5" />
    </svg>;
  const AverageRatingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#fff" fillRule="evenodd" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" clipRule="evenodd" opacity="0.5" />
      <path fill="#fff" d="M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501V20.5c1 0 2-.77 3.038-1.59" />
    </svg>;
  const MatchesWonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#fff" d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.05-1.266-.076-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2c1.783 0 3.253.157 4.377.347c1.138.192 1.708.288 2.183.874c.476.586.451 1.219.4 2.485C18.78 10.259 17.76 16 12 16" opacity="0.5" />
      <path fill="#fff" d="m17.64 12.422l2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085q-.008.283-.022.621c-.088 2.225-.377 4.733-1.32 6.716M5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979S2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087q.008.281.022.62" />
      <path fill="#fff" fillRule="evenodd" d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
      <path fill="#fff" d="M15.458 21.25H8.543l.297-1.75a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .981.804z" opacity="0.5" />
      <path fill="#fff" d="M12 16q-.39 0-.75-.034v2.73h1.5v-2.73A8 8 0 0 1 12 16m-.854-9.977C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" />
    </svg>;
  
  const TrustedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#0036D6" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082" opacity="0.5"/><path fill="#0036D6" d="M15.06 10.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z"/></svg>;

  const AnimatedMetric = ({ value, label, icon, gradient, delay }: { 
    value: number; 
    label: string; 
    icon: React.ReactNode; 
    gradient: string;
    delay: number;
  }) => {
    const { count, ref } = useAnimatedCounter({ 
      end: value, 
      duration: 2500,
      suffix: label === "Average Rating" ? "" : ""
    });

    return (
      <div 
        ref={ref}
        className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 text-center relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer transform-gpu ${
          isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-3'
        }`}
        style={{ 
          transitionDelay: `${delay}ms`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 animate-pulse" />
          <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
              {icon}
            </div>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-medium group-hover:scale-105 transition-transform duration-300">
            {label === "Average Rating" ? 
              (parseFloat(count.toString()) || 0).toFixed(2) : 
              count
            }
          </div>
          <div className="text-white/90 font-medium text-lg group-hover:text-white transition-colors duration-300">
            {label}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>
    );
  };

  const metrics = [
    {
      icon: <ProductsSoldIcon />,
      value: 1000,
      label: "Products Sold",
      gradient: "from-[#0036D6] to-[#0028A3]"
    },
    {
      icon: <CustomersServedIcon />,
      value: 532,
      label: "Customers Served",
      gradient: "from-[#0042F0] to-[#002db3]"
    },
    {
      icon: <AverageRatingIcon />,
      value: 4.98,
      label: "Average Rating",
      gradient: "from-[#0036D6] to-[#001f7a]"
    },
    {
      icon: <MatchesWonIcon />,
      value: 21500,
      label: "Matches Won",
      gradient: "from-[#0028A3] to-[#001854]"
    }
  ];

  return (
    <div ref={sectionRef} className="bg-[#0A0A0B] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center mb-4 gap-2">
            <div className="animate-pulse">
              <TrustedIcon />
            </div>
            <span className="text-[#0036D6] text-sm font-semibold tracking-wider hover:text-[#0028A3] transition-colors duration-300">
              Trusted by thousands
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:text-gray-100 transition-colors duration-300">
            Used by gamers all over the world
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto hover:text-gray-300 transition-colors duration-300">
            Our cheats are trusted by thousands of gamers worldwide.<br />
            Join them and experience the power of our software today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <AnimatedMetric
              key={index}
              value={metric.value}
              label={metric.label}
              icon={metric.icon}
              gradient={metric.gradient}
              delay={200 + index * 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsSection;
