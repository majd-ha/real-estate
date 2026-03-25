import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
            title: 'Living as a',
            highlight: 'Work of Art.',
            subtitle: 'We transcend traditional brokerage, treating every property as a curated masterpiece.'
        },
        {
            image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
            title: 'Architectural',
            highlight: 'Excellence.',
            subtitle: 'Discover properties that redefine luxury through design and craftsmanship.'
        },
        {
            image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
            title: 'Curated',
            highlight: 'Experience.',
            subtitle: 'Each home is selected for its architectural significance and design legacy.'
        }
    ];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-8 overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation
                className="absolute inset-0 w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 grid-pattern"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-label text-xs uppercase tracking-[0.3em] text-[#e07a5f] mb-6 block font-medium">
                        Curating Architectural Excellence
                    </span>
                    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-black/50 leading-[1.1] mb-8">
                        Living as a <span className="bg-linear-to-r from-[#e07a5f] to-[#c45c3a] bg-clip-text text-transparent">Work of Art.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-black/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        We transcend traditional brokerage, treating every property as a curated masterpiece for the discerning architectural enthusiast.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="grainy-gradient text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-xl active:scale-95 transition-all">
                            Explore Properties
                        </button>
                        <button className="bg-white/10 backdrop-blur-sm text-[#e07a5f] px-10 py-5 rounded-xl font-semibold text-lg active:scale-95 transition-all hover:bg-white/20">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Search Filters */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-20 mt-20 w-full max-w-5xl"
            >
                <div className="bg-white/90 dark:bg-[#1a1c19]/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0px_20px_40px_rgba(44,44,44,0.06)] grid grid-cols-1 md:grid-cols-4 gap-6 items-end border border-[#2c2c2c]/10 dark:border-[#fafaf5]/10">
                    <div className="flex flex-col gap-2">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 font-bold">Location</label>
                        <div className="flex items-center gap-2 bg-[#f4f4ef] dark:bg-[#2c2c2c]/20 px-4 py-3 rounded-lg border-b-2 border-transparent focus-within:border-[#9a442d] transition-all">
                            <span className="material-symbols-outlined text-sm text-[#2c2c2c]/40">location_on</span>
                            <input className="bg-transparent border-none p-0 text-sm focus:ring-0 w-full font-medium" placeholder="Stockholm, SE" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 font-bold">Property Type</label>
                        <div className="flex items-center gap-2 bg-[#f4f4ef] dark:bg-[#2c2c2c]/20 px-4 py-3 rounded-lg border-b-2 border-transparent focus-within:border-[#9a442d] transition-all">
                            <span className="material-symbols-outlined text-sm text-[#2c2c2c]/40">apartment</span>
                            <select className="bg-transparent border-none p-0 text-sm focus:ring-0 w-full font-medium appearance-none">
                                <option>Modernist Villa</option>
                                <option>Penthouse</option>
                                <option>Loft</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 font-bold">Price Range</label>
                        <div className="flex items-center gap-2 bg-[#f4f4ef] dark:bg-[#2c2c2c]/20 px-4 py-3 rounded-lg border-b-2 border-transparent focus-within:border-[#9a442d] transition-all">
                            <span className="material-symbols-outlined text-sm text-[#2c2c2c]/40">payments</span>
                            <input className="bg-transparent border-none p-0 text-sm focus:ring-0 w-full font-medium" placeholder="€1.5M - €5M" type="text" />
                        </div>
                    </div>
                    <button className="bg-[#2c2c2c] dark:bg-[#fafaf5] text-white dark:text-[#2c2c2c] py-3.5 rounded-lg font-bold text-sm tracking-tight hover:bg-[#9a442d] transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-base">search</span>
                        Search Gallery
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;