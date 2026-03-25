import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHome, FaUserFriends, FaTrophy, FaClock } from 'react-icons/fa';

const Statistics = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const stats = [
        { icon: FaHome, value: 1250, label: 'عقار مباع', suffix: '+' },
        { icon: FaUserFriends, value: 980, label: 'عميل سعيد', suffix: '+' },
        { icon: FaTrophy, value: 15, label: 'جائزة', suffix: '' },
        { icon: FaClock, value: 8, label: 'سنوات خبرة', suffix: '' }
    ];

    const counterVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        })
    };

    return (
        <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={counterVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="text-center text-white"
                        >
                            <stat.icon className="text-5xl mx-auto mb-4" />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2 + 0.3 }}
                                className="text-4xl font-bold mb-2"
                            >
                                {stat.value}{stat.suffix}
                            </motion.div>
                            <div className="text-lg opacity-90">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Statistics;