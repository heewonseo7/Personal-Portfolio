import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { aboutData } from '../data/aboutData'; // Import the aboutData from separate file

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timelineRef = useRef(null);

    const scrollTimeline = (direction) => {
        if (timelineRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = timelineRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            timelineRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const navigatePoint = (index) => {
        setActiveIndex(index);
        if (timelineRef.current) {
            const points = timelineRef.current.querySelectorAll('.timeline-point');
            if (points[index]) {
                const pointLeftPosition = points[index].offsetLeft;
                const centerPosition = pointLeftPosition - timelineRef.current.clientWidth / 2 + 20;
                timelineRef.current.scrollTo({
                    left: centerPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section id="about" className="bg-black flex flex-col justify-center items-center py-16 px-4">
            <h2 className="text-white text-5xl font-normal mb-10">
                About Me
            </h2>
            
            <div className="w-full max-w-5xl">
                {/* Profile section */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
                    <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-800 border border-gray-700 flex-shrink-0">
                        {/* Replace with your image */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-white text-md leading-relaxed">
                            Hi, I'm currently a freshman at Brown University studying Applied Math and Computer Science.
                            Right now, I'm especially interested in reinforcement learning, other areas of machine learning, and web development. 
                            I'm also drawn to the intersection of environmental science and technology, and I'm passionate about exploring how computational tools 
                            can support sustainability and real-world impact.
                        </p>
                        <br />
                        <p className='text-white text-md'>
                            When I'm not in the classroom, I enjoy pursuing a variety of things, but here are a couple of my favorite things down below!
                        </p>
                    </div>
                </div>
                
                {/* Hobbies & Interests Timeline */}
                <div className="mb-10">
                    <h3 className="text-white text-2xl font-medium mb-10 text-center">See Some Of My Hobbies & Interests!</h3>
                    
                    {/* Timeline navigation controls */}
                    <div className="flex items-center justify-between mb-6">
                        <button 
                            onClick={() => scrollTimeline('left')} 
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="Scroll timeline left"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        
                        <span className="text-gray-300 text-sm">
                            {activeIndex + 1} of {aboutData.length}
                        </span>
                        
                        <button 
                            onClick={() => scrollTimeline('right')} 
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="Scroll timeline right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                    
                    {/* Horizontal Timeline */}
                    <div className="relative">
                        {/* Timeline bar */}
                        <div className="absolute top-6 left-0 right-0 h-px bg-gray-700"></div>
                        
                        {/* Timeline points container */}
                        <div 
                            ref={timelineRef}
                            className="overflow-x-auto pb-8 hide-scrollbar" 
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <div className="flex min-w-max px-4">
                                {aboutData.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="timeline-point flex flex-col items-center px-10 cursor-pointer"
                                        onClick={() => navigatePoint(index)}
                                    >
                                        <div className="text-gray-400 mb-2">{item.title}</div>
                                        <div 
                                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                activeIndex === index 
                                                ? 'bg-[#313BAC]' 
                                                : 'bg-gray-800 border border-gray-700'
                                            } transition-all duration-300`}
                                        >
                                            {activeIndex === index && (
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Timeline content with image and description */}
                    <div className="mt-4 p-6 border border-gray-800 rounded-xl bg-[#0a0a0a]">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Image container */}
                            <div className="w-full md:w-1/3 h-64 rounded-lg overflow-hidden bg-gray-800">
                                {/* If you have actual images, use this: */}
                                <img 
                                    src={aboutData[activeIndex].imageUrl} 
                                    alt={aboutData[activeIndex].title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Description container */}
                            <div className="w-full md:w-2/3">
                                <h4 className="text-white text-xl font-medium mb-3">
                                    {aboutData[activeIndex].title}
                                </h4>
                                <div className="text-blue-400 text-sm mb-4">Since {aboutData[activeIndex].year}</div>
                                <p className="text-gray-300 leading-relaxed">
                                    {aboutData[activeIndex].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Custom CSS to hide scrollbar but keep functionality */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default About;