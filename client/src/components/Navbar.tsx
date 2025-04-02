import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import '../styles/navbar-animation.css'

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
];

const NavLinks = ({ isMobile = false, closeMenu = () => {}, isMenuOpen = false }) => {
    return (
        <ul className={`${isMobile ? "flex flex-col space-y-6" : "flex gap-4 lg:gap-12"}`}>
            {links.map((link, index) => (
                <li 
                    key={index} 
                    className={`nav-link ${isMobile ? "mobile-nav-item" : ""}`}
                    style={isMobile ? { 
                        transitionDelay: `${index * 0.1}s`,
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                    } : {}}
                >
                    <Link 
                        to={link.path} 
                        className={`nav-item text-white font-semibold hover:text-gray-300 transition-colors duration-300 ${isMobile ? "text-xl block py-2" : ""}`}
                        onClick={isMobile ? closeMenu : undefined}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const MOBILE_BREAKPOINT = 768; // This matches Tailwind's md breakpoint
    
    // Handle escape key to close menu
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);
    
    // Handle window resize - close mobile menu if screen width exceeds breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= MOBILE_BREAKPOINT && isOpen) {
                setIsOpen(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        // Run once on mount to handle initial state
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);
    
    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="bg-black py-4 px-4 md:py-6 fixed w-full top-0 z-50">
                <div className="container mx-auto">
                    {/* Desktop Navbar */}
                    <div className="hidden md:flex justify-center items-center">
                        <NavLinks />
                    </div>

                    {/* Mobile Navbar Toggle */}
                    <div className="flex md:hidden items-center justify-between">
                        <Link to="/" className="text-white text-xl font-bold">
                            Heewon
                        </Link>
                        <button 
                            onClick={toggleNavbar} 
                            className="text-white focus:outline-none z-50"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu - Slide in from left */}
            <div className={`menu-backdrop ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
            <div className={`menu-enter ${isOpen ? 'active' : ''}`}>
                <NavLinks isMobile={true} closeMenu={() => setIsOpen(false)} isMenuOpen={isOpen} />
            </div>
        </>
    );
}

export default Navbar;