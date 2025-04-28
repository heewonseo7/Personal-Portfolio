import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="bg-black py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-5xl font-light mb-4 text-center">Projects</h2>
                <div className="w-20 h-1 bg-[#0076CE] mx-auto mb-16"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-2"
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Card */}
                            <div className="h-full border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm overflow-hidden">
                                {/* Project Image */}
                                <div className="h-48 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                        {/* Replace with actual images later */}
                                        <img src={project.image} alt="project-img" />
                                    </div>
                                </div>
                                
                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                    
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex} 
                                                className="text-xs px-2 py-1 rounded bg-[#0076CE]/10 text-[#0076CE] border border-[#0076CE]/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Links */}
                                    <div className="flex gap-4 mt-auto">
                                        <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={16} />
                                            <span>Code</span>
                                        </a>
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Animated Border Gradient */}
                            <div 
                                className={`absolute inset-0 rounded-xl bg-gradient-to-br from-[#0076CE] via-[#00a0f4] to-[#0076CE] -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;