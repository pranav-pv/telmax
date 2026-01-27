"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ value, label, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        return display.on("change", (latest) => setDisplayValue(latest));
    }, [display]);

    return (
        <div ref={ref} className="text-center p-6 bg-white rounded-xl shadow-lg border-b-4 border-[var(--primary-red)] hover:transform hover:-translate-y-2 transition-all">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--primary-blue)] mb-2">
                {displayValue}{suffix}
            </h3>
            <p className="text-gray-600 font-medium uppercase tracking-wide">{label}</p>
        </div>
    );
};

export default AnimatedCounter;
