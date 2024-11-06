"use client"
import { motion } from "framer-motion"
import Link from "next/link"

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

export default function ExerciseList() {
    return (
        <motion.div
            className="relative flex flex-col md:flex-row justify-center items-center overflow-hidden gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex flex-col gap-2">
            <motion.div
              className="gap-2 border border-white-dark p-5 max-w-[320px] rounded-xl bg-gradient-to-l from-white-dark to-white-soft"
              variants={itemVariants}
            >
              <div className="mb-5">
                <h1 className="font-tango">Dasar Pemrograman</h1>
                <p className="text-slate-500">
                  Latihan ini menguji pemahaman dasar pemrograman, termasuk variabel, struktur kontrol, dan konsep penting lainnya.
                </p>
              </div>
              <Link href="/exercises/dasprog" className="w-max px-4 py-0.5 bg-purple-soft text-white-soft rounded-[6px]">
                Mulai Belajar
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col gap-2">
            <motion.div
              className="gap-2 border border-white-dark p-5 max-w-[320px] rounded-xl bg-gradient-to-l from-white-dark to-white-soft"
              variants={itemVariants}
            >
              <div className="mb-5">
                <h1 className="font-tango">Sistem Digital</h1>
                <p className="text-slate-500">
                  Pelajari dasar sistem digital, termasuk gerbang logika dan rangkaian digital.
                </p>
              </div>
              <Link href="/exercises/sisdig" className="w-max px-4 py-0.5 bg-purple-soft text-white-soft rounded-[6px]">
                Mulai Belajar
              </Link>
            </motion.div>

            <motion.div
              className="gap-2 border border-white-dark p-5 max-w-[320px] rounded-xl bg-gradient-to-l from-white-dark to-white-soft"
              variants={itemVariants}
            >
              <div className="mb-5">
                <h1 className="font-tango">Pengembangan Perangkat Lunak</h1>
                <p className="text-slate-500">
                  Pelajari siklus hidup pengembangan perangkat lunak dan metodologi pengembangan.
                </p>
              </div>
              <Link href="/exercises/ppl" className="w-max px-4 py-0.5 bg-purple-soft text-white-soft rounded-[6px]">
                Mulai Belajar
              </Link>
            </motion.div>
          </div>
        </motion.div>
    )
}