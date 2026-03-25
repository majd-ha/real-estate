import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const stats = [
        { value: '140+', label: 'Curated Estates' },
        { value: '€2.4B', label: 'Portfolio Value' },
        { value: '12', label: 'Global Awards' }
    ];
    console.log('inview', inView)
    return (
        <section className="py-32 px-8 max-w-[1440px] mx-auto bg-[#f4f4ef] dark:bg-[#2c2c2c]/20 rounded-[3rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-4/5 overflow-hidden rounded-xl shadow-2xl scale-95 origin-bottom-left -rotate-2">
                        <img
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Minimalist Scandinavian villa"
                        />
                    </div>
                    <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square overflow-hidden rounded-xl shadow-2xl border-[12px] border-[#f4f4ef] dark:border-[#2c2c2c]/20 z-10 hidden md:block rotate-[1deg]">
                        <img
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Interior detail"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-8"
                >
                    <span className="font-label text-xs uppercase tracking-[0.3em] text-[#9a442d] dark:text-[#e07a5f] font-bold">
                        The Philosophy
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Beyond walls. <br />Beyond windows.
                    </h2>
                    <p className="text-lg text-[#2c2c2c]/70 dark:text-[#fafaf5]/70 leading-relaxed font-light">
                        At The Digital Curator, we don't list properties; we archive experiences. Each home in our portfolio is selected for its architectural significance, its dialogue with natural light, and its commitment to functional minimalism.
                    </p>
                    <p className="text-lg text-[#2c2c2c]/70 dark:text-[#fafaf5]/70 leading-relaxed font-light">
                        Our approach combines the precision of a gallery curator with the expertise of luxury real estate professionals.
                    </p>
                    <div className="flex gap-12 mt-8 overflow-x-auto pb-4 scrollbar-hide">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="flex-shrink-0"
                            >
                                <div className="text-4xl font-extrabold text-[#9a442d] dark:text-[#e07a5f] mb-1">
                                    {stat.value}
                                </div>
                                <div className="font-label text-[10px] uppercase tracking-widest text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 font-bold">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;