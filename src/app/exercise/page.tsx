import ExerciseSection from "@/components/ui/exercise-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Exercise",
    description: "Latihan soal pemrograman untuk meningkatkan kemampuanmu",
};

export default function Quiz() {
    

    return (
        <>
            <div className="page-max-width mt-10">
                <ExerciseSection />
            </div>
        </>
    );
}
