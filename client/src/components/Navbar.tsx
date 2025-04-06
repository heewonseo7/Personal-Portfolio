import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Hamburger from 'hamburger-react';
import '../styles/navbar-animation.css';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    const navItems = [
        { name: "About", path: "/about" },
        { name: "Education", path: "/education" },
        { name: "Experience", path: "/experience" },
        { name: "Projects", path: "/projects" },
        { name: "Skills", path: "/skills" },
        { name: "Contact", path: "/contact" }
    ];

    // Handle scroll events to update navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <nav className={`
            w-full py-8 px-4 fixed top-0 left-0 z-50 transition-all duration-300
            ${isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}
        `}>
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
                </div>
                
                <div className={`
                    flex md:items-center transition-all duration-300
                    ${isOpen ? 'absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-md z-50 flex-col p-4 space-y-4' : 'hidden'}
                    md:static md:flex md:flex-row md:space-y-0 md:space-x-8 md:justify-center md:w-full md:p-0
                `}>
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.name}
                            to={item.path} 
                            className={({ isActive }) => 
                                `text-white hover:text-gray-300 transition-colors duration-300 ${isActive ? 'font-normal' : ''}`
                            }
                            onClick={() => setOpen(false)}
                        >
                            <span className="nav-item">{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;