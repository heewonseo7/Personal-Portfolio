import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="bg-black py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">Projects</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative overflow-hidden rounded-xl transition-all duration-500 transform hover:-translate-y-2"
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Card */}
                            <div className="h-full border border-gray-800 rounded-xl bg-gray-950/90 backdrop-blur-lg overflow-hidden shadow-lg">
                                {/* Project Image with Overlay */}
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition-all duration-300"></div>
                                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                
                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-gray-200 transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                                    
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex} 
                                                className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Links */}
                                    <div className="flex justify-between mt-auto pt-2 border-t border-gray-800">
                                        <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors group/link"
                                        >
                                            <Github className="group-hover/link:text-white transition-colors" size={16} />
                                            <span>Source Code</span>
                                        </a>
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors group/link"
                                        >
                                            <span>Live Demo</span>
                                            <ArrowUpRight className="group-hover/link:translate-x-1 transition-transform" size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Animated Border Gradient */}
                            <div 
                                className={`absolute inset-0 rounded-xl bg-gradient-to-br from-white/70 via-white/20 to-white/70 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;