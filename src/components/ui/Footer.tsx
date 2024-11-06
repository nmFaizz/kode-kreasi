import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className=" mt-12">
            <div className="page-max-width flex flex-col md:flex-row gap-5 md:justify-between md:items-center border-b border-black py-12">
                <figure className="w-[120px]">
                    <Image 
                        src="/logo.png"
                        width={233}
                        height={111}
                        alt="Kode Kreasi Logo"
                    />
                </figure>

                <div className="text-xl flex gap-12">
                    <Link href="/home" className="hover:text-purple-dark">Home</Link>
                    <Link href="/materi" className="hover:text-purple-dark">Materi</Link>
                    <Link href="/exercise" className="hover:text-purple-dark">Exercise</Link>
                </div>
            </div>
            <p className="md:text-center py-5">KodeKreasi.id Copyright 2024 &copy;</p>
        </footer>
    )
}