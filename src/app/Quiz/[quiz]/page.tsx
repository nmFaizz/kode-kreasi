"use client";

import { useState } from "react";
import QuizPage from "@/app/components/Quiz";
import { quizDasprog, Soal } from "@/constant/quiz";

export default function SingleQuizPage({ params }: { params: { quiz: string } }) {
    const [index, setIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null); // Use boolean to hold isCorrect
    const [answers, setAnswers] = useState<boolean[]>([]); // Save only isCorrect values

    let lesson: Soal[] = params.quiz === "Dasprog" ? quizDasprog : [];

    const handleNext = () => {
        // Save the isCorrect value of the selected answer
        if (selectedAnswer !== null) {
            setAnswers((prevAnswers) => {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[index] = selectedAnswer; // Store only the isCorrect value
                return updatedAnswers;
            });
        }

        setSelectedAnswer(null); // Reset selected answer for the next question
        setIndex((prevIndex) => prevIndex + 1); // Move to the next question
    };

    const handleBack = () => {
        setIndex((prevIndex) => prevIndex - 1); // Move back to the previous question
    };

    const handleFinish = () => {
        console.log("Final Answers (isCorrect values):", answers);
        // Add any submission or redirection logic here
    };

    const isLastQuestion = index === lesson.length - 1;
    const isFirstQuestion = index === 0;

    if (index >= lesson.length) return <p>No more questions available</p>;

    // Generate the image path based on the question index
    const imagePath = `/dasprogImg/${index + 1}.png`;

    return (
        <div className="page-max-width">
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
        </div>
    );
}
