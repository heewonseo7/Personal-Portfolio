import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import aboutData from '../data/aboutData';

const About = () => {
    const [activeHobby, setActiveHobby] = useState(null);
    const galleryRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if we're on mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);
    
    return (
        <section id="about" className="bg-black py-16 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-5xl font-semibold mb-4">About Me</h2>
                
                {/* Profile section */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-20">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-48 h-48 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-[#0076CE]/20 flex-shrink-0"
                    >
                        {/* Profile image container with gradient overlay */}
                        <div className="w-full h-full bg-gradient-to-br from-[#0076CE]/20 to-[#0076CE]/5">
                            {/* Replace with your actual image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                Profile Photo
                            </div>
                        </div>
                        
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-full border-2 border-[#0076CE]/30 animate-pulse"></div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1"
                    >
                        <h3 className="text-[#0076CE] text-xl mb-4 font-light">Nice to meet you</h3>
                        <p className="text-white text-lg leading-relaxed mb-4 md:mb-6">
                            I'm currently a freshman at Brown University studying Applied Math and Computer Science.
                            Right now, I'm especially interested in reinforcement learning, other areas of machine learning, and web development.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6 md:mb-8">
                            I'm also drawn to the intersection of environmental science and technology, and I'm passionate about exploring how computational tools 
                            can support sustainability and create real-world impact.
                        </p>
                        <p className='text-gray-400'>
                            When I'm not in the classroom, I enjoy pursuing a variety of interests, some of which you can explore below!
                        </p>
                    </motion.div>
                </div>
                
                {/* Hobbies & Interests - Responsive Grid Layout */}
                <div className="mb-10">
                    <h3 className="text-white text-2xl font-light mb-8 md:mb-10 text-center">
                        Hobbies & Interests
                    </h3>
                    
                    {/* Mobile layout (grid of equal-sized cards) */}
                    {isMobile && (
                        <div className="grid grid-cols-2 gap-4">
                            {aboutData.slice(0, 6).map((hobby, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="overflow-hidden rounded-lg cursor-pointer relative bg-gray-800 group aspect-square"
                                    onClick={() => setActiveHobby(index)}
                                >
                                    {/* Actual image */}
                                    <img 
                                        src={hobby.img} 
                                        alt={hobby.title} 
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Hover overlay with blue effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0076CE] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    
                                    {/* Title always visible on mobile */}
                                    <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent">
                                        <div className="text-white font-medium text-sm">{hobby.title}</div>
                                        <div className="text-blue-100 text-xs">Since {hobby.year}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                    
                    {/* Desktop layout with modified grid for 10 items */}
                    {!isMobile && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            ref={galleryRef}
                            className="w-full galleryblock"
                            style={{
                                width: '100%',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(5, 1fr)',
                                gridTemplateRows: '1fr 0.81fr 1fr',
                                gridTemplateAreas: `
                                    "img1  img2  img3 img4   img5"
                                    "img1  img7  img3 img9   img5"
                                    "img6  img7  img8 img9   img10"
                                `,
                                gridGap: '0.75em',
                                height: '550px'
                            }}
                        >
                            {aboutData.map((hobby, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="overflow-hidden rounded-lg cursor-pointer relative bg-gray-800 group"
                                    style={{ gridArea: hobby.area }}
                                    onClick={() => setActiveHobby(index)}
                                >
                                    {/* Actual image */}
                                    <img 
                                        src={hobby.img} 
                                        alt={hobby.title} 
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Hover overlay with blue effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0076CE] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    
                                    {/* Title on hover */}
                                    <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10">
                                        <div className="text-white font-medium text-lg">{hobby.title}</div>
                                        <div className="text-blue-100 text-sm">Since {hobby.year}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                    
                    {/* View All button for mobile */}
                    {isMobile && (
                        <div className="mt-6 text-center">
                            <button className="px-5 py-2 bg-[#0076CE]/30 hover:bg-[#0076CE]/50 rounded-lg text-white transition-colors">
                                View All Interests
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Modal for showing hobby details */}
            <AnimatePresence>
                {activeHobby !== null && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={(e) => {
                            // Close when clicking the backdrop
                            if (e.currentTarget === e.target) {
                                setActiveHobby(null);
                            }
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-gray-900 w-full max-w-lg rounded-xl overflow-hidden shadow-xl border border-[#0076CE]/30"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="h-64 md:h-80 bg-gray-800 relative">
                                {/* Actual image in modal */}
                                {activeHobby !== null && (
                                    <img 
                                        src={aboutData[activeHobby].img} 
                                        alt={aboutData[activeHobby].title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                                <button 
                                    className="absolute top-3 right-3 bg-black bg-opacity-50 rounded-full p-1 text-white hover:bg-opacity-70 transition-colors"
                                    onClick={() => setActiveHobby(null)}
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            
                            {activeHobby !== null && (
                                <div className="p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                                        <h4 className="text-[#0076CE] text-2xl font-medium">
                                            {aboutData[activeHobby].title}
                                        </h4>
                                        <span className="text-white text-xs bg-[#0076CE]/20 px-3 py-1 rounded-full self-start sm:self-auto">
                                            Since {aboutData[activeHobby].year}
                                        </span>
                                    </div>
                                    <p className="text-white leading-relaxed">
                                        {aboutData[activeHobby].description}
                                    </p>
                                    
                                    <div className="mt-6 flex justify-end">
                                        <button 
                                            onClick={() => setActiveHobby(null)}
                                            className="px-4 py-2 text-sm text-white bg-[#0076CE]/40 hover:bg-[#0076CE]/60 rounded-lg transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;