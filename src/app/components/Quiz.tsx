import type { Soal } from "@/constant/quiz";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface QuizPageProps {
    questionIdx: number;
    questionAll: number;
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
    questionAll,
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

    const [isImageAvailable, setIsImageAvailable] = useState(true);

    useEffect(() => {
        const checkImage = async () => {
            try {
                const response = await fetch(image, { method: "HEAD" });
                setIsImageAvailable(response.ok); 
            } catch {
                setIsImageAvailable(false); 
            }
        };

        if (image) {
            checkImage();
        }
    }, [image]);
    if (!question) return <p>Question not found</p>;

    return (
        <div className="h-[640px] flex justify-center mt-10 items-center p-4">
            <div className="w-full max-w-4xl rounded-lg flex flex-col p-6">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[160px] items-center mb-6">
                    <div className="flex flex-col lg:border-r-2 lg:border-white-dark justify-center p-4 lg:p-10">
                        <span className="text-gray-600 font-mono text-lg lg:text-xl">
                            {questionIdx + 1}/{questionAll}
                        </span>
                        <h1 className="text-2xl lg:text-4xl text-gray-800 mb-6 text-center lg:text-left">
                            {question.title}
                        </h1>
                        <div className="flex justify-center w-[400px] h-[250px]  lg:justify-start">
                            {isImageAvailable && (<motion.img
                                src={image}
                                alt="question image"
                                className="w-full rounded-lg  object-contain"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />)}

                        </div>
                    </div>
                    <div className="flex flex-col mt-6 lg:mt-10 space-y-4 w-full max-w-xs">
                        {[question.opt1, question.opt2, question.opt3].map((option, idx) => (
                            <div className="flex items-center gap-3 w-full lg:mr-[600px]" key={idx}>
                                <input
                                    type="radio"
                                    id={`opt${idx + 1}`}
                                    name="question"
                                    value={option.name}
                                    checked={check === option.name}
                                    className="appearance-none p-3 h-5 w-5 text-purple-main border border-gray-400 checked:bg-purple-main rounded-none transform scale-125"
                                    onChange={() => {
                                        setSelectedAnswer(option.isCorrect);
                                        setCheck(option.name);
                                    }}
                                />
                                <label htmlFor={`opt${idx + 1}`} className="ml-2 text-gray-700 cursor-pointer text-lg lg:text-xl">
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
                            className="bg-transparent hover:bg-purple-soft text-purple-dark hover:text-white py-2 px-4 border border-purple-main hover:border-transparent rounded"
                        >
                            Back
                        </button>
                    )}
                    {isLastQuestion ? (
                        <button
                            onClick={handleFinish}
                            className="bg-transparent hover:bg-purple-soft text-purple-dark hover:text-white py-2 px-4 border border-purple-main hover:border-transparent rounded"
                        >
                            Finish
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="bg-transparent hover:bg-purple-soft text-purple-dark hover:text-white py-2 px-4 border border-purple-main hover:border-transparent rounded"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
