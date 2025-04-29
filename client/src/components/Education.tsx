import { useState, useEffect } from 'react';
import { educationData } from '../data/educationData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Education = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    
    return (
        <section id="education" className="bg-black py-20 px-4 relative overflow-hidden">
            {/* Monochromatic background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
                <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white blur-[100px]"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white blur-[100px]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/30 rounded-full"></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-white text-4xl md:text-6xl font-semibold mb-4">Education</h2>
                </motion.div>
                
                <div className="grid gap-6 w-full">
                    {educationData.map((item, index) => (
                        <motion.div 
                            key={item.school}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group cursor-pointer`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => toggleExpand(index)}
                        >
                            {/* Card with backdrop blur and subtle border */}
                            <div className={`
                                rounded-xl p-6 transition-all duration-500 border 
                                ${expandedIndex === index || hoveredIndex === index 
                                    ? 'border-white/50 bg-gray-900/70 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                                    : 'border-gray-800/50 bg-gray-900/30 backdrop-blur-sm'}
                            `}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between">
                                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                                        {/* School logo with animated border */}
                                        <div className="relative w-20 h-20 flex-shrink-0 mx-auto md:mx-0">
                                            <div className={`
                                                absolute inset-0 rounded-lg 
                                                ${expandedIndex === index || hoveredIndex === index 
                                                    ? 'bg-gradient-to-r from-white/70 to-gray-300/70 animate-pulse opacity-30' 
                                                    : 'opacity-0'}
                                                transition-opacity duration-300
                                            `}></div>
                                            <img 
                                                src={item.image} 
                                                alt={item.school} 
                                                className="w-full h-full object-cover rounded-lg relative z-10 border border-gray-700" 
                                            />
                                        </div>
                                        
                                        <div className="text-center md:text-left">
                                            <h3 className={`font-medium text-xl mb-1 transition-colors duration-300 
                                                ${expandedIndex === index || hoveredIndex === index ? 'text-white' : 'text-gray-200'}`
                                            }>
                                                {item.school}
                                            </h3>
                                            <p className="text-white font-light">{item.major}</p>
                                            <p className="text-gray-400 text-sm">{item.date}</p>
                                        </div>
                                    </div>
                                    
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center mt-4 md:mt-0 mx-auto md:mx-0
                                        ${expandedIndex === index 
                                            ? 'bg-white text-black' 
                                            : 'bg-gray-800 text-gray-400'}
                                        transition-all duration-300
                                    `}>
                                        {expandedIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </div>
                                
                                {/* Courses Section with AnimatePresence */}
                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-6 pt-6 border-t border-gray-700/50">
                                                <p className="text-white font-medium mb-4">Relevant Coursework:</p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {item.courses.map((course, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                                                            className="flex items-center"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white mr-2"></div>
                                                            <span className="text-sm text-gray-300">{course}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            
                            {/* Glowing effect on hover */}
                            <div className={`
                                absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-gray-300/20 blur-md -z-10
                                transition-opacity duration-300
                                ${expandedIndex === index || hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                            `}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;