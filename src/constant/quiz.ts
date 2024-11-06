export type opt = {
    name: string;
    isCorrect: boolean;
}

export type Soal = {
    title: string;
    opt1: opt;
    opt2: opt;
    opt3: opt;
};

export const quizDasprog: Soal[] = [
    {
        title: "Output Hello world",
        opt1: {
            name: "print(hello world)",
            isCorrect: false,
        },
        opt2: {
            name: `printf("Hello world")`,
            isCorrect: true,
        },
        opt3: {
            name: "console.log(`Hello World`)",
            isCorrect: false,
        }
    },
    {
        title: "Apa hasil outputnya?",
        opt1: {
            name: "0",
            isCorrect: false,
        },
        opt2: {
            name: "Error",
            isCorrect: false,
        },
        opt3: {
            name:"Tidak ada",
            isCorrect: true,
        }
    },
    {
        title: "Apa fungsi library ini?",
        opt1: {
            name:"Mengambil fungsi-fungsi penting",
            isCorrect: true,
        },
        opt2: {
            name: "Tidak ada gunanya",
            isCorrect: false,
        },
        opt3: {
            name: "Menangani error",
            isCorrect: false,
        }
    }
];

export const quizSisdig: Soal[] = [
    {
        title: "Ubah biner menjadi decimal",
        opt1: {
            name: "15",
            isCorrect: true,
        },
        opt2: {
            name: "12",
            isCorrect: false,
        },
        opt3: {
            name: "30",
            isCorrect: false,
        },
    },
    {
        title: "Ubah oktal menjadi biner",
        opt1: {
            name: "100",
            isCorrect: false,
        },
        opt2: {
            name: "34",
            isCorrect: false,
        },
        opt3: {
            name: "16",
            isCorrect: true,
        },
    },
    {
        title: "Ubah heksadesimal ke biner",
        opt1: {
            name: "0011100",
            isCorrect: false,
        },
        opt2: {
            name: "100011",
            isCorrect: false,
        },
        opt3: {
            name: "10001",
            isCorrect: true,
        },
    },
]

export const quizPPL: Soal[] = [
    {
        title: "Apa kepanjangan SDLC?",
        opt1: {
            name: "Software Development Life Cycle",
            isCorrect: true,
        },
        opt2: {
            name: "Software Development Live Cycle",
            isCorrect: false,
        },
        opt3: {
            name: "Software Document Loan Case",
            isCorrect: false,
        },
    },
    {
        title: "Gambar ini termasuk process flow apa?",
        opt1: {
            name: "Linier",
            isCorrect: true,
        },
        opt2: {
            name: "Iterative",
            isCorrect: false,
        },
        opt3: {
            name: "Parallel",
            isCorrect: false,
        },
    },
    {
        title: "Beikut jenis process flow (kecuali)",
        opt1: {
            name: "Parallel",
            isCorrect: false,
        },
        opt2: {
            name: "Continuous",
            isCorrect: true,
        },
        opt3: {
            name: "Evolutionary",
            isCorrect: false,
        },
    },
    {
        title: "Contoh process flow Linier",
        opt1: {
            name: "Prototyping",
            isCorrect: false,
        },
        opt2: {
            name: "Waterfall Model",
            isCorrect: true,
        },
        opt3: {
            name: "Spiral Model",
            isCorrect: false,
        },
    },
    {
        title: "Definisi Iterative",
        opt1: {
            name: "Menjalankan aktivitas secara melingkar",
            isCorrect: false,
        },
        opt2: {
            name: "Mengulang kegiatan sebelum melanjutkan yang berikutnya",
            isCorrect: true,
        },
        opt3: {
            name: "Menjalankan satu atau lebih kegiatan secara paralel",
            isCorrect: false,
        },
    },
]


