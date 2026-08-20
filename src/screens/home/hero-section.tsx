import { Button } from "@/components/ui/button";
import { ArrowRight, SquarePlay, Sun, Recycle, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import Link from "next/link";

// Variants for animations 
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const card3D: Variants = {
  hidden: { 
    opacity: 0, 
    y: 32,
    rotateX: 15,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  const bottomCards = [
    {
      icon: Sun,
      label: "Solar Panels",
      bgColor: "from-amber-400 to-orange-500",
      borderColor: "border-orange-400/30",
      shadowColor: "shadow-orange-500/40",
      description: "End-of-life panels",
      metric: "85% recovery",
    },
    {
      icon: Recycle,
      label: "Recycling",
      bgColor: "from-emerald-400 to-green-500",
      borderColor: "border-green-400/30",
      shadowColor: "shadow-green-500/40",
      description: "Material recovery",
      metric: "95% efficiency",
    },
    {
      icon: Leaf,
      label: "New Resources",
      bgColor: "from-lime-400 to-emerald-500",
      borderColor: "border-lime-400/30",
      shadowColor: "shadow-lime-500/40",
      description: "Circular economy",
      metric: "Zero waste",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col bg-[url('/home/solar-panels.avif')] bg-cover bg-center perspective-container">
      {/* Overlay */}
      <div className="bg-black/75 flex-1 flex flex-col justify-center px-4 sm:px-6 py-28">
        {/* Content */}
        <motion.div
          className="container mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-600/20 border border-green-500 mx-auto backdrop-blur-sm"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 blur-md opacity-50 animate-pulse" />
              <Recycle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 relative" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-green-400">
              Certified Solar Waste Management
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-bold text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl"
          >
            Sustainable Solar
            <br />
            Recycling
            <br />
            for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Greener Tomorrow</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-xl md:max-w-2xl mx-auto"
          >
            Transforming end-of-life solar panels into valuable resources,
            reducing environmental impact and building a circular economy
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-3 sm:pt-4"
          >
            <motion.div 
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/process">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 h-12 sm:h-14 w-full sm:w-56 md:w-60 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transition-all duration-300 border-0">
                  <span>Know Recycling Process</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
          
                variant="outline"
                className="border-white/30 text-white bg-white/5 backdrop-blur-sm h-12 sm:h-14 w-full sm:w-56 md:w-60 flex items-center justify-center gap-2 text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-white/20"
              >
                <SquarePlay className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Watch How It Works</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Professional Cards */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm py-8 sm:py-12 px-4 relative overflow-hidden"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ perspective: "1200px" }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {bottomCards.map((cardItem, index) => {
          const IconComponent = cardItem.icon;
          return (
            <motion.div 
              key={cardItem.label} 
              variants={card3D}
              className="group relative"
              whileHover={{
                rotateX: -6,
                rotateY: index === 0 ? -6 : index === 2 ? 6 : 0,
                scale: 1.08,
                zIndex: 10,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25,
                  duration: 0.3 
                }
              }}
            >
              {/* 3D Card with professional design */}
              <div className="relative">
                {/* Glow effect */}
                <div 
                  className={`absolute -inset-4 bg-gradient-to-r ${cardItem.bgColor} rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110`}
                />
                
                {/* Card body */}
                <div 
                  className="relative transform-gpu transition-all duration-500"
                  style={{ 
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Main card */}
                  <div 
                    className={`w-64 h-28 sm:w-72 sm:h-32 rounded-2xl flex items-center gap-4 sm:gap-5 px-4 sm:px-6 relative overflow-visible bg-gradient-to-br ${cardItem.bgColor} ${cardItem.shadowColor} shadow-2xl group-hover:shadow-3xl transition-all duration-500 border ${cardItem.borderColor} backdrop-blur-sm`}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <div className="absolute -inset-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    {/* Border glow */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    {/* Icon container with 3D effect */}
                    <div className="relative z-10 transform-gpu group-hover:translate-z-8 transition-transform duration-500">
                      <div className="relative">
                        {/* Icon background glow */}
                        <div className={`absolute inset-0 bg-white/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full`} />
                        
                        {/* Circular icon background */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:shadow-xl">
                          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" strokeWidth={1.5} />
                        </div>

                        {/* Small decorative dots */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
                        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 transform-gpu group-hover:translate-z-4 transition-transform duration-500">
                      <div className="space-y-1">
                        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide drop-shadow-md">
                          {cardItem.label}
                        </h3>
                        <p className="text-white/80 text-[10px] sm:text-xs font-medium tracking-wider uppercase">
                          {cardItem.description}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-white/70" />
                          <span className="text-white/90 text-[10px] sm:text-xs font-semibold">
                            {cardItem.metric}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 3D edge overlay */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-2xl" />
                    </div>
                  </div>

                  {/* 3D shadow bottom */}
                  <div 
                    className="absolute -bottom-3 left-4 right-4 h-3 bg-black/30 rounded-b-2xl transform-gpu blur-sm"
                    style={{
                      transform: "rotateX(12deg) translateZ(-6px)",
                      transformOrigin: "top center",
                    }}
                  />
                </div>
              </div>

              {/* Professional arrow connector */}
              {index !== bottomCards.length - 1 && (
                <motion.div 
                  className="text-white/40 hidden sm:flex items-center"
                  whileHover={{
                    x: 6,
                    scale: 1.2,
                    opacity: 1,
                  }}
                >
                  
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <style jsx>{`
        .perspective-container {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }
        .group:hover .translate-z-8 {
          transform: translateZ(8px);
        }
        .group:hover .translate-z-4 {
          transform: translateZ(4px);
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        @keyframes float3D {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-6px) rotateX(2deg); }
        }
        .group:hover {
          animation: float3D 4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .group:hover .shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;