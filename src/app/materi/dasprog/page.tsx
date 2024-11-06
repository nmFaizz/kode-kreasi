import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import c from 'react-syntax-highlighter/dist/esm/languages/hljs/c';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import Back from '@/components/ui/buttons/Back';

SyntaxHighlighter.registerLanguage('c', c);

const helloWorld = `#include <stdio.h>
    int main() {
    printf("Hello, World!");
    return 0;
}`;

const printHelloWorld = ` Hello World`;

const mainHelloWorld = `int main() {
    printf("Hello, World!");
    return 0;
}`;

const statementHelloWorld = ` printf("Hello, World!");
 return 0;`;

const singleLineComment = ` 
  {/* // Ini adalah komentar single-line */}
  {/* // Fungsi untuk mencetak ke layar */}
  printf("HALO");
`;

const multiLineComment = ` 
  {/*
    Ini adalah komentar multi-line
    Semua yang berada di sini akan 
    diabaikan
  */}
`;

export default function DasprogPage() {
  return (
    <>
      <div className="px-4 mx-auto max-w-[748px]">
        <Back href="/materi" />
        <h1 className="font-bold font-tango text-center text-4xl">Pengenalan Dasar Pemrograman</h1>
        <div className="font-utendo text-lg text-justify leading-loose">
          <p className="mt-5">
            Dasar Pemrograman adalah fondasi utama dalam dunia teknologi. Materi
            ini membahas konsep-konsep penting seperti algoritma dasar, struktur
            data, dan logika pemrograman yang diperlukan untuk mengembangkan
            keterampilan coding. Dengan memahami dasar pemrograman, Anda akan
            mampu menyelesaikan masalah dengan lebih terstruktur, membangun
            aplikasi sederhana, dan menyiapkan diri untuk belajar bahasa
            pemrograman yang lebih lanjut. Materi ini dirancang untuk pemula yang
            ingin memahami dasar-dasar logika dan pemikiran komputasional yang
            efisien.
          </p>

          <h2 className="font-semibold font-tango text-2xl mt-5">
            &bull; IDE (Integrated Development Environment)
          </h2>
          <p>
            Sebelum memulai menulis kode (atau ngoding), kita membutuhkan IDE
            untuk menyederhanakan proses pengkodean. Apa itu IDE? Sederhananya,
            IDE atau Intregated Development Environment adalah aplikasi editor
            kode yang menyertakan compiler. Beberapa IDE bahasa C yang dapat
            digunakan :
            <br />
            1. CodeBlocks
            <br />
            2. DevC++
          </p>

          <h2 className="font-semibold font-tango text-2xl mt-3">
            &bull; Pengenalan Bahasa C
          </h2>
          <h2 className="font-semibold font-tango text-xl mt-1">Statement</h2>
          <p>
            Dalam suatu program, sebuah statement atau pernyataan adalah
            intruksi/perintah yang mempunyai makna tertentu sehingga menyebabkan
            program tersebut dapat melakukan suatu tindakan. Analoginya, untuk
            berbicara kepada seseorang, kita menggunakan bahasa tertentu yang
            dapat dimengerti, sehingga kita dapat menyampaikan apa yang ingin
            disampaikan. Nah, seperti itulah statement. Apa yang kita sampaikan
            kepada orang lain layaknya statement pada program yang kita sampaikan
            kepada komputer.
          </p>

          <h2 className="font-semibold font-tango text-xl mt-4">Program Hello World</h2>
          <p>
            Mari kita mulai dengan membuat program sederhana, yakni program untuk
            menampilkan kalimat “Hello, world!” pada layar (konsol). Berikut adalah
            kode program tersebut.
          </p>
          <SyntaxHighlighter language="c" style={docco} className="rounded-xl">
            {helloWorld}
          </SyntaxHighlighter>
          <p>
            Salinlah kode di atas pada IDE, kemudian compile dan jalankan. Proses
            compilation akan menghasilkan output sebagai berikut.
          </p>
          <SyntaxHighlighter language="c" style={docco} className="rounded-xl">
            {printHelloWorld}
          </SyntaxHighlighter>

          <h2 className="font-semibold font-tango text-xl mt-4">Stuktur Program</h2>
          <p>
            Untuk menjelaskan cara kerja program di atas, mari kita pisahkan
            bagian-bagian kode satu per satu.
          </p>

          <h2 className="font-semibold font-tango text-lg mt-3">Header File</h2>
          <p>
            Baris 1 pada kode di atas disebut dengan preprocessor directive.
            Preprocessor yang digunakan dalam hal ini adalah #include. Preprocessor
            <span className="bg-gray-100 px-1 rounded">#include</span> menjelaskan
            bahwa program tersebut menyertakan file header
            <span className="bg-gray-100 px-1 rounded">&lt;stdio.h&gt;.</span> File
            header tersebut merupakan library bawaan C yang berisi fungsi-fungsi
            penting yang dibutuhkan oleh program, misalnya pada kasus ini, program
            membutuhkan fungsi printf() untuk mencetak kalimat “Hello, world!”. Tanpa
            adanya library, program tersebut tidak akan bisa di-compile.
          </p>

          <h2 className="font-semibold font-tango text-lg mt-3">Fungsi Main()</h2>
          <p>
            Fungsi main() pada kode tersebut ditunjukan pada baris ke 3 hingga baris
            ke 7.
          </p>
          <SyntaxHighlighter language="c" style={docco} className="rounded-xl">
            {mainHelloWorld}
          </SyntaxHighlighter>
          <p>
            Dalam bahasa C, fungsi main() adalah fungsi utama yang harus ada. Hal
            ini dikarenakan eksekusi kode akan dimulai dari awal fungsi main().
          </p>
          <ul className="mt-3">
            <li>
              &bull; Baris 3 menunjukkan nama dari fungsi dan tipe return dari
              fungsi tersebut. int merupakan tipe return dari fungsi yang bernama
              main(). Kemudian terdapat tanda &#123; yang menandakan awal pembuka
              dari fungsi main().
            </li>
            <li>&bull; Baris 4 s.d 6 merupakan tubuh dari fungsi main().</li>
            <li>
              &bull; Baris 8 terdapat tanda &#125; yang menandakan akhir dari fungsi
              main(). Pada dasarnya, tubuh dari sebuah fungsi berada di antara tanda
              &#123; &#125;.
            </li>
          </ul>

          <h2 className="font-semibold font-tango text-lg mt-3">Whitespace</h2>
          <p>
            Dapat diperhatikan pada kode bahwa baris 2 dan 4 kosong (tidak terdapat
            karakter apapun). Ini disebut dengan whitespace. Whitespace adalah area
            kosong pada kode, dan biasanya dtujukan agar kode mudah dibaca. <br />
          </p>
          <p className="mt-1">
            Terdapat tiga jenis whitespace, yakni space, tab, dan new line. Baris 2
            dan 4 adalah contoh dari new line.
          </p>

          <h2 className="font-semibold font-tango text-lg mt-3">Statement</h2>
          <p>
            Di dalam fungsi main(), terdapat dua statement yang ditunjukkan pada
            baris 5 dan 6. Sebagian besar statement diakhiri oleh tanda titik-koma
            (;).
          </p>
          <SyntaxHighlighter language="c" style={docco} className="rounded-xl">
            {statementHelloWorld}
          </SyntaxHighlighter>
          <p>
            Statement pada baris 5 menginstruksikan program untuk memanggil fungsi
            printf(). Fungsi printf() adalah fungsi yang tersedia dalam library
            header
            <span className="bg-gray-100 px-1 rounded">&lt;stdio.h&gt;.</span> dan
            digunakan untuk mencetak output pada konsol (layar). Dalam hal ini, fungsi
            printf() menerima argumen string bertuliskan “Hello, world!\n”. Tanda
            ‘\n’ dalam string tersebut merupakan karakter spesial yang berfungsi untuk
            mencetak new line. Sedangkan statement pada baris 6 disebut dengan return
            statement. Perintah return 0 pada fungsi main() digunakan untuk mengakhiri
            program dan menandakan program tersebut sukses dieksekusi.
          </p>

          <h2 className="font-semibold font-tango text-lg mt-3">Komentar</h2>
          <p>
            Komentar (comment) adalah bagian dari program yang tidak akan dieksekusi.
            Komentar sangat berguna untuk mendeskripsikan program yang dibuat, misalnya
            saja untuk menjelaskan bagian dari kode agar mudah dipahami oleh programmer
            lainnya. Terdapat dua jenis komentar dalam bahasa C.
          </p>

          <h2 className="font-semibold font-tango text-lg mt-3">Komentar Single-Line</h2>
          <p>
            Seperti namanya, komentar single-line hanya bekerja pada satu baris.
            Komentar single-line diawali dengan simbol{' '}
            <span className="bg-gray-100 px-1 rounded">&frasl;&frasl; </span>. Semua karakter
            (pada satu baris) dibelakang simbol{' '}
            <span className="bg-gray-100 px-1 rounded">&frasl;&frasl;</span> akan diabaikan.
          </p>
          <SyntaxHighlighter language="c" style={docco} className="rounded-xl">
            {singleLineComment}
          </SyntaxHighlighter>

          <h2 className="font-semibold font-tango text-lg mt-3">Komentar Multi-Line</h2>
          <p>
            Sedangkan komentar multi-line dapat bekerja pada lebih dari satu baris.
            Pasangan simbol <span className="bg-gray-100 px-1 rounded">* &frasl;</span> dan{' '}
            <span className="bg-gray-100 px-1 rounded">&frasl; *</span>digunakan untuk
            membuat komentar multi-line. Semua karakter yang berada di antara dua simbol
            tersebut akan diabaikan.
          </p>
          <SyntaxHighlighter language="c" style={docco} className="rounded-xl">
            {multiLineComment}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
