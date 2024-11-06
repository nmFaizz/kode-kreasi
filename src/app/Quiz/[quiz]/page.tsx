"use client";

import { use, useState } from "react";
import QuizPage from "@/app/components/Quiz";
import { quizDasprog, quizSisdig, Soal } from "@/constant/quiz";
import Result from "@/app/components/Result"; // Adjust path as necessary
import { notFound } from "next/navigation"; // Import notFound for handling unknown quizzes


export default function SingleQuizPage({ params }: { params: { quiz: string } }) {
    const [index, setIndex] = useState(0);
    const [check, setCheck] = useState<string | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [showResult, setShowResult] = useState(false);

    let lesson: Soal[] = [];

    if (params.quiz === "Dasprog") {
        lesson = quizDasprog;
    } else if (params.quiz === "Sisdig") {
        lesson = quizSisdig;
    } else {
        return notFound(); // Redirects to a 404 page if quiz is not found
    }

    const handleNext = () => {
        if (selectedAnswer !== null) {
            setAnswers((prevAnswers) => {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[index] = selectedAnswer;
                return updatedAnswers;
            });
        }
        setSelectedAnswer(null);
        setIndex((prevIndex) => prevIndex + 1);
    };
    
    const handleBack = () => {
        setIndex((prevIndex) => prevIndex - 1);
        setSelectedAnswer(null); // Clear the selection for the previous question
    };

    const handleFinish = () => {
        if (selectedAnswer !== null) {
            setAnswers((prevAnswers) => {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[index] = selectedAnswer;
                return updatedAnswers;
            });
        }
        setShowResult(true);
    };

    const isLastQuestion = index === lesson.length - 1;
    const isFirstQuestion = index === 0;

    if (index >= lesson.length) return null; // Avoid out-of-bounds rendering

    // Set image path based on quiz type
    const imagePath = params.quiz === "Dasprog" ? `/dasprogImg/${index + 1}.png` : `/sisdigImg/${index + 1}.png`;

    return (
        <div className="page-max-width">
            {showResult ? (
                <Result number={answers.filter(Boolean).length * 33 + 1} />
            ) : (
                <QuizPage
                        questionIdx={index}
                        question={lesson[index]}
                        image={imagePath}
                        setSelectedAnswer={(isCorrect: boolean) => setSelectedAnswer(isCorrect)}
                        setCheck={setCheck}
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleFinish={handleFinish}
                        isLastQuestion={isLastQuestion}
                        isFirstQuestion={isFirstQuestion} check={check}                />
            )}
        </div>
    );
}
