import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const services = [
        {
            icon: 'architecture',
            title: 'Architectural Advisory',
            description: 'Full-spectrum consulting on property potential, from historical significance to modernist restoration possibilities.',
            delay: 0
        },
        {
            icon: 'camera',
            title: 'Narrative Marketing',
            description: 'We tell your home\'s story through cinematic videography and editorial-grade architectural photography.',
            delay: 0.1
        },
        {
            icon: 'public',
            title: 'Global Network',
            description: 'Direct access to a private circle of international investors, designers, and high-net-worth architectural collectors.',
            delay: 0.2
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-32 px-8 max-w-[1440px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="text-center mb-20"
            >
                <span className="font-label text-xs uppercase tracking-[0.3em] text-[#9a442d] dark:text-[#e07a5f] font-bold block mb-4">
                    Our Expertise
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    The Curated Experience
                </h2>
            </motion.div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        className="group bg-white dark:bg-[#2c2c2c]/10 p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-6"
                    >
                        <span className="material-symbols-outlined text-4xl text-[#9a442d] dark:text-[#e07a5f] font-light">
                            {service.icon}
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                        <p className="text-[#2c2c2c]/70 dark:text-[#fafaf5]/70 leading-relaxed font-light">
                            {service.description}
                        </p>
                        <div className="h-1 w-0 group-hover:w-full bg-[#9a442d] dark:bg-[#e07a5f] transition-all duration-500"></div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;