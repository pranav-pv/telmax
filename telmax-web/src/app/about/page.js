"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="min-h-screen py-12 bg-white">
            <div className="container mx-auto px-4">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4">
                        About <span className="text-[var(--primary-red)]">tel</span><span className="text-[var(--primary-blue)]">MAX</span>
                    </h1>
                    <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto rounded-full"></div>
                </motion.div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[var(--text-dark)]">Our Vision</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            To be the premier educational institution in Thonnakkal, empowering students with the knowledge, skills, and values necessary to excel in their academic and personal lives. We believe in nurturing every child's potential through personalized attention and innovative teaching methods.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            As the School Section of telnet, one of the most trusted names in education, we bring decades of expertise to the classroom, ensuring that every student receives the best possible guidance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-100 h-[400px] rounded-2xl flex items-center justify-center relative overflow-hidden"
                    >
                        {/* Abstract decorative element since we lack specific 'about' images */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-blue)] to-[var(--primary-red)] opacity-10"></div>
                        <div className="text-center p-8">
                            <h3 className="text-8xl font-black text-gray-200 opacity-50">SINCE 2010</h3>
                            <p className="text-xl font-bold text-[var(--primary-blue)] mt-4">Legacy of Excellence</p>
                        </div>
                    </motion.div>
                </div>

                {/* Why Us */}
                <div className="bg-[var(--bg-light)] p-10 rounded-2xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Expert Faculty", desc: "Highly qualified teachers with years of experience in State & CBSE syllabi." },
                            { title: "English Medium Only", desc: "Dedicated focus on English medium instruction to improve communication and global readiness." },
                            { title: "Result Oriented", desc: "Proven track record of high scores and academic achievements year after year." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-md border-b-4 border-[var(--primary-blue)]"
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
