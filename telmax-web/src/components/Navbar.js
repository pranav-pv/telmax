"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Admissions', path: '/admission' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                    {/* Using text for logo as per prompt request, but could be image */}
                    <span className="text-[var(--primary-red)]">tel</span>
                    <span className="text-[var(--primary-blue)]">MAX</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path} className="font-medium text-[var(--text-dark)] hover:text-[var(--primary-blue)] transition-colors relative group">
                            {link.name}
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[var(--accent-gold)] transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link href="/admission" className="bg-[var(--primary-red)] text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-transform hover:scale-105 shadow-md">
                        Apply Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden text-2xl text-[var(--text-dark)] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-lg font-medium text-[var(--text-dark)]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/admission" onClick={() => setIsOpen(false)} className="bg-[var(--primary-red)] text-white text-center py-3 rounded-md font-bold">
                                Apply Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
