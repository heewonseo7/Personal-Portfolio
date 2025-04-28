import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
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
                ? 'py-3 bg-black/80 backdrop-blur-md border-b border-[#0076CE]/10 shadow-lg' 
                : 'py-6 bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <span className="text-white text-2xl font-medium">
                        <span className="text-[#0076CE]">HS</span>
                    </span>
                    <div className={`absolute -inset-1 bg-[#0076CE]/20 rounded-full blur-md transition-opacity duration-300 ${
                        isScrolled ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                </motion.div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="relative text-gray-300 hover:text-white transition-colors"
                        >
                            <span>{item.name}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0076CE] transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                </nav>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            
            {/* Mobile Navigation Menu */}
            <motion.div
                initial={false}
                animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg"
            >
                <div className="px-4 py-2">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center py-3 border-b border-gray-800 text-gray-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <ChevronRight size={16} className="text-[#0076CE] mr-2" />
                            <span>{item.name}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
            
            {/* Decorative element - circuit-like pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
                <div className="absolute left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#0076CE] to-transparent"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-px bg-[#0076CE]"></div>
                <div className="absolute right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-[#0076CE] to-transparent"></div>
            </div>
        </header>
    );
};

export default Navbar;