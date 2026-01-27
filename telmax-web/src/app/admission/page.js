"use client";

import AdmissionForm from "@/components/AdmissionForm";
import { motion } from "framer-motion";

export default function Admission() {
    return (
        <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">Online Admission</h1>
                    <p className="text-gray-600 max-w-2xl">
                        Secure your seat at telMAX Thonnakkal. Fill out the form below for students from Class 5 to 10.
                    </p>
                </motion.div>

                <div className="w-full max-w-2xl">
                    <AdmissionForm />
                </div>
            </div>
        </div>
    );
}
