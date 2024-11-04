"use client";

import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
    from: number;
    to: number;
    animationOptions?: KeyframeOptions;
};

export default function AnimatedCounter({ from, to, animationOptions }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useIsomorphicLayoutEffect(() => {
        const element = ref.current;

        if (!element) return;
        if (!inView) return;

        const controls = animate(from, to, {
            duration: 2.0,
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value) {
                element.textContent = value.toFixed(0);
            }
        });

        return () => {
            controls.stop();
        };
    }, [ref, from, to, inView]); // Make sure `to` is included

    return <span className="font-mono text-[48px]" ref={ref} />;
}
