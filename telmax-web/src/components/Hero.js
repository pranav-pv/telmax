"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            {/* Decorative blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--primary-red)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-blue)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 z-20 text-center flex flex-col items-center">

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    {/* Logo Placeholder - simplified as we might not have a clean cutout */}
                    {/* If we had the logo file sanitized we would use Image here. For now, text/design is good. */}
                </motion.div>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
                >
                    <span className="block text-white mb-2">Welcome to</span>
                    <span className="text-[var(--primary-red)]">tel</span>
                    <span className="text-[var(--primary-blue)]">MAX</span> <span className="text-[var(--accent-gold)]">Thonnakkal</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl mb-8 font-light text-gray-200 max-w-3xl"
                >
                    School Section of telnet. <br />
                    Excellence in Education for <span className="font-bold text-white">Classes 5 to 10</span> (State & CBSE).
                </motion.p>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <Link href="/admission" className="px-8 py-4 bg-[var(--primary-red)] text-white rounded-full font-bold text-lg hover:bg-red-700 hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2">
                        Apply for Admission
                    </Link>
                    <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[var(--primary-blue)] transition-all flex items-center justify-center gap-2">
                        Contact Us
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
