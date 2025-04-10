import { experienceData } from '../data/experienceData';
import { useEffect, useRef } from 'react';
import '../styles/timeline-animation.css'; // Import the CSS file

const Experience = () => {
    const sectionRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add visible class when element comes into view
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        // Observe timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            // Add staggered delay based on index
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
        <section id="experience" className="bg-black min-h-screen flex flex-col justify-center items-center py-12 px-4">
            <h2 
                ref={sectionRef}
                className="text-white text-5xl font-normal mb-12 section-title"
            >
                Experience
            </h2>
            
            <div className="relative w-full max-w-5xl">
                {/* Timeline vertical line - white color with animation */}
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-700 hidden md:block origin-top animate-grow-down"></div>
                
                {experienceData.map((item, index) => (
                    <div 
                        key={item.company}
                        className="timeline-item flex flex-col md:flex-row mb-12 last:mb-0 relative"
                    >
                        {/* Logo square on timeline - hidden on mobile */}
                        <div className="hidden md:block md:absolute md:left-0 md:top-3 md:transform md:-translate-x-1/2 md:flex items-start justify-center">
                            <div className="w-16 h-16 flex items-center justify-center overflow-hidden logo-container mt-1">
                                <img 
                                    src={item.logo} 
                                    alt={item.company} 
                                    className="w-14 h-14 object-cover" 
                                />
                            </div>
                        </div>
                        
                        {/* Content box - no left margin on mobile */}
                        <div className="md:ml-20 w-full">
                            <div className="content-box">
                                <h3 className="font-semibold text-xl text-white">{item.company}</h3>
                                <h4 className="font-medium text-lg text-gray-300">{item.position}</h4>
                                <p className="text-sm text-gray-400 mb-3">{item.date}</p>
                                <p className="text-sm text-white">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;