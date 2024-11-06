"use client"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
}

export default function ExerciseSection() {
    return (
        <motion.div
            className="relative flex justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="flex flex-col justify-between border border-white-dark p-5 max-w-[420px] h-[220px] rounded-xl bg-gradient-to-r from-white-dark to-white-soft"
              variants={itemVariants}
            >
                <div>
                    <h1 className="font-tango">Pengenalan Dasar Pemrograman</h1>
                    <p>Latihan ini bertujuan untuk mengukur seberapa paham kamu tentang pointer!</p>
                </div>
                <button className="w-max px-4 bg-purple-soft text-white-soft rounded-[6px]">
                    Mulai Belajar
                </button>
            </motion.div>
            <motion.div
              className="border border-white-dark absolute p-5 mr-[-50px] mt-[-30px] z-[-1] max-w-[420px] h-[220px] rounded-xl bg-gradient-to-r from-white-dark to-white-soft"
              variants={itemVariants}
            >
              <h1 className="font-tango">Pointer - C</h1>
              <p>Latihan ini bertujuan untuk mengukur seberapa paham kamu tentang pointer!</p>
            </motion.div>

            <motion.div
              className="border border-white-dark absolute mr-[-100px] mt-[-50px] z-[-2] p-5 max-w-[420px] h-[220px] rounded-xl bg-gradient-to-r from-white-dark to-white-soft"
              variants={itemVariants}
            >
              <h1 className="font-tango">Pointer - C</h1>
              <p>Latihan ini bertujuan untuk mengukur seberapa paham kamu tentang pointer!</p>
            </motion.div>

          </motion.div>
    )
}