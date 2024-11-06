import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import Image from "next/image";
import Link from "next/link";

import ExerciseList from "@/components/ui/exercise-list";
import MateriSection from "@/components/ui/materi-section";

const words = [
  {
    text: "Kreasikan",
  },
  {
    text: "Kodemu"
  },
  {
    text: "dan"
  },
  {
    text: "Ciptakan"
  },
  {
    text: "Inovasi!"
  },
]

export default function Home() {
  return (
    <>
      <main className="page-max-width space-y-5">
        <section className="px-8 h-[70vh] mt-5 flex items-center justify-center relative">
          <Image 
            src="/kk-bg.png"
            fill
            alt="Background Kode Kreasi"
            className="brightness-75 z-[-1] rounded-xl object-cover"
          />
          <div className="flex flex-col items-center text-[#FFFFFF]">
            <div className="flex items-center gap-5 border border-white-dark mb-5 pl-1 pr-4 rounded-full w-max">
              <div className="w-5 h-5 bg-purple-main rounded-full"></div>
              <p className="text-center text-md">KodeKreasi.id</p>
            </div>
            <TypewriterEffect words={words} />
            <Link href="#about" className="mt-12 bg-purple-main rounded-[6px] px-4 py-0.5 text-white-soft">
              <p className="text-xl">Get Started</p>
            </Link>
          </div>
        </section>

        <section id="about" className="md:h-[80vh] overflow-hidden py-12 flex flex-col items-center justify-between gap-5 rounded-xl px-8 bg-gradient-to-r from-white-soft to-white-dark">
          <article className="flex-1 max-w-[420px] text-center">
            <h1 className="text-xl md:text-4xl font-tango">Kontribusi Kami Untuk Talenta Digital</h1>
            <p>Kode Kreasi, /Kode/Kreasi merupakan platform sharing ilmu tentang teknologi, menyediakan akses kepada seluruh TECH Enthusiast untuk belajar, berlatih, dan update informasi seputar IT</p>
          </article>

          <figure className="w-[420px] sm:w-[720px] relative bottom-[-100px] md:bottom-[-60px]">
            <Image 
              src="/code-png.png"
              width={2500}
              height={1500}
              alt="code"
              className=""
            />      
          </figure>
        </section>

        <section className="bg-white-dark py-12 px-4 md:px-12 rounded-xl">
          <h1 className="font-tango text-2xl sm:text-4xl mb-8">Kata Mereka</h1>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </section>

        <MateriSection />

        <section className="flex md:flex-row flex-col gap-5 overflow-hidden justify-between bg-gradient-to-l from-white-soft to-white-dark p-5 sm:p-12 rounded-xl">
          <div>
            <h1 className="font-tango text-2xl sm:text-4xl">Latihan Untukmu</h1>
            <p>Ribuan soal siap untuk meningkatkan kemampuanmu!</p>
          </div>

          <ExerciseList />
        </section>
      </main>
    </>
  );
}

const testimonials = [
  {
    quote:
      "This platform has been a game changer in my learning journey. The articles are clear, concise, and always up-to-date with the latest trends in technology. I feel much more confident in my skills now.",
    name: "Alice Johnson",
    title: "Software Engineer",
  },
  {
    quote:
      "As someone just starting out in IT, I found this platform to be incredibly helpful. The tutorials are well-structured and easy to follow, allowing me to quickly grasp complex concepts.",
    name: "David Lee",
    title: "Junior Developer",
  },
  {
    quote:
      "The interactive coding challenges and hands-on exercises have greatly accelerated my understanding of programming. I highly recommend this platform for anyone serious about IT.",
    name: "Sara Smith",
    title: "Full Stack Developer",
  },
  {
    quote:
      "I’ve been using this platform for several months, and it has helped me stay on top of the latest advancements in web development. The content is comprehensive, and the community support is fantastic.",
    name: "Michael Brown",
    title: "Web Developer",
  },
  {
    quote:
      "Learning IT can be overwhelming, but this platform makes it engaging and enjoyable. I love how I can practice coding in a real-world context and improve my skills in a structured way.",
    name: "Jessica White",
    title: "Data Scientist",
  },
];
