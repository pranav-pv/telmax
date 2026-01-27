import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { FaWhatsapp } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "telMAX Thonnakkal | School Section of telnet",
  description: "Premier tuition institute for Classes 5-10, State & CBSE Syllabus. Only English Medium Classes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-[72px]">
          {children}
        </main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919446615431"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center animate-bounce"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>

        <ScrollToTop />

      </body>
    </html>
  );
}
