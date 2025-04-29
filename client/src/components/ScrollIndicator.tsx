import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="absolute bottom-8 left-[45%] transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
      <motion.div 
        className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center pt-1"
      >
        <motion.div 
          className="w-1 h-2 bg-white rounded-full"
          animate={{ 
            y: [0, 12, 0],
            opacity: [1, 0.3, 1] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;