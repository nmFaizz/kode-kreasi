import type { Soal } from "@/constant/quiz";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface QuizPageProps {
    questionIdx: number;
    question: Soal;
    image: string;
    setSelectedAnswer: (isCorrect: boolean) => void;
    setCheck: (name: string) => void;
    handleNext: () => void;
    handleBack: () => void;
    handleFinish: () => void;
    isLastQuestion: boolean;
    isFirstQuestion: boolean;
    check: string | null;
}

export default function QuizPage({
    questionIdx,
    question,
    image,
    setSelectedAnswer,
    setCheck,
    handleNext,
    handleBack,
    handleFinish,
    isLastQuestion,
    isFirstQuestion,
    check
}: QuizPageProps) {
    if (!question) return <p>Question not found</p>;

    return (
        <div className="h-[640px] flex justify-center mt-10  items-center p-4">
            <div className="w-full  rounded-lg flex flex-col p-6">
                <div className="flex flex-row gap-[160px] items-center mb-6">
                    <div className="flex flex-col border-r-2 border-white-dark justify-center">
                        <span className="text-gray-600 font-mono">{questionIdx + 1}/3</span>
                        <h1 className="text-2xl  text-gray-800 text-4xl mb-6">{question.title}</h1>
                        <motion.img
                            src={image}
                            alt="question image"
                            className=" h-4/5 w-4/5 rounded-lg shadow-md mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className="flex flex-col mt-10 space-y-4">
                        {[question.opt1, question.opt2, question.opt3].map((option, idx) => (
                            <div className="flex items-center gap-3" key={idx}>
                                <input
                                    type="radio"
                                    id={`opt${idx + 1}`}
                                    name="question"
                                    value={option.name}
                                    checked={check === option.name}
                                    className="appearance-none h-6 w-6 text-purple-main border border-gray-400  checked:bg-purple-main rounded-none transform scale-125"
                                    onChange={() => {
                                        setSelectedAnswer(option.isCorrect);
                                        setCheck(option.name);
                                    }}
                                />
                                <label htmlFor={`opt${idx + 1}`} className="ml-2 text-gray-700 cursor-pointer text-2xl">
                                    {option.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row justify-end gap-2">
                    {!isFirstQuestion && (
                        <button
                            onClick={handleBack}
                            className="bg-transparent hover:bg-purple-soft text-purple-dark  hover:text-white py-2 px-4 border border-purple-main hover:border-transparent rounded"
                        >
                            Back
                        </button>
                    )}
                    {isLastQuestion ? (
                        <button
                            onClick={handleFinish}
                            className="bg-transparent hover:bg-purple-soft text-purple-dark  hover:text-white py-2 px-4 border border-purple-main hover:border-transparent rounded"
                        >
                            Finish
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="bg-transparent hover:bg-purple-soft text-purple-dark  hover:text-white py-2 px-4 border border-purple-main hover:border-transparent rounded"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
