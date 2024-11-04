"use client";

import { useState } from "react";
import QuizPage from "@/app/components/Quiz";
import { quizDasprog, Soal } from "@/constant/quiz";
import Result from "@/app/components/Result"; // Adjust path as necessary

export default function SingleQuizPage({ params }: { params: { quiz: string } }) {
    const [index, setIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [showResult, setShowResult] = useState(false); // New state for showing result
    let lesson: Soal[] = params.quiz === "Dasprog" ? quizDasprog : [];

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
    };

    const handleFinish = () => {
        if (selectedAnswer !== null) {
            setAnswers((prevAnswers) => {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[index] = selectedAnswer;
                return updatedAnswers;
            });
        }

        // Calculate the number of correct answers
        const correctAnswersCount = answers.filter(Boolean).length; // Counts the true values
        setShowResult(true); // Show the result instead of the quiz
    };

    const isLastQuestion = index === lesson.length - 1;
    const isFirstQuestion = index === 0;

    if (index >= lesson.length) return null; // Do not render anything if out of bounds.

    const imagePath = `/dasprogImg/${index + 1}.png`;

    return (
        <div className="page-max-width">
            {showResult ? (
                <Result number={answers.filter(Boolean).length * 33 + 1} /> // Pass calculated score to Result
            ) : (
                <QuizPage
                    question={lesson[index]}
                    image={imagePath}
                    setSelectedAnswer={(isCorrect: boolean) => setSelectedAnswer(isCorrect)}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleFinish={handleFinish}
                    isLastQuestion={isLastQuestion}
                    isFirstQuestion={isFirstQuestion}
                />
            )}
        </div>
    );
}
