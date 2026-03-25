import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const FeaturedProperties = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const properties = [
        {
            image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3',
            title: 'فيلا فاخرة في الساحل الشمالي',
            price: '2,500,000 ريال',
            bedrooms: 5,
            bathrooms: 4,
            area: '350 متر مربع'
        },
        {
            image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3',
            title: 'شقة دوبلكس في وسط المدينة',
            price: '1,800,000 ريال',
            bedrooms: 3,
            bathrooms: 3,
            area: '220 متر مربع'
        },
        {
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3',
            title: 'تاون هاوس في حي راقي',
            price: '3,200,000 ريال',
            bedrooms: 4,
            bathrooms: 3,
            area: '280 متر مربع'
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
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        أبرز العقارات
                    </h2>
                    <p className="text-xl text-gray-600">
                        اكتشف أفضل العروض العقارية المميزة
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {properties.map((property, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {property.title}
                                </h3>
                                <p className="text-2xl text-blue-600 font-semibold mb-4">
                                    {property.price}
                                </p>
                                <div className="flex justify-between text-gray-600 border-t pt-4">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <FaBed />
                                        <span>{property.bedrooms} غرف</span>
                                    </div>
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <FaBath />
                                        <span>{property.bathrooms} حمامات</span>
                                    </div>
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <FaRulerCombined />
                                        <span>{property.area}</span>
                                    </div>
                                </div>
                                <button className="w-full mt-6 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition transform hover:scale-105">
                                    تفاصيل العقار
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProperties;