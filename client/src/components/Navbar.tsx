import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/navbar-animation.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'py-3 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg' 
                : 'py-6 bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="relative text-gray-300 hover:text-white transition-colors nav-item"
                        >
                            <span>{item.name}</span>
                        </motion.a>
                    ))}
                </nav>
                
                {/* Mobile Menu Button */}
                <div className="md:hidden flex justify-end w-full">
                    <button 
                        className="text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            <motion.div
                initial={false}
                animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg"
            >
                <div className="px-4 py-2 flex flex-col items-center">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="py-3 border-b border-gray-800 text-gray-300 nav-item"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span>{item.name}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
            
            {/* Decorative element - simple line */}
            <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
                <div className="absolute left-0 right-0 h-px bg-white/20"></div>
            </div>
        </header>
    );
};

export default Navbar;