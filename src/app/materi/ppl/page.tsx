import Image from 'next/image';

export default function PplPage() {
    return(
        <>
        <div className="page-max-width">
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
                <p className="text-left text-sm text-blue-700 underline">https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUZU9uOyXcTbVZfXAlidgFQ_2vlfYvUnaPyeL5D11DSn6HjKSJO5GiX-ZgnwQSDWuABWccFwlJIzTkFfgarzijFP2maIiqdjli6_mMimWiewHdu6zmDOcne83cgbpTXgcYdbP4Zqe5yumW/s1600/Capture.PNG</p>
                <p className="mt-5">Linier: Melaksanakan masing-masing dari lima framework activity secara urut dimulai dengan Analysis dan mencapai puncaknya dengan Testing.</p>

                <h2 className="font-semibold font-tango text-xl mt-4">2. Iterative</h2>
                <Image src="/iterativeflow.jpg"
                    alt="iterative flow"
                    width={600}
                    height={400}
                />
                <p className="text-left text-sm text-blue-700 underline">https://wishdesk-prod.s3.eu-central-1.amazonaws.com/s3fs-public/inline-images/itterative-design-process.jpg</p>
                <p className="mt-5">Iterative: Mengulang satu atau lebih kegiatan sebelum melanjutkan ke yang berikutnya</p>

                <h2 className="font-semibold font-tango text-xl mt-4">3. Evolutionary</h2>
                <Image src="/evolutionaryflow.jpg"
                    alt="iterative flow"
                    width={600}
                    height={400}
                />
                <p className="text-left text-sm text-blue-700 underline">https://media.geeksforgeeks.org/wp-content/uploads/20190430124930/33331.jpg</p>
                <p className="mt-5">Iterative: Mengulang satu atau lebih kegiatan sebelum melanjutkan ke yang berikutnya</p>

            </div>
        </div>
        </>
    );
}