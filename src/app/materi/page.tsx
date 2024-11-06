import Materi from "@/components/ui/Materi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Materi",
    description: "Material belajar IT yang disediakan oleh Kode Kreasi",
};

export default function MateriPage() {

    return(
        <div className="min-h-screen pt-20 ">
            <div className="text-center justify-items-center ">
                <Materi />
            </div>
        </div>
        
    )
  };
;
