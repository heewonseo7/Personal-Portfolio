import { experienceData } from '../data/experienceData';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/timeline-animation.css';

const Experience = () => {
  const sectionRef = useRef(null);
  
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
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 200}ms`;
      observer.observe(item);
    });
    
    // Observe section title
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="experience" className="bg-black py-20 px-4 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[#0076CE] blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#0076CE] blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#0076CE]/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#0076CE]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#0076CE]/30 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={sectionRef}
        >
          <h2 className="text-white text-5xl font-light mb-4">Experience</h2>
          <div className="w-20 h-1 bg-[#0076CE] mx-auto"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline vertical line with blue accent */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#0076CE]/70 via-[#0076CE] to-[#0076CE]/30 md:block hidden"></div>
          
          {experienceData.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`timeline-item flex flex-col md:flex-row md:items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Circle node on timeline */}
              <div className="absolute left-[49.4%] transform -translate-x-1/2 hidden md:block">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-black border-2 border-[#0076CE]"
                  whileInView={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 1] }}
                  transition={{ duration: 1, times: [0, 0.5, 1] }}
                ></motion.div>
              </div>
              
              {/* Logo container - alternating sides with circular logos */}
              <div className="hidden md:flex items-center justify-center w-1/2">
                <div className="relative flex items-center justify-center">
                  <motion.div 
                    className={`
                      bg-gray-900/70 rounded-full p-4 backdrop-blur-sm flex items-center justify-center mx-8 border border-gray-700
                      ${index % 2 === 0 ? 'ml-8' : 'mr-8'}
                    `}
                    whileHover={{ 
                      boxShadow: "0 0 15px rgba(0,118,206,0.3)",
                      borderColor: "rgba(0,118,206,0.5)",
                      scale: 1.05
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={item.logo || "/api/placeholder/64/64"} 
                      alt={item.company} 
                      className="w-16 h-16 object-contain rounded-full relative z-10" 
                    />
                  </motion.div>
                </div>
              </div>

              {/* Content box with subtle hover effects */}
              <motion.div 
                className="w-full md:w-1/2 p-6 rounded-xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-md"
                whileHover={{ 
                  backgroundColor: "rgba(17, 24, 39, 0.7)",
                  borderColor: "rgba(0, 118, 206, 0.3)",
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="md:hidden flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#0076CE] rounded-full flex items-center justify-center text-white mr-3">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <img 
                    src={item.logo || "/api/placeholder/32/32"} 
                    alt={item.company} 
                    className="w-8 h-8 object-contain rounded-full"
                  />
                </div>
                
                <h3 className="text-xl font-medium text-[#0076CE] mb-1">
                  {item.company}
                </h3>
                <h4 className="text-white font-light">{item.position}</h4>
                <p className="text-gray-400 text-sm">{item.date}</p>
                
                <div className="mt-4 text-gray-300 font-light">{item.description}</div>
                
                {item.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        className="px-3 py-1 bg-gray-800 border border-[#0076CE]/20 text-gray-300 text-sm rounded-full"
                        whileHover={{ 
                          backgroundColor: "rgba(0, 118, 206, 0.1)",
                          color: "#0076CE" 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;