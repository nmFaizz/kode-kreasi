"use client";

import CategorySelector from "@/components/CategorySelector";
import ExpandableCard from "@/components/blocks/expandable-card-demo-standard";
import { div } from "framer-motion/client";
import { useState } from "react";

export default function Materi() {
    const categories = ["Programming", "Matematika", "Data"];
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    return(
        <div className="min-h-screen bg-purple-soft pt-20">
            <div className="text-center justify-items-center">
                <span className="text-2xl font-semibold font-tango">Categories: </span>
                <div className="flex mb-5 mt-5">
                    <CategorySelector 
                        categories={categories}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />

                </div>
                <ExpandableCard selectedCategories={selectedCategories}/> 
            </div>
        </div>
        
    )
  };
;
