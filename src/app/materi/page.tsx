"use client";

import CategorySelector from "@/components/CategorySelector";
import ExpandableCard from "@/components/blocks/expandable-card-demo-standard";
import { div } from "framer-motion/client";
import { useState } from "react";

export default function Materi() {
    const categories = ["Programming", "Matematika", "Data"];
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    return(
        <div className="mt-20 text-center justify-items-center">
            <span className="text-2xl font-semibold">Categories: </span>
            <div className="flex mb-5 mt-5">
                <CategorySelector 
                    categories={categories}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                />

            </div>
            <ExpandableCard selectedCategories={selectedCategories}/> 
        </div>
    )
  };
;
