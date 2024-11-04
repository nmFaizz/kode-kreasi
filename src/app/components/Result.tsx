"use client";

import { useEffect, useState } from "react";
import AnimatedCounter from "@/app/components/AnimationCounter"; // Adjust path as necessary
import { motion } from "framer-motion";

interface ResultProps {
    number: number; // Expecting a number prop
}

export default function Result({ number }: ResultProps) {
    const [targetNumber, setTargetNumber] = useState(0);

    useEffect(() => {
        setTargetNumber(number); // Set the number for animation
    }, [number]);

    return (
        <div className="flex items-center justify-center min-h-screen mx-auto">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <AnimatedCounter from={0} to={targetNumber} />
                <span className="font-mono text-[48px]">/100</span>
            </motion.div>
        </div>
    );
}
