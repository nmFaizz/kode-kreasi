"use client"
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { RiMenu3Fill } from "react-icons/ri";


const navMenuVariants = {
    initial: { opacity: 0, scale: 0.95 },  
    animate: { 
        opacity: 1, 
        scale: 1,
        transition: {
            duration: 0.3, 
            ease: [0.12, 0, 0.39, 0]
        } 
    },
    exit: { opacity: 0, scale: 0.95 },
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);    

    return (
        <>
            <header className="page-max-width overflow-hidden bg-purple-soft text-white-soft font-utendo py-2 md:py-3 mt-2 md:mt-5 sticky rounded-full top-0 flex justify-between items-center transition-all ease-in-out">
                <Link href="/" className="w-[70px] md:w-[80px]">
                    <Image 
                        src="/logo.png"
                        width={233}
                        height={111}
                        alt="Kode Kreasi Logo"
                        className="invert"
                    />
                </Link>

                <nav className="items-center gap-8 font-bold hidden md:flex">
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

                <div
                    onClick={() => setIsOpen(!isOpen)} 
                    className="w-[30px] h-[30px] flex md:hidden flex-col justify-center items-center gap-2"
                >
                    <div className={`h-[2px] w-full bg-white-soft transition-transform duration-300 ${isOpen ? "rotate-45" : ""} origin-[0%_0%]`} />
                    <div className={`h-[2px] w-full bg-white-soft transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-1"}`} />
                    <div className={`h-[2px] w-full bg-white-soft transition-transform duration-300 ${isOpen ? "rotate-[-45deg]" : ""} origin-[0%_100%]`} />
                </div>
            </header>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav 
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        variants={navMenuVariants}
                        className="text-3xl font-tango origin-top flex md:hidden items-center gap-8 bg-purple-soft text-white-soft fixed top-0 left-0 w-full h-screen flex-col justify-center z-[-1]" 
                    >
                        <div className="flex flex-col gap-12 items-center">
                            {navMenuItems.map((item, index) => (
                                <div className="overflow-hidden">
                                    <NavMenuItem 
                                        key={index} 
                                        name={item.name} 
                                        href={item.href} 
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}

interface NavMenuItemProps {
    name: string;
    href: string;
}

const menuItemVariants = {
    initial: { 
        y: "10vh",
    },
    open: { 
        y: 0,  
        transition: { 
            duration: 0.999,
            delay: 0.1,
            ease: [0.4, 0, 0.2, 1],
        }
    },
    closed: { 
        y: "10vh",
        transition: { 
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        }
    }
};

function NavMenuItem({ name, href }: NavMenuItemProps) {
    return (
        <motion.div
            initial="initial"
            animate="open"
            variants={menuItemVariants}
        >
            <Link href={href}>
                {name}
            </Link>
        </motion.div>
    )
}

const navMenuItems: NavMenuItemProps[] = [
    { name: "Home", href: "/" },
    { name: "Materi", href: "/materi" },
    { name: "Exercises", href: "/exercises" },
]
