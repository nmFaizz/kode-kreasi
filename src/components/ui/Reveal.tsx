import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    delay?: number;
}

export const Reveal = ({children, width = "fit-content", delay = 0.25}: Props) => {
    const ref = useRef(null); 
    const isInView = useInView(ref, {once: false});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
        else {
            mainControls.start("hidden");
            slideControls.start("hidden");
        }
    }, [isInView])

    return(
        <div ref={ref} style={{position: "relative", width, }}className="hide-scrollbar">
            <motion.div 
                variants={{
                    hidden: {opacity: 0, y: 20},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.3, delay: 0.25}}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 0.3, ease: "easeIn", delay}}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#F7ECE1",
                    zIndex: 20,
                    borderRadius: "10px",
                }}
            />
        </div>
    )
}