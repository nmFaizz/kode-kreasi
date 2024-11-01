"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { div } from "framer-motion/client";

export default function Navbar() {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" }  
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);    

    return (
        <header className="page-max-width py-3 mt-5 light-border sticky rounded-full top-0 flex justify-between items-center">
            <Link href="/" className="max-w-[80px]">
                <Image 
                    src="/logo.png"
                    width={233}
                    height={111}
                    alt="Kode Kreasi Logo"
                />
            </Link>

            <nav className="flex items-center gap-8 font-bold">
                <Link href="/materi">
                    Home
                </Link>
                <Link href="/materi">
                    Materi
                </Link>
                <Link href="/exercises">
                    Exercises
                </Link>
            </nav>
            
            <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                
            </motion.nav>
        </header>
    )
}

function Toggle() {
    return (
        <div className="">
            <div className="h-[5px] w-full bg-black"></div>
            <div className="h-[5px] w-full bg-black"></div>
            <div className="h-[5px] w-full bg-black"></div>
        </div>
    )
}