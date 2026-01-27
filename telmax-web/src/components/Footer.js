import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
                {/* Brand Info */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        <span className="text-[var(--primary-red)]">tel</span>
                        <span className="text-[var(--primary-blue)]">MAX</span>
                    </h2>
                    <p className="text-gray-400 mb-6">
                        School Section of telnet. Delivering quality education for State and CBSE students from Class 5 to 10.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://wa.me/919446615431" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-2 rounded-full hover:scale-110 transition-transform">
                            <FaWhatsapp className="text-xl" />
                        </a>
                        <a href="https://www.instagram.com/telmax_official/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full hover:scale-110 transition-transform">
                            <FaInstagram className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* Quick Links & Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-[var(--accent-gold)]">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-[var(--primary-blue)]" />
                            <span>+91 9446615431</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[var(--primary-red)]" />
                            <span>Thonnakkal, Trivandrum</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[var(--accent-gold)]" />
                            <span>contact@telmax.in</span>
                        </li>
                    </ul>
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden h-48 bg-gray-800">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.414781846831!2d76.8436!3d8.5556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzMnMjAuMiJOIDc2wrA1MCczNy4wIkU!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} telMAX Thonnakkal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
