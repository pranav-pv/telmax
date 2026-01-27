"use client";

import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";

export default function Home() {
  const highlights = [
    {
      grade: "5 - 7",
      syllabus: "State & CBSE",
      features: ["Foundation Building", "Basic Concepts Mastery", "Fun Learning Activity"],
      delay: 0
    },
    {
      grade: "8 - 9",
      syllabus: "State & CBSE",
      features: ["Advanced Logic", "Exam Preparation", "Science & Maths Focus"],
      delay: 2
    },
    {
      grade: "10",
      syllabus: "State & CBSE",
      features: ["Board Exam Mastery", "Intensive Coaching", "Previous Year Papers"],
      delay: 4
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Introduction */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-[var(--primary-blue)]"
          >
            Why Choose telMAX?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          >
            We are dedicated to providing top-tier education for students in Classes 5 to 10.
            Our focus is on building a strong foundation and achieving academic excellence in both State and CBSE syllabi.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <CourseCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--bg-light)]">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <AnimatedCounter value={15} label="Years of Experience" suffix="+" />
          <AnimatedCounter value={500} label="Students Enrolled" suffix="+" />
          <AnimatedCounter value={100} label="Results" suffix="%" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary-blue)] text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Excel?</h2>
          <p className="text-xl mb-8 opacity-90">Join telMAX Thonnakkal today and secure your academic future.</p>
          <a href="/admission" className="inline-block bg-[var(--accent-gold)] text-[var(--text-dark)] font-bold px-10 py-4 rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg text-lg">
            Apply Now
          </a>
        </motion.div>
      </section>
    </div>
  );
}
