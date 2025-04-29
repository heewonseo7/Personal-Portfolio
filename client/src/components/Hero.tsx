import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Particles from './Particles'
import AnimatedDecoration from './Decoration'
import FlyingObjects from './Flying';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate subtle parallax effects
  const mouseParallax = {
    x: (mousePosition.x - window.innerWidth / 2) / 60,
    y: (mousePosition.y - window.innerHeight / 2) / 60
  };
  
  return (
    <section id="hero" className="relative bg-black min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background particles */}
      <Particles />
      
      {/* Animated background decorations */}
      <AnimatedDecoration />
      
      {/* Cute flying objects */}
      <FlyingObjects />
      
      {/* Main hero content */}
      <motion.div 
        className="text-center px-6 max-w-3xl z-20"
        style={{ 
          transform: `translate(${-mouseParallax.x}px, ${-mouseParallax.y}px)` 
        }}
      >
        {/* Name with fade-in animation */}
        <motion.h1 
          className="text-7xl md:text-8xl font-extralight text-white tracking-tight mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Inline text reveal component */}
          <span className="inline-block">
            {"Heewon Seo".split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.04,
                  ease: "easeOut" 
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
        
        {/* University info with delayed fade-in */}
        <motion.h2 
          className="text-white text-xl font-light mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Applied Math + Computer Science @ Brown University
        </motion.h2>
        
        {/* Social icons with staggered animation */}
        <motion.div 
          className="flex justify-center gap-10 text-2xl text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          {[
            { 
              icon: faGithub, 
              href: "https://github.com/heewonseo7", 
              label: "GitHub Profile"
            },
            { 
              icon: faLinkedin, 
              href: "https://www.linkedin.com/in/heewon-seo7/", 
              label: "LinkedIn Profile"
            },
            { 
              icon: faEnvelope, 
              href: "mailto:heewon_seo@brown.edu", 
              label: "Email Contact"
            }
          ].map((social, index) => (
            <motion.a 
              key={social.label}
              href={social.href}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
              aria-label={social.label}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
            >
              <FontAwesomeIcon icon={social.icon} />
            </motion.a>
          ))}
        </motion.div>
        
        {/* Resume button with hover animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.a 
            href="/path-to-your-resume.pdf" 
            download
            className="inline-flex items-center justify-center gap-2 border border-white text-white font-light py-3 px-10 rounded-md hover:bg-white hover:text-black transition-all duration-300 text-base min-w-48"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;