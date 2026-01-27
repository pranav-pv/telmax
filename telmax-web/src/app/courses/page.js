"use client";

import CourseCard from "@/components/CourseCard";
import { motion } from "framer-motion";

export default function Courses() {
    const allCourses = [
        { grade: "5", syllabus: "State", features: ["English, Maths, Science", "Foundation Basics"], delay: 0 },
        { grade: "5", syllabus: "CBSE", features: ["NCERT Curriculum", "Interactive Learning"], delay: 1 },
        { grade: "6", syllabus: "State", features: ["Core Subjects", "Weekly Tests"], delay: 0 },
        { grade: "6", syllabus: "CBSE", features: ["Concept Clarity", "Project Work"], delay: 1 },
        { grade: "7", syllabus: "State", features: ["Subject Depth", "Regular Assessment"], delay: 0 },
        { grade: "7", syllabus: "CBSE", features: ["Analytical Skills", "Olympiad Prep"], delay: 1 },
        { grade: "8", syllabus: "State", features: ["High School Prep", "Doubt Clearing"], delay: 0 },
        { grade: "8", syllabus: "CBSE", features: ["Advanced Topics", "Science Labs"], delay: 1 },
        { grade: "9", syllabus: "State", features: ["Pre-Board Focus", "Intensive Study"], delay: 0 },
        { grade: "9", syllabus: "CBSE", features: ["Problem Solving", "Mock Exams"], delay: 1 },
        { grade: "10", syllabus: "State", features: ["SSLC Excellence", "Crash Courses"], delay: 0 },
        { grade: "10", syllabus: "CBSE", features: ["Board Exam Strategy", "Full Support"], delay: 1 },
    ];

    return (
        <div className="min-h-screen py-10 bg-[var(--bg-light)]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-[var(--primary-red)] mb-4">Our Courses</h1>
                    <p className="text-xl text-gray-600">Comprehensive educational programs for Classes 5 to 10.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allCourses.map((course, idx) => (
                        <CourseCard key={idx} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
