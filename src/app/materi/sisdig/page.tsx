import Image from 'next/image';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css'; 
import Back from '@/components/ui/buttons/Back';

const binaryExample = `1010 = 1 \\cdot 2^3 + 0 \\cdot 2^2 + 1 \\cdot 2^1 + 0 \\cdot 2^0 = 8 + 0 + 2 + 0 = 10`;
const oktalExample = `12_8 = 1 \\cdot 8^1 + 2 \\cdot 8^0 = 8 + 2 = 10_{10}`;
const heksaExample = `A4_{16} = A \\cdot 16^1 + 4 \\cdot 16^0 = 10 \\cdot 16 + 4 \\cdot 1 = 160 + 4 = 164_{10}`;

export default function SisdigPage() {
    return(
        <>
        <div className="px-4 mx-auto max-w-[748px]">
            <Back href="/materi"/>
            <h1 className="font-bold font-tango text-center text-4xl mt-7">Pengantar Sistem Digital</h1>
            <div className="font-utendo text-lg text-justify leading-loose">
                <p className="mt-5">Sistem Digital adalah dasar dari teknologi modern yang kita gunakan
                    sehari-hari. Materi ini mencakup konsep logika digital serta desain
                    rangkaian kombinasi dan sekuensial yang membentuk sistem komputer dan
                    perangkat elektronik lainnya. Dalam materi ini, Anda akan mempelajari cara
                    kerja gerbang logika, tabel kebenaran, serta bagaimana rangkaian digital
                    dikembangkan untuk memproses informasi secara efisien. Pemahaman ini
                    penting bagi siapa saja yang ingin mendalami bidang elektronika atau ilmu
                    komputer.
                </p>

                <h2 className="font-semibold font-tango text-2xl mt-5">&bull; Sistem Bilangan</h2>
                <p>Sistem bilangan adalah cara untuk mewakili bilangan dengan menggunakan simbol atau angka yang konsisten.
                    Ada 4 sistem bilangan, antara lain : Biner, Oktal, Desimal, dan Heksadesimal.
                    Namun, Sistem bilangan yang umum digunakan manusia adalah desimal, yang menggunakan 10 simbol yaitu 0&ndash;9.
                </p>

                <h2 className="font-semibold font-tango text-xl mt-4">Sistem Bilangan Biner (Basis 2)</h2>
                <p>Sistem bilangan biner atau sistem bilangan basis dua adalah sistem penulisan angka untuk dengan menggunakan dua simbol, 
                    yaitu &quot;0&quot; (nol) dan &quot;1&quot; (satu). Biner adalah bahasa dasar komputer. Semua data yang diproses oleh komputer diubah menjadi
                    biner, dengan setiap bit(binary digit) berupa 0 dan 1. Perhatikan tabel berikut.
                </p>
                <p>Contoh Konversi Biner ke Desimal :<br /><InlineMath>{binaryExample}</InlineMath></p>
                <p> Perhatikan tabel berikut.</p>
                <Image src="/Tabel-Biner.png"
                    alt="tabelbiner"
                    width={400}
                    height={400}
                    className="mx-auto"
                />
                <p className="text-center text-sm">Tabel Bilangan Biner</p>
                <p className="text-center text-sm text-blue-700 underline">https://mathcyber1997.com/wp-content/uploads/2020/11/Tabel-Biner-450x357.png</p>

                <h2 className="font-semibold font-tango text-xl mt-4">Sistem Bilangan Oktal (Basis 8)</h2>
                <p>Sistem bilangan berbasis 8 yang menggunakan angka 0&ndash;7 untuk mewakili angka.
                    Oktal sering digunakan dalam pemrograman komputer sebagai cara yang lebih ringkas untuk merepresentasikan biner 
                    karena tiga digit biner dapat diwakili oleh satu digit oktal. Perhatikan tabel berikut.
                </p>
                <p>Contoh Konversi Oktal ke Desimal :<br /><InlineMath>{oktalExample}</InlineMath></p>
                <p> Perhatikan tabel berikut.</p>
                <Image src="/Tabel-Oktal.png"
                    alt="tabelOktal"
                    width={400}
                    height={400}
                    className="mx-auto"
                />
                <p className="text-center text-sm">Tabel Bilangan Oktal</p>
                <p className="text-center text-sm text-blue-700 underline">https://mathcyber1997.com/wp-content/uploads/2020/11/Tabel-Oktal-450x357.png</p>

                <h2 className="font-semibold font-tango text-xl mt-4">Sistem Bilangan Heksadesimal (Basis 16)</h2>
                <p>Sistem ini menggunakan enam belas simbol, yaitu 0 sampai 9 dan A sampai F, di mana A mewakili 10,
                    B mewakili 11, hingga F yang mewakili 15. Oleh karena itu, sistem bilangan heksadesimal disebut juga sistem bilangan berbasis 16.
                    Sistem bilangan ini digunakan untuk alasan-alasan tertentu pada beberapa spesifikasi komputer. Perhatikan tabel berikut.
                </p>
                <p>Contoh Konversi Heksadesimal ke Desimal :<br /><InlineMath>{heksaExample}</InlineMath></p>
                <p> Perhatikan tabel berikut.</p>
                <Image src="/Tabel-Heksadesimal.png"
                    alt="tabelOKtal"
                    width={400}
                    height={400}
                    className="mx-auto"
                />
                <p className="text-center text-sm">Tabel Bilangan Heksadesimal</p>
                <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsrPeDOZL85JnGTxgS8bBamPyG2IiS9XRgQ&s' className="text-center text-sm text-blue-700 underline text-wrap">Link Sumber</a>
            </div>
        </div>
        </>
    )
}