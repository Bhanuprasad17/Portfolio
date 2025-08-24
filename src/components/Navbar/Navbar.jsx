
import React, {useState} from "react";
import {getImageUrl} from '../../utils'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-500/95 backdrop-blur-sm border-b border-secondary-500 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="/" className="text-2xl font-bold text-white hover:text-light-500 transition-colors duration-200">
                        Portfolio
                    </a>
                    
                    {/* Hamburger Menu Button - Always visible on mobile */}
                    <button 
                        className="md:hidden p-2 rounded-md hover:bg-accent-500 transition-colors duration-200"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <img 
                            className="w-6 h-6" 
                            src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                            alt={menuOpen ? "Close menu" : "Open menu"} 
                        />
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex md:items-center md:space-x-8">
                        <li>
                            <a href="#about" className="text-white hover:text-light-500 transition-colors duration-200">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-white hover:text-light-500 transition-colors duration-200">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-white hover:text-light-500 transition-colors duration-200">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-light-500 transition-colors duration-200">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Navigation Menu */}
                {menuOpen && (
                    <div className="md:hidden">
                        <ul className="bg-primary-500 border-t border-secondary-500 shadow-lg">
                            <li className="border-b border-accent-500">
                                <a 
                                    href="#about" 
                                    className="block px-4 py-3 text-white hover:text-light-500 hover:bg-accent-500 transition-colors duration-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About
                                </a>
                            </li>
                            <li className="border-b border-accent-500">
                                <a 
                                    href="#skills" 
                                    className="block px-4 py-3 text-white hover:text-light-500 hover:bg-accent-500 transition-colors duration-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Skills
                                </a>
                            </li>
                            <li className="border-b border-accent-500">
                                <a 
                                    href="#projects" 
                                    className="block px-4 py-3 text-white hover:text-light-500 hover:bg-accent-500 transition-colors duration-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    className="block px-4 py-3 text-white hover:text-light-500 hover:bg-accent-500 transition-colors duration-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    </>
}