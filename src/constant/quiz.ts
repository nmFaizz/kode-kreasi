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
            name: "printf(`Hello world`)",
            isCorrect: true,
        },
        opt3: {
            name: "console.log(`Hello World`)",
            isCorrect: false,
        }
    },
    {
        title: "Apa hasil output diatas?",
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

// export const quizSisdig: Soal[] = [
//     {
//         title: "Ubah dari biner menjadi decimal",
//         opt1: {
//             answer: "",
//             isCorrect: false,
//         },
//         opt2: "101",
//         opt3: "10",
//     },
//     {
//         title: "Ubah hexadecimal menjadi decimal",
//         opt1: "22",
//         opt2: "112",
//         opt3: "44",
//     },
// ]



