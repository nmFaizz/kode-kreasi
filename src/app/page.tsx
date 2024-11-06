import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import ExerciseSection from "@/components/ui/exercise-section";
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
      <main className="h-[500vh] page-max-width space-y-12">
        <section className="h-[70vh] mt-5 flex items-center justify-center relative">
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
            <button className="mt-12 bg-purple-main rounded-[6px] px-4 py-0.5 text-white-soft">
              <p className="text-xl">Get Started</p>
            </button>
          </div>
        </section>

        <section className="md:h-[60vh] py-12 flex flex-col md:flex-row items-center justify-between gap-12 rounded-xl px-8 bg-gradient-to-r from-white-soft to-white-dark">
          <article className="flex-1 max-w-[420px]">
            <h1 className="text-xl md:text-4xl font-tango">Kontribusi Kami Untuk Talenta Digital</h1>
            <p>Kode Kreasi, /Kode/Kreasi merupakan platform sharing ilmu tentang teknologi, menyediakan akses kepada seluruh TECH Enthusiast untuk belajar, berlatih, dan update informasi seputar IT</p>
          </article>

          {/* <div className="flex-1 max-w-[320px] p-5 rounded-xl">
            <figure className="bg-black w-full h-32 rounded-[6px]">

            </figure>

            <article className="mt-5">
              <h1 className="font-tango">KodeKreasi.id</h1>
              <p>Lorem ipsum dolor sit amet dolor sit amet lorem ipsum dolor sit amet dolor sit amet</p>
            </article>

            <button className="bg-purple-main rounded-[6px] px-8 text-white-soft mt-6">
              Start
            </button>
          </div> */}
        </section>

        <section className="bg-purple-main py-12 px-12 rounded-xl">
          <h1 className="font-tango text-5xl text-white-soft mb-8">Kata Mereka</h1>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </section>

        <MateriSection />

        <section className="py-24 flex md:flex-row flex-col overflow-hidden justify-between items-center">
          <div>
            <h1 className="font-tango text-4xl">Latihan Untukmu</h1>
            <p>Ribuan soal siap untuk meningkatkan kemampuanmu!</p>
          </div>

          <ExerciseSection />
        </section>
      </main>
    </>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
]
