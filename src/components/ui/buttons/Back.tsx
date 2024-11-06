import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackProps {
  href: string;
}

export default function Back({ href }: BackProps) {
  return (
    <div className="flex justify-between gap-2">
      <Link href={href}>
        <div className="inline-flex items-center my-8 px-3 py-1.5 rounded-xl text-dark-purple hover:bg-purple-soft hover:text-white-soft">
          <ArrowLeft className="h-6 w-6" />
          <span className="ml-1 font-bold text-lg">Back</span>
        </div>
      </Link>
    </div>
  );
}
