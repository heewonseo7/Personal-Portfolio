import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <section className="bg-black min-h-screen flex flex-col justify-center items-center">
            <div className="text-center px-6 max-w-3xl">
                <h1 className="text-7xl md:text-8xl font-extralight text-white tracking-tight mb-3">Heewon Seo</h1>
                <h2 className="text-white text-xl font-light mb-10">Applied Math + Computer Science @ Brown University</h2>
                
                <div className="flex justify-center gap-10 text-2xl text-white mb-12">
                <a 
                    href="https://github.com/heewonseo7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors duration-300"
                    aria-label="GitHub Profile"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/heewon-seo7/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors duration-300"
                    aria-label="LinkedIn Profile"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a 
                    href="mailto:heewon_seo@brown.edu"
                    className="hover:text-gray-300 transition-colors duration-300"
                    aria-label="Email Contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                </div>
                
                <a 
                href="/path-to-your-resume.pdf" 
                download
                className="inline-flex items-center justify-center gap-2 border border-white text-white font-light py-3 px-10 rounded-md hover:bg-white hover:text-black transition-all duration-300 text-base min-w-48"
                >
                Download Resume
                </a>
            </div>
        </section>
    );
};

export default Hero;