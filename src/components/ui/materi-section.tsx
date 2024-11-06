"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function MateriSection() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} link={card.link} />
    ));

    return (
        <section className="py-8 text-black">
            <h1 className="font-tango text-2xl md:text-4xl">Tingkatkan Pengetahuanmu!</h1>
            <p>Berbagai macam materi untuk meningkatkan pengetahuanmu.</p>
            <Carousel items={cards} />
        </section>
    )
}


const data = [
    {
      category: "Dasar Pemrograman",
      title: "Algoritma dasar, struktur, dan logika pemrograman",
      src: "/dasprog.jpeg",
      link: "/materi/dasprog"
    },
    {
      category: "Sistem Digital",
      title: "Logika digital, dan rangkaian kombinasi serta sekuensial.",
      src: "/sisdig.jpg",
      link: "/materi/sisdig"
    },
    {
      category: "Pengembangan Perangkat Lunak",
      title: "Analisis kebutuhan, desain, dan teori SDLC",
      src: "/ppl.jpg",
      link: "/materi/ppl"
    },
  ];