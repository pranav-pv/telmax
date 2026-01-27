"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        grade: '5',
        board: 'State',
        parentName: '',
        phone: '',
        email: '',
        address: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log('Form Submitted:', formData);
        setTimeout(() => setSubmitted(true), 1000);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border border-green-200 p-8 rounded-xl text-center"
            >
                <h3 className="text-2xl font-bold text-green-700 mb-2">Application Submitted!</h3>
                <p className="text-green-600">Thank you for applying to telMAX Thonnakkal. We will contact you shortly.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-green-700 underline underline-offset-4 hover:text-green-900"
                >
                    Submit another application
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--primary-red)]"
        >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Admission Form</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                    <input
                        type="text"
                        name="studentName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all"
                        placeholder="Enter student's full name"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class / Grade</label>
                    <select
                        name="grade"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all"
                        onChange={handleChange}
                    >
                        {[5, 6, 7, 8, 9, 10].map(c => <option key={c} value={c}>Class {c}</option>)}
                    </select>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Syllabus / Board</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer border px-4 py-2 rounded-lg hover:bg-gray-50 flex-1">
                        <input type="radio" name="board" value="State" defaultChecked onChange={handleChange} className="accent-[var(--primary-blue)]" />
                        <span>State Syllabus</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer border px-4 py-2 rounded-lg hover:bg-gray-50 flex-1">
                        <input type="radio" name="board" value="CBSE" onChange={handleChange} className="accent-[var(--primary-blue)]" />
                        <span>CBSE</span>
                    </label>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Parent's Name</label>
                    <input
                        type="text"
                        name="parentName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all"
                        placeholder="Father/Mother name"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all"
                        placeholder="10-digit mobile number"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all"
                    placeholder="email@example.com"
                    onChange={handleChange}
                />
            </div>

            <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                    name="address"
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all"
                    placeholder="Residential address"
                    onChange={handleChange}
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
                Submit Application
            </button>
        </motion.form>
    );
};

export default AdmissionForm;
