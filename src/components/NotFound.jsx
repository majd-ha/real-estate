import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#fafaf5] dark:bg-[#1a1c19] relative overflow-hidden">
            {/* Noise Overlay */}
            <div className="fixed inset-0 noise-overlay z-[100] pointer-events-none"></div>

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 grid-pattern opacity-30"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#9a442d] to-[#c45c3a] blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#e07a5f] to-[#9a442d] blur-3xl"
                />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* 404 Number with Animation */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2
                        }}
                        className="relative mb-8"
                    >
                        <div className="text-[15rem] md:text-[20rem] font-extrabold tracking-tighter leading-none bg-gradient-to-r from-[#9a442d] via-[#e07a5f] to-[#c45c3a] bg-clip-text text-transparent">
                            404
                        </div>
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear"
                            }}
                            className="absolute -top-10 -right-10 md:-top-20 md:-right-20"
                        >
                            <span className="material-symbols-outlined text-6xl md:text-8xl text-[#9a442d]/20 dark:text-[#e07a5f]/20">
                                architecture
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className="font-label text-xs uppercase tracking-[0.3em] text-[#9a442d] dark:text-[#e07a5f] mb-6 inline-block font-medium">
                            Page Not Found
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#2c2c2c] dark:text-[#fafaf5] mb-6">
                            Lost in Architectural Space?
                        </h1>
                        <p className="text-lg md:text-xl text-[#2c2c2c]/70 dark:text-[#fafaf5]/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            The page you're looking for doesn't exist or has been moved.
                            Let us guide you back to our curated collection of architectural masterpieces.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/"
                                    className="grainy-gradient text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 group"
                                >
                                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                                        home
                                    </span>
                                    Return to Properties
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="bg-[#2c2c2c]/10 dark:bg-[#fafaf5]/10 backdrop-blur-sm text-[#2c2c2c] dark:text-[#fafaf5] px-10 py-5 rounded-xl font-semibold text-lg hover:bg-[#2c2c2c]/20 dark:hover:bg-[#fafaf5]/20 transition-all flex items-center gap-3 group"
                                >
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                    Contact Curator
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Suggested Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-20 pt-12 border-t border-[#2c2c2c]/10 dark:border-[#fafaf5]/10"
                    >
                        <p className="text-sm text-[#2c2c2c]/50 dark:text-[#fafaf5]/50 mb-6 font-label tracking-widest">
                            YOU MIGHT BE INTERESTED IN
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {[
                                { name: 'Featured Properties', path: '/' },
                                { name: 'Architectural Services', path: '/services' },
                                { name: 'Our Philosophy', path: '/about' },
                                { name: 'Studio Location', path: '/contact' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link
                                        to={item.path}
                                        className="inline-block px-6 py-3 bg-[#f4f4ef] dark:bg-[#2c2c2c]/20 rounded-lg text-[#2c2c2c] dark:text-[#fafaf5] hover:text-[#9a442d] dark:hover:text-[#e07a5f] transition-all text-sm font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Architectural Elements */}
            <div className="absolute bottom-8 left-8 opacity-20 hidden md:block">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 0L37.5 15H22.5L30 0Z" fill="#9a442d" />
                    <path d="M45 30L30 37.5L15 30L30 22.5L45 30Z" fill="#c45c3a" />
                    <rect x="27.5" y="37.5" width="5" height="22.5" fill="#e07a5f" />
                </svg>
            </div>
            <div className="absolute top-8 right-8 opacity-20 hidden md:block rotate-45">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="18" width="4" height="40" fill="#9a442d" />
                    <rect y="18" width="40" height="4" fill="#9a442d" />
                </svg>
            </div>
        </div>
    );
};

export default NotFound;