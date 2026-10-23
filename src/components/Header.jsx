import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Helper to style NavLinks dynamically based on active state
    const navLinkClass = ({ isActive }) =>
        `transition font-medium ${
            isActive ? "text-emerald-300 font-semibold" : "text-emerald-100/80 hover:text-white"
        }`;

    return (
        <header className="bg-emerald-950 text-white shadow-md relative">
            <div className="max-w-7xl mx-auto h-20 w-full flex items-center justify-between px-6 md:px-12">
                
                {/* App Logo/Title */}
                <h1 className="capitalize text-xl md:text-2xl font-bold tracking-wide">
                    
                    Todo App
                </h1>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex gap-8 capitalize text-sm md:text-base">
                    <li>
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    </li>
                  
                    <li>
                        <NavLink to="/about" className={navLinkClass}>About</NavLink>
                    </li>
                      <li>
                        <NavLink to="/todo" className={navLinkClass}>Todo</NavLink>
                    </li>
                </ul>

                {/* Mobile Hamburger Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden text-white text-xl focus:outline-none p-1 rounded-lg hover:bg-emerald-900 transition"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-emerald-900 border-t border-emerald-800/60 px-6 py-4 shadow-lg animate-fadeIn">
                    <ul className="flex flex-col gap-4 capitalize">
                        <li>
                            <NavLink 
                                to="/" 
                                onClick={() => setIsOpen(false)} 
                                className={`block py-2 ${navLinkClass}`}
                            >
                                Home
                            </NavLink>
                        </li>
                            <li>
                            <NavLink 
                                to="/about" 
                                onClick={() => setIsOpen(false)} 
                                className={`block py-2 ${navLinkClass}`}
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                to="/todo" 
                                onClick={() => setIsOpen(false)} 
                                className={`block py-2 ${navLinkClass}`}
                            >
                                Todo
                            </NavLink>
                        </li>
                    
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;