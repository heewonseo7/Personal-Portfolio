import React, { useEffect, useRef } from 'react';
import { experienceData } from '../data/experienceData';
import { motion } from 'framer-motion';

const Experience = () => {
  const sectionRef = useRef(null);
  const entryRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe experience items
    entryRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      entryRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="experience" className="bg-black py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        
        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index} 
              className="border-b border-gray-800 pb-8 md:pb-10"
              ref={el => entryRefs.current[index] = el}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Company logo with improved mobile positioning */}
                <motion.div 
                  className="flex flex-row md:flex-col items-center md:items-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img 
                    src={item.logo || "/api/placeholder/48/48"} 
                    alt={item.company} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain mr-4 md:mr-0" 
                  />
                  
                  {/* Mobile-only company title */}
                  <div className="md:hidden">
                    <h3 className="text-lg font-bold text-white">
                      {item.company}
                    </h3>
                  </div>
                </motion.div>
                
                {/* Content with better mobile layout */}
                <div className="flex-grow">
                  {/* Desktop-only title - hidden on mobile */}
                  <div className="hidden md:block">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.company} <span className="font-normal text-gray-400 text-lg">- {item.location}</span>
                    </h3>
                  </div>
                  
                  {/* Mobile-only location - shown only on mobile */}
                  <div className="md:hidden mb-1">
                    <span className="text-gray-400 text-sm">
                      {item.location}
                    </span>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-300">
                    {item.position} - <span className="text-gray-400 text-xs md:text-sm">{item.date}</span>
                  </p>
                  
                  {/* Description items as bullet points with staggered animation */}
                  {item.achievements && (
                    <ul className="list-disc pl-4 md:pl-5 mt-3 md:mt-4 space-y-1 md:space-y-2">
                      {item.achievements.map((desc, i) => (
                        <motion.li 
                          key={i} 
                          className="text-sm md:text-base text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                        >
                          {desc}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;