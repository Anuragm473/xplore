import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, HelpCircle, Globe, Shield, Calendar, PenTool } from 'lucide-react';

export default function FAQ() {
    const [activeFaq, setActiveFaq] = useState(null);
    const [hoveredFaq, setHoveredFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        { 
            question: 'How do I book a tour package?', 
            answer: 'Booking is simple! Browse our packages, select your preferred one, click "Book Now", fill in your details, and complete the payment process. You\'ll receive a confirmation email with all details.',
            icon: <Globe className="w-5 h-5 text-amber-500" />
        },
        { 
            question: 'What is your cancellation policy?', 
            answer: 'We offer free cancellation up to 30 days before your trip. Cancellations made 15-29 days prior receive a 50% refund. Cancellations less than 15 days before departure are non-refundable.',
            icon: <Shield className="w-5 h-5 text-amber-500" />
        },
        { 
            question: 'Are flights included in the packages?', 
            answer: 'International packages include round-trip flights from major cities. Local packages do not include flights unless specifically mentioned in the package details.',
            icon: <Calendar className="w-5 h-5 text-amber-500" />
        },
        { 
            question: 'Do you offer customized tour packages?', 
            answer: 'Yes! We specialize in creating custom itineraries. Contact us through the form or call us directly to discuss your dream vacation and we\'ll design a personalized experience.',
            icon: <PenTool className="w-5 h-5 text-amber-500" />
        }
    ];

    // Design system constants
    const colors = {
        primary: '#F59E0B',    // Amber-500
        secondary: '#0F766E',  // Teal-600
        background: '#1E293B', // Slate-800
        text: '#F8FAFC'        // Slate-50
    };

    const typography = {
        h2: 'text-4xl md:text-5xl font-bold tracking-tight',
        body: 'text-lg font-light leading-relaxed',
        small: 'text-sm font-medium'
    };

    return (
        <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
            {/* Decorative elements */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                className="absolute top-1/4 left-20 w-48 h-48 rounded-full bg-amber-400/20 blur-xl"
            />
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-1/3 right-32 w-64 h-64 rounded-full bg-teal-400/20 blur-xl"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center mb-6 bg-slate-800/50 px-5 py-3 rounded-full backdrop-blur-sm border border-slate-700/50">
                        <HelpCircle className="w-5 h-5 text-amber-500 mr-2" />
                        <span className={`${typography.small} text-slate-300`}>NEED HELP?</span>
                    </div>
                    
                    <h2 className={`${typography.h2} text-slate-50 mb-4`}>
                        Frequently Asked <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Questions</span>
                    </h2>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`${typography.body} text-slate-300 max-w-2xl mx-auto`}
                    >
                        Get answers to common questions about our tours and booking process.
                    </motion.p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredFaq(index)}
                            onMouseLeave={() => setHoveredFaq(null)}
                            className="relative overflow-hidden"
                        >
                            {/* Hover effect background */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ 
                                    opacity: hoveredFaq === index ? 0.1 : 0,
                                    scale: hoveredFaq === index ? 1.05 : 1
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-amber-500/10 rounded-xl pointer-events-none"
                            />
                            
                            <motion.div
                                whileHover={{ y: -2 }}
                                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border ${activeFaq === index ? 'border-amber-500/50' : 'border-slate-700/50'} overflow-hidden shadow-lg`}
                            >
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    className="w-full p-6 text-left flex items-center justify-between font-medium group"
                                >
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-slate-900/50 flex items-center justify-center mr-4 border border-slate-700/50">
                                            {faq.icon}
                                        </div>
                                        <span className={`text-left text-slate-50 group-hover:text-amber-400 transition-colors ${activeFaq === index ? 'text-amber-500' : ''}`}>
                                            {faq.question}
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ 
                                            rotate: activeFaq === index ? 180 : 0,
                                            color: activeFaq === index || hoveredFaq === index ? colors.primary : colors.text
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>
                                
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ 
                                        height: activeFaq === index ? 'auto' : 0,
                                        opacity: activeFaq === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 ml-14">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: activeFaq === index ? 1 : 0 }}
                                            transition={{ delay: 0.2 }}
                                            className={`${typography.body} text-slate-300 border-t border-slate-700/50 pt-4`}
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Help CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className={`${typography.body} text-slate-300 mb-6`}>
                        Still have questions? Our travel experts are here to help!
                    </p>
                    <motion.button
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: `0 0 20px ${colors.primary}40`
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-full font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center mx-auto"
                    >
                        Contact Our Team
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}