import { motion } from 'framer-motion';

const AnimatedDecoration = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Animated circles */}
      <motion.div 
        className="absolute -top-[30%] -left-[10%] w-96 h-96 rounded-full border border-white/10"
        animate={{ 
          scale: [1, 1.05, 1],
          x: [0, -10, 0],
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-[60%] -right-[5%] w-64 h-64 rounded-full border border-white/20"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-[20%] right-[20%] w-32 h-32 rounded-full bg-white/5"
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 14, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      {/* Elegant grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full grid grid-cols-12 grid-rows-6">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedDecoration;