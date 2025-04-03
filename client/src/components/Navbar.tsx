import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Hamburger from 'hamburger-react';
import '../styles/navbar-animation.css';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    
    const navItems = [
        { name: "About", path: "/" },
        { name: "Education", path: "/" },
        { name: "Experience", path: "/" },
        { name: "Projects", path: "/" },
        { name: "Skills", path: "/" },
        { name: "Contact", path: "/" }
    ];

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
        <nav className="bg-black w-full py-6 px-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo or Brand Name could go here */}
                <div className="md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
                </div>
                
                {/* Navigation Links - Single implementation that adapts */}
                <div className={`
                    flex md:items-center transition-all duration-300
                    ${isOpen ? 'absolute top-14 left-0 right-0 bg-black z-50 flex-col p-4 space-y-4' : 'hidden'}
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