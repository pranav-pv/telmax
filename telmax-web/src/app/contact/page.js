"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="min-h-screen py-12 bg-white">
            <div className="container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600">We'd love to hear from you. Reach out to us for any queries.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-[var(--bg-light)] p-8 rounded-2xl border-l-4 border-[var(--primary-red)]">
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-[var(--primary-blue)]">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Phone</h4>
                                        <p className="text-gray-600">+91 9446615431</p>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Sat 9am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-green-500">
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">WhatsApp</h4>
                                        <a href="https://wa.me/919446615431" target="_blank" className="text-[var(--primary-blue)] hover:underline">Chat with us</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-[var(--primary-red)]">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Location</h4>
                                        <p className="text-gray-600">telMAX Thonnakkal (School Section of telnet)<br />Thonnakkal, Trivandrum, Kerala</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden h-[300px] shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.414781846831!2d76.8436!3d8.5556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzMnMjAuMiJOIDc2wrA1MCczNy4wIkU!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-blue)] outline-none bg-gray-50" placeholder="Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-blue)] outline-none bg-gray-50" placeholder="Mobile Number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--primary-blue)] outline-none bg-gray-50" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-[var(--primary-blue)] text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
