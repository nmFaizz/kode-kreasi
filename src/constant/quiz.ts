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
            name: "Bukan Angka ",
            isCorrect: false,
        },
        opt2: {
            name: "Ganjil",
            isCorrect: false,
        },
        opt3: {
            name:"Genap",
            isCorrect: true,
        }
    },
    {
        title: "Operator apa itu?",
        opt1: {
            name:"increment",
            isCorrect: true,
        },
        opt2: {
            name: "Plus",
            isCorrect: false,
        },
        opt3: {
            name: "Plus and assign",
            isCorrect: false,
        }
    }
];

export const quizSisdig: Soal[] = [
    {
        title: "Ubah biner menjadi decimal",
        opt1: {
            name: "10",
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
        title: "Ubah hexadecimal menjadi biner",
        opt1: {
            name: "101001",
            isCorrect: false,
        },
        opt2: {
            name: "10111",
            isCorrect: false,
        },
        opt3: {
            name: "10000",
            isCorrect: true,
        },
    },
    {
        title: "Pertambahan biner",
        opt1: {
            name: "0011100",
            isCorrect: false,
        },
        opt2: {
            name: "100011",
            isCorrect: false,
        },
        opt3: {
            name: "10101",
            isCorrect: true,
        },
    },
]



