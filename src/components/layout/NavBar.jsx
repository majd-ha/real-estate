import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#fafaf5]/80 dark:bg-[#1a1c19]/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(44,44,44,0.04)]'
                : 'bg-transparent'
                }`}
        >
            <div className="flex justify-between items-center px-8 py-6 max-w-360 mx-auto font-['Manrope'] font-medium tracking-tight text-sm">
                <Link to="/" className="text-xl font-bold tracking-tighter text-[#2c2c2c] dark:text-[#fafaf5]">
                    The Digital Curator
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`transition-all duration-300 ${location.pathname === link.path
                                ? 'text-[#9a442d] dark:text-[#e07a5f] border-b-2 border-[#9a442d] pb-1'
                                : 'text-[#2c2c2c] dark:text-[#fafaf5] opacity-70 hover:opacity-100 hover:text-[#9a442d]'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <button className="grainy-gradient text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-transform active:scale-95">
                        Book a Viewing
                    </button>
                    <div className="hidden max-sm:block">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className=" material-symbols-outlined text-[#2c2c2c] dark:text-[#fafaf5] cursor-pointer md:hidden"
                        >
                            {isOpen ? 'close' : 'menu'}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[#fafaf5] dark:bg-[#1a1c19] border-t border-[#2c2c2c]/10 dark:border-[#fafaf5]/10"
                >
                    <div className="flex flex-col items-center py-8 gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg ${location.pathname === link.path
                                    ? 'text-[#9a442d] dark:text-[#e07a5f] font-semibold'
                                    : 'text-[#2c2c2c] dark:text-[#fafaf5] opacity-70'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;