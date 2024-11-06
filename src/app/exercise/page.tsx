import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link"; 

export default function Quiz() {
    const dasprogLogo = "/dasprogImg/logo.webp";
    const sisdigLogo = "/sisdigImg/logo.webp";
    const pplLogo = "https://miro.medium.com/v2/resize:fit:828/format:webp/1*yDHiyZIKVfX-gZLwvhh6Ng.png"

    return (
        <>
            <div className="page-max-width mt-10">
                <h1 className="flex justify-center text-purple-main font-bold text-4xl mb-[100px]">Try this excercise</h1>
                <ul className="flex flex-col justify-center gap-5 md:flex-row items-center">
                    <li>
                        <Link
                            href="/exercise/dasprog"
                        >
                            <DirectionAwareHover 
                                className="rounded-xl transition-transform shadow-xl transition-shadow duration-300 ease-in-out hover:-translate-y-2 hover:shadow-purple-main"
                                imageUrl={dasprogLogo}>
                                <p className="font-bold text-white-soft text-2xl">Dasar Pemrograman</p>
                                <p className="text-white-soft text-xl">3 soal</p>
                            </DirectionAwareHover>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/exercise/sisdig"
                        >
                            <DirectionAwareHover 
                                className="rounded-xl transition-transform shadow-xl transition-shadow duration-300 ease-in-out hover:-translate-y-2 hover:shadow-purple-main"
                                imageUrl={sisdigLogo}>
                                <p className="font-bold text-white-soft text-2xl">Sistem Digital</p>
                                <p className="text-white-soft text-xl">3 soal</p>
                            </DirectionAwareHover>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/exercise/ppl"
                        >
                            <DirectionAwareHover 
                                className="rounded-xl transition-transform shadow-xl transition-shadow duration-300 ease-in-out hover:-translate-y-2 hover:shadow-purple-main"
                                imageUrl={pplLogo}>
                                <p className="font-bold text-white-soft text-2xl">Pengembangan Perangkat Lunak</p>
                                <p className="text-white-soft text-xl">5 soal</p>
                            </DirectionAwareHover>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
