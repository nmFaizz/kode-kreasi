"use client";

import CategorySelector from "../CategorySelector";
import ExpandableCard from "../blocks/expandable-card-demo-standard";
import { useState } from "react";
import { Reveal } from "./Reveal";


export default function Materi () {
    const categories = ["Programming", "Matematika", "Konsep RPL"];
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const words = "\"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.\" – Pelé";


    return(
        <>
        <div className="page-max-width pt-20">
            <div className="flex justify-center">
                <Reveal delay={0.15}>
                    <span className="text-2xl font-semibold font-tango">Kategori: </span>
                </Reveal>
            </div>
            <div className="flex mb-5 mt-5 md:justify-center overflow-x-scroll hide-scrollbar">
                <Reveal delay={0.25}>
                    <CategorySelector 
                        categories={categories}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                </Reveal>
                
            </div>
            <div className="flex justify-center">
            <ExpandableCard  selectedCategories={selectedCategories}/>         
            </div>
        </div>
        </>

    )
}