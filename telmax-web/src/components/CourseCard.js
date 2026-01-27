"use client";

import { motion } from 'framer-motion';

const CourseCard = ({ grade, syllabus, features, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-[var(--primary-blue)] hover:shadow-2xl transition-all"
        >
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-[var(--text-dark)]">Class {grade}</h3>
                    <span className="bg-[var(--accent-gold)] text-[var(--text-dark)] text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {syllabus}
                    </span>
                </div>

                <p className="text-gray-600 mb-6">Comprehensive coaching for English medium students.</p>

                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary-red)]"></span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t">
                <button className="w-full py-2 text-[var(--primary-blue)] font-bold hover:bg-blue-50 rounded-lg transition-colors border border-[var(--primary-blue)]">
                    View Details
                </button>
            </div>
        </motion.div>
    );
};

export default CourseCard;
