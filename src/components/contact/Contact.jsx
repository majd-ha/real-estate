import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry. Our curator will contact you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { label: 'Inquiries', value: 'hello@digitalcurator.com' },
        { label: 'Studio', value: 'Skeppsbron 18, Stockholm' },
        { label: 'Call', value: '+46 8 123 45 67' }
    ];

    return (
        <section className="py-32 px-8 bg-[#f4f4ef] dark:bg-[#2c2c2c]/10 relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Begin Your Journey.
                    </h2>
                    <p className="text-lg text-[#2c2c2c]/70 dark:text-[#fafaf5]/70 mb-16 font-light">
                        Reach out to our curators for a private consultation or to list your architectural landmark.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-left">
                        <div className="group">
                            <label className="font-label text-[10px] uppercase tracking-widest text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 font-bold block mb-4">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="outline-0 w-full bg-transparent border-b border-[#2c2c2c]/20 dark:border-[#fafaf5]/20 py-4 text-2xl font-medium focus:border-[#9a442d] focus:ring-0 transition-colors placeholder:text-[#2c2c2c]/30 dark:placeholder:text-[#fafaf5]/30"
                                placeholder="Erik Andersson"
                                required
                            />
                        </div>

                        <div className="group">
                            <label className="font-label text-[10px] uppercase tracking-widest text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 font-bold block mb-4">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="outline-0 w-full bg-transparent border-b border-[#2c2c2c]/20 dark:border-[#fafaf5]/20 py-4 text-2xl font-medium focus:border-[#9a442d] focus:ring-0 transition-colors placeholder:text-[#2c2c2c]/30 dark:placeholder:text-[#fafaf5]/30"
                                placeholder="erik@minimal.com"
                                required
                            />
                        </div>

                        <div className="group">
                            <label className="font-label text-[10px] uppercase tracking-widest text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 font-bold block mb-4">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="2"
                                className=" outline-0 w-full bg-transparent border-b border-[#2c2c2c]/20 dark:border-[#fafaf5]/20 py-4 text-2xl font-medium focus:border-[#9a442d] focus:ring-0 transition-colors placeholder:text-[#2c2c2c]/30 dark:placeholder:text-[#fafaf5]/30 resize-none"
                                placeholder="Tell us about your property vision..."
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="grainy-gradient text-white py-6 rounded-xl font-bold text-xl mt-8 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
                        >
                            Send Inquiry
                            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                                arrow_forward
                            </span>
                        </motion.button>
                    </form>

                    <div className="flex flex-wrap justify-center gap-12 mt-20 border-t border-[#2c2c2c]/10 dark:border-[#fafaf5]/10 pt-12">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <span className="font-label text-[10px] uppercase tracking-widest text-[#2c2c2c]/60 dark:text-[#fafaf5]/60 font-bold">
                                    {info.label}
                                </span>
                                <span className="text-[#2c2c2c] dark:text-[#fafaf5] font-medium">
                                    {info.value}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;