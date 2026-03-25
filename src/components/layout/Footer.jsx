import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#f4f4ef] dark:bg-[#121411] w-full rounded-t-[2rem] mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12 py-20 max-w-[1440px] mx-auto font-['Manrope'] text-sm leading-relaxed">
                <div className="flex flex-col gap-6">
                    <div className="text-lg font-bold text-[#2c2c2c] dark:text-[#fafaf5]">
                        The Digital Curator
                    </div>
                    <p className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 max-w-xs">
                        Elevating real estate through architectural narrative and curated excellence since 2014.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-[#2c2c2c] dark:text-[#fafaf5] uppercase tracking-widest text-[10px]">
                        Navigation
                    </h4>
                    <Link to="/" className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors">
                        Properties
                    </Link>
                    <Link to="/services" className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors">
                        Services
                    </Link>
                    <Link to="/about" className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors">
                        About Us
                    </Link>
                    <a href="#" className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors">
                        Journal
                    </a>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-[#2c2c2c] dark:text-[#fafaf5] uppercase tracking-widest text-[10px]">
                        Legal & Social
                    </h4>
                    <a href="#" className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors">
                        Terms of Service
                    </a>
                    <a href="#" className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors">
                        Instagram
                    </a>
                    <a href="#" className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 hover:text-[#9a442d] transition-colors">
                        LinkedIn
                    </a>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-[#2c2c2c] dark:text-[#fafaf5] uppercase tracking-widest text-[10px]">
                        Newsletter
                    </h4>
                    <p className="text-[#2c2c2c]/60 dark:text-[#fafaf5]/60">
                        Receive curated architectural insights.
                    </p>
                    <div className="flex border-b border-[#2c2c2c]/20 dark:border-[#fafaf5]/20 pb-2">
                        <input
                            className="outline-0 bg-transparent border-none p-0 text-sm focus:ring-0 w-full placeholder:text-[#2c2c2c]/50 dark:placeholder:text-[#fafaf5]/50"
                            placeholder="email@address.com"
                            type="email"
                        />
                        <button className="material-symbols-outlined text-[#9a442d] dark:text-[#e07a5f]">
                            east
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-360 mx-auto px-12 py-8 border-t border-[#2c2c2c]/10 dark:border-[#fafaf5]/10 text-center">
                <p className="text-[#2c2c2c]/40 dark:text-[#fafaf5]/40 text-[10px] uppercase tracking-widest">
                    © {new Date().getFullYear()} The Digital Curator. Architectural Real Estate.
                </p>
            </div>
        </footer>
    );
};

export default Footer;