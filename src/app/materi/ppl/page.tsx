import Image from 'next/image';
import Back from '@/components/ui/buttons/Back';

export default function PplPage() {
    return(
        <>
        <div className="px-4 mx-auto max-w-[748px]">
        <Back href="/materi"/>
            <h1 className="font-bold font-tango text-center text-4xl mt-7">Pengenalan Pengembangan Perangkat Lunak</h1>
            <div className="font-utendo text-lg text-justify leading-loose">
                <p className="mt-5">
                    Pengembangan Perangkat Lunak adalah proses penting dalam pembuatan
                    aplikasi dan sistem. Materi ini mencakup analisis kebutuhan, desain
                    perangkat lunak, serta teori SDLC (Software Development Life Cycle),
                    yang membantu merancang perangkat lunak yang efektif dan sesuai dengan
                    kebutuhan pengguna. Anda akan mempelajari cara menentukan kebutuhan
                    pengguna, mendesain solusi, dan memahami berbagai tahap dalam SDLC,
                    termasuk perencanaan, pengujian, dan pemeliharaan perangkat lunak.
                    Pengetahuan ini sangat berguna bagi siapa saja yang tertarik dengan
                    dunia rekayasa perangkat lunak.
                </p>

                <h2 className="font-semibold font-tango text-2xl mt-5">&bull; Definisi Proses Perangkat Lunak</h2>
                <p>Software process mendefinisikan pendekatan yang diambil untuk membuat perangkat lunak yang akan direkayasa.</p>
                Salah satu aspek penting dalam proses PL adalah aliran proses (process flow) <br />
                Aliran proses menggambarkan bagaimana framework  yang terdiri dari aktivitas (activity), tindakan (action) 
                dan tugas (task)  terjadi dalam setiap aktivitas kerangka kerja yang diselenggarakan sehubungan dengan urutan dan waktu. <br />
                <p className="font-semibold font-tango">Ada 4 jenis process flow: </p>
                <ul>
                    <li>1. Linier</li>
                    <li>2. Iterative</li>
                    <li>3. Evolutionary</li>
                    <li>4. Parallel</li>
                </ul>

                <h2 className="font-semibold font-tango text-xl mt-4">1. Linier</h2>
                <Image src="/LinierFlow.PNG"
                    alt="liniear flow"
                    width={600}
                    height={400}
                />
                <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUZU9uOyXcTbVZfXAlidgFQ_2vlfYvUnaPyeL5D11DSn6HjKSJO5GiX-ZgnwQSDWuABWccFwlJIzTkFfgarzijFP2maIiqdjli6_mMimWiewHdu6zmDOcne83cgbpTXgcYdbP4Zqe5yumW/s1600/Capture.PNG" className="text-left text-sm text-blue-700 underline">Link Sumber</a>
                <p className="mt-5">Linier: Melaksanakan masing-masing dari empat framework activity secara urut dimulai dengan Analysis dan mencapai puncaknya dengan Testing.
                </p>
                <p>Contoh Process Model yang menerapkan Linier Flow:</p>
                <ul>
                    <li>1. Waterfall Model</li>
                    <li>2. V-Model</li>
                </ul>

                <h2 className="font-semibold font-tango text-xl mt-4">2. Iterative</h2>
                <Image src="/iterativeflow.jpg"
                    alt="iterative flow"
                    width={600}
                    height={400}
                />
                <a href="https://wishdesk-prod.s3.eu-central-1.amazonaws.com/s3fs-public/inline-images/itterative-design-process.jpg" className="text-left text-sm text-blue-700 underline">Link Sumber</a>
                <p className="mt-5">Iterative: Mengulang satu atau lebih kegiatan sebelum melanjutkan ke yang berikutnya</p>

                <h2 className="font-semibold font-tango text-xl mt-4">3. Evolutionary</h2>
                <Image src="/evolutionaryflow.jpg"
                    alt="evolutionary flow"
                    width={600}
                    height={400}
                />
                <a href="https://media.geeksforgeeks.org/wp-content/uploads/20190430124930/33331.jpg" className="text-left text-sm text-blue-700 underline">Link Sumber</a>
                <p className="mt-5">Evolutionary: Menjalankan aktivitas dengan cara melingkar. Setiap sirkuit yang melalui lima kegiatan mengarah ke versi yang lebih lengkap dari perangkat lunak</p>
                <p>Contoh Process Model yang menerapkan Evolutionary Flow:</p>
                <ul>
                    <li>1. Prototyping</li>
                    <li>2. Spiral Model</li>
                </ul>

                <h2 className="font-semibold font-tango text-xl mt-4">4. Parallel</h2>
                <Image src="/Parallelflow.png"
                    alt="parallel flow"
                    width={600}
                    height={400}
                />
                <a href="https://www.researchgate.net/publication/336304283/figure/fig4/AS:811236467949569@1570425254418/Parallel-Development-Model.jpg" className="text-left text-sm text-blue-700 underline">Link Sumber</a>
                <p className="mt-5">Parallel: menjalankan satu atau lebih kegiatan secara paralel dengan kegiatan lain. (Contoh modelling untuk satu aspek pada software akan dijalankan secara parallel dengan construction aspek lain pada software)</p>

            </div>
        </div>
        </>
    );
}